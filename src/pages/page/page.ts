import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Events, ViewController, AlertController } from 'ionic-angular';
import { BankingPage } from '../banking/banking';
import { RechargePage } from '../recharge/recharge';
import { StorageService } from '../services/Storage_Service';
import { RechargeReportPage } from '../recharge-report/recharge-report';
import { window } from 'rxjs/operator/window';
import { LoginPage } from '../login/login';
import { RegisterService } from '../services/app-data.service';
import { BankBranchesPage } from '../bank-branches/bank-branches';

@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class PagePage implements OnInit {
  ActiveBankName: string;
  isLogOut: boolean;
  test: any;
  callback: any;
  constructor(private event: Events, private alertCtrl:AlertController, private registerService: RegisterService, private storageService: StorageService, public viewCtrl: ViewController, private events: Events, public navCtrl: NavController, public navParams: NavParams) {
    this.event.subscribe('REFRESH_isLogOutSetTrueinPage', () => {
      this.isLogOut =true;
      this.registerService.isLogOut=true;
    });
  }
  ngOnInit() {
    this.ActiveBankName = this.storageService.GetActiveBankName();
    this.events.publish('REFRESH_DIGIPARTYNAME');  //events written in appcomponent fires
    this.viewCtrl.didEnter.subscribe(() => {
      console.log('Component active');
    });
    if (this.storageService.GetSelfCareAc() == null || this.registerService.isLogOut == false) {
      this.isLogOut = true;
    }
    else if(this.registerService.isLogOut == true){
      this.isLogOut = false;
    }
  }
  onLogout(){
    var alert = this.alertCtrl.create({
      title: "Alert",
      subTitle: 'Are you sure to LogOut?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.isLogOut = false;
            this.events.publish('REFRESH_isLogOutSetFalse');
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.onOK();
            this.events.publish('REFRESH_isLogOutSetTrue');
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
  onLogin() {
    this.navCtrl.push(LoginPage);
  }
  OnBanking() { //Fires, when clicking on Banking
    this.navCtrl.push(BankingPage, {
      callback: this.myCallbackFunction
    });
  }
  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
      this.test = _params;
      resolve();
    });
  }
  OnRecharge() { //Fires, when clicking on Recharge
    this.navCtrl.push(RechargePage);
  }
  OnReports() { //Fires, when clicking on Reports
    this.navCtrl.push(RechargeReportPage);
  }
  OnBankBranches(){
    this.navCtrl.push(BankBranchesPage);
  }
  ionViewDidEnter() {
      if (this.storageService.GetSelfCareAc() == null || this.registerService.isLogOut == false) {
      this.isLogOut = true;
    }
    else if(this.registerService.isLogOut == true){
      this.isLogOut = false;
    }
  }
}
