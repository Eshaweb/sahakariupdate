import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams, Navbar } from 'ionic-angular';
//import { AutoLogoutService } from '../services/AutoLogOutService';
import { StorageService } from '../services/Storage_Service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { RegisterService } from '../services/app-data.service';
import { FundTransferResponse } from '../View Models/FundTransferResponse';
import { SelfCareAc } from '../LocalStorageTables/SelfCareAc';
import { ToastrService } from 'ngx-toastr';
import { UISercice } from '../services/UIService';
import { ChangeBankPage } from '../change-bank/change-bank';
import { BankingPage } from '../banking/banking';
import { FundTransferConfirmPage } from '../fund-transfer-confirm/fund-transfer-confirm';
import { ErrorHandlingService } from '../services/ErrorHandlingService';

@Component({
  selector: 'page-fund-transfer',
  templateUrl: 'fund-transfer.html'
})
export class FundTransferPage implements OnInit {
  @ViewChild(Navbar) navBar: Navbar;
  formgroup2: FormGroup;
  formgroup1: FormGroup;
  Showthis: boolean;
  HeadName: string;
  AcNo: string;
  ToName: string;
  ToAcNo: string;
  showBackButton: boolean;


  // constructor(private regService : RegisterService, public formbuilder:FormBuilder,public constant:ConstantService,private autoLogoutService: AutoLogoutService,public navCtrl: NavController) {
  constructor(private errorHandlingService:ErrorHandlingService, public navParams: NavParams, private storageService: StorageService, private alertCtrl: AlertController, private uiService: UISercice, private toastr: ToastrService, public loadingController: LoadingController, private registerService: RegisterService, public formbuilder: FormBuilder, public navCtrl: NavController) {

    //StorageService.SetItem('lastAction', Date.now().toString());
    this.formgroup1 = formbuilder.group({
      MobileNo: ['', [Validators.required, Validators.minLength(10)]]
    }); //builds the formgroup with the same formcontrolname.
    const MobileNoControl = this.formgroup1.get('MobileNo');
    MobileNoControl.valueChanges.subscribe(value => this.setErrorMessage(MobileNoControl));

    this.formgroup2 = formbuilder.group({
      amount: ['', [Validators.required, Validators.minLength(1)]]
    });  //builds the formgroup with the same formcontrolname.
    const amountControl = this.formgroup2.get('amount');
    amountControl.valueChanges.subscribe(value => this.setErrorMessage(amountControl));
    //call the particular method if value changes in the control.
  }
  setErrorMessage(c: AbstractControl): void {
    let control = this.uiService.getControlName(c);//gives the control name property from particular service.
    document.getElementById('err_' + control).innerHTML='';//To not display the error message, if there is no error.
    if ((c.touched || c.dirty) && c.errors) {
      document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
    }
  }
  private validationMessages = { //used in above method.
    MobileNo_required: '*Enter mobile number',
    MobileNo_minlength: '*Enter 10 Digit Mobile Number',

    amount_required: '*Enter Amount'
  };

