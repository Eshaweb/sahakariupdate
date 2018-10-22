import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams, AlertController, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MobileRechargePage } from '../mobile-recharge/mobile-recharge';
import { BankingPage } from '../banking/banking';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { RegisterService } from '../services/app-data.service';
import { PagePage } from '../page/page';
import { StorageService } from '../services/Storage_Service';
import { ToastrService } from 'ngx-toastr';
import { UISercice } from '../services/UIService';
import { RegisterPage } from '../register/register';
import { GetOtpPage } from '../get-otp/get-otp';
import { FundTransferPage } from '../fund-transfer/fund-transfer';
import { BalanceEnquiryPage } from '../balance-enquiry/balance-enquiry';
import { MiniStatementPage } from '../mini-statement/mini-statement';
import { FavouritesPage } from '../favourites/favourites';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  passwordMessage: string;
  formGroup: FormGroup;
  usernameMessage: string;

  constructor(private events: Events, private storageService: StorageService, private alertCtrl: AlertController, private uiService: UISercice, public navParams: NavParams, private toastrService: ToastrService, public loadingController: LoadingController, public formbuilder: FormBuilder, private registerService: RegisterService, public navCtrl: NavController) {
    this.formGroup = formbuilder.group({
      //username:['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    }); //builds the formgroup with the same formcontrolname.
    // const usernameControl = this.formGroup.get('username');
    // usernameControl.valueChanges.subscribe(value => this.setErrorMessage(usernameControl));
    const passwordControl = this.formGroup.get('password');
    passwordControl.valueChanges.subscribe(value => this.setErrorMessage(passwordControl));
    //call the particular method if value changes in the control.
  }
  setErrorMessage(c: AbstractControl): void {
    this.passwordMessage = ''; //To not display the error message, if there is no error.
    this.usernameMessage = '';
    let control = this.uiService.getControlName(c);
    if ((c.touched || c.dirty) && c.errors) {
      if (control === 'username') {
        this.usernameMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        //maps the error message from validationMessages array. 
      }
      else if (control === 'password') {
        this.passwordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
    }
  }
  private validationMessages = { //used in above method.
    password_required: '*Enter Password',
    password_minlength: 'Password cannot be less than 8 character'
  };
  ActiveBankName: string;
  ngOnInit() {

    if (this.storageService.GetTenant() != null) {
      this.ActiveBankName = this.storageService.GetActiveBankName();
    }

  }

  userName = this.storageService.GetUser().UserName;
  uniqueKey = this.storageService.GetUser().UniqueKey;
  OnLogin() {  //Fires, if we click on Login button
    let loading = this.loadingController.create({
      content: 'Wait for a second..'
    });
    loading.present();
    var Login = {
      UserName: this.storageService.GetUser().UserName,
      Password: this.formGroup.controls['password'].value,
      UniqueId: this.storageService.GetUser().UniqueKey,
    }
    var OS = this.storageService.GetOS();
    this.registerService.Login(Login).subscribe((data: any) => {
      this.registerService.AccessToken = data.AccessToken;
      StorageService.SetItem('refreshToken', data.RefreshToken);
      this.sendToken(data.AccessToken); //stores the token in service property.
      if (OS == null) {
        let loading = this.loadingController.create({
          content: 'Syncing Operators and Services'
        });
        loading.present();
        this.registerService.GetServices().subscribe((data: any) => {
          var oS = JSON.stringify(data);
          this.storageService.SetOS(oS);  //To store the OS table in localstorage.
          loading.dismiss();
        }, (error) => {
          this.toastrService.error(error.message, 'Error!');
          loading.dismiss();
          var alert = this.alertCtrl.create({
            title: "Error Message",
            subTitle: error.message,
            buttons: ['OK']
          });
          alert.present();
        });
      }

      let tenants = this.storageService.GetTenant();
      let DigiParties = this.storageService.GetDigiParty();
      let SelfCareAcs = this.storageService.GetSelfCareAc();
      if (tenants == null || DigiParties == null || SelfCareAcs == null) { //checks whether the localstorage contains these tables/records
        let loadingnew = this.loadingController.create({
          content: 'Syncing Accounts'
        });
        loadingnew.present();
        this.callservices();  //To add tables to localstorage, for the first time login.
        //this.navCtrl.setRoot(PagePage);
        loadingnew.dismiss();
      }
      else {
        this.navCtrl.setRoot(PagePage, { 'ActiveBankName': this.ActiveBankName });
      }
      loading.dismiss();
    }, (error) => {
      // this.toastrService.error(error.message, 'Error!');
      // loading.dismiss();
      // var alert = this.alertCtrl.create({
      //   title: "Error Message",
      //   subTitle: error.message,
      //   buttons: ['OK']
      // });
      // alert.present();

      this.passwordMessage = '';
      const controls = this.formGroup.controls;
      //const ErrorProperties = error.error;
      const ErrorProperties = error;
      for (const property in ErrorProperties) {
        for (const name in controls) {
          if (name == property) {
            ErrorProperties[property].forEach((value: string) => {
              this.passwordMessage = value;
              loading.dismiss();
            });
          }
          else if (property == 'Errors') {
            // for (var i = 0; i < error.error.Errors.length; i++) {
            //   var errorMessage = error.error.Errors[i].ErrorString;
            for (var i = 0; i < error.Errors.length; i++) {
              var errorMessage = error.Errors[i].ErrorString;
              this.toastrService.error(errorMessage, 'Error!');
              loading.dismiss();
              var alert = this.alertCtrl.create({
                title: "Error Message",
                subTitle: errorMessage,
                buttons: ['OK']
              });
              alert.present();
            }
          }
        }
      }
      this.navCtrl.setRoot(LoginPage);
      //this.navCtrl.setRoot(PagePage, { 'ActiveBankName': this.ActiveBankName });
    });
  }
  sendToken(token: string) {
    // this.registerService.GetToken(token).subscribe((data:any)=>{

    // });
    this.registerService.SetToken(token);
  }
  callservices() {
    var addBankRequest = {
      TenantId: this.storageService.GetUser().ActiveTenantId,
      MobileNo: this.storageService.GetUser().UserName
    }
    this.registerService.AddBank(addBankRequest).subscribe((data: any) => {

      var tenant = {
        Id: data.Tenant.Id,
        Name: data.Tenant.Name,
        Address: data.Tenant.Address,
        IconHtml: data.Tenant.IconHtml
      }
      this.storageService.SetTenant(JSON.stringify([tenant]));
      //Stores the Tenant table in localstorage
      var digiParty = {
        Id: data.DigiPartyId,
        DigiPartyId: data.DigiPartyId,
        PartyMastId: data.PartyMastId,
        MobileNo: data.MobileNo,
        TenantId: data.TenantId,  //ActiveTenantId
        Name: data.Name
      }
      this.storageService.SetDigiParty(JSON.stringify([digiParty]));
      //Stores the DigiParty table in localstorage
      this.storageService.SetSelfCareAc(JSON.stringify(data.SelfCareAcs));
      //Stores the SelfCareAc table in localstorage
      this.registerService.SetLoginLogOut();
      this.events.publish('REFRESH_DIGIPARTYNAME');
      if (this.navParams.get('isFromFundTransfer') == true) {
        var isFromLogin: boolean = true;
        this.navCtrl.push(FundTransferPage, { 'isFromLogin': isFromLogin }).then(() => {
          const startIndex = this.navCtrl.getActive().index - 1;
          this.navCtrl.remove(startIndex, 1);  //removes the history of this page.
        });
      }
      else if (this.navParams.get('isFromBalanceEnquiry') == true) {
        var isFromLogin: boolean = true;
        const startIndex = this.navCtrl.getActive().index;
        //const startIndex = this.navCtrl.getActive().index - 1;
        this.navCtrl.push(BalanceEnquiryPage, { 'isFromLogin': isFromLogin });
        // .then(() => {  
        this.navCtrl.remove(startIndex, 1);  //removes the history of this page.
        //   const startIndex = this.navCtrl.getActive().index;
        //   this.navCtrl.remove(0, startIndex); 
        // });
      }
      else if (this.navParams.get('isFromMiniStatement') == true) {
        var isFromLogin: boolean = true;
        this.navCtrl.push(MiniStatementPage, { 'isFromLogin': isFromLogin }).then(() => {
          const startIndex = this.navCtrl.getActive().index - 1;
          this.navCtrl.remove(startIndex, 1);  //removes the history of this page.
        });
        // const startIndex = this.navCtrl.getActive().index;
        // this.navCtrl.push(MiniStatementPage, { 'isFromLogin': isFromLogin });
        // this.navCtrl.remove(startIndex, 1); 
      }
      else if (this.navParams.get('isFromPrepaid') == true) {
        var isFromLogin: boolean = true;
        this.navCtrl.push(FavouritesPage, { 'isFromLogin': isFromLogin, 'ParentId': 'S1' }).then(() => {
          const startIndex = this.navCtrl.getActive().index - 1;
          this.navCtrl.remove(startIndex, 1);  //removes the history of this page.
        });
      }
      else if (this.navParams.get('isFromPostpaid') == true) {
        var isFromLogin: boolean = true;
        this.navCtrl.push(FavouritesPage, { 'isFromLogin': isFromLogin, 'ParentId': 'S2' }).then(() => {
          const startIndex = this.navCtrl.getActive().index - 1;
          this.navCtrl.remove(startIndex, 1);  //removes the history of this page.
        });
      }
      else if (this.navParams.get('isFromDTH') == true) {
        var isFromLogin: boolean = true;
        this.navCtrl.push(FavouritesPage, { 'isFromLogin': isFromLogin, 'ParentId': 'S3' }).then(() => {
          const startIndex = this.navCtrl.getActive().index - 1;
          this.navCtrl.remove(startIndex, 1);  //removes the history of this page.
        });
      }
      else if (this.navParams.get('isFromElectricity') == true) {
        var isFromLogin: boolean = true;
        this.navCtrl.push(FavouritesPage, { 'isFromLogin': isFromLogin, 'ParentId': 'S5' }).then(() => {
          const startIndex = this.navCtrl.getActive().index - 1;
          this.navCtrl.remove(startIndex, 1);  //removes the history of this page.
        });
      }
      else {
        this.navCtrl.setRoot(PagePage, { 'ActiveBankName': this.ActiveBankName });
      }
    }, (error) => {
      this.toastrService.error(error, 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: error,
        buttons: ['OK']
      });
      alert.present();
    });

  }
  isForgotten: boolean = false;
  OnForgot() { //Fires, if we click on Forgot password button
    this.isForgotten = true;
    this.navCtrl.push(GetOtpPage, { 'isForgotPassword': this.isForgotten });
  }
  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToMobileRecharge(params) {
    if (!params) params = {};
    this.navCtrl.push(MobileRechargePage);
  }
  goToBanking(params) {
    if (!params) params = {};
    this.navCtrl.push(BankingPage);
  }
}
