import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams, Navbar } from 'ionic-angular';
import { StorageService } from '../services/Storage_Service';
import { StatementRequest } from '../View Models/StatementRequest';
import { RegisterService } from '../services/app-data.service';
import { MiniStatement } from '../View Models/MiniStatement';
import { StatementItem } from '../View Models/StatementItem';
import { SelfCareAc } from '../LocalStorageTables/SelfCareAc';
import { ToastrService } from 'ngx-toastr';
import { PagePage } from '../page/page';
import { BankingPage } from '../banking/banking';

@Component({
  selector: 'page-mini-statement',
  templateUrl: 'mini-statement.html'
})
export class MiniStatementPage implements OnInit {
  @ViewChild(Navbar) navBar: Navbar;
  ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
  label: string;
  showCredited: boolean;
  ShowDebited: boolean;
  constructor(private navParams: NavParams, private storageService: StorageService, private alertCtrl: AlertController, private toastr: ToastrService, public loadingController: LoadingController, private registerService: RegisterService, public navCtrl: NavController) {

  }
  ActiveBankName: string;
  ShowHide: boolean;
  HideMsg: boolean;
  SelfCareAcsBasedOnTenantID: SelfCareAc;
  ngOnInit() {
    this.ShowHide = true; //used to show click messages.
    this.HideMsg = true;  //used to show Accounts of the bank
    this.ActiveBankName = this.storageService.GetActiveBankName();
    this.SelfCareAcsBasedOnTenantID = this.storageService.GetSelfCareAcsBasedOnTenantID();
  }
  ionViewDidLoad() {
    this.setBackButtonAction();
  }
  setBackButtonAction() {  //Fires for Backbutton click
    this.navBar.backButtonClick = () => {
      this.navCtrl.push(BankingPage);
    }
  }
  
  statementItem: StatementItem;
  miniStatement: MiniStatement;
  balance: string;
  OnGetMiniStatement(AcHeadId, AcSubId) { //Fires, when user clicks on Accounts
    let loading = this.loadingController.create({
      content: 'Loading the Mini Statement..'
    });
    loading.present();
    const statementRequest = {
      AcMastId: AcHeadId,
      AcSubId: AcSubId,
      TenantId: this.ActiveTenantId
    }
    this.registerService.GetStatement(statementRequest).subscribe((data: any) => {
      this.balance = data;
      this.miniStatement = data;
      this.statementItem = data.StatementItems;
      loading.dismiss();
    }, (error) => {
      if (error == 401) {
        this.registerService.SetRefreshTokenNeeded();
        this.registerService.GetToken(StorageService.GetItem('refreshToken')).subscribe((data: any) => {
          StorageService.SetItem('refreshToken',data.RefreshToken);
          this.registerService.SetToken(data.AccessToken);
          this.registerService.SetRefreshTokenNeeded();
          this.registerService.GetStatement(statementRequest).subscribe((data: any) => {
            console.clear();
            this.balance = data;
            this.miniStatement = data;
            this.statementItem = data.StatementItems;
            loading.dismiss();
          });
        });
      }
      else {
        //this.toastr.error(error, 'Error!');
        var alert = this.alertCtrl.create({
          title: "Error Message",
          subTitle: error,
          buttons: ['OK']
        });
        alert.present();     //To show alert message 
        loading.dismiss();
      }
    });
    this.ShowHide = false;
    this.HideMsg = false;
  }

}
