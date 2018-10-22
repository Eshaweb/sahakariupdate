import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { StorageService } from '../services/Storage_Service';
import { Tenant } from '../LocalStorageTables/Tenant';
import { EnterOTPPage } from '../enter-otp/enter-otp';
import { RegisterService } from '../services/app-data.service';
import { LoginPage } from '../login/login';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { PagePage } from '../page/page';
import { findReadVarNames } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import { SavePasswordPage } from '../save-password/save-password';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage implements OnInit {
  isLogOut: boolean;
  constructor(private event: Events, private toastrService: ToastrService, public loadingController: LoadingController, private alertCtrl: AlertController, private storageService: StorageService, private registerService: RegisterService, public navCtrl: NavController, public navParams: NavParams) {
  }
  addedTenantRecord: Tenant;
  tenantList: Tenant;
  tenants: Tenant;
  mobileno: string;
  digipartyname: string;
  ngOnInit() {
    let loading = this.loadingController.create({
      content: 'Loading the My Profile..'
    });
    loading.present();
    this.digipartyname = this.storageService.GetDigipartyBasedOnActiveTenantId().Name;
    this.mobileno = this.storageService.GetUser().UserName;
    this.registerService.GetTenantsByMobile(this.mobileno).subscribe((data: any) => {
      this.tenantList = data;
      this.storageService.SetTenant(JSON.stringify(this.tenantList));//To update the Tenant table of localstorage
      this.tenants = this.storageService.GetTenant(); //To show bank branchs
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
    if (this.storageService.GetSelfCareAc() == null || this.registerService.isLogOut == false) {
      this.isLogOut = true;
    }
    else if(this.registerService.isLogOut == true){
      this.isLogOut = false;
    }
    this.event.subscribe('REFRESH_isLogOutSetFalse', () => {
      this.isLogOut =false;
      this.registerService.isLogOut=false;
    });
    this.event.subscribe('REFRESH_isLogOutSetTrue', () => {
      this.isLogOut =true;
      this.registerService.isLogOut=true;
    });
  }

  OnChange() {//Fires, if we click on Change bank
    var ischangePassword: boolean = true;
    this.navCtrl.push(SavePasswordPage, { 'ischangePassword': ischangePassword });
  }
  OnLogOut() {  //Fires, if we click on LogOut
    var alert = this.alertCtrl.create({
      title: "Alert",
      subTitle: 'Are you sure to LogOut?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.isLogOut = false;
            this.event.publish('REFRESH_isLogOutSetFalse');
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.onOK();
            this.event.publish('REFRESH_isLogOutSetTrue');
          }
        }
      ]
    });
  alert.present(); 
  }
  onOK(){
    this.storageService.RemoveRecordsForLogout();
    this.isLogOut=true;
  }
  OnLogin(){
    this.navCtrl.push(LoginPage);
  }
  OnSync() {  //Fires, if we click on Sync Accounts
    this.storageService.RemoveRecordsForLogout();
    let loading = this.loadingController.create({
      content: 'Syncing Operators and Services'
    });
    loading.present();
    this.registerService.GetServices().subscribe((data: any) => {//To update the OS Table
      var oS = JSON.stringify(data);
      this.storageService.SetOS(oS);
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

    let loadingnew = this.loadingController.create({
      content: 'Syncing Accounts'
    });
    loadingnew.present();
    this.callservices(); //To update the Tenant, Digiparty and SelfcareAccounts
    loadingnew.dismiss();
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
      var ActiveBankName = this.storageService.GetActiveBankName();

      var digiParty = {
        Id: data.DigiPartyId,
        DigiPartyId: data.DigiPartyId,
        PartyMastId: data.PartyMastId,
        MobileNo: data.MobileNo,
        TenantId: data.TenantId,  //ActiveTenantId
        Name: data.Name
      }
      this.storageService.SetDigiParty(JSON.stringify([digiParty]));

      this.storageService.SetSelfCareAc(JSON.stringify(data.SelfCareAcs));

      this.navCtrl.setRoot(PagePage, { 'ActiveBankName': ActiveBankName });

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
}
