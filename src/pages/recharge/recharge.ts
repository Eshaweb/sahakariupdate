import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Navbar } from 'ionic-angular';
import { OS } from '../View Models/OS';
import { FavouritesPage } from '../favourites/favourites';
import { StorageService } from '../services/Storage_Service';
import { RechargeReportPage } from '../recharge-report/recharge-report';
import { PagePage } from '../page/page';
@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html'
})
export class RechargePage implements OnInit {
  @ViewChild(Navbar) navBar: Navbar;

  ActiveBankName: string;
  NewCategories: OS;
  constructor(private storageService: StorageService, public navCtrl: NavController) {
  }
  ionViewDidLoad() {
    this.setBackButtonAction()
  }
  setBackButtonAction() {  //Fires for Backbutton click
    this.navBar.backButtonClick = () => {
      this.navCtrl.setRoot(PagePage);
    }
  }
  ngOnInit() {
    var categories = this.storageService.GetOS();
    this.NewCategories = categories.filter(function (obj) { return obj.Id === "S1" || obj.Id === "S2" || obj.Id === "S3" || obj.Id === "S5"; });
    //To filter based on Id
    this.ActiveBankName = this.storageService.GetActiveBankName();
  }
  // OnOperatorSelection(ParentId) { //Fires, when we click on categories
  //   this.navCtrl.push(FavouritesPage, { 'ParentId': ParentId });
  // }


  OnPrepaid(){
    this.navCtrl.push(FavouritesPage, { 'ParentId': 'S1' });
  }
  OnPostpaid(){
    this.navCtrl.push(FavouritesPage, { 'ParentId': 'S2' });
  }
  OnDTH(){
    this.navCtrl.push(FavouritesPage, { 'ParentId': 'S3' });
  }
  OnElectricity(){
    this.navCtrl.push(FavouritesPage, { 'ParentId': 'S5' });
  }
  
  OnReports() {  //Fires, when we click on reports
    this.navCtrl.push(RechargeReportPage);
  }
}
