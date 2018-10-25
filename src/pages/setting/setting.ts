import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { PagePage } from '../page/page';
import { StorageService } from '../services/Storage_Service';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  isKannada: boolean;
  isEnglish: boolean;

  constructor(private storageService: StorageService, private events: Events, private translate: TranslateService, public navCtrl: NavController) {
    if (this.storageService.GetLanguage() == 'ka') {
      this.isKannada = true;
      this.isEnglish = false;
      //StorageService.SetItem('Language','ka');
    } else {
      this.isKannada = false;
      this.isEnglish = true;
      //StorageService.SetItem('Language','en');
    }

  }
  changeLanguage(language: string) {  //Fires, when we select the Language radio button
    this.translate.use(language);
    this.storageService.SetLanguage(language);
    this.navCtrl.setRoot(PagePage);
    this.events.publish('REFRESH_DIGIPARTYNAME');
  }
}
