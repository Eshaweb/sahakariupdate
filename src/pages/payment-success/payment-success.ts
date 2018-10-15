import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastrService } from 'ngx-toastr';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { StorageService } from '../services/Storage_Service';

/**
 * Generated class for the PaymentSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment-success',
  templateUrl: 'payment-success.html',
})
export class PaymentSuccessPage {
  FTD: any;
  showstatus: boolean;
  showConfirm: boolean;
  showFailure: boolean;
  tranResponse: any;
  showSuccess: boolean;
  showPending: boolean;
  showInit: boolean;
  showRefund: boolean;
  showBlocked: boolean;
  ParentId: any;
  OperatorService: string;
  ActiveBankName: string;
  showFailureFT: boolean;

  constructor(private storageService:StorageService,public alertCtrl:AlertController, public toastr:ToastrService,public navCtrl: NavController, public navParams: NavParams) {
    this.FTD = navParams.get('FTD');
    this.tranResponse = navParams.get('TranResponse');
    this.ParentId = this.navParams.get('ParentId');
    this.ActiveBankName = this.storageService.GetActiveBankName();
    if(this.ParentId!=null){
      switch (this.ParentId) {
        case "S1": this.OperatorService = "PrePaid";
          break;
        case "S2": this.OperatorService = "PostPaid";
          break;
        case "S3": this.OperatorService = "DTH";
          break;
        default: this.OperatorService = "Electricity Bill";
          break;
      }
    }
  }

  ionViewDidLoad() {
    if(this.navParams.get('FTD')!=null){
    if (this.navParams.get('FTD').Status == "1") {
      this.toastr.success('Fund Transferred with Success', 'Success!');
      var alert = this.alertCtrl.create({
        title: "Success Message",
        subTitle: "Fund Transferred",
        buttons: ['OK']
      });
      alert.present();
      this.showstatus = true;
      this.showConfirm = false;
    }
    else {
      // this.toastr.error(this.FTD.AISError, 'Error!');
      this.toastr.error('Fund transfer failed', 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: 'Fund transfer failed',
        buttons: ['OK']
      });
      alert.present(); //Shows alert message of Error from server.
      this.showFailureFT = true;
      this.showConfirm = false;
    }
  }
  else if(this.navParams.get('TranResponse')!=null){
    switch (this.tranResponse.StatusCode) {
            case 1:
              var alert = this.alertCtrl.create({
                title: "Message",
                subTitle: 'Recharge is successful with Transaction ID ' + this.tranResponse.VendorExtCode,
                buttons: ['OK']
              });
              alert.present();
              this.showSuccess = true;
              break;
              case 2:
              //alert("Recharge is pending with Transaction ID "+ this.tranResponse.VendorExtCode);
              var alert = this.alertCtrl.create({
                title: "Message",
                subTitle: 'Recharge is pending with Transaction ID ' + this.tranResponse.VendorExtCode,
                buttons: ['OK']
              });
              alert.present();
              this.showPending=true;
              break;
              case 3:
              ///alert("Recharge is initiated with Transaction ID "+ this.tranResponse.VendorExtCode);
              var alert = this.alertCtrl.create({
                title: "Message",
                subTitle: 'Recharge is initiated with Transaction ID ' + this.tranResponse.VendorExtCode,
                buttons: ['OK']
              });
              alert.present();
              this.showInit = true;
              break;
              case 4:
              //alert("Recharge is failure with Transaction ID "+ this.tranResponse.VendorExtCode);
              var alert = this.alertCtrl.create({
                title: "Error Message",
                subTitle: 'Recharge is Unsuccessful with Transaction ID ' + this.tranResponse.VendorExtCode,
                buttons: ['OK']
              });
              alert.present();
              this.showFailure=true;
              break;
              case 5:
              //alert("Recharge is refunded with Transaction ID "+ this.tranResponse.VendorExtCode);
              var alert = this.alertCtrl.create({
                title: "Message",
                subTitle: 'Recharge is refunded with Transaction ID ' + this.tranResponse.VendorExtCode,
                buttons: ['OK']
              });
              alert.present();
              this.showRefund=true;
              break;
              case 9:
              //alert("Recharge is blocked with Transaction ID "+ this.tranResponse.VendorExtCode);
              var alert = this.alertCtrl.create({
                title: "Message",
                subTitle: 'Recharge is blocked with Transaction ID ' + this.tranResponse.VendorExtCode,
                buttons: ['OK']
              });
              alert.present();
              this.showBlocked=true;
              break;
              default:
              //alert("Recharge is blocked with Transaction ID "+ this.tranResponse.VendorExtCode);
              var alert = this.alertCtrl.create({
                title: "Message",
                subTitle: this.tranResponse.AISError,
                buttons: ['OK']
              });
              alert.present();
              this.showBlocked=true;
              break;
          }
  }
  }

}