  ShowHide: boolean;
  disablenextwithoutToAccount: boolean;
  ActiveBankName: string;
  selfCareAC: SelfCareAc;
  SelfCareACs: SelfCareAc;
  SelfCareAcBasedOnTenantID: SelfCareAc;
  ngOnInit() {
    if (this.navParams.get('isFromLogin') == true) {
      this.showBackButton = true;
    }
    else {
      this.showBackButton = false;
    }
    this.Showthis = true;
    this.ShowHide = true;
    this.disablenextwithoutToAccount = true; //To disable Next button.
    var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
    this.ActiveBankName = this.storageService.GetActiveBankName();
    var SelfCareACs = this.storageService.GetSelfCareAc();
    var SelfCareAcBasedOnTenantID = SelfCareACs.filter(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcActId == "#SB"; });
    //To find SB Account with ActiveTenantId
    if (SelfCareAcBasedOnTenantID.length == 0) {
      this.Showthis = false;
      this.ShowHide = false;
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: "Fund Transfer is not Available Since there is no SB Account",
        buttons: [{
          text: 'OK',
          handler: () => { this.navCtrl.pop(); }
        }]
      });
      alert.present();
    }
    else {
      this.SelfCareAcBasedOnTenantID = SelfCareAcBasedOnTenantID; //To show SelfCare Account
      this.HeadName = this.SelfCareAcBasedOnTenantID[0].HeadName;
      this.AcNo = this.SelfCareAcBasedOnTenantID[0].AcNo;
    }
  }
  ionViewDidLoad() {
    this.setBackButtonAction();
  }
  setBackButtonAction() {  //Fires for Backbutton click
    this.navBar.backButtonClick = () => {
      this.navCtrl.push(BankingPage);
    }
  }
  OnBack() {
    this.navCtrl.push(BankingPage);
  }
  OnChangeBank() {  //Fires, when clicking change bank
    var isFromFundTransfer: boolean = true;
    //this.navCtrl.push(ChangeBankPage,{'isFromFundTransfer':isFromFundTransfer});
    this.navCtrl.push(ChangeBankPage, { 'isFromFundTransfer': isFromFundTransfer }).then(() => {
      const startIndex = this.navCtrl.getActive().index - 1;
      this.navCtrl.remove(startIndex, 1);//removes the history of this page.
    });
  }
  fundTransferResponse: FundTransferResponse;
  OnSearchingAccount() {// Fires, when clicking search button of To Account
    let loading = this.loadingController.create({
      content: 'Searching For the Account'
    });
    loading.present();
    var fundTransferRequest = {
      TenantId: this.storageService.GetUser().ActiveTenantId,
      MobileNo: this.formgroup1.get('MobileNo').value
    }
    this.registerService.GetFTAccount(fundTransferRequest).subscribe((data: any) => {
      this.fundTransferResponse = data;
      this.ToName = this.fundTransferResponse.Name;
      this.ToAcNo = this.fundTransferResponse.AcNo;
      this.disablenextwithoutToAccount = false;
      loading.dismiss();
    }, (error) => {
      if (error == 401) {
        this.registerService.SetRefreshTokenNeeded();
        this.registerService.GetToken(StorageService.GetItem('refreshToken')).subscribe((data: any) => {
          StorageService.SetItem('refreshToken',data.RefreshToken);
          this.registerService.SetToken(data.AccessToken);
          this.registerService.SetRefreshTokenNeeded();
          this.registerService.GetFTAccount(fundTransferRequest).subscribe((data: any) => {
            console.clear();
            this.fundTransferResponse = data;
            this.ToName = this.fundTransferResponse.Name;
            this.ToAcNo = this.fundTransferResponse.AcNo;
            this.disablenextwithoutToAccount = false;
            loading.dismiss();
          });
        });
      }
      else {
        this.fundTransferResponse = null;
        if (typeof error === 'string') {
          this.toastr.error(error, 'Error!');
          var alert = this.alertCtrl.create({
            title: "Error Message",
            subTitle: error,
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
        }
        else {
          const controls = this.formgroup1.controls;
          const ErrorProperties = error;
          this.errorHandlingService.ErrorHandler(controls,ErrorProperties);
          loading.dismiss();
        }
      }
    });
  }
  OnMobileNo(event) {
    this.fundTransferResponse = null;
  }
  OnNext() {   //Fires, when clicking on Next button
    var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
    if (this.fundTransferResponse == null) {
      this.toastr.error('Please Click on Search button of Above Field', 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: 'Please Click on Search button of Above Field',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      const doFundTransfer = {
        TenantId: ActiveTenantId,
        DigiPartyId: this.storageService.GetDigipartyBasedOnActiveTenantId().DigiPartyId,
        FromAcMastId: this.GetSelfCareAcByTenantID(ActiveTenantId).AcHeadId,
        FromAcSubId: this.GetSelfCareAcByTenantID(ActiveTenantId).AcSubId,
        FromLocId: this.GetSelfCareAcByTenantID(ActiveTenantId).LocId,
        ToAcMastId: this.fundTransferResponse.AcHeadId,
        ToAcSubId: this.fundTransferResponse.AcSubId,
        ToLocId: this.fundTransferResponse.LocId,
        Amount: this.formgroup2.get('amount').value,
        ToAcNo: this.fundTransferResponse.AcNo
      }
      this.navCtrl.push(FundTransferConfirmPage, { doFundTransfer, 'AcSubId': this.SelfCareAcBasedOnTenantID[0].AcSubId, 'HeadName': this.HeadName, 'AcNo': this.AcNo, 'ToName': this.ToName, 'ToAcNo': this.ToAcNo });
      // this.navCtrl.push(FundTransferConfirmPage,{'doFundTransfer':doFundTransfer});
    }
  }

  GetSelfCareAcByTenantID(ActiveTenantId) {  //Fires, from above method.
    var AcSubId = this.SelfCareAcBasedOnTenantID[0].AcSubId;
    var SelfCareACs = this.storageService.GetSelfCareAc();
    // this.selfCareAC=this.SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId&&obj.AcActId=="#SB"&&obj.AcSubId===this.AcSubId; });
    this.selfCareAC = SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcSubId === AcSubId; });
    return this.selfCareAC;
  }
}
