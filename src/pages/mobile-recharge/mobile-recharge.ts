import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, Navbar, ViewController, AlertController } from 'ionic-angular';
import { RegisterService } from '../services/app-data.service';
import { StorageService } from '../services/Storage_Service';
import { OSResponse } from '../View Models/OSResponse';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, NgForm } from '@angular/forms';
import { FavouriteItem } from '../LocalStorageTables/FavouriteItem';
import { Favourites } from '../LocalStorageTables/Favourites';
import { Recharge } from '../LocalStorageTables/Recharge';
import { ToastrService } from 'ngx-toastr';
import { OperaterCircle } from '../View Models/OperaterCircle';
import { SingleState } from '../View Models/SingleState';
import { BasicPage } from '../ViewPlans_Tabs/ViewPlans_Tabs';
import { FavouritesPage } from '../favourites/favourites';
import { PrepaidConfirmPage } from '../prepaid-confirm/prepaid-confirm';
import { PagePage } from '../page/page';
import { UISercice } from '../services/UIService';
import { ErrorHandlingService } from '../services/ErrorHandlingService';
@Component({
  selector: 'page-mobile-recharge',
  templateUrl: 'mobile-recharge.html'
})
export class MobileRechargePage implements OnInit {
  title: string;
  @ViewChild(Navbar) navBar: Navbar;
  //showNavbar: boolean;
  //gender: string;
  formGroup: FormGroup;
  ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
  subscriptionIdInfo: string;
  callback: any;


