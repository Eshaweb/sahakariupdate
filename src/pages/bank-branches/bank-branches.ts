import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { StorageService } from '../services/Storage_Service';
import { RegisterService } from '../services/app-data.service';
import { ToastrService } from 'ngx-toastr';
import { BankBranch } from '../View Models/BankBranch';

/**
 * Generated class for the BankBranchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bank-branches',
  templateUrl: 'bank-branches.html',
})
export class BankBranchesPage implements OnInit {
  bankBranch: BankBranch;
  constructor(private storageService: StorageService, private alertCtrl: AlertController, private toastr: ToastrService, public loadingController: LoadingController, private registerService: RegisterService, public navCtrl: NavController, public navParams: NavParams) {

  }
  ngOnInit() {
    let loading = this.loadingController.create({
      content: 'Loading the Branches of the Bank..'
    });
    loading.present();
    var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
    this.registerService.GetLocations(ActiveTenantId).subscribe((data: any) => {  //To show the branches of the bank in which Account holder has his account
      this.bankBranch = data;
      //alert(data.Balance);
      loading.dismiss();
    }, (error) => {
      if (error == 401) {
        this.registerService.SetRefreshTokenNeeded();
        this.registerService.GetToken(StorageService.GetItem('refreshToken')).subscribe((data: any) => {
          StorageService.SetItem('refreshToken',data.RefreshToken);
          this.registerService.SetToken(data.AccessToken);
          this.registerService.SetRefreshTokenNeeded();
          this.registerService.GetLocations(ActiveTenantId).subscribe((data: any) => {
            console.clear();
            this.bankBranch = data;
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
}

ionViewDidLoad() {
  console.log('ionViewDidLoad BankBranchesPage');
}

}
