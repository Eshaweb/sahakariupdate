import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, Navbar } from 'ionic-angular';
import { MobileRechargePage } from '../mobile-recharge/mobile-recharge';
import { StorageService } from '../services/Storage_Service';
import { Favourites } from '../LocalStorageTables/Favourites';
import { RechargePage } from '../recharge/recharge';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage implements OnInit {
  title: string;
  @ViewChild(Navbar) navBar: Navbar;

  constructor(private storageService:StorageService, public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad() {
    this.setBackButtonAction();
  }

  setBackButtonAction() {  //Fires for Backbutton click
    this.navBar.backButtonClick = () => {
      this.navCtrl.push(RechargePage);
    }
  }
  ActiveBankName: string;
  ParentId: string;
  favourites: Favourites;

  ngOnInit() {
    this.ParentId = this.navParams.get('ParentId');
    this.ActiveBankName = this.storageService.GetActiveBankName();
    var ParentId=this.ParentId;
    switch (this.ParentId) { 
      case "S1":
        this.title = "Recharge";
        break;
      case "S2":
        this.title = "Postpaid Bill";
        break;
      case "S3":
        this.title = "DTH Recharge";
        break;
      case "S4":
        break;
      case "S5":
        this.title = "Electricity Bill";
        break;
      case "S6":
        break;
      default:
    }
    var favourites: Favourites = this.storageService.GetFavourite();
    if(favourites!=null){
      this.favourites = favourites.filter(function (obj) {return obj.ParentId===ParentId;});
      //To filter the localstorage Favourite table record, based on ParentId 
    }
  }
  OnNewRecharge() {  //Fires, if we click on New Recharge
    this.navCtrl.push(MobileRechargePage, { 'ParentId': this.ParentId });
  }

  OnNickName(order) {  //Fires, if we click on NickName
      this.navCtrl.push(MobileRechargePage, { 'OperatorId': order.OperatorId, 'ParentId': order.ParentId, 'Id': order.Id, 'nname': order.NickName, 'SubscriptionId': order.SubscriptionId, 'CircleId': order.CircleId });
  }

  OnDelete(order) {  //Fires, if we click on Delete
    var favourites: Favourites = this.storageService.GetFavourite();
    var PId = order.Id;
    favourites = favourites.filter(function (obj) {
      return obj.Id !== PId;
    });
    this.favourites = this.favourites.filter(function (obj) {
      return obj.Id !== PId;
    }); //Delete the particular record with that Id
    this.storageService.SetFavourite(JSON.stringify(favourites));
    //Saves the new Favourites table in localstorage.
  }
}
