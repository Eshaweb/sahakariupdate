import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams, AlertController } from 'ionic-angular';
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
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  passwordMessage: string;
  formGroup: FormGroup;

  constructor(private storageService:StorageService, private alertCtrl: AlertController, private uiService: UISercice, public navParams: NavParams, private toastrService: ToastrService, public loadingController: LoadingController, public formbuilder: FormBuilder, private registerService: RegisterService, public navCtrl: NavController) {
    this.formGroup = formbuilder.group({
      password: ['', [Validators.required, Validators.minLength(4)]]
    }); //builds the formgroup with the same formcontrolname.
    const passwordControl = this.formGroup.get('password');
    passwordControl.valueChanges.subscribe(value => this.setErrorMessage(passwordControl));
    //call the particular method if value changes in the control.
  }
  setErrorMessage(c: AbstractControl): void {
    this.passwordMessage = ''; //To not display the error message, if there is no error.
    let control = this.uiService.getControlName(c);
    if ((c.touched || c.dirty) && c.errors) {
      if (control === 'password') {
        this.passwordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        //maps the error message from validationMessages array. 
      }
    }
  }
  private validationMessages = { //used in above method.
    password_required: '*Enter Password',
    password_minlength: 'Password cannot be less than 4 character'
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
    var OS = this.storageService.GetOS();
    this.registerService.loginbyHttpClient(this.userName, this.formGroup.get('password').value, this.uniqueKey).subscribe((data: any) => {
      this.registerService.userToken = data.access_token;
      //StorageService.SetItem('userToken', data.access_token);
      this.sendToken(data.access_token); //stores the token in service property.
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
        loadingnew.dismiss();
      }
      else {
        this.navCtrl.setRoot(PagePage, { 'ActiveBankName': this.ActiveBankName });
      }
      loading.dismiss();
    }, (error) => {
      //this.toastrService.error(error.error.ExceptionMessage, 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: 'Incorrect Password',
        buttons: ['OK']
      });
      alert.present();
      loading.dismiss();
      this.navCtrl.setRoot(LoginPage);   
    });
  }
sendToken(token:string){
  // this.registerService.GetToken(token).subscribe((data:any)=>{
    
  // });
  this.registerService.GetToken(token);
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
      this.navCtrl.setRoot(PagePage, { 'ActiveBankName': this.ActiveBankName });

    }, (error) => {
      this.toastrService.error(error.error.ExceptionMessage, 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: error.error.ExceptionMessage,
        buttons: ['OK']
      });
      alert.present();
    });

  }
  isForgotten: boolean = false;
  OnForgot() { //Fires, if we click on Forgot password button
    this.isForgotten = true;
    this.navCtrl.push(RegisterPage, { 'isForgotPassword': this.isForgotten });
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