  constructor(private errorHandlingService:ErrorHandlingService, private storageService: StorageService, private alertCtrl: AlertController, private uiService: UISercice, public viewCtrl: ViewController, private toastr: ToastrService, private registerService: RegisterService, public loadingController: LoadingController, public navParams: NavParams, public navCtrl: NavController, public formbuilder: FormBuilder) {
    this.formGroup = formbuilder.group({
      subscriptionId: ['', [Validators.required, Validators.minLength(10)]],
      // operatorId: ['', [Validators.required]],
      // circleId: ['', [Validators.required]],
      operatorId: [''],
      circleId: [''],
      amount: ['', [Validators.required]],
      nickname: ['', [Validators.required, Validators.minLength(2)]]
    });//builds the formgroup with the same formcontrolname.

    const subscriptionIdControl = this.formGroup.get('subscriptionId');
    subscriptionIdControl.valueChanges.map(() => { }).subscribe(value => this.setErrorMessage(subscriptionIdControl));
    const amountControl = this.formGroup.get('amount');
    amountControl.valueChanges.subscribe(value => this.setErrorMessage(amountControl));
    const nicknameControl = this.formGroup.get('nickname');
    nicknameControl.valueChanges.subscribe(value => this.setErrorMessage(nicknameControl));
    //call the particular method if value changes in the control.
  }
  ionViewDidLoad() {
    this.navCtrl.remove(2, 1);
    //this.navCtrl.pop();
    this.setBackButtonAction();
  }
  setErrorMessage(c: AbstractControl): void {
    let subscriptionId = this.formGroup.controls['subscriptionId'];
    let amount = this.formGroup.controls['amount'];
    let nickname = this.formGroup.controls['nickname'];
    let control = this.uiService.getControlName(c);
    document.getElementById('err_' + control).innerHTML='';//To not display the error message, if there is no error.
    if ((c.touched || c.dirty) && c.errors) {
      if (control === 'subscriptionId' && subscriptionId.value != null && (this.ParentId == "S3" || this.ParentId == "S5")) {
        // if(c.errors.minlength['requiredLength'].value==9){
        if (c.errors.minlength) {
          if (c.errors.minlength.requiredLength == 9) {
           // this.subscriptionIdMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key + '_9']).join(' ');
            //maps the error message from validationMessages array.
            document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key + '_9']).join(' '); 
            this.subscriptionIdInfo = '';
          }
          else if (c.errors.minlength.requiredLength == 10) {
            document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key + '_10']).join(' ');
            this.subscriptionIdInfo = '';
          }
          else if (c.errors.minlength.requiredLength == 11) {
            document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key + '_11']).join(' ');
            this.subscriptionIdInfo = '';
          }
          else if (c.errors.minlength.requiredLength == 12) {
            document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key + '_12']).join(' ');
            this.subscriptionIdInfo = '';
          }
        }
        else if (c.errors.maxlength) {
          if (c.errors.maxlength.actualLength > 9) {
            document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
            this.subscriptionIdInfo = '';
          }
        }
        else if (c.errors.pattern) {
          if (c.errors.pattern.requiredPattern == "^0[0-9]{10}$") {
            document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key + '_0']).join(' ');
            this.subscriptionIdInfo = '';
          }
          else if (c.errors.pattern.requiredPattern == "^1[0-9]{9}$") {
            document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key + '_1']).join(' ');
            this.subscriptionIdInfo = '';
          }
          else if (c.errors.pattern.requiredPattern == "^2[0-9]{11}$") {
            document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key + '_2']).join(' ');
            this.subscriptionIdInfo = '';
          }
          else if (c.errors.pattern.requiredPattern == "^3[0-9]{9}$") {
            document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key + '_3']).join(' ');
            this.subscriptionIdInfo = '';
          }
        }
        if (subscriptionId.value.length < 10) {
          this.isMobileNoEntered = false;
        } else {
          this.isMobileNoEntered = true;
        }
      }
      else if (control === 'subscriptionId' && subscriptionId.value != null) {
        document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        this.OnMobileNo(subscriptionId.value);
      }
      else if (control === 'nickname' && nickname.value != null) {
        document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        this.onNickName(nickname.value);
      }
      else if (control === 'amount') {
        document.getElementById('err_' + control).innerHTML = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
    }
    else {
      if (control === 'subscriptionId' && subscriptionId.value != null && (this.ParentId == "S3" || this.ParentId == "S5")) {
        this.subscriptionIdInfo = '';
      }
      else if (control === 'subscriptionId' && subscriptionId.value != null) {
        this.OnMobileNo(subscriptionId.value);
      }
      else if (control === 'nickname' && nickname.value != null) {
        this.onNickName(nickname.value);
      }
      // else if (control === 'amount' && amount.value != null && (this.ParentId == "S3" || this.ParentId == "S5")){    
      //   this.formGroup.patchValue({
      //     circleId: ""
      //   });      
      // }
    }
  }
  private validationMessages = {  //used in above method.
    subscriptionId_required: '*Enter the Field',
    subscriptionId_minlength_9: 'Field cannot be less than 9 character',
    subscriptionId_minlength_10: 'Field cannot be less than 10 character',
    subscriptionId_minlength_11: 'Field cannot be less than 11 character',
    subscriptionId_minlength_12: 'Field cannot be less than 12 character',
    subscriptionId_pattern_0: 'Please Enter a valid value for VC Number',
    subscriptionId_pattern_1: 'Please Enter a valid value for Subscriber Id',
    subscriptionId_pattern_2: 'Please Enter a valid value for Smart Card Number',
    subscriptionId_pattern_3: 'Please Enter a valid value for Customer Id',
    subscriptionId_maxlength: 'Field cannot be greater than required no. of character',
    amount_required: '*Enter the Field',
    nickname_required: '*Enter the Field',
    nickname_minlength: 'Field cannot be less than 2 character',
  };
  setBackButtonAction() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.push(FavouritesPage).then(() => {
        const index = this.viewCtrl.index;
        this.navCtrl.remove(index, 1); //this will remove page3 and page2
      });
    }
  }
  Id: string;
  ParentId: any;
  amountforRecharge: string;
  osid: string;
  favouriteNewOfDTH: string;
  postpaid: string;
  favourites: Favourites;
  rechargeitem: Recharge;
  prepaid: string;
  DTHNo: any;
  ShowLabel: boolean;
  ElectricityConsumerNo: any;
  OSResponseNew: OSResponse[];
  ShowEntryForm: boolean;
  isOperatorEnabled: boolean = false;
  isStateEnabled: boolean = false;
  isMobileNoEntered: boolean = false;
  isNickNameEntered: boolean = false;
  isAmountEntered: boolean = false;
  isButtonEnabled: boolean = false;
  ActiveBankName: string;

  ngOnInit() {
    this.ShowEntryForm = true;
    this.ActiveBankName = this.storageService.GetActiveBankName();
    this.Id = this.navParams.get('Id');
    this.ParentId = this.navParams.get('ParentId');
    //this.callback = this.navParams.get('ParentId');
    this.amountforRecharge = this.navParams.get('Amount');
    this.osid = this.navParams.get('OperatorId');
    this.isButtonEnabled = this.navParams.get('ButtonEnabled');
    if (this.isButtonEnabled == null) {
      this.isButtonEnabled = false;
    } else {
      this.isButtonEnabled = true;
      this.isOperatorEnabled = true;
      this.isStateEnabled = true;
      this.isNickNameEntered = true;
      this.isMobileNoEntered = true;
      this.isAmountEntered = true;
    }
    if (this.ParentId == "S3") {
      this.favouriteNewOfDTH = this.ParentId;
    }
    if (this.ParentId == "S1") {
      this.postpaid = null;
      var PId = this.Id;
      var ParentId = this.ParentId;
      var favourites: Favourites = this.storageService.GetFavourite();
      if (favourites != null) {
        var favouriteNew: Favourites = favourites.filter(function (obj) { return obj.ParentId === ParentId; })
      }
      if (favouriteNew != null && this.Id != null) {
        this.favourites = favouriteNew;
        this.rechargeitem = this.favourites.find(function (obj) { return obj.Id === PId; });
        this.prepaid = this.rechargeitem.SubscriptionId;
        this.title = "PREPAID RECHARGE";
        this.isOperatorEnabled = true;
        this.isStateEnabled = true;
        this.isNickNameEntered = true;
        this.isMobileNoEntered = true;
      } else {
        this.prepaid = "Enter";
        this.title = "PREPAID RECHARGE";
      }

    }
    else if (this.ParentId == "S2") {
      this.prepaid = null;
      var PId = this.Id;
      var ParentId = this.ParentId;
      var favourites: Favourites = this.storageService.GetFavourite();
      if (favourites != null) {
        var favouriteNew: Favourites = favourites.filter(function (obj) { return obj.ParentId === ParentId; })
      }
      if (favouriteNew != null && this.Id != null) {
        this.favourites = favouriteNew;
        this.rechargeitem = this.favourites.find(function (obj) { return obj.Id === PId; });
        this.postpaid = this.rechargeitem.SubscriptionId;
        this.title = "POSTPAID BILL";
        this.isOperatorEnabled = true;
        this.isStateEnabled = true;
        this.isNickNameEntered = true;
        this.isMobileNoEntered = true;
      } else {
        this.postpaid = "Enter";
        this.title = "POSTPAID BILL";
      }
    }
    else if (this.ParentId == "S3") {
      this.prepaid = null;
      this.postpaid = null;
      var PId = this.Id;
      var ParentId = this.ParentId;
      var favourites: Favourites = this.storageService.GetFavourite();
      if (favourites != null) {
        var favouriteNew: Favourites = favourites.filter(function (obj) { return obj.ParentId === ParentId; })
      }
      if (favouriteNew != null && this.Id != null) {
        this.favourites = favouriteNew;
        this.rechargeitem = this.favourites.find(function (obj) { return obj.Id === PId; });
        //this.favouriteitem = this.favourites.find(function (obj) { return obj.Id === PId; });
        this.DTHNo = this.rechargeitem.SubscriptionId;
        this.title = "DTH RECHARGE";
        this.ShowLabel = true;
        this.isStateEnabled = true;
        this.isOperatorEnabled = true;
        this.isNickNameEntered = true;
        this.isMobileNoEntered = true;
      } else {
        this.DTHNo = "Enter";
        this.ShowLabel = true;
        this.title = "DTH RECHARGE";
      }
    }
    else if (this.ParentId == "S5") {
      this.prepaid = null;
      this.postpaid = null;
      this.DTHNo = null;
      var PId = this.Id;
      var ParentId = this.ParentId;
      var favourites: Favourites = this.storageService.GetFavourite();
      if (favourites != null) {
        var favouriteNew: Favourites = favourites.filter(function (obj) { return obj.ParentId === ParentId; })
      }
      if (favouriteNew != null && this.Id != null) {
        this.favourites = favouriteNew;
        this.rechargeitem = this.favourites.find(function (obj) { return obj.Id === PId; });
        this.ElectricityConsumerNo = this.rechargeitem.SubscriptionId;
        this.title = "ELECTRICITY BILL";
        this.isStateEnabled = true;
        this.isOperatorEnabled = true;
        this.isNickNameEntered = true;
        this.isMobileNoEntered = true;
      } else {
        this.ElectricityConsumerNo = "Enter";
        this.title = "ELECTRICITY BILL";
      }
    }

    var oSRequest = {
      PerentId: this.ParentId,
      TenantId: this.ActiveTenantId,
    }
    var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
    let loading = this.loadingController.create({
      content: 'Loading the Operators..'
    });
    loading.present();
    this.registerService.GetOperators(oSRequest).subscribe((data: any) => {
      this.OSResponseNew = data;
      var OSResponseNew = data;
      this.OSResponseNew = OSResponseNew.filter(function (obj) { return obj.TenantId === ActiveTenantId; })
      var SetOfOSes = this.storageService.GetOSResponse();
      if (SetOfOSes == null) {
        this.storageService.SetOSResponse(JSON.stringify(this.OSResponseNew));
      }
      else {
        var ParentId = this.ParentId;
        var OSesBasedOnParentId = SetOfOSes.filter(function (obj) { return obj.ParentId === ParentId && obj.TenantId === ActiveTenantId; });
        if (OSesBasedOnParentId.length == 0) {
          SetOfOSes = SetOfOSes.concat(this.OSResponseNew);
          this.storageService.SetOSResponse(JSON.stringify(SetOfOSes));
        }
      }
      loading.dismiss();
    }, (error) => {
            if (error == 401) {
              this.registerService.SetRefreshTokenNeeded();
              this.registerService.GetToken(StorageService.GetItem('refreshToken')).subscribe((data: any) => {
                StorageService.SetItem('refreshToken',data.RefreshToken);
                  this.registerService.SetToken(data.AccessToken);
                  this.registerService.SetRefreshTokenNeeded();
                  this.registerService.GetOperators(oSRequest).subscribe((data: any) => {
                    console.clear();
                    this.OSResponseNew = data;
                    var OSResponseNew = data;
                    this.OSResponseNew = OSResponseNew.filter(function (obj) { return obj.TenantId === ActiveTenantId; })
                    var SetOfOSes = this.storageService.GetOSResponse();
                    if (SetOfOSes == null) {
                      this.storageService.SetOSResponse(JSON.stringify(this.OSResponseNew));
                    }
                    else {
                      var ParentId = this.ParentId;
                      var OSesBasedOnParentId = SetOfOSes.filter(function (obj) { return obj.ParentId === ParentId && obj.TenantId === ActiveTenantId; });
                      if (OSesBasedOnParentId.length == 0) {
                        SetOfOSes = SetOfOSes.concat(this.OSResponseNew);
                        this.storageService.SetOSResponse(JSON.stringify(SetOfOSes));
                      }
                    }
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
    this.rechargeitem = {
      Id: '',
      NickName: this.navParams.get('nname'),
      OperatorId: this.navParams.get('OperatorId'),
      ParentId: this.navParams.get('ParentId'),
      SubscriptionId: this.navParams.get('SubscriptionId'),
      Amount: this.navParams.get('Amount'),
      CircleId: this.navParams.get('CircleId')

    }
  }
  ionViewWillLeave() {
    //this.ParentId='S1';
      //  this.callback('param').then(()=>{
      //       //this.navCtrl.pop();
      //   });
  }

  showConfirm: boolean;
  label: string;
  operator: string;
  //favouriteNew: Favourites;

  OnNext() {
    let subscriptionId = this.formGroup.controls['subscriptionId'];
    let amount = this.formGroup.controls['amount'];
    let nickname = this.formGroup.controls['nickname'];
    let circleId = this.formGroup.controls['circleId'];
    let operatorId = this.formGroup.controls['operatorId'];
    this.operator = this.GetOperatorBasedOnID(operatorId.value);
    var ParentId = this.ParentId;

    if (this.Id == null) {

      this.rechargeitem = {
        Id: this.guid(),
        NickName: nickname.value,
        OperatorId: operatorId.value,
        ParentId: this.OSResponseNew[0].ParentId,
        SubscriptionId: subscriptionId.value,
        CircleId: circleId.value,
        Amount: amount.value
      }
      var favouriteitem = {
        Id: this.guid(),
        NickName: nickname.value,
        OperatorId: operatorId.value,
        ParentId: this.OSResponseNew[0].ParentId,
        SubscriptionId: subscriptionId.value,
        CircleId: circleId.value
      }
      var favourites: Favourites = this.storageService.GetFavourite();
      if (favourites != null) {
        var favouritesBasedOnParentID = favourites.filter(function (obj) { return obj.ParentId === ParentId; })
        if (favouritesBasedOnParentID.length == 0) {
          favourites.push(favouriteitem);
          this.storageService.SetFavourite(JSON.stringify(favourites));
        }

        else {
          var MobileNumber: string = favouriteitem.SubscriptionId;
          var NickName: string = favouriteitem.NickName;
          var duplicateFavourite: FavouriteItem = favouritesBasedOnParentID.find(function (obj) { return obj.SubscriptionId === MobileNumber || obj.NickName === NickName; });
          if (duplicateFavourite == null) {
            favourites.push(favouriteitem);

            this.storageService.SetFavourite(JSON.stringify(favourites));
          }
          else {
            var Id_old = duplicateFavourite.Id;
            favourites = favourites.filter(function (obj) {
              return obj.Id !== Id_old;
            });
            duplicateFavourite = {
              Id: Id_old,
              NickName: nickname.value,
              OperatorId: operatorId.value,
              ParentId: this.ParentId,
              SubscriptionId: subscriptionId.value,
              CircleId: circleId.value
            }
            favourites.push(duplicateFavourite);
            this.storageService.SetFavourite(JSON.stringify(favourites));
          }

        }
      }
      else {
        this.storageService.SetFavourite(JSON.stringify([favouriteitem]));
      }
      this.navCtrl.push(PrepaidConfirmPage, { 'ParentId': this.ParentId, 'Operator': this.operator, 'OperatorId': operatorId.value, 'SubscriptionId': subscriptionId.value, 'Amount': amount.value });
    }
    else {
      var MobileNumber: string = subscriptionId.value;
      var NickName: string = nickname.value;
      var Id = this.Id;
      var favourites: Favourites = this.storageService.GetFavourite();
      var favouritesBasedOnParentID = favourites.filter(function (obj) { return obj.ParentId === ParentId; })
      var duplicateFavourite: FavouriteItem = favouritesBasedOnParentID.find(function (obj) { return obj.SubscriptionId === MobileNumber || obj.NickName === NickName; });
      favourites = favourites.filter(function (obj) {
        return obj.Id !== Id;
      });
      //this.storageService.SetFavourite(JSON.stringify(xx));
      duplicateFavourite = {
        Id: this.Id,
        NickName: nickname.value,
        OperatorId: operatorId.value,
        ParentId: this.ParentId,
        SubscriptionId: subscriptionId.value,
        CircleId: circleId.value
      }
      favourites.push(duplicateFavourite);
      this.storageService.SetFavourite(JSON.stringify(favourites));
      this.navCtrl.push(PrepaidConfirmPage, { 'ParentId': this.ParentId, 'Operator': this.operator, 'OperatorId': operatorId.value, 'SubscriptionId': subscriptionId.value, 'Amount': amount.value });
    }
    //above code is for updating or adding row for FavouriteKey local storage.

  }
  GetOperatorBasedOnID(operatorId): string {
    var ParentId = this.ParentId;
    var ListOfOperatorsBasedOnParentID = this.storageService.GetOSResponse();
    var SingleOperatorDetailBasedOnId = ListOfOperatorsBasedOnParentID.find(function (obj) { return obj.Id === operatorId && obj.ParentId === ParentId; });

    this.label = SingleOperatorDetailBasedOnId.Hint;
    return SingleOperatorDetailBasedOnId.Operator;
  }

  GetLabelAndValidation_BasedOnID(operatorId): string {
    var ParentId = this.ParentId;
    var ListOfOperatorsBasedOnParentID = this.storageService.GetOSResponse();
    var SingleOperatorDetailBasedOnId = ListOfOperatorsBasedOnParentID.find(function (obj) { return obj.Id === operatorId && obj.ParentId === ParentId; });
    switch (SingleOperatorDetailBasedOnId.Operator) {
      case "DISH TV":
        // this.formGroup.patchValue({ subscriptionId: '' });
        // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(11), Validators.maxLength(11), Validators.pattern("0[0-9]{10}")]);
        // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
        this.formGroup = new FormGroup({
          subscriptionId: new FormControl(this.rechargeitem.SubscriptionId, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("0[0-9]{10}")]),
          operatorId: new FormControl(operatorId),
          circleId: new FormControl('7'),
          amount: new FormControl(this.formGroup.controls['amount'].value, Validators.required),
          nickname: new FormControl(this.formGroup.controls['nickname'].value, [Validators.required, Validators.minLength(2)]),
        });
        const subscriptionIdControl1 = this.formGroup.get('subscriptionId');
        subscriptionIdControl1.valueChanges.subscribe(value => this.setErrorMessage(subscriptionIdControl1));
        this.subscriptionIdInfo = "Your Viewing Card(VC) number starts with 0 and is 11 digits long.";
        break;
      case "TATA SKY":
        // this.formGroup.patchValue({ subscriptionId: '' });
        // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(10), Validators.maxLength(10), Validators.pattern("1[0-9]{9}")]);
        // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
        this.formGroup = new FormGroup({
          subscriptionId: new FormControl(this.rechargeitem.SubscriptionId, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("1[0-9]{9}")]),
          operatorId: new FormControl(operatorId),
          circleId: new FormControl('7'),
          amount: new FormControl(this.formGroup.controls['amount'].value, Validators.required),
          nickname: new FormControl(this.formGroup.controls['nickname'].value, [Validators.required, Validators.minLength(2)]),
        });
        const subscriptionIdControl2 = this.formGroup.get('subscriptionId');
        subscriptionIdControl2.valueChanges.subscribe(value => this.setErrorMessage(subscriptionIdControl2));
        this.subscriptionIdInfo = "Subscriber ID starts with 1 and is 10 digits long.";
        break;
      case "SUN TV":
        // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(10), Validators.maxLength(11)]);
        // this.formGroup.patchValue({ subscriptionId: '' });
        // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
        this.formGroup = new FormGroup({
          // subscriptionId: new FormControl(this.formGroup.controls['subscriptionId'].value, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
          subscriptionId: new FormControl(this.rechargeitem.SubscriptionId, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
          operatorId: new FormControl(operatorId),
          circleId: new FormControl('7'),
          amount: new FormControl(this.formGroup.controls['amount'].value, Validators.required),
          nickname: new FormControl(this.formGroup.controls['nickname'].value, [Validators.required, Validators.minLength(2)]),
        });
        const subscriptionIdControl3 = this.formGroup.get('subscriptionId');
        subscriptionIdControl3.valueChanges.subscribe(value => this.setErrorMessage(subscriptionIdControl3));
        this.subscriptionIdInfo = "";
        break;
      case "VIDEOCON D2H":
        // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(9)]);
        // this.formGroup.patchValue({ subscriptionId: '' });
        // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
        this.formGroup = new FormGroup({
          // subscriptionId: new FormControl(this.formGroup.controls['subscriptionId'].value, [Validators.required, Validators.minLength(9)]),
          subscriptionId: new FormControl(this.rechargeitem.SubscriptionId, [Validators.required, Validators.minLength(9)]),
          operatorId: new FormControl(operatorId),
          circleId: new FormControl('7'),
          amount: new FormControl(this.formGroup.controls['amount'].value, Validators.required),
          nickname: new FormControl(this.formGroup.controls['nickname'].value, [Validators.required, Validators.minLength(2)]),
        });
        const subscriptionIdControl4 = this.formGroup.get('subscriptionId');
        subscriptionIdControl4.valueChanges.subscribe(value => this.setErrorMessage(subscriptionIdControl4));
        this.subscriptionIdInfo = "To get it, sms 'ID' to 566777 from your registered mobile no.";
        break;
      case "RELIANCE BIG TV":
        // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(12), Validators.maxLength(12), Validators.pattern("2[0-9]{11}")]);
        // this.formGroup.patchValue({ subscriptionId: '' });
        // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
        this.formGroup = new FormGroup({
          // subscriptionId: new FormControl(this.formGroup.controls['subscriptionId'].value, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern("2[0-9]{11}")]),
          subscriptionId: new FormControl(this.rechargeitem.SubscriptionId, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern("2[0-9]{11}")]),
          operatorId: new FormControl(operatorId),
          circleId: new FormControl('7'),
          amount: new FormControl(this.formGroup.controls['amount'].value, Validators.required),
          nickname: new FormControl(this.formGroup.controls['nickname'].value, [Validators.required, Validators.minLength(2)]),
        });
        const subscriptionIdControl5 = this.formGroup.get('subscriptionId');
        subscriptionIdControl5.valueChanges.subscribe(value => this.setErrorMessage(subscriptionIdControl5));
        this.subscriptionIdInfo = "Smart card number starts with 2 and is 12 digits long. To locate it, look at the rear of the card inserted in your set top box.";
        break;
      case "AIRTEL DIGITAL":
        // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(10), Validators.maxLength(10),Validators.pattern("3[0-9]{9}")]);
        // this.formGroup.patchValue({ subscriptionId: '' });
        // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
        this.formGroup = new FormGroup({
          // subscriptionId: new FormControl(this.formGroup.controls['subscriptionId'].value, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("3[0-9]{9}")]),
          subscriptionId: new FormControl(this.rechargeitem.SubscriptionId, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("3[0-9]{9}")]),
          operatorId: new FormControl(operatorId),
          circleId: new FormControl('7'),
          amount: new FormControl(this.formGroup.controls['amount'].value, Validators.required),
          nickname: new FormControl(this.formGroup.controls['nickname'].value, [Validators.required, Validators.minLength(2)]),
        });
        const subscriptionIdControl6 = this.formGroup.get('subscriptionId');
        subscriptionIdControl6.valueChanges.subscribe(value => this.setErrorMessage(subscriptionIdControl6));
        this.subscriptionIdInfo = "Customer ID starts with 3 and is 10 digits long. To locate it, press the MENU button on remote.";
        break;
      default:
        break;
    }
    this.label = SingleOperatorDetailBasedOnId.Hint;
    return SingleOperatorDetailBasedOnId.Operator;
  }
  StatesOfIndia = [
    { Id: "1", Name: "Delhi/NCR" },
    { Id: "2", Name: "Mumbai" },
    { Id: "3", Name: "Kolkata" },
    { Id: "4", Name: "Maharashtra" },
    { Id: "5", Name: "Andhra Pradesh" },
    { Id: "6", Name: "Tamil Nadu" },
    { Id: "7", Name: "Karnataka" },
    { Id: "8", Name: "Gujarat" },
    { Id: "9", Name: "Uttar Pradesh (E)" },
    { Id: "10", Name: "Madhya Pradesh" },
    { Id: "11", Name: "Uttar Pradesh (W)" },
    { Id: "12", Name: "West Bengal" },
    { Id: "13", Name: "Rajasthan" },
    { Id: "14", Name: "Kerala" },
    { Id: "15", Name: "Punjab " },
    { Id: "16", Name: "Haryana" },
    { Id: "17", Name: "Bihar & Jharkhand" },
    { Id: "18", Name: "Orissa" },
    { Id: "19", Name: "Assam" },
    { Id: "20", Name: "North East" },
    { Id: "21", Name: "Himachal Pradesh" },
    { Id: "22", Name: "Jammu & Kashmir" },
    { Id: "23", Name: "Chennai" }
  ];

  showerrortext: boolean;
  operatorCircle: OperaterCircle;
  singleosrespone: OSResponse;
  oid: string;
  statename: string;
  sid: string;
  singleState: SingleState;
  
  OnMobileNo(id) {  //Fires for keyup event of MobileNo field
    if (id.length < 10) {  //checks for mobileno length
      this.isMobileNoEntered = false;
      return this.showerrortext = true;
    }
    else if(id.length==10||id.length==11){
      let loading = this.loadingController.create({
        content: 'Loading the Operator and Circle..'
      });
      loading.present();
      var firstfive = id.substring(0, 5);
      var operaterCircleQuery = {
        ParentId: this.ParentId,
        TenantId: this.storageService.GetUser().ActiveTenantId,
        Mobile: firstfive
      }

      this.registerService.GetOperaterCircle(operaterCircleQuery).subscribe((data: any) => {
        this.operatorCircle = data;
        var operatorCircle = data;
        if (data.ResponseMessage == null) {
          //var OsId = this.operaterCircle.operator;
          var OsId = operatorCircle.operator;
          //this.operatorname = this.operaterCircle.operator;
          const OSResponseNew = this.OSResponseNew;
          this.singleosrespone = OSResponseNew.find(function (obj) { return obj.Id === OsId; });
          //To find the OSResponse with particular OSId
          this.oid = this.singleosrespone.Id;
          this.rechargeitem.OperatorId = this.oid;
          //setTimeout(()=>{ this.rechargeitem.OperatorId = this.oid; }, 8000);
          var circle = this.operatorCircle.circle;
          this.statename = this.operatorCircle.circle;
          this.singleState = this.StatesOfIndia.find(function (obj) { return obj.Name === circle })
          //To get the State with particular circle
          this.sid = this.singleState.Id;
          this.rechargeitem.CircleId = this.sid;
          this.isStateEnabled = true;
          this.isOperatorEnabled = true;
          this.isMobileNoEntered = true;
        } else {
          this.isStateEnabled = false;
          this.isOperatorEnabled = false;
          this.isMobileNoEntered = true;
        }
        loading.dismiss();
      }, (error) => {
            if (error ==401) {
              this.registerService.SetRefreshTokenNeeded();
              this.registerService.GetToken(StorageService.GetItem('refreshToken')).subscribe((data: any) => {
                  StorageService.SetItem('refreshToken',data.RefreshToken);
                  this.registerService.SetToken(data.AccessToken);
                  this.registerService.SetRefreshTokenNeeded();
                  this.registerService.GetOperaterCircle(operaterCircleQuery).subscribe((data: any) => {
                    console.clear();
                    this.operatorCircle = data;
                    var operatorCircle = data;
                    if (data.ResponseMessage == null) {
                      var OsId = operatorCircle.operator;
                      const OSResponseNew = this.OSResponseNew;
                      this.singleosrespone = OSResponseNew.find(function (obj) { return obj.Id === OsId; });
                      this.oid = this.singleosrespone.Id;
                      this.rechargeitem.OperatorId = this.oid;
                      var circle = this.operatorCircle.circle;
                      this.statename = this.operatorCircle.circle;
                      this.singleState = this.StatesOfIndia.find(function (obj) { return obj.Name === circle })
                      this.sid = this.singleState.Id;
                      this.rechargeitem.CircleId = this.sid;
                      this.isStateEnabled = true;
                      this.isOperatorEnabled = true;
                      this.isMobileNoEntered = true;
                    } else {
                      this.isStateEnabled = false;
                      this.isOperatorEnabled = false;
                      this.isMobileNoEntered = true;
                    }
                      loading.dismiss(); 
                  });
              });
          }
          else if (typeof error === 'string') {
            this.toastr.error(error, 'Error!');
            var alert = this.alertCtrl.create({
              title: "Error Message",
              subTitle: error,
              buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
          }
          else {
            const controls = this.formGroup.controls;
            const ErrorProperties = error;
            this.errorHandlingService.ErrorHandler(controls,ErrorProperties);
            loading.dismiss();
          }
      });

    }
    else{
      this.toastr.error('Invalid Mobile Number', 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: 'Invalid Mobile Number',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  GetDigiPartyandPartyMastID(ActiveTenantId) {
    const DigiParties = this.storageService.GetDigiParty();
    const digiparty = DigiParties.find(function (obj) { return obj.TenantId === ActiveTenantId; });
    return digiparty;
  }

  GetSelfCareAcByTenantID(ActiveTenantId) {
    const SelfCareACs = this.storageService.GetSelfCareAc();
    const selfCareAC = SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcActId == "#SB"; });
    return selfCareAC;
  }
  OperatorChanged(event) {
    if (event != null) {
      this.isOperatorEnabled = true;
    }
    //this.operatorname=this.GetOperatorBasedOnID(event);
  }
  AvoidSpace(event) {
    var k = event ? event.which : window.event;
    // var k = event.keyCode;
    if (k.keyCode == 32) return false;
  }

  ObjChanged(event) {
    this.ShowLabel = false;
    this.isOperatorEnabled = true;
    if (event != null) {
      this.GetLabelAndValidation_BasedOnID(event);
    }
  }
  OnGoBack() {
    this.navCtrl.setRoot(PagePage);
  }
  StateChanged(event) {
    if (event != null) {
      this.isStateEnabled = true;
    }
    switch (event) {
      case "1":
        this.statename = "Delhi/NCR";
        break;
      case "2":
        this.statename = "Mumbai";
        break;
      case "3":
        this.statename = "Kolkata";
        break;
      case "4":
        this.statename = "Maharashtra";
        break;
      case "5":
        this.statename = "Andhra Pradesh";
        break;
      case "6":
        this.statename = "Tamil Nadu";
        break;
      case "7":
        this.statename = "Karnataka";
        break;
      case "8":
        this.statename = "Gujarat";
        break;
      case "9":
        this.statename = "Uttar Pradesh (E)";
        break;
      case "10":
        this.statename = "Madhya Pradesh";
        break;
      case "11":
        this.statename = "Uttar Pradesh (W)";
        break;
      case "12":
        this.statename = "West Bengal";
        break;
      case "13":
        this.statename = "Rajasthan";
        break;
      case "14":
        this.statename = "Kerala";
        break;
      case "15":
        this.statename = "Punjab";
        break;
      case "16":
        this.statename = "Haryana";
        break;
      case "17":
        this.statename = "Bihar & Jharkhand";
        break;
      case "18":
        this.statename = "Orissa";
        break;
      case "19":
        this.statename = "Assam";
        break;
      case "20":
        this.statename = "North East";
        break;
      case "21":
        this.statename = "Himachal Pradesh";
        break;
      case "22":
        this.statename = "Jammu & Kashmir";
        break;
      default:
        this.statename = "Chennai";
    }
  }
  OnSubscriberID(value) {
    if (value.length < 9) {
      this.isMobileNoEntered = false;
    } else {
      this.isMobileNoEntered = true;
      this.isOperatorEnabled = true;
      this.isStateEnabled = true;
      this.formGroup.patchValue({
        circleId: "7"
      });
    }
  }
  onAmount(event) {
    if (this.formGroup.controls['amount'].value.length < 1) {
      this.isAmountEntered = false;
      this.isButtonEnabled = false;
      // this.isStateEnabled=false;
      // this.isMobileNoEntered=false;
    } else {
      this.isAmountEntered = true;
      this.isButtonEnabled = true;
      // this.isStateEnabled=true;
      // this.isMobileNoEntered=true;
    }
  }
  onNickName(event) {
    if (this.formGroup.controls['nickname'].value.length < 2) {
      this.isNickNameEntered = false;
    } else {
      this.isNickNameEntered = true;
    }
  }
  OnViewPlans() {
    let subscriptionId = this.formGroup.controls['subscriptionId'];
    let nickname = this.formGroup.controls['nickname'];
    let circleId = this.formGroup.controls['circleId'];
    let operatorId = this.formGroup.controls['operatorId'];
    this.showConfirm = false;
    //this.navCtrl.push(BasicPage, { 'OperatorId':operatorId,'ParentId':this.ParentId});
    // this.navCtrl.push(BasicPage, { 'OperatorId': operatorId, 'CircleId': circleId, 'ParentId': this.ParentId, 'SubscriptionId': subscriptionId, 'nname': nname });
    this.navCtrl.push(BasicPage, { 'OperatorId': operatorId.value, 'CircleId': circleId.value, 'ParentId': this.ParentId, 'SubscriptionId': subscriptionId.value, 'nname': nickname.value });

  }


  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}
