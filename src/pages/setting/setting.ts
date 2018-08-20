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

  constructor(private events: Events, private translate: TranslateService, public navCtrl: NavController) {
  if(StorageService.GetItem("Language")=='ka'){
    this.isKannada=true;
  }else{
    this.isKannada=false;
  }
  if(StorageService.GetItem("Language")=='en'){
    this.isEnglish=true;
  }else{
    this.isEnglish=false;
  }
  }
  changeLanguage(language:string)
  {
    this.translate.use(language);
    StorageService.SetItem("Language",language);
    this.navCtrl.setRoot(PagePage);
    this.events.publish('REFRESH_DIGIPARTYNAME');
  }
}
