import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MobileRechargePage } from '../mobile-recharge/mobile-recharge';
import { BankingPage } from '../banking/banking';
import { RegisterService } from '../services/app-data.service';
import { PostOPT } from '../View Models/PostOPT';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoginPage } from '../login/login';
import { StorageService } from '../services/Storage_Service';
import { ToastrService } from 'ngx-toastr';
import { UISercice } from '../services/UIService';
import { RegisterPage } from '../register/register';
import { Observable } from '../../../node_modules/rxjs';
import { Tenant } from '../LocalStorageTables/Tenant';
import { SavePasswordPage } from '../save-password/save-password';
@Component({
  selector: 'page-enter-otp',
  templateUrl: 'enter-otp.html'
})
export class EnterOTPPage implements OnInit {
  tenant: Tenant;
  confirmpasswordMessage: string;
  passwordMessage: string;
  SavePasswordForm: FormGroup;
  formgroup: FormGroup;
  userMessage: string;
  ShowOldPassword: boolean;
  ChangePasswordForm: FormGroup;
  mobilenoMessage: string;
  oldPasswordMessage: string;
  isForgotten: boolean;
  isResendOTP: boolean = false;
  OTPRef: string;
  OTPRefNo: string;
  TenantId: any;
  constructor(private storageService: StorageService, private alertCtrl: AlertController, private uiService: UISercice, private toastrService: ToastrService, public navParams: NavParams, public loadingController: LoadingController, private fb: FormBuilder, public navCtrl: NavController, private registerService: RegisterService) {
    this.formgroup = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(4)]]
    });  //builds the formgroup with same formcontrolname.
    const otpControl = this.formgroup.get('otp');
    otpControl.valueChanges.subscribe(value => this.setErrorMessageForOTPField(otpControl));  //call the particular method if value changes in the control.

  }
  setErrorMessageForOTPField(c: AbstractControl): void {
    this.userMessage = '';
    let control = this.uiService.getControlName(c);  //gives the control name property from particular service.
    if ((c.touched || c.dirty) && c.errors) {  //checks for error in particular control.
      if (control === 'otp') {
        this.userMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        //maps the error message from validationMessages array.
      }
    }
  }
 
  private validationMessages = { //used in above method.
    otp_required: '*Enter OTP Number',
    otp_minlength: 'Enter 4 digits',
  };

  countDown;
  counter = 20;
  tick = 1000;
  ngOnInit() {
    this.TenantId = this.navParams.get('TenantId');
    this.countDown = Observable.timer(0, this.tick)
      .take(this.counter)
      .map(() => --this.counter);  //To count down the time.


    //used to show a Change Password form, based on above property value.
    if (this.ShowIf == null) {
      this.ShowIf == false;
      this.ShowOldPassword = false;
    }
    else if (this.ShowIf == true) {
      this.HideIf = false;
      this.ShowOldPassword = true;//To show oldPassword field for Change Password form.
      this.ShowIf = false;
    }
  }
  // stopTimer() {
  //   this.countDown = null;
  // }
  
  storeboolean: boolean;
  ShowIf: boolean;
  HideIf = true;
  postOPT: PostOPT;
  OnSubmit() {  //Fires, while clicking Enter OTP submit button.
    if(this.counter==0){
      console.log(this.counter);
    }
    if (this.isResendOTP == true) {
      this.OTPRefNo = this.OTPRef;
    }
    else {
      this.OTPRefNo = this.navParams.data.OTPRefNo;
    }
    let loading = this.loadingController.create({
      content: 'Please wait till the screen loads'
    });

    loading.present();
    const postOPT = {
      //TenantId: this.registerService.TenantId,  //ActiveTenantId
      MobileNo: this.registerService.MobileNo,
      OTPRef: this.OTPRefNo,
      OTP: this.formgroup.get('otp').value
    }
    this.registerService.ValidateOTP(postOPT).subscribe((data: any) => {
      this.storeboolean = data;
      if (this.storeboolean == true) {
        this.ShowIf = true;  //To show SavePasswordForm based on value
        this.HideIf = false;
        this.ShowOldPassword = false;
        if (this.TenantId != null) {
          this.navCtrl.push(SavePasswordPage, { 'TenantId': this.TenantId });
        }
        else {
          this.navCtrl.push(RegisterPage);
        }
      } else {
        this.ShowIf = false;
        this.HideIf = true;
        this.toastrService.error("OTP is Invalid", 'Error!')
        this.formgroup.get('otp').reset();
      }
      loading.dismiss();
    }, (error) => {
      this.toastrService.error(error, 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: error,
        buttons: ['OK']
      });
      alert.present();
      loading.dismiss();
    });
  }


  OnResendOTP() {  //Fires, if we click on Resend OTP button.
    let loading = this.loadingController.create({
      content: 'Please wait till the screen loads'
    });
    loading.present();
    // this.countDown = Observable.timer(0, this.tick)
    //   .take(this.counter)
    //   .map(() => --this.counter);
    let oTPRequest = {
      TenantId: this.navParams.data.TenantId,
      MobileNo: this.navParams.data.MobileNo
    }
    this.registerService.RequestOTP(oTPRequest).subscribe((data: any) => {
      //ADDED toastr.css in the path "node_modules/ngx-toastr/toastr.css" from https://github.com/scttcper/ngx-toastr/blob/master/src/lib/toastr.css
      this.toastrService.success('OTP Sent to ' + oTPRequest.MobileNo + ' with Reference No. ' + data.OTPRef, 'Success!');
      this.isResendOTP = true;
      this.OTPRef = data.OTPRef;
      loading.dismiss();
    }, (error) => {
      this.toastrService.error(error, 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: error,
        buttons: ['OK']
      });
      alert.present();
      loading.dismiss();
    });
  }

  //below code is from here https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/105074#105074
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }



  goToHome(params) {
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

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }


  //for HH:MM:SS format

  // transform(value: number): string {
  //   const hours: number = Math.floor(value / 3600);
  //   const minutes: number = Math.floor((value % 3600) / 60);
  //   return ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  // }


}
