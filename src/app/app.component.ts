import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav, Events, AlertController } from 'ionic-angular';
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
import { TranslateService } from '@ngx-translate/core';
import { GetOtpPage } from '../pages/get-otp/get-otp';
import { ContactUsPage } from '../pages/contact-us/contact-us';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  digipartyname: string;
  ActiveBankName: string;
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any;
  showMenuOptions: boolean;
  isLogOut: boolean;
  alertShown: boolean=false;
  // constructor(platform: Platform, statusBar: StatusBar, private reg:RegisterPage, log:LoginPage, splashScreen: SplashScreen) {
  constructor(private alertCtrl: AlertController, private translate: TranslateService, private storageService: StorageService, private event: Events,public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private regService: RegisterService) {
    this.event.subscribe('UNAUTHORIZED', () => {
      this.navCtrl.push(LoginPage);
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        if (this.alertShown==false) {
          this.presentConfirm();  
        }
      }, 0);
      this.event.subscribe('REFRESH_isLogOutSetFalse', () => {
        this.isLogOut =false;
        this.regService.isLogOut=false;
      });
      this.event.subscribe('REFRESH_isLogOutSetTrue', () => {
        this.isLogOut =true;
        this.regService.isLogOut=true;
      });
      //localStorage.clear();
      this.event.subscribe('REFRESH_DIGIPARTYNAME', () => {
        this.ActiveBankName = this.storageService.GetActiveBankName();
        this.digipartyname = this.storageService.GetDigipartyBasedOnActiveTenantId().Name;
        this.showMenuOptions = true;
        //translate.setDefaultLang('en');
        if(StorageService.GetItem('Language')=='ka'){
          translate.setDefaultLang('ka');
        }
        else if(StorageService.GetItem('Language')=='en'||StorageService.GetItem('Language')==undefined){
          translate.setDefaultLang('en');
        }
        if (this.storageService.GetSelfCareAc() == null || this.regService.isLogOut == false) {
          this.isLogOut = true;
        }
        else if (this.regService.isLogOut == true) {
          this.isLogOut = false;
        }
      });  //Above is for refreshing digipartyname
      if (this.storageService.GetUser() == null) {  //Checks whether the User table in localstorage is null or not
        this.rootPage = GetOtpPage;
      }
      else if (StorageService.GetItem('refreshToken') == null) {
        // else if(this.storageService.GetSelfCareAc()==null){
        this.rootPage = LoginPage;
        this.showMenuOptions = false;   //For loginPage, we need to hide Menu options using this property.
      }
      else {
        this.rootPage = PagePage;
      }
    });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.alertShown=false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
     alert.present().then(()=>{
      this.alertShown=true;
    });
  }
  // changeLanguage(language: string) {
  //   this.translate.use(language);
  // }
  onLogout() {
    var alert = this.alertCtrl.create({
      title: "Alert",
      subTitle: 'Are you sure to LogOut?',
      buttons: [
        {
          text: 'Cancel',
          // handler: () => {
          //   console.log('Disagree clicked');
          // }
        },
        {
          text: 'OK',
          handler: () => {
            this.onOK();
            this.event.publish('REFRESH_isLogOutSetTrueinPage');
          }
        }
      ]
    });
    alert.present();
  }
  onOK() {
    this.storageService.RemoveRecordsForLogout();
    this.isLogOut = true;
    this.regService.isLogOut = true;
    //StorageService.RemoveItem('refreshToken');
  }
  onLogin() {
    this.navCtrl.push(LoginPage);
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
  goToContactUs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactUsPage);
  }
}
