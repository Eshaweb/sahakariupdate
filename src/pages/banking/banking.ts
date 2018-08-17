import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AutoLogoutService } from '../services/AutoLogOutService';
import { StorageService } from '../services/Storage_Service';
import { FundTransferPage } from '../fund-transfer/fund-transfer';
import { BalanceEnquiryPage } from '../balance-enquiry/balance-enquiry';
import { MiniStatementPage } from '../mini-statement/mini-statement';
import { PagePage } from '../page/page';

@Component({
  selector: 'page-banking',
  templateUrl: 'banking.html'
})
export class BankingPage implements OnInit {
  ActiveBankName: string;
  // constructor(private autoLogoutService: AutoLogoutService,public navCtrl: NavController) {
  constructor(private storageService:StorageService, public navCtrl: NavController) {

    //StorageService.SetItem('lastAction', Date.now().toString());

  }

  ngOnInit() {
    this.ActiveBankName = this.storageService.GetActiveBankName();
  }
  OnFundTransfer() {  //Fires, when clicking on Fund Transfer.
    this.navCtrl.push(FundTransferPage);
  }
  OnBack(){
    this.navCtrl.setRoot(PagePage);
  }
  OnBalanceEnquiry() {  //Fires, when clicking on Balance Enquiry.
    this.navCtrl.push(BalanceEnquiryPage);
  }

  OnMiniStatement() {   //Fires, when clicking on Mini Statement.
    this.navCtrl.push(MiniStatementPage);
  }
}
