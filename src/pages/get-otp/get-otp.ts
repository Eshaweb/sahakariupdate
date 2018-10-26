import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, Form, NavParams, AlertController } from 'ionic-angular';
import { EnterOTPPage } from '../enter-otp/enter-otp';
import { HomePage } from '../home/home';
import { MobileRechargePage } from '../mobile-recharge/mobile-recharge';
import { BankingPage } from '../banking/banking';
import { RegisterService } from '../services/app-data.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Tenant } from '../LocalStorageTables/Tenant';
import { UISercice } from '../services/UIService';
import { StorageService } from '../services/Storage_Service';
import { isArray } from 'ionic-angular/umd/util/util';
import { BankBranch } from '../View Models/BankBranch';
import { ErrorHandlingService } from '../services/ErrorHandlingService';

@Component({
  selector: 'page-get-otp',
  templateUrl: 'get-otp.html'
})
export class GetOtpPage implements OnInit {
  MobileNo_Message: string;
  mobilenumforOTP_Message: string;
  formgroup2: FormGroup;
  isForgotPassword: boolean;
  formgroup1: FormGroup;
  MobileNo: string;
  constructor(private errorHandlingService:ErrorHandlingService,private storageService: StorageService, private alertCtrl: AlertController, private uiService: UISercice, public navParams: NavParams, public loadingController: LoadingController, public formbuilder: FormBuilder, private toastrService: ToastrService, private regService: RegisterService, public navCtrl: NavController) {
    this.formgroup1 = formbuilder.group({
      MobileNo: ['', [Validators.required, Validators.minLength(10)]]
    });  //builds the formgroup with the same formcontrolname.
    this.formgroup1.controls['MobileNo']
      .valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(val => {
        if (val && val.length < 10) {
          this.formgroup1.controls['MobileNo'].setErrors({ minlength: true });
        }
      });
    // let loader = this.loadingController.create({
    //   content: "Page Loading....."
    // });  
    // loader.present();
    // setTimeout(() => {
    //   loader.dismiss();
    // }, 2000); 

    const MobileNoControl = this.formgroup1.get('MobileNo');
    MobileNoControl.valueChanges.subscribe(value => this.setErrorMessage(MobileNoControl));
    //call the particular method if value changes in the control.
    this.formgroup2 = formbuilder.group({
      mobilenumforOTP: ['', [Validators.required, Validators.minLength(10)]]
    });
    const mobilenumforOTPControl = this.formgroup2.get('mobilenumforOTP');
    mobilenumforOTPControl.valueChanges.subscribe(value => this.setErrorMessage(mobilenumforOTPControl));
  }
  hidethisform: boolean;
  setErrorMessage(c: AbstractControl): void {
    this.MobileNo_Message = '';//To not display the error message, if there is no error.
    this.mobilenumforOTP_Message = '';

    let control = this.uiService.getControlName(c);//gives the control name property from particular service.
    document.getElementById('err_' + control).innerHTML='';
    if ((c.touched || c.dirty) && c.errors) {
      // if (control === 'MobileNo') {
      //   //this.MobileNo_Message = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      //   document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      //   //maps the error message from validationMessages array. 
      // }
      // else if (control === 'mobilenumforOTP') {
      //   document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      // }
      document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
    }
  }
  private validationMessages = {  //used in above method.
    MobileNo_required: '*Enter mobile number',
    MobileNo_minlength: 'Minimum length is 10 digits',

    mobilenumforOTP_required: '*Enter mobile number',
    mobilenumforOTP_minlength: 'Minimum length is 10 digits'
  };

  ngOnInit() {
    this.hidethisform = true;
    if (this.storageService.GetUser() != null) {
      this.MobileNo = this.storageService.GetUser().UserName;
    }
    this.isForgotPassword = this.navParams.get('isForgotPassword');
    if (this.isForgotPassword == true) {
      this.hidethisform = false;  //Used to show page of Forgot password, otp request.
    }
  }

  tenant: Tenant;
  OnRequestOTP() { //Fires, when we request for OTP.
    var mobilenum = this.formgroup1.get('MobileNo')
    let loading = this.loadingController.create({
      content: 'Please wait till you receive OTP'
    });
    loading.present();
    var oTPRequest = {
      MobileNo: mobilenum.value
    }
    this.regService.RequestOTP(oTPRequest).subscribe((data: any) => {
      //ADDED toastr.css in the path "node_modules/ngx-toastr/toastr.css" from https://github.com/scttcper/ngx-toastr/blob/master/src/lib/toastr.css
      this.toastrService.success('OTP Sent to ' + mobilenum.value + ' with Reference No. ' + data.OTPRef, 'Success!');
      loading.dismiss();
      this.navCtrl.push(EnterOTPPage, { 'OTPRefNo': data.OTPRef, 'MobileNo': mobilenum.value });
    }, (error) => {
      if (typeof error === 'string') {
        this.toastrService.error(error, 'Error!');
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
    });

  }

  OnMobNo() { //Fires, when we click on formgroup2 submit button
    var mobilenumforOTP = this.formgroup2.get('mobilenumforOTP');
    var ActiveTenantId: string = this.storageService.GetUser().ActiveTenantId;
    localStorage.clear();
    let loading = this.loadingController.create({
      content: 'Please wait till the screen loads'
    });
    loading.present();
    var oTPRequest = {
      MobileNo: mobilenumforOTP.value
    }
    this.regService.RequestOTP(oTPRequest).subscribe((data: any) => {
      this.toastrService.success('OTP Sent to ' + mobilenumforOTP.value + ' with Reference No. ' + data.OTPRef, 'Success!');
      this.navCtrl.push(EnterOTPPage, { 'OTPRefNo': data.OTPRef, 'TenantId': ActiveTenantId, 'MobileNo': mobilenumforOTP.value });
      loading.dismiss();

    }, (error) => {
      if (typeof error === 'string') {
        //this.toastrService.error(error, 'Error!');
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
    });

  }
  goToBankList(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  } goToEnterOTP(params) {
    if (!params) params = {};
    this.navCtrl.push(EnterOTPPage);
  } goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  } goToMobileRecharge(params) {
    if (!params) params = {};
    this.navCtrl.push(MobileRechargePage);
  } goToBanking(params) {
    if (!params) params = {};
    this.navCtrl.push(BankingPage);
  }
}


