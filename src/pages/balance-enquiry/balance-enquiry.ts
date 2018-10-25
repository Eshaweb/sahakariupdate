import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams, Navbar } from 'ionic-angular';
import { StorageService } from '../services/Storage_Service';
import { RegisterService } from '../services/app-data.service';
import { SelfCareAc } from '../LocalStorageTables/SelfCareAc';
import { ToastrService } from 'ngx-toastr';
import { Observable } from '../../../node_modules/rxjs';
import { BankingPage } from '../banking/banking';

@Component({
    selector: 'page-balance-enquiry',
    templateUrl: 'balance-enquiry.html'
})
export class BalanceEnquiryPage implements OnInit {
    showBackButton: boolean;
    refreshToken: any;
    @ViewChild(Navbar) navBar: Navbar;
    constructor(public navParams: NavParams, private storageService: StorageService, private alertCtrl: AlertController, private toastr: ToastrService, public loadingController: LoadingController, private registerService: RegisterService, public navCtrl: NavController) {
    }
    ActiveBankName: string;
    HideMsg: boolean;
    ShowHide: boolean;
    SelfCareAcsBasedOnTenantID: SelfCareAc;
    countDown;
    counter = 270;
    tick = 1000;
    ionViewDidLoad() {
        this.setBackButtonAction();
    }
    setBackButtonAction() {  //Fires for Backbutton click
        this.navBar.backButtonClick = () => {
          this.navCtrl.push(BankingPage);
        }
      }
    ngOnInit() {
        this.HideMsg = true;   //used to show click messages.
        this.ShowHide = true;  //used to show Accounts of the bank
        this.ActiveBankName = this.storageService.GetActiveBankName();
        this.SelfCareAcsBasedOnTenantID = this.storageService.GetSelfCareAcsBasedOnTenantID();  //used to show Bank Accounts based on TenantID
        this.countDown = Observable.timer(0, this.tick)
            .take(this.counter)
            .map(() => --this.counter);  //To count down the time.
        if (this.navParams.get('isFromLogin') == true) {
            this.showBackButton = false;
        }
        else {
            this.showBackButton = true;
        }
    }
    
    balance: string;
    OnGetAccountBalance(AcHeadId, AcSubId) {   //Fires when user clicks on Accounts
        let loading = this.loadingController.create({
            content: 'Loading the Account Balance..'
        });
        loading.present();           //To show loading panel
        var statementRequest = {
            AcMastId: AcHeadId,
            AcSubId: AcSubId,
            TenantId: this.storageService.GetUser().ActiveTenantId
        }
        this.registerService.GetAccountBalance(statementRequest).subscribe((data: any) => {
            this.balance = data;
            loading.dismiss();
        }, (error) => {
            if (error == 401) {
                this.registerService.SetRefreshTokenNeeded();
                this.registerService.GetToken(StorageService.GetItem('refreshToken')).subscribe((data: any) => {
                    StorageService.SetItem('refreshToken',data.RefreshToken);
                    this.registerService.SetToken(data.AccessToken);
                    this.registerService.SetRefreshTokenNeeded();
                    this.registerService.GetAccountBalance(statementRequest).subscribe((data: any) => {
                        console.clear();
                        this.balance = data;
                        loading.dismiss(); 
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
                loading.dismiss();    //To close loading panel
            }
            
        });
        this.ShowHide = false;
        this.HideMsg = false;
    }
}
