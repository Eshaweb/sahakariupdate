import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { OS } from '../View Models/OS';
import { StorageService } from '../services/Storage_Service';
import { RegisterService } from '../services/app-data.service';
import { RRRequest } from '../View Models/RRRequest';
import { RRResponse } from '../View Models/RRResponse';
import { ToastrService } from 'ngx-toastr';
import { CheckVoucherResult } from '../View Models/CheckVoucherResult';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the RechargeReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recharge-report',
  templateUrl: 'recharge-report.html',
})
export class RechargeReportPage implements OnInit {
  ActiveBankName: string;
  ActiveTenantId: string;
  categories: OS;
  showFailureButton: boolean;
  checkVoucherResult: CheckVoucherResult;
  showReport: boolean;
  showReversal: boolean;
  constructor(private storageService: StorageService, public modalCtrl: ModalController, private alertCtrl: AlertController, public loadingController: LoadingController, private toastr: ToastrService, private registerService: RegisterService, public navCtrl: NavController, public navParams: NavParams) {

  }
  ngOnInit() {
    this.categories = this.storageService.GetOS();
    this.ActiveBankName = this.storageService.GetActiveBankName();
    this.showReport = true;
  }
  rRResponse: RRResponse;

  ObjChanged(event) {  //Fires, when we click on selectbox options
    var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
    var digiPartyId = this.storageService.GetDigipartyBasedOnActiveTenantId().DigiPartyId;
    let loading = this.loadingController.create({
      content: 'Please wait till the screen loads'
    });
    loading.present();
    const rRRequest = {
      TenantId: ActiveTenantId,
      DigiPartyId: digiPartyId,
      SelectedType: event,
      Number: 10
    }
    this.registerService.GetRechargeReport(rRRequest).subscribe((data: any) => {
      this.rRResponse = data;
      loading.dismiss();
    }, (error) => {
            if (error == 401) {
              this.registerService.SetRefreshTokenNeeded();
              this.registerService.GetToken(StorageService.GetItem('refreshToken')).subscribe((data: any) => {
                StorageService.SetItem('refreshToken',data.RefreshToken);
                  this.registerService.SetToken(data.AccessToken);
                  this.registerService.SetRefreshTokenNeeded();
                  this.registerService.GetRechargeReport(rRRequest).subscribe((data: any) => {
                    console.clear();
                    this.rRResponse = data;
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
              loading.dismiss();    //To close loading panel
          }
          
    });
  }
  OnShowReverse(Id) {  //Fires, when we click on Show Reversal
    //this.showReport=false;
    var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
    let loading = this.loadingController.create({
      content: 'Please wait till the screen loads'
    });
    loading.present();
    const checkVoucher = {
      TenantId: ActiveTenantId,
      DigiTranLogId: Id.toString()
    }
    this.registerService.GetReversedVoucher(checkVoucher).subscribe((data: any) => {
      this.checkVoucherResult = data;
      //this.showReversal=true;
      this.openModalWithParams();
      loading.dismiss();
    }, (error) => {
            if (error == 401) {
              this.registerService.SetRefreshTokenNeeded();
              this.registerService.GetToken(localStorage.getItem('refreshToken')).subscribe((data: any) => {
                  localStorage.setItem('refreshToken',data.RefreshToken);
                  this.registerService.SetToken(data.AccessToken);
                  this.registerService.SetRefreshTokenNeeded();
                  this.registerService.GetReversedVoucher(checkVoucher).subscribe((data: any) => {
                    console.clear();
                    this.checkVoucherResult = data;
                    this.openModalWithParams();
                      loading.dismiss(); 
                  });
              });
          }
          else {
             // this.toastr.error(error, 'Error!');
              var alert = this.alertCtrl.create({
                  title: "Error Message",
                  subTitle: error,
                  buttons: ['OK']
              });
              alert.present();     //To show alert message  
              loading.dismiss();    //To close loading panel
          } 
    });
  }
  openModalWithParams() { //Fires, from above method
    let myModal = this.modalCtrl.create(ModalPage, { 'myParam': this.checkVoucherResult });
    myModal.present(); //Fires a popup Modal
  }
}
