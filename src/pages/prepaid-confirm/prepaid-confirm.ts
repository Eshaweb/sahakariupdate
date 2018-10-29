import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ModalOptions } from 'ionic-angular';
import { StorageService } from '../services/Storage_Service';
import { RechargeModel } from '../View Models/RechargeModel';
import { RegisterService } from '../services/app-data.service';
import { ToastrService } from 'ngx-toastr';
import { TranResponse } from '../View Models/TranResponse';
import { AlertController } from 'ionic-angular';
import { CheckPasswordPage } from '../check-password/check-password';


@Component({
  selector: 'page-prepaid-confirm',
  templateUrl: 'prepaid-confirm.html',
})
export class PrepaidConfirmPage implements OnInit {
 OperatorService: string;
  ParentId: string;
  showTitle: boolean;
  ActiveBankName: string;
  showConfirm: boolean;
  showSuccess: boolean;
  Amount: string;
  SubscriptionId: string;
  operator: string;
  tranResponse: TranResponse;
  OperatorId: any;
  showPending: boolean;
  showFailure: boolean;
  showRefund: boolean;
  showBlocked: boolean;
  showInit: boolean;
  constructor(private modalCtrl:ModalController, private storageService:StorageService, private alertCtrl: AlertController, private toastr: ToastrService, private registerService: RegisterService, public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.operator = this.navParams.get('Operator');
    this.SubscriptionId = this.navParams.get('SubscriptionId');
    this.Amount = this.navParams.get('Amount');
    this.ParentId = this.navParams.get('ParentId');
    this.OperatorId=this.navParams.get('OperatorId');
    this.ActiveBankName = this.storageService.GetActiveBankName();
    this.showTitle = true;
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
  
  OnConfirm() {
    var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
    var rechargeModel: RechargeModel = {
      TenantId: ActiveTenantId,
      DigiPartyId: this.GetDigiPartyandPartyMastID(ActiveTenantId).DigiPartyId,
      PartyMastId: this.GetDigiPartyandPartyMastID(ActiveTenantId).PartyMastId,
      AcMastId: this.GetSelfCareAcByTenantID(ActiveTenantId).AcHeadId,
      AcSubId: this.GetSelfCareAcByTenantID(ActiveTenantId).AcSubId,
      // Amount: this.rechargeitem.Amount,
      // OperatorId: this.rechargeitem.OperatorId,
      // SubscriptionId: this.rechargeitem.SubscriptionId,
      Amount: this.navParams.get('Amount'),
      OperatorId: this.navParams.get('OperatorId'),
      SubscriptionId: this.navParams.get('SubscriptionId'),
      LocId: this.GetSelfCareAcByTenantID(ActiveTenantId).LocId
    }
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      cssClass : 'mymodal'
    };

    let passwordModal = this.modalCtrl.create(CheckPasswordPage, { 'RechargeModel': rechargeModel },myModalOptions);
    passwordModal.present();
  }
  GetDigiPartyandPartyMastID(ActiveTenantId) { //Fires from above method
    var DigiParties = this.storageService.GetDigiParty();
    var digiparty = DigiParties.find(function (obj) { return obj.TenantId === ActiveTenantId; });
    return digiparty;
  }
  
  GetSelfCareAcByTenantID(ActiveTenantId) {  //Fires from above method
    var SelfCareACs = this.storageService.GetSelfCareAc();
    var selfCareAC = SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcActId == "#SB"; });
    return selfCareAC;
  }

}
