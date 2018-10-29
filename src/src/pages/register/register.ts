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
import { SavePasswordPage } from '../save-password/save-password';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements OnInit {
  isForgotPassword: boolean;
  constructor(private storageService: StorageService, private alertCtrl: AlertController, private uiService: UISercice, public navParams: NavParams, public loadingController: LoadingController, public formbuilder: FormBuilder, private toastrService: ToastrService, private registerService: RegisterService, public navCtrl: NavController) {

    this.OnGetTenants();
  }
  hidethisform: boolean;

  ngOnInit() {

  }

  tenant: Tenant;
  OnGetTenants() {  //Fires, when we click on search bank
    let loading = this.loadingController.create({
      content: 'Please wait till the Registration Process'
    });
    loading.present();
    this.tenant = null;
    this.registerService.GetTenantsByMobile(this.registerService.MobileNo).subscribe((data: any) => {
      this.tenant = data;
      var TenantList = data;
      if (TenantList.length == 0) { //If there is no tenantList, show error.
        this.toastrService.error("Non-Registered/InCorrect Mobile Number", 'Error!');
        this.tenant = null;
      }
      else {
        //this.hidethisform = false;
      }
      loading.dismiss();
    }, (error) => {
      //this.toastrService.error(error, 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: error,
        buttons: ['OK']
      });
      alert.present();
      loading.dismiss();
    });

  }
  OnAccountClick(Id) {
    this.registerService.SetTenantId(Id);
    this.navCtrl.push(SavePasswordPage, { 'TenantId': Id });
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


