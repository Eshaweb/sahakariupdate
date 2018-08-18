import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MobileRechargePage } from '../pages/mobile-recharge/mobile-recharge';
import { BankingPage } from '../pages/banking/banking';
import { SettingPage } from '../pages/setting/setting';
import { ChangeBankPage } from '../pages/change-bank/change-bank';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StorageService } from '../pages/services/Storage_Service';
import { RegisterService } from '../pages/services/app-data.service';
import { PagePage } from '../pages/page/page';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { BankBranchesPage } from '../pages/bank-branches/bank-branches';
import {TranslateService} from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  digipartyname: string;
  ActiveBankName: string;
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any;
  showMenuOptions: boolean;
  // constructor(platform: Platform, statusBar: StatusBar, private reg:RegisterPage, log:LoginPage, splashScreen: SplashScreen) {
  constructor(private translate: TranslateService,private storageService:StorageService, private event: Events, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private regService: RegisterService) {
    this.event.subscribe('UNAUTHORIZED', () => {
      this.navCtrl.push(LoginPage);
    });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      

      //localStorage.clear();
      this.event.subscribe('REFRESH_DIGIPARTYNAME', () => {  
        this.ActiveBankName = this.storageService.GetActiveBankName();
          this.digipartyname = this.storageService.GetDigipartyBasedOnActiveTenantId().Name;
          this.showMenuOptions=true;
          translate.setDefaultLang('ka');
        });  //Above is for refreshing digipartyname
      if (this.storageService.GetUser() == null) {  //Checks whether the User table in localstorage is null or not
        this.rootPage = RegisterPage;
      }
        else{
          this.rootPage=LoginPage;
          this.showMenuOptions=false;   //For loginPage, we need to hide Menu options using this property.
        }
    });
  }
  changeLanguage(language:string)
  {
    this.translate.use(language);
  }
  goToPage(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(PagePage);
  }
  goToMobileRecharge(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(MobileRechargePage);
  }
  goToBanking(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(BankingPage);
  }
  goToSetting(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(SettingPage);
  }
  goToChangeBank(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(ChangeBankPage);
  }
  goToMyProfile(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(MyProfilePage);
  }
  goToBankBranches(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(BankBranchesPage);
  }
}
