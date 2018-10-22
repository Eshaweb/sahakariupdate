import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events, ViewController } from 'ionic-angular';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { StorageService } from '../services/Storage_Service';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/app-data.service';
import { UISercice } from '../services/UIService';
import { PaymentSuccessPage } from '../payment-success/payment-success';

/**
 * Generated class for the CheckPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-check-password',
  templateUrl: 'check-password.html',
})
export class CheckPasswordPage {
  checkPasswordForm: FormGroup;
  passwordMessage: string;
  doFundTransfer: any;
  ftd: any;
  RechargeModel: any;
  tranResponse: any;

  constructor(public viewCtrl: ViewController, private uiService: UISercice, private formbuilder: FormBuilder, private storageService: StorageService, public navParams: NavParams, private alertCtrl: AlertController, private toastr: ToastrService, public loadingController: LoadingController, private events: Events, private registerService: RegisterService, public navCtrl: NavController) {
    this.doFundTransfer = navParams.get('DoFundTransfer');
    this.RechargeModel = navParams.get('RechargeModel');
    this.checkPasswordForm = this.formbuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    const passwordControl = this.checkPasswordForm.get('password');
    passwordControl.valueChanges.subscribe(value => this.setErrorMessage(passwordControl));
  }

  setErrorMessage(c: AbstractControl): void {
    this.passwordMessage = '';
    let control = this.uiService.getControlName(c);
    if ((c.touched || c.dirty) && c.errors) {
      if (control === 'password') {
        this.passwordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
    }
  }
  private validationMessages = {
    password_required: 'Enter Password'
  };

  dismiss() {
    this.viewCtrl.dismiss();
  }


  onSubmit() {
    let loading = this.loadingController.create({
      content: 'Your Request is Processing..'
    });
    loading.present();
    const loginModel = {
      UserName: this.storageService.GetUser().UserName,  //ActiveTenantId
      Password: this.checkPasswordForm.controls['password'].value,
      UniqueId: this.storageService.GetUser().UniqueKey,
    }
    this.registerService.CheckPassword(loginModel).subscribe((data: any) => {
      if (data == true && this.navParams.get('DoFundTransfer') != null) {
        this.registerService.FundTransfer(this.navParams.get('DoFundTransfer')).subscribe((data: any) => {
          this.ftd = data;
          this.navCtrl.push(PaymentSuccessPage, { 'FTD': data });
          this.viewCtrl.dismiss();
          loading.dismiss();
        });
      }
      else if (data == true && this.navParams.get('RechargeModel') != null) {
        this.registerService.PostRecharge(this.navParams.get('RechargeModel')).subscribe((data: any) => {
          this.tranResponse = data;
          this.navCtrl.push(PaymentSuccessPage, { 'TranResponse': data });
          this.viewCtrl.dismiss();
          loading.dismiss();
        });
      }
      else {
        this.viewCtrl.dismiss();
        loading.dismiss();
        var alert = this.alertCtrl.create({
          title: "Error Message",
          subTitle: 'Password is Invalid',
          buttons: ['OK']
        });
        alert.present();
      }
    }, (error) => {
      if (error == '401') {
        this.registerService.SetRefreshTokenNeeded();
        this.registerService.GetToken(localStorage.getItem('refreshToken')).subscribe((data: any) => {
          localStorage.setItem('refreshToken', data.RefreshToken);
          this.registerService.SetToken(data.AccessToken);
          this.registerService.SetRefreshTokenNeeded();
          this.registerService.CheckPassword(loginModel).subscribe((data: any) => {
            console.clear();
            if (data == true && this.navParams.get('DoFundTransfer') != null) {
              this.registerService.FundTransfer(this.navParams.get('DoFundTransfer')).subscribe((data: any) => {
                this.ftd = data;
                this.navCtrl.push(PaymentSuccessPage, { 'FTD': data });
                this.viewCtrl.dismiss();
                loading.dismiss();
              });
            }
            else if (data == true && this.navParams.get('RechargeModel') != null) {
              this.registerService.PostRecharge(this.navParams.get('RechargeModel')).subscribe((data: any) => {
                this.tranResponse = data;
                this.navCtrl.push(PaymentSuccessPage, { 'TranResponse': data });
                this.viewCtrl.dismiss();
                loading.dismiss();
              });
            }
            else {
              this.viewCtrl.dismiss();
              loading.dismiss();
              var alert = this.alertCtrl.create({
                title: "Error Message",
                subTitle: 'Password is Invalid',
                buttons: ['OK']
              });
              alert.present();
            }
          });
        });
      }
      else {
        this.toastr.error(error, 'Error!');
        var alert = this.alertCtrl.create({
          title: "Error Message",
          subTitle: error,
          buttons: ['OK']
        });
        alert.present();     //To show alert message  
        loading.dismiss();
      }
      this.viewCtrl.dismiss();
    });
  }
}
