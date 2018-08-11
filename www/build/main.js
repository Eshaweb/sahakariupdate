webpackJsonp([0],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { OS } from '../LocalStorageTables/OS';
var StorageService = /** @class */ (function () {
    function StorageService(constant) {
        this.constant = constant;
    }
    StorageService_1 = StorageService;
    // static Tenants: Tenant;
    StorageService.SetAuthorizationData = function (auth) {
        localStorage.setItem('userToken', JSON.stringify(auth));
    };
    StorageService.GetValueFromLocalStorage = function () {
        var tokendata = JSON.parse(localStorage.getItem('userToken'));
        return tokendata == null ? null : tokendata;
    };
    StorageService.SetItem = function (param1, param2) {
        localStorage.setItem(param1, param2);
    };
    StorageService.GetItem = function (param) {
        return localStorage.getItem(param);
    };
    StorageService.RemoveItem = function (param) {
        localStorage.removeItem(param);
    };
    StorageService.prototype.GetActiveBankName = function () {
        var ActiveTenantId = this.GetUser().ActiveTenantId;
        var Tenants = this.GetTenant();
        //let x=Object.assign({},this.Tenants);
        this.Tenant = Tenants.find(function (obj) { return obj.Id === ActiveTenantId; });
        return this.Tenant.Name;
    };
    StorageService.prototype.GetDigipartyBasedOnActiveTenantId = function () {
        var ActiveTenantId = this.GetUser().ActiveTenantId;
        var DigiParties = this.GetDigiParty();
        return DigiParties.find(function (obj) { return obj.TenantId === ActiveTenantId; });
    };
    // static GetOSBasedOnParentID(param): OS {
    //     var GetOSBasedOnParentID=localStorage.getItem("OS("+param+")");
    //     return this.SelfCareAcsBasedOnTenantID = SelfCareACs.filter(function (obj) { return obj.TenantId === ActiveTenantId; })
    // }
    StorageService.prototype.GetSelfCareAcsBasedOnTenantID = function () {
        var ActiveTenantId = this.GetUser().ActiveTenantId;
        var SelfCareACs = this.GetSelfCareAc();
        return SelfCareACs.filter(function (obj) { return obj.TenantId === ActiveTenantId; });
    };
    StorageService.prototype.GetUser = function () {
        return JSON.parse(localStorage.getItem("User"));
    };
    // static GetUser(): User {
    //     return JSON.parse(localStorage.getItem("User")) as User;
    // }
    StorageService.prototype.GetTenant = function () {
        return JSON.parse(localStorage.getItem("Tenant"));
    };
    // static GetDigiParty(): DigiParty {
    //     return JSON.parse(localStorage.getItem("DigiParty")) as DigiParty;
    // }
    StorageService.prototype.GetDigiParty = function () {
        return JSON.parse(localStorage.getItem("DigiParty"));
    };
    StorageService.prototype.GetOS = function () {
        return JSON.parse(localStorage.getItem("OS"));
    };
    StorageService.prototype.GetSelfCareAc = function () {
        return JSON.parse(localStorage.getItem("SelfCareAc"));
    };
    StorageService.prototype.GetOSResponse = function () {
        return JSON.parse(localStorage.getItem("OSResponse"));
    };
    // GetFavourite(): FavouriteItem {
    //     return JSON.parse(localStorage.getItem("Favourite")) as FavouriteItem;
    // }
    StorageService.prototype.GetFavourite = function () {
        return JSON.parse(localStorage.getItem("Favourite"));
    };
    StorageService.prototype.SetUser = function (param) {
        localStorage.setItem("User", param);
    };
    StorageService.prototype.SetTenant = function (param) {
        localStorage.setItem("Tenant", param);
    };
    StorageService.prototype.SetDigiParty = function (param) {
        localStorage.setItem("DigiParty", param);
    };
    StorageService.prototype.SetOS = function (param) {
        localStorage.setItem("OS", param);
    };
    StorageService.prototype.SetSelfCareAc = function (param) {
        localStorage.setItem("SelfCareAc", param);
    };
    StorageService.prototype.SetOSResponse = function (param) {
        localStorage.setItem("OSResponse", param);
    };
    StorageService.prototype.SetFavourite = function (param) {
        localStorage.setItem("Favourite", param);
    };
    StorageService.prototype.RemoveRecordsForLogout = function () {
        localStorage.removeItem("OS");
        localStorage.removeItem("Tenant");
        localStorage.removeItem("DigiParty");
        StorageService_1.RemoveItem("SelfCareAc");
        //localStorage.removeItem(this.constant.favouriteBasedOnParentId.Favourite_S1);
        // StorageService.RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S2);
        // StorageService.RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S3);
        // StorageService.RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S4);
        // StorageService.RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S5);
        // StorageService.RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S6);
        // StorageService.RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S7);
    };
    StorageService = StorageService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* ConstantService */]])
    ], StorageService);
    return StorageService;
    var StorageService_1;
}());

//# sourceMappingURL=Storage_Service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Constants__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recharge_recharge__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavouritesPage = /** @class */ (function () {
    function FavouritesPage(storageService, loadingController, constant, navCtrl, navParams) {
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.constant = constant;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavouritesPage.prototype.ionViewDidLoad = function () {
        this.setBackButtonAction();
    };
    FavouritesPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recharge_recharge__["a" /* RechargePage */]);
        };
    };
    FavouritesPage.prototype.ngOnInit = function () {
        this.ParentId = this.navParams.get('ParentId');
        this.ActiveBankName = this.storageService.GetActiveBankName();
        var ParentId = this.ParentId;
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
        var favourites = this.storageService.GetFavourite();
        if (favourites != null) {
            this.favourites = favourites.filter(function (obj) { return obj.ParentId === ParentId; });
        }
        // if (StorageService.GetItem("Favourite") != null) {
        //   this.nkname = JSON.parse(StorageService.GetItem("Favourite")).NickName;
        // }
    };
    FavouritesPage.prototype.OnNewRecharge = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */], { 'ParentId': this.ParentId });
    };
    FavouritesPage.prototype.OnNickName = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */], { 'OperatorId': order.OperatorId, 'ParentId': order.ParentId, 'Id': order.Id, 'nname': order.NickName, 'SubscriptionId': order.SubscriptionId, 'CircleId': order.CircleId });
    };
    FavouritesPage.prototype.OnDelete = function (order) {
        var favourites = this.storageService.GetFavourite();
        var PId = order.Id;
        favourites = favourites.filter(function (obj) {
            return obj.Id !== PId;
        });
        this.favourites = this.favourites.filter(function (obj) {
            return obj.Id !== PId;
        });
        this.storageService.SetFavourite(JSON.stringify(favourites));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */])
    ], FavouritesPage.prototype, "navBar", void 0);
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\favourites\favourites.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      New {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n      <ion-item color="assertive" id="favourites-list-item28" (click)="OnNewRecharge()">\n\n          <ion-thumbnail item-start>\n\n              <img src="data:image/png;base64,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">\n\n            </ion-thumbnail>\n\n        <h2>New {{title}}</h2>\n\n        </ion-item>\n\n        <div class="row" *ngIf="favourites">\n\n          <ion-item *ngFor="let order of favourites">\n\n    <button ion-item  (click)="OnNickName(order)">\n\n      {{ order.NickName }}\n\n    </button>\n\n    <button ion-button  item-end (click)="OnDelete(order)">Delete</button>\n\n    <!-- <button ion-button color="danger" icon-start (click)="OnSubmit(order)">\n\n      <ion-icon name=\'close\'></ion-icon>\n\n      Remove\n\n    </button> -->\n\n  </ion-item>\n\n  </div>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>{{ActiveBankName}} All Rights Rserved</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\favourites\favourites.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favourites_favourites__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Constants__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recharge_report_recharge_report__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_page__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RechargePage = /** @class */ (function () {
    function RechargePage(storageService, constant, navCtrl) {
        this.storageService = storageService;
        this.constant = constant;
        this.navCtrl = navCtrl;
    }
    RechargePage.prototype.ionViewDidLoad = function () {
        this.setBackButtonAction();
    };
    RechargePage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_page__["a" /* PagePage */]);
        };
    };
    RechargePage.prototype.ngOnInit = function () {
        var categories = this.storageService.GetOS();
        this.NewCategories = categories.filter(function (obj) { return obj.Id === "S1" || obj.Id === "S2" || obj.Id === "S3" || obj.Id === "S5"; });
        this.ActiveBankName = this.storageService.GetActiveBankName();
    };
    //ParentId: string;
    RechargePage.prototype.OnOperatorSelection = function (ParentId) {
        //this.ParentId=ParentId;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__favourites_favourites__["a" /* FavouritesPage */], { 'ParentId': ParentId });
    };
    RechargePage.prototype.OnReports = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recharge_report_recharge_report__["a" /* RechargeReportPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */])
    ], RechargePage.prototype, "navBar", void 0);
    RechargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recharge',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\recharge\recharge.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Recharge \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7">\n\n  \n\n\n\n  <ion-list id="recharge-list6">\n\n    <ion-item color="assertive" id="recharge-list-item21" *ngFor="let row of NewCategories"  (click)="OnOperatorSelection(row.Id)">\n\n      \n\n        {{row.Operator}}\n\n      \n\n      <span style="color: blue" *ngIf="showMsg">Coming Soon</span>  \n\n    </ion-item>\n\n    <ion-item color="assertive" id="recharge-list-item21" (click)="OnReports()">\n\n       \n\n        Reports\n\n         </ion-item>\n\n  </ion-list>\n\n\n\n    \n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>{{ActiveBankName}} All Rights Reserved</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\recharge\recharge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], RechargePage);
    return RechargePage;
}());

//# sourceMappingURL=recharge.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargeReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RechargeReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RechargeReportPage = /** @class */ (function () {
    function RechargeReportPage(storageService, modalCtrl, alertCtrl, loadingController, toastr, registerService, navCtrl, navParams) {
        this.storageService = storageService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.toastr = toastr;
        this.registerService = registerService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RechargeReportPage.prototype.ngOnInit = function () {
        this.categories = this.storageService.GetOS();
        this.ActiveBankName = this.storageService.GetActiveBankName();
        this.showReport = true;
    };
    RechargeReportPage.prototype.ObjChanged = function (event) {
        var _this = this;
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        var digiPartyId = this.storageService.GetDigipartyBasedOnActiveTenantId().DigiPartyId;
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        var rRRequest = {
            TenantId: ActiveTenantId,
            DigiPartyId: digiPartyId,
            SelectedType: event,
            Number: 10
        };
        this.registerService.GetRechargeReport(rRRequest).subscribe(function (data) {
            _this.rRResponse = data;
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    RechargeReportPage.prototype.OnShowReverse = function (Id) {
        var _this = this;
        //this.showReport=false;
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        var checkVoucher = {
            TenantId: ActiveTenantId,
            DigiTranLogId: Id
        };
        this.registerService.GetReversedVoucher(checkVoucher).subscribe(function (data) {
            _this.checkVoucherResult = data;
            //this.showReversal=true;
            _this.openModalWithParams();
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    RechargeReportPage.prototype.openModalWithParams = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_modal__["a" /* ModalPage */], { 'myParam': this.checkVoucherResult });
        myModal.present();
    };
    RechargeReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recharge-report',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\recharge-report\recharge-report.html"*/'<!--\n\n  Generated template for the RechargeReportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>recharge-report</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<!-- <ion-content  *ngIf="showReport" padding> -->\n\n<ion-content padding>\n\n<ion-list>\n\n  <ion-item id="mobileRecharge-select1">\n\n    <ion-label>Select the type</ion-label>\n\n    <!-- <ion-select id="mobileRecharge-input3" interface="popover" formControlName="mobno" #selectoperator ngModel name="selectoperator" (ngModelChange)="ObjChanged($event)"> -->\n\n      <ion-select id="mobileRecharge-input3" interface="popover" (ionChange)="ObjChanged($event)">\n\n      <ion-option *ngFor="let order of categories" [value]="order.Id">{{order.Operator}}</ion-option>\n\n  </ion-select>  \n\n</ion-item>\n\n</ion-list>\n\n<ion-list *ngFor="let order of rRResponse" >\n\n  <ion-item color="none" id="miniStatement-list-item46" >\n\n   <p>Date: {{order.Date|date:\'dd/MM/yyyy\'}}</p>\n\n   <p>Transaction Id: {{order.TranId}}</p>\n\n    <p>Amount : {{order.Amount|currency:\'INR\'}}</p> \n\n    <p style="margin-top:0px;color:#000000;">\n\n      Status: {{order.Status}}\n\n    </p>\n\n    <a ion-button *ngIf="(order.StatusCode)==4" item-end (click)="OnShowReverse(order.Id)">Show Reversal</a>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n<!-- <ion-content  *ngIf="showReversal" padding>\n\n    <ion-list>\n\n        <ion-item color="none" id="miniStatement-list-item46" >\n\n         <p>Date: {{checkVoucherResult.Date|date:\'dd/MM/yyyy\'}}</p>\n\n         <p>Transaction Id: {{checkVoucherResult.VendorExtCode}}</p>\n\n          <p>Amount : {{checkVoucherResult.Amount|currency:\'INR\'}}</p> \n\n          <p style="margin-top:0px;color:#000000;">\n\n            Remarks: {{checkVoucherResult.Remarks}}\n\n          </p>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content> -->\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>{{ActiveBankName}} All Rights Rserved</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\recharge-report\recharge-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RechargeReportPage);
    return RechargeReportPage;
}());

//# sourceMappingURL=recharge-report.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundTransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_UIService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_bank_change_bank__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__banking_banking__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fund_transfer_confirm_fund_transfer_confirm__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AutoLogoutService } from '../services/AutoLogOutService';








var FundTransferPage = /** @class */ (function () {
    // constructor(private regService : RegisterService, public formbuilder:FormBuilder,public constant:ConstantService,private autoLogoutService: AutoLogoutService,public navCtrl: NavController) {
    function FundTransferPage(storageService, alertCtrl, uiService, toastr, loadingController, registerService, formbuilder, navCtrl) {
        var _this = this;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.uiService = uiService;
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.registerService = registerService;
        this.formbuilder = formbuilder;
        this.navCtrl = navCtrl;
        this.validationMessages = {
            mobilenum_required: '*Enter mobile number',
            mobilenum_minlength: '*Enter 10 Digit Mobile Number',
            amount_required: '*Enter Amount'
        };
        //StorageService.SetItem('lastAction', Date.now().toString());
        this.formgroup1 = formbuilder.group({
            mobilenum: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(10)]]
        });
        var mobileControl = this.formgroup1.get('mobilenum');
        mobileControl.valueChanges.subscribe(function (value) { return _this.setErrorMessage(mobileControl); });
        this.formgroup2 = formbuilder.group({
            amount: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1)]]
        });
        var amountControl = this.formgroup2.get('amount');
        amountControl.valueChanges.subscribe(function (value) { return _this.setErrorMessage(amountControl); });
    }
    FundTransferPage.prototype.setErrorMessage = function (c) {
        var _this = this;
        this.mobileMessage = '';
        this.amountMessage = '';
        var control = this.uiService.getControlName(c);
        if ((c.touched || c.dirty) && c.errors) {
            if (control === 'mobilenum') {
                this.mobileMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
            else if (control === 'amount') {
                this.amountMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
        }
    };
    FundTransferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Showthis = true;
        this.ShowHide = true;
        this.disablenextwithoutToAccount = true;
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        this.ActiveBankName = this.storageService.GetActiveBankName();
        var SelfCareACs = this.storageService.GetSelfCareAc();
        var SelfCareAcBasedOnTenantID = SelfCareACs.filter(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcActId == "#SB"; });
        if (SelfCareAcBasedOnTenantID.length == 0) {
            this.Showthis = false;
            this.ShowHide = false;
            var alert = this.alertCtrl.create({
                title: "Error Message",
                subTitle: "Fund Transfer is not Available Since there is no SB Account",
                buttons: [{
                        text: 'OK',
                        handler: function () { _this.navCtrl.pop(); }
                    }]
            });
            alert.present();
        }
        else {
            this.SelfCareAcBasedOnTenantID = SelfCareAcBasedOnTenantID;
            this.HeadName = this.SelfCareAcBasedOnTenantID[0].HeadName;
            this.AcNo = this.SelfCareAcBasedOnTenantID[0].AcNo;
        }
    };
    FundTransferPage.prototype.OnBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__banking_banking__["a" /* BankingPage */]);
    };
    FundTransferPage.prototype.OnChangeBank = function () {
        var _this = this;
        var isFromFundTransfer = true;
        //this.navCtrl.push(ChangeBankPage,{'isFromFundTransfer':isFromFundTransfer});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__change_bank_change_bank__["a" /* ChangeBankPage */], { 'isFromFundTransfer': isFromFundTransfer }).then(function () {
            var startIndex = _this.navCtrl.getActive().index - 1;
            _this.navCtrl.remove(startIndex, 1);
        });
    };
    FundTransferPage.prototype.GetSelfCareAcByTenantID = function (ActiveTenantId) {
        var AcSubId = this.SelfCareAcBasedOnTenantID[0].AcSubId;
        var SelfCareACs = this.storageService.GetSelfCareAc();
        // this.selfCareAC=this.SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId&&obj.AcActId=="#SB"&&obj.AcSubId===this.AcSubId; });
        this.selfCareAC = SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcSubId === AcSubId; });
        return this.selfCareAC;
    };
    FundTransferPage.prototype.OnSearchingAccount = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Searching For the Account'
        });
        loading.present();
        var fundTransferRequest = {
            TenantId: this.storageService.GetUser().ActiveTenantId,
            MobileNo: this.formgroup1.get('mobilenum').value
        };
        this.registerService.GetFTAccount(fundTransferRequest).subscribe(function (data) {
            _this.fundTransferResponse = data;
            _this.ToName = _this.fundTransferResponse.Name;
            _this.ToAcNo = _this.fundTransferResponse.AcNo;
            _this.disablenextwithoutToAccount = false;
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    FundTransferPage.prototype.OnNext = function () {
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        var doFundTransfer = {
            TenantId: ActiveTenantId,
            DigiPartyId: this.storageService.GetDigipartyBasedOnActiveTenantId().DigiPartyId,
            FromAcMastId: this.GetSelfCareAcByTenantID(ActiveTenantId).AcHeadId,
            FromAcSubId: this.GetSelfCareAcByTenantID(ActiveTenantId).AcSubId,
            FromLocId: this.GetSelfCareAcByTenantID(ActiveTenantId).LocId,
            ToAcMastId: this.fundTransferResponse.AcHeadId,
            ToAcSubId: this.fundTransferResponse.AcSubId,
            ToLocId: this.fundTransferResponse.LocId,
            Amount: this.formgroup2.get('amount').value,
            ToAcNo: this.fundTransferResponse.AcNo
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__fund_transfer_confirm_fund_transfer_confirm__["a" /* FundTransferConfirmPage */], { doFundTransfer: doFundTransfer, 'AcSubId': this.SelfCareAcBasedOnTenantID[0].AcSubId, 'HeadName': this.HeadName, 'AcNo': this.AcNo, 'ToName': this.ToName, 'ToAcNo': this.ToAcNo });
        // this.navCtrl.push(FundTransferConfirmPage,{'doFundTransfer':doFundTransfer});
    };
    FundTransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-fund-transfer',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\fund-transfer\fund-transfer.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Fund-Transfer - {{ActiveBankName}}\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <!-- <ion-navbar color="primary" hideBackButton>\n\n        <ion-buttons left>\n\n      <button ion-button (click)="OnBack()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n        Fund-Transfer - {{ActiveBankName}}\n\n      </ion-title>\n\n    </ion-navbar> -->\n\n  </ion-header>\n\n  <ion-content *ngIf="Showthis" padding id="page3">\n\n    <!-- <div *ngIf="ShowHide"> -->\n\n        <div>\n\n          <ion-card>\n\n            <ion-card-content>\n\n            <ion-list>\n\n              <p>Bank: {{ActiveBankName}}</p>\n\n              <a card-content-end (click)="OnChangeBank()">Change Bank</a>\n\n            </ion-list>\n\n            </ion-card-content>\n\n            <div *ngIf="errormsg" style="color:#488aff">{{errormsg}}</div>\n\n            </ion-card>\n\n            <ion-card>\n\n            <ion-card-header style="background-color:#488aff; color:#fff">\n\n              From Account\n\n            </ion-card-header>\n\n            <ion-card-content *ngFor="let order of SelfCareAcBasedOnTenantID">\n\n              <!-- <div style="background-color:bisque">\n\n              <span>Name: {{selfCareAC.HeadName}}</span> \n\n              <br/>\n\n              <span>Account No: {{selfCareAC.AcNo}}</span> \n\n            </div> -->\n\n            <ion-list>\n\n              <ion-item style="background-color:bisque">\n\n                <h2>Name: {{order.HeadName}}</h2>\n\n                <h3>Account No: {{order.AcNo}}</h3>\n\n              </ion-item>\n\n            </ion-list>\n\n            </ion-card-content>\n\n            <noscript>\n\n            <div style="color:darkred">Above Selected Account is choosen for Fund Transfer for this time</div>\n\n          </noscript>\n\n          </ion-card>\n\n          <br/>\n\n          <ion-card>\n\n\n\n            <ion-card-header style="background-color:#488aff; color:#fff">\n\n              To Account\n\n            </ion-card-header>\n\n          <br/>\n\n            <ion-card-content>\n\n                <form [formGroup]="formgroup1" id="register-form3" #fundtransferForm1="ngForm" (ngSubmit)="OnSearchingAccount()">\n\n\n\n              <ion-list id="register-list11">\n\n                <ion-item id="register-input8">\n\n                  <ion-label floating>\n\n                    Enter Phone Number/Account Number\n\n                  </ion-label>\n\n                  <ion-input formControlName="mobilenum" type="number"></ion-input>\n\n                  <!-- <ion-input type="text" placeholder="" name="MobileNo" #MobileNo="ngModel" [(ngModel)]="rechargeitem.MobileNo"></ion-input> -->\n\n                </ion-item>\n\n                <!-- <p style="color:red;" *ngIf="mobilenum.hasError(\'required\') && mobilenum.touched"> *MobileNumber is required</p> -->\n\n                <p style="color:darkorange;">{{mobileMessage}}</p>\n\n              </ion-list> \n\n              <button [disabled]="fundtransferForm1.invalid" id="register-button7" ion-button color="positive" block>\n\n                  Search\n\n                </button>\n\n                </form>          \n\n            </ion-card-content>\n\n              <div *ngIf="fundTransferResponse">\n\n                <ion-card-content>\n\n                  Name: {{fundTransferResponse.Name}}\n\n                  <br/>\n\n                  Acount No: {{fundTransferResponse.AcNo}}\n\n                </ion-card-content>\n\n              </div>\n\n              <br/>\n\n        </ion-card>\n\n        <br/>\n\n        <ion-card>\n\n\n\n          <ion-card-content>\n\n              <form [formGroup]="formgroup2" id="register-form4" #fundtransferForm2="ngForm" (ngSubmit)="OnNext()">\n\n            <ion-list id="register-list11">\n\n              <ion-item id="register-input8">\n\n                <ion-label floating>\n\n                  Amount\n\n                </ion-label>\n\n                <ion-input formControlName="amount" type="number" placeholder=""></ion-input>\n\n              </ion-item>\n\n              <p style="color:darkorange;">{{amountMessage}}</p>\n\n            </ion-list>\n\n            <button [disabled]="fundtransferForm2.invalid || disablenextwithoutToAccount" id="register-button8" ion-button color="positive" block>\n\n                Next\n\n              </button>\n\n            </form>               \n\n          </ion-card-content>\n\n            \n\n        </ion-card>\n\n      </div>\n\n        <!-- <div *ngIf="confirm">\n\n          <ion-card>\n\n      \n\n            <ion-card-header style="background-color:red">\n\n              From Account\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              Account Name: {{selfCareAC.HeadName}}\n\n              <br/>\n\n              Acount No: {{selfCareAC.AcNo}}\n\n            </ion-card-content>\n\n          </ion-card>\n\n          <br/>\n\n          <ion-card>\n\n      \n\n            <ion-card-header style="background-color:red">\n\n              To Account\n\n            </ion-card-header>\n\n          <br/>\n\n          <ion-card-content>\n\n            Name: {{confirm.Name}}\n\n            <br/>\n\n            Acount No: {{confirm.AcNo}}\n\n            <br/>\n\n            Amount: {{Rs}}\n\n          </ion-card-content>\n\n            <button id="register-button9" (click)="OnConfirm()" ion-button color="positive" block>\n\n              Confirm\n\n            </button>\n\n        </ion-card>\n\n        </div>\n\n        <div *ngIf="showstatus">\n\n          <h1>Fund transferred with status {{ftd.Status}}</h1>\n\n        </div> -->\n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar color="primary">\n\n      <ion-title>{{ActiveBankName}} All Rights Rserved</ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n\n\n  \n\n'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\fund-transfer\fund-transfer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__services_UIService__["a" /* UISercice */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], FundTransferPage);
    return FundTransferPage;
}());

//# sourceMappingURL=fund-transfer.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeBankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_idlejs_dist__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_page__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fund_transfer_fund_transfer__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var idle = new __WEBPACK_IMPORTED_MODULE_4_idlejs_dist__["a" /* Idle */]()
    .whenNotInteractive()
    .within(5, 1000)
    .do(function () { return __WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]; })
    .start();
var ChangeBankPage = /** @class */ (function () {
    // constructor(private autoLogoutService: AutoLogoutService,private regService : RegisterService,public constant:ConstantService,public navCtrl: NavController) {
    function ChangeBankPage(storageService, navParams, alertCtrl, toastr, loadingController, toastrService, events, registerService, navCtrl) {
        this.storageService = storageService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.toastrService = toastrService;
        this.events = events;
        this.registerService = registerService;
        this.navCtrl = navCtrl;
    }
    //Active: number;
    ChangeBankPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait till we get the Registered Banks'
        });
        loading.present();
        this.ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        //StorageService.SetItem('lastAction', Date.now().toString());
        var mobno = this.storageService.GetUser().UserName;
        this.tenants = this.storageService.GetTenant();
        this.tenant = this.tenants.find(function (obj) { return obj.Id === ActiveTenantId; });
        this.ActiveBankName = this.tenant.Name;
        this.registerService.GetTenantsByMobile(mobno).subscribe(function (data) {
            var tenantList = data; //got tenantlist from server
            _this.storageService.SetTenant(JSON.stringify(tenantList)); //Works, But not as of reqment
            if (_this.tenants.length < tenantList.length) {
                for (var i = 0; i < tenantList.length; i++) {
                    _this.OnAddBankSelection(tenantList[i].Id);
                }
            }
            _this.tenants = _this.storageService.GetTenant();
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            alert(error.message);
            loading.dismiss();
        });
    };
    ChangeBankPage.prototype.filterByString = function (tenantlist, ActiveTenantId) {
        return this.tenantList.filter(function (e) { return e.Id == ActiveTenantId; });
    };
    ChangeBankPage.prototype.OnAddBankSelection = function (Id) {
        var _this = this;
        var addBankRequest = {
            TenantId: Id,
            MobileNo: this.storageService.GetUser().UserName
        };
        this.registerService.AddBank(addBankRequest).subscribe(function (data) {
            var tenant = {
                Id: data.Tenant.Id,
                Name: data.Tenant.Name,
                Address: data.Tenant.Address,
                IconHtml: data.Tenant.IconHtml
            };
            for (var i = 0; i < data.Tenant.length; i++) {
                if (tenant.IconHtml == "") {
                    _this.Active = true;
                }
                else {
                    _this.Active = false;
                }
            }
            _this.tenants = _this.storageService.GetTenant();
            var digiParty = {
                Id: data.DigiPartyId,
                DigiPartyId: data.DigiPartyId,
                PartyMastId: data.PartyMastId,
                MobileNo: data.MobileNo,
                TenantId: data.TenantId,
                Name: data.Name
            };
            var existingDigiParty = _this.storageService.GetDigiParty();
            var TenantId = tenant.Id;
            var singleDigiParty = existingDigiParty.find(function (obj) { return obj.TenantId === TenantId; });
            if (singleDigiParty == null) {
                existingDigiParty.push(digiParty);
                _this.storageService.SetDigiParty(JSON.stringify(existingDigiParty));
            }
            var existingSelfCareAcs = _this.storageService.GetSelfCareAc();
            var singleSelfCareAC = existingSelfCareAcs.filter(function (obj) { return obj.TenantId === TenantId; });
            if (singleSelfCareAC.length == 0) {
                for (var j = 0; j < data.SelfCareAcs.length; j++) {
                    var singleSelfCareAC_1 = {
                        AcActId: data.SelfCareAcs[j].AcActId,
                        AcHeadId: data.SelfCareAcs[j].AcHeadId,
                        AcNo: data.SelfCareAcs[j].AcNo,
                        AcSubId: data.SelfCareAcs[j].AcSubId,
                        HeadName: data.SelfCareAcs[j].HeadName,
                        LocId: data.SelfCareAcs[j].LocId,
                        TenantId: data.SelfCareAcs[j].TenantId
                    };
                    existingSelfCareAcs.push(singleSelfCareAC_1);
                }
                _this.storageService.SetSelfCareAc(JSON.stringify(existingSelfCareAcs));
            }
            _this.events.publish('REFRESH_DIGIPARTYNAME');
        }, function (error) {
            _this.toastrService.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    ChangeBankPage.prototype.OnSelect = function (order) {
        var _this = this;
        var user = this.storageService.GetUser();
        user.ActiveTenantId = order.Id;
        this.storageService.SetUser(JSON.stringify(user));
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        //this.Active = +ActiveTenantId;
        this.ActiveBankName = this.storageService.GetActiveBankName();
        if (this.navParams.get('isFromFundTransfer') == true) {
            this.events.publish('REFRESH_DIGIPARTYNAME');
            //   this.navCtrl.push(FundTransferPage);
            //  this.navCtrl.push(FundTransferPage).then(() => {
            //   const index = this.navCtrl.getActive().index;
            //   this.navCtrl.remove(0, index);
            // });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__fund_transfer_fund_transfer__["a" /* FundTransferPage */])
                .then(function () {
                var startIndex = _this.navCtrl.getActive().index - 1;
                _this.navCtrl.remove(startIndex, 1);
            });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_page__["a" /* PagePage */]);
            this.events.publish('REFRESH_DIGIPARTYNAME');
        }
    };
    ChangeBankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-bank',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\change-bank\change-bank.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Change Bank  {{ActiveBankName}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <ion-card>\n\n      <ion-item>\n\n    <h2 style="text-align:center">\n\n      My Banks\n\n    </h2>\n\n  \n\n  </ion-item>\n\n        </ion-card>\n\n      \n\n        <ion-list>\n\n              <ion-item *ngFor="let order of tenants">\n\n                    <ion-thumbnail item-start>\n\n                      <img *ngIf="(order.IconHtml!=\'\')" src="data:image/png;base64,{{order.IconHtml}}">\n\n                      <img *ngIf="(order.IconHtml==\'\')" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AABjJElEQVR42u2dCZgcVbn+M0xPpjMZB0hYklq6ZyaTAAFZEvblT1xRQS+oiGyXCCSQkMl0V53qBEFH0Qsi6AXkXhBZBZTsmSWT6aozDEou5Ap6L4LKRVG8ICigl0VZs/yrZqpmama6q6p7eqlz6u3nqQcSun9Nn/PV975V9Z3zTZmCF1544YUXXnjhVejrox9dVGMee7iOGvDAA6/EvM7BWJI8OCtBsofIZOsiSev/nESyl4ia/mVRo9+RCL1b0uh6SaU9omZkzX8fNI9HzH9/XNDok+a//4+oGn8w//1F8z2vSkR/U1Dpu4JqvGty3pRU41VBM14UVf0P1nutz1iftRgWa4hpsoe+w/wu6zvFjHG5+fdLxYz+WUnTT5Yz9OA5mS2zZnbcPhXzCx547PEK/fLa8Qd44IFXCG93jazpwmySPUHSjHPN40pT1G83BbVPUPX/FAh91hTb103h3S0RY+Jh/X2xRxl5oqK/ZpqJZ63fMPRbiPEDmdArrN8oZAaOt36z9dsRL+CBFw5eoa4jZh51riNWrPsADzyeec0d98xOKj3HmaJ3linmq0xBvNUU9v6hK21VfzuIuMpEn3BMRqzDwBv67ar+9NBYEOMWa2zMv/uCaRKOaV6+ZhbiDzzwys8r5sutL5zqOuom+WPAA495npR+ZFqC9B+VUHqXJJS+78npvodksvUVmWQnKa7ZCUckeEr2FVndOphQ+26UMvTChPrgwmTnYBzxBx54peEV8+X15hF3HfWT/DHggccYb3dNQs22yMT4J/PK9SsS0ddZV7LmleuOYfHqdx2WGBZ7a93YDd4E3g57rNdaj0tkbeAzyVWDzYhn8MArv/hbXzjNdcQn+WPAAy/0PCndP0PQjNNM8bnG/OdPRp7JjxcvtX/CMSkxBC8wT1Dpa+bxkETo1aKqn9pC9BmIZ/DA82YGfaNVXdhgHtNdh/XnPYr8YvDACy1PWj3YJmSMC6zCNVGlv5Y0fZefeCXUrROOyYgheJPlbdklq72/SaZ770h2bFwyb9k9B+P8AA+8ETNRG+jz9pdbX9joOqZP8seAB14oeCd/5pK9W1fe/yGZ6MS8ut8oEv3PxYlXn+sohRiCV2qeoOkvSYRukImhSBl69MKlj9fh/AAvYjyngNDfALi+vMl1NE7yxzSCB141eQcuu+3wlpUbtGS6S5fU3rcmJzamwChbRg/zz+AxwlPpP8x/9pqm4LLEaqMV5wd4nPNqXKsGvA2A/eYG1//AnvY/J/NjHM6e4IFXKZ5VnS+R7GnJ1Obvy+nuZ90CMSmxcQsNeOzzVPqM+c8bJWJ84gDlvgacb+BxxHMKCKe6DECNX8HB9HEOBIMNHhM8QTHmiRrtsNaYC2r2bYgheIXwJKXnrWR6s96ycl3mwEtvOQLnG3iM85xVAyMGwM8pTBv37AGDDV54eZ2de4jqwIdFzbjZ2j0PYgheKXmClv2doNGbrC2PrVjD+QseQ7wG16oBywDE/J4RxF0GYDoGG7xw8qxtdOlJlujnLt6DeIFXep7VT8EyA9b2zV7bGeP8BS8EPEfDHQNQ53XrP2Y7BMcANGCwwQsbT8zox5pJ+V8FTX8B4gVelXn/O9SMKUOPxvkLXsh47lUD0zw3DbKLAupcBiCOwQYvLDxZ0480r/SvkzT9OYgXeGHkmUbg9xIxviWqW4/E+QteCHhNLgMQ9yv6cxuAyWxXiMkDryQ8mQzMMRPqv5hX+r+D2IDHEi+Z6vldc8fGbx980Y2HIh+AVyWeYwAaPPXc/lCta40gxB+8qvCOP2PpPrKSPdtMpAP+O/BBbMALO69nl2liqagNnDm/c+1U5APwKshrClTD5zIAMYg/eNXgzb/0lqObU103S6rxKsQGPC55Kn3ZeoxlLVFFPgCvArxgq/dcBgDiD17FeEd/PjWrpX3NpYlU96MQG/CixBtqKkXoebnaGyO/gFdR3iQ7CmGwwSuIN3fZncclU5tuk5Xu1yAO4EWZJ6jG34Z2H1SzhyC/gFdtHgYHvPLwOjv3kNXsZ5NKz6MQB/DAy7GKQMk+PKf9gS8uWnTqXsgv4EH8wWOeZ+3DLxN9maQaz0AcwAPPn5dMdT3T0r4udczZ7fsiv4AH8QePOd7+anY/UaNXSZr+CsQBPPCK4KnGyxKhnbOVwX2QX8CD+IMXep6gDRxgJrXbBFV/G8kcPPAmzxM0/S2JGLeImj4X+Qo8iD94oeNZTVIklfaMXbuPZA4eeCXjqXSnSPRNwz0IkK/Ag/iDV2WelNFPMRPWdiRz8MCrJM/YJmj6R5CvwJuEptdgcMAriieqxiKR0IeRzMEDr6q8wYS29f8hX4FXiPDb+/4E3iSoEYMN3tAz/szA8cPb9CL5ggdeaHjproG5y+/6MPIVeAHEPxbIALj6CTdhsKPNs7rxCRrdiuQLHnjh5SU7erZKSu8C5D/w8oi/0+/H2wDYb26wr/6bMNjR5ImEHipqdDOSL3jgscIbKsRdL2cGDkb+A8+l5/V2t986z63/7TfH7av/RldvYQx2RHizlf4DzSSyJlhHPiRf8MALHU+lOwWN3u+3fBD5LxK8uH2MGAA/pzDNZQAaMdjR4CVWP7y3mTRuklT9fSRf8MDjofGQ/p5E6HdbVxl7Iv9Fktdg67ljAGJ+zwjiLgMwHYMdAd6Za2ulDF1hiv9fkXzBA49DntWOmNBLrL4cyH+R4Tka7hiAOq9b/zHbITgGoAGDzT9PIMZHBVV/CskSPPAiwCPGf0vprR9G/uOe59y9dwxAvZf419ruYKrreQEGm2NeQuufJxKjC8kSPPCix0umuroPvujGQ5FPueU1uQxA3K/oz20A6gPvEoTBZo535Be/LEoke72g0neRLMEDL7o8Wel9p7lj8/VSZl0T8il3PMcANHjquf2hWtcaQYg/h7yTPnXK3i0d61eYSeAvSJbggQeewxM0+qJM6OIpU3bXIJ9yw2sKVMPnMgAxiD+fvAMv/cGxyXTvz5AswQMPvHw8a3tvawkw8ikXvGCr91wGAOLPGe+kz5+/b3Nq47WS0vMekiV44IHnxxM0+o5EjK8sXPp4HfJpBHjFCj8GO9y81uV3nZJI9TyN5AYeeOAVyjONwJOi+uAxyKdoEYzBYYh36DlXSMmOzT9IKD27kNzAAw+8onkq3Wn+88b91ex05GeIPwY75LzWy+77QlLpfQHJDTzwwCsdL/vcnBU/+izyM8Qfgx1C3kGLr21NdnRtQHIDDzzwysZLda055PyrW5GfIf4Y7JDwWtrXLZGV3r8huYEHHnjl5/W8KivZs5GfIf4Y7Cry5izfPCPR0b0ByQ088MCrNE8g9L629r4m5GeIP3gV5snp7CLzZHwByQg88MCr2r4BqvGH2SR7AvIze+IfePUfBjs8PGttrqzq1yRSW3YiGYEHHngh4O0QNXrVlM7BGPI9Ezxn6//AmwQ1YrCrzxM1fa5AjJ8hGYEHHnih4xH6aGK10Yp8H3rxjwUyAK5+wk0Y7OryzBPsYvMk/DuSEXjggRfefQP0N4SMcQHyfWjF3+n3420A7Dc32Ff/TRjs6vCkdP8M01lvQDICDzzwmOEp+pojzv2GjHwfKvGvt7v91nlu/W+/OW5f/Te6egtjsCvIEzX6IUHTX0AyAg888FjjWRuStS2791PI96Hgxe1jxAD4OYVpLgPQiMGusPgTY7VVXINkBB544DHLS/W835zaeAXyfVV5DbaeOwYg5veMIO4yANMx2JXjzdS2fWD4lj+SB3jggccHT1TpA1Y/AeT7ivMcDXcMQJ3Xrf+Y7RAcA9CAwa4cL5nRDzJPpN8geYAHHni88QRVf8payYR8XzGec/feMQD1XuJfa7uDqa7nBRjsCvFEYnzOqqBF8gAPPPB45QkqfU3WBj4D/agIr8llAOJ+RX9uA1AfeJcgDPbkeGeurTVd8bVIHuCBB140ePouUTO+OaWzcw/oR1l5jgFo8NRz+0O1rjWCEP8K8GYrg/tIhFIkD/DAAy9qPEGjW61lztCPsvGaAtXwuQxADOJfGZ6s6UdKKv0jkgd44IEXVZ6o0d8LinEE9KMsvMZCtvuthfhXhicSep7pft9B8gAPPPCizhO07FtzVq5ZDP2oEq9Y4cdgF84zA/6rSB7ggQceeG5ez67mleu/Bv2oLg+DUyae1cVPIvRunOzggQceeLl5yXTXXbOW3zQV+gHx54bXusrY0wz2AZzs4IEHHnjePIHQfmtDNOgHxJ953ix1IClq+q9wsoMHHnjgBeXpT4iZQQl6BPFnlmdV+gua/hJOdvDAAw+8AjcN0vQXBJI9HHoE8WdQ/Ac+I6n0HzjZwQMPPPCK5BH9TVGln4QeQfyZ4YmqsdIU/5042cEDDzzwJs3bIWj0UuhRacU/8Oo/DHYB4q8Z1+FkBw888MArMY8Y/wI9KgnP2fo/8CZBjRhsP97uGknTb8XJDh544IFXHp5M9JsWLTptT+jRpMQ/FsgAuPoJN2GwPV5nrq013ekPcbKDBx544JWXl+zYfO9Jnzplb+hRUeLv9PvxNgD2mxvsq/8mDLbHBj8aXY+TEzzwwAOvMrxketP6o844b2/oUUHiX293+63z3PrffnPcvvpvdPUWxmC7XsnOwbikGltwcoIHHnjgVZYnqnp3W3tfPfQoEC9uHyMGwM8pTHMZgEaI/9jXvp2DjZKqP4iTEzzwwAOvOjyR6Prszu4GiL8nr8HWc8cAxPyeEcRdBmA6xH/clX/H4F5m8D2CkxM88MADr7o8kdCH29r7miD+eWv4prsMQJ3Xrf+Y7RAcA9AA8R/7mq0M7mMG3S9wcoIHHnjghYMnqPQxKd0/A+I/YfVeo8sA1HuJf63tDqa6nhdA/N1X/mRw1sR9/XFyggceeOBVmycQ+suWy+n+EP8RXpPLAMT9iv7cBqA+8C5BEbryh/iDBx544IWXZ5kA952AiG8a5BiABk89tz9U61ojCPGf+Mwft/3BAw888ELOsx4HWDUB2DFw6N+nB93wp9auAYD4j6/2R8EfeOCBBx4zPFHJPrzgvI79I75jYGMh2/3WQvxzrfPHUj/wwAMPPOZ46a6B40+/aD9sYhdgl6ApRb54HZz5nWunYpMf8MADDzyGeenuLdgxsEwvrvf2x/a+4IEHHnjs89Tsj6d0du4BfYP4B+vqh8Y+4IEHHnj87Bio6bdbuR36BvH3fJnifwtOJvDAAw88znjEuAHiD/HP+xI14zqcTOCBBx54fPJEQr8B8Yf4TxR/1ViJkwk88MADj2+eeaG3FOIP8R95ydrAZySV7sTJBB544IHHOU/V35cy+ilRF//Aq//4Fn/9SFP8/4GTCTzwwAMvIjxVf0Mk9NCIbhfsbP0feJOgRh4HZ5Y6kBQ0/SWcTOCBBx54EeOp+vPJlT1yBMU/FsgAuPoJN/E2OK2rjD0nNvfByQQeeOCBFxVeMt3z5KHnXCFFSPydfj/eBsB+c4N99d/E0+AsXPp4nTn5AziZwAMPPPCizUumN+vHnXL6jAiIf73d7bfOc+t/+81x++q/0dVbmIvBETXjLgQ/eOCBBx54wyZg052cbxcct48RA+DnFKa5DEAjL4NjBsBXEfzggQceeOCN4RGa4VT8G2w9dwxAzO8ZQdxlAKZzc+VP6HkIfvDAAw888Cby9F2iNnAmZ+LvaLhjAOq8bv3HbIfgGIAGbq78VeMoQaPvIPjBAw888MDLxRM0/S1x1cBhnIi/c/feMQD1XuJfa7uDqa7nBVyI/2xlcB9JpX9E8IMHHnjggefFEwh9NrH64b052BenyWUA4n5Ff24DUB94l6CwD47V2pdQiuAHDzzwwAMvEE81tuTqHsjYpkGOAWjw1HP7Q7WuNYJ8iP9Qxb9+LYIfPPDAAw+8QniiZnyN8R1xmwLV8LkMQIwr8SfG5xD84IEHHnjgFc7Td4mqfirD2wU3FrLdby1P4p/M6AdZ+z0j+MEDDzzwwCuGJ2j6/yXTfXO53i64WOEPq/jP1LZ9wJy83yD4wQMPPPDAmwxPTvc+deQ5l81Gi2BGfoxE6AYEP3jggQceeCXhpbvWQvwZ+DGiRlch+MEDDzzwwCslr3nlhgzEP9zi/yFz8nYgWMEDDzzwwCspT82+P5tkT4D4h/G2f7p/hqDSPyFYwQMPPPDAK9N2wc9ZreQh/iH7McPP/RGs4IEHHnjglXO7YHo/xD9M4q/RixGs4IEHHnjgVYZnnMu6+Ade/RfmHyNq+lxzMv6OYAUPPPDAA68SPEGlryVXDTYz2ivA2fo/8CZBjWH8MQuXPl4nqMZjCFbwwAMPPPAqyzO2Wb1mGBT/WCAD4Oon3BTGHyOr+jUIVvDAAw888KrE+ypj4u/0+/E2APabG+yr/6bQiX86uyiR2rITwQoeeIUsZTKekQjtlDL6KSKhh1qHRIxPWI1PBE3/HcYPPPAK4Kj6+2JGP5YR8a+3u/3WeW79b785bl/9N7p6C4fix8xZvnmGKf7PI1jBAy8YT1Z6/iST/ovG37Ic3zpbJPoSQaMvYvzAAy9gvwBiPPvBczuFkPcKiNvHiAHwcwrTXAagMUw/JtHRvQHBCh54/jw51ft6smNjZ9ul66cHPcdmd3Y3yIReIWr0dcwHeOD585pTXT8Ksfg32HruGICY3zOCuMsATA/Tj2lpX7cEwQoeeN48U/jfbe7Y9G+HXHh1c9GP2dp79mtOd91isTAf4IHnzWtd+cA/h1D8HQ13DECd163/mO0QHAPQEKYfc9Dia1tlpfdvCFbwwMvH69mVSHWtOXjpzR8sVTKaf8n3DkumN6232JgP8MDLy3u5ecW6fUIk/s7de8cA1HuJf63tDqa6nheEqvFBsqNrA4IVPPDy8FKbH2y75PaTynUbsjmdPcr8rgHMB3jg5eaJmnFXiDbZa3IZgLhf0Z/bANQH3iWoQj+mZcX9ZyFYwQNvIi+p9D7RtuK+0yv1DNJaNSBp+hOYD/DAm8gTiPHRkOyw6xiABk89tz9U61ojGCrxP/ScKyQzyb2A4AIPvNFDVPU/tKxce/GiRafuVfECpM7OPURt4HxJpX/EfIAHnntVAH3WKqQNwQ67TYFq+FwGIBY28bc4yY7NP0BwgQees/aYviqRrHLimRfMrPbSo7b2vnrz/0kVVONvmF/wwLPNOTGuD8H2+o2FbPdbG0bxn3PZDz8+VNiE4AIv4jxB098y/3nNvPS6vcO26UiyY3AvUdOvFVT9bcwveODRHbKmH8lEr4Bihb/cP+b40y/aL5HqeRrBBV7EeTtEld4hpakY9h3H5I7NyUS6677xu3RifsGLHI8Y/z2lczCGFsFF8ppTG69FcIEXaZ5Ke+TMwMGM7DU+wjtg2W3HJzu6sphf8KLMEzPG5RD/IngHLL31OEnpeQ/BBV40ecZ2SR34fww1GsnJk9JbPyxo9GeYX/Ai+dhO1d+2WtZD/AvgnfSpU/ZOpnt/huACL3I8lT4jZujnGWsx6sPbXWMmwi94NxtCvIDHaa8AxfjJokWn7QnxD8hr6Vi/AsEFXsR4fzHfs5y1Z4aF8BYufbxOytAVpsl5GfECXpR4rSsfWALxD8A78otfFs1B+wuCC7xI8Ij+ptWKd9/OwcbQVwuXiDdT2/YBUaNXmb//74gX8KLAS6a6/3TkOZfNhvj7PTMk2esRXOBxz7P6iGv031sup/szsVSoHEsHyeAsSdNvtcYC8QIe77xkavO1YRL/wKv/KpU8Elr/PEGl7yK4wOOct15QjHksiXU5eZLSd5Cc7u5GvIDHM0/Qsm/NXmUkQnD+Olv/B94kqLESyUMkRheCCzxeeaKq/1TM6MeyLNbl3vQrme7ejngBj2PemhCIfyyQAXD1E24qd/KQM/RjCC7wuNwbXNWfElT6aZ7Euqx3AtX+081x+w3iDzweebJGT6qi+Dv9frwNgP3mBvvqv6msyePMtbVWkkRwgcdVVzBNf8H884VWfEP8C+SZYyYSfYmg0RcRf+BxxVP1n1vNtKog/vV2t986z63/7TfH7av/Rldv4bKc7BKhlyG4wOOFZ17tvyYSY7WUfmRaJMS6jDyrq5pM6BWiRl9H/IHHDU+lF1X4fIvbx4gB8HMK01wGoLFs4p/un2G6/L8iuMBjnTdUwErod4XVxswoinU5ebOVwX3M8b9xYpEw4g889ngi0f/c1t7XVKHzrcHWc8cAxPyeEcRdBmB6OU92U/xvQnCBxzYvu0sg9L7kqsFmiHV5eYnVRquo6T+WNH0X4g88lnkiod+uwPnmaLhjAOq8bv3HbIfgGICGcp7ss5X+A4fXACMYwGOTJ6pZQ1CMIyDWleUl1S1HJ5XunyCewWOVZ93NsgxtGc835+69YwDqvcS/1nYHU13PC8p6sltLIhAM4DG5qYfS+8sE6T8FYl3tpYP3fS6Z7noK8Qweo7x7ynh+NLkMQNyv6M9tAOoD7xJU5MkuEnro8G08BAN4DPFSPX9sWbn24sMOu7IWYh0O3omnfmIvSe2/QFLpHxHP4DHG29G29NYjy3R+OAagwVPP7Q/VutYI1pT7ZBc1uhnBAB4rPFnp/Vtzx/ovH3/G0n0g1uHktbX31UtkgAiq8TfEM3is8JIdXRvKdH40BarhcxmAWCXEX9b0IxEM4LHAk5Xut5tTm7575HlXyBBrNniJ1Q/vbRVYWb3YEc/ghZ/Xs+uAZbcdX4bzo7GQ7X5rKyH+w8/+9T4EA3ih5qW27Ex2bL53/sU3zOdFXOd3rp0qZfQPmr/xdFMgL5GJoViHpGYvbV255mwrCZ30+fP35eX3Ckq/LBF6t6TSnTg/wAszz+qFUbXzrVjhL+bLhczA8QgG8MLMS3b0bD3w0h8cy8OVtbR6sE3U6JetPgSCRt/xGz9Z6X1HVrq3mabgcqdCmfU7CXa9UR/OD/DCzJut0QXVPt/K/uXmDx1AMIAXRp6gZP+zbfn9n2D/NvjuGlPwT5VU/cFJjx+hVCLGJywm648RJLX/I3Kq9xc4P8ALJU81tnAt/qJqLEIwgBc6nkqfkbTsmTw8A5cy9GhTtB8t/fgZ27yuUFipIVi06NS95rQ/8CVZ6f49zg/wwsbz6xbKrPjbt+IeRjCAFyLeX8zPLJ+1/KaprIu/9XzfKnwr69Ja61k6Mf5l4dLH61gvIFz06YtnyGp2pfmbXsb5AV6IeAaX4i9l9FMQDOCFgkf0N0XN+Nq+nYONPFS/J8ngLPN3PVKp8bPqCWZd3rcvD6sHZmrbPmAap2+YRuAfOD/ACwdPP5kr8bef/W9HMIBXVZ6qvy9q9N9bLqf787L0bWhvfNX4Q6XnQyDGb8XUlhZulg6mts6WCP2+99bkON/AKz9P0IyfcCb++skIBvCqzFsvKMY8nta9z15lJILvfleO+eh97uDF3zmIp30IBG3gAJHom3C+gVfVRkHqg8eUW/wDr/6b7JebP7obwQBeNXjW7erxhTU8iL9161rQ6JPVno9kuueXC85KC7xtQjSbZE+QiP4fON/Aq9JjynVlPD+crf8DbxLUWOyXW456bGESggG8CvTb1vRfCSr9NJ873u2uGW6JG5LGSKnu+3ndgVAm2TOSSu//4HwDr8K8HdbjvTKJfyyQAXD1E24q9svNH3IbggG8SvEETX9BUulFU85cW8un+Fvr2ekXQzcfhJ7Bm/g7vONOOX1Gy8q1HbLS+xLON/AqxlOzN5dB/J1+P94GwH5zg33131TMl++vZvcb3Y8bwQBe+Xjm1f5rYsa4XEo/Mo1lsfHjtbX3NYlE/3P4NjHRnzfP9+m8ib+bt+C8jv1lkv2K+VvfwPkLXgV4/zjsvM7mEop/vd3tt85z63/7zXH76r/R1Vu4oC8XNXoVggG8cvJM4X/X/Pt/FVYbM3kSm/xdNI2vhXYTE2Ks5lX83TxrCaSg0ZsETX8P5y945eS1rtz4jRLFc9w+RgyAn1OY5jIAjYV+uXUlJmn6KwgG8MrD03eZSfj+hJpt4Vlsxt1Rm+7f6raK82ttqpPnDgyP8zG8BJM+4L35Es5f8IrnyUr3n0vQgrzB1nPHAMT8nhHEXQZgejFfLhN9GYIBvDLxjCCNM3hrmWv+7ovDPr+iNnB+VOZjJNcNtTfP1eME5y94k+fJSvbiScSzo+GOAajzuvUfsx2CYwAaijqZOjv3kFTjGUweeCXm/ZdMBj4ehdvMOVfUqPSh8K++MLJREv8xBo0Yn5A0/Qmcv+CVkmetaArSjCvP6r1GlwGo9xL/WtsdTHU9Lyhu6Yya/SwmD7zS8fTnRELPC3oS8Cg2Urp/xsS+9uGbX+u5uLVHQdTE333xI2r9ixOpLc/j/AWvVDyru2cR8dzkMgBxv6I/twGoD7xLUI4vTyo9j2LywJssT9DoX2ViKG3tffU8V5cHus1MjH9iZxMTq31wBMXfxTv2rOX7t6zceKWc6vk/5APwJs1T9QeLiGfHADR46rn9oVrXGsGixX/usjuPw+SBNxmeoGXfMv/7Na2rjD15FIdieEMNa5iZX+PKKIu/m3fY4msSZvK+bnQ5NPIBeMXxkhn9oALjrylQDZ/LAMQmI/7WFyZTm27D5IFXFC+1Zaek6HeKmUEpCuJQ0HbaRF/HyvwKhN4H8R/LG+rbQOjd+R/jIB+A51dgS79TYPw1FrLdb+1kxf/oz6dmyUr3a5g88AreTjbd058kWz8YRXEIZgDoo6zMr0D0n0L88+zjQOihkqb3IR+AVzhPf2V+59qpJY/nYoV//Je3tK+5FJMHXkHrXDu6Hp+z4t5PQhx8DIBGf8PK/CaV7ich/t4882ruQ4JKH0M+AK+wlub0i+WM50kFfyLV/SgmD7xAXeRSPb9rXfnAP0Mcgr0EYvyWmflN9TwN8Q/y2l0ja8ZZAqHPIr+AF5AxEErxn3/pLUdj8sDz4yWV3pdbVq5TF532pX0gDsFfopb9FTPmLt3zS4h/8NfCpY/XyWp2ZSK15RXkF/B8HgPsksnAnFCJv3U0p7puxuSB59XYorljw7cOPz8jQhwK5yXSPY+wEi/JVPdDmN/CeYeec4XU3LHx24lU71vIL+DlO2SifytU4m/tVSypxquYPPBytLR8P5nuuv3wi66di9vCxfMS6a61zMRLR/cPMb/F8w5ZfN1cWdWtNuo7kF/AG8+TlJ4/H3P62TNDIf7Wn2UlezYmD7wcTnXDvCXfX4CCsMnzmjs2XMXM3uVEJ5jfEiwdVPoPFIm+CfkFvPG8OSt+fG4oxN/6+9yNMDB5UeWJqv5TmWw5Hsm8dLzWy374GVbiRV5lnIj5LR1vNsmeIBH9P5BfwButs9msT1b8A6/+8wpWqyDBux0mJi8qPKtphaDSTyOZl5531JnqfoKafTv08aLqb+Raq4z5nTzPHPvTR5eDIl9FftM00tNcrPDb+/4E3iSoMV+wSsT4F0xetHmCpr8gqfSiKWeurUUyLx9P0IyNYY8X0wT+GPNbRp55jomasVTQ6IvIV5HnfbVI8Y8FMgCufsJN+YJ1dA0rJi9qPPNq/zUxY1wupR+ZhmRefl7+hkBh6lpGP4n5LT9vdmd3g0yyX0mket5EvoomzzzXfl2E+Dv9frwNgP3mBvvqvylXsMqafiQmL3o8U/jfNd/3r8JqYyaSeQV5nYMxUaO/D3G8/I/VDhfzWznewRdeNSeR2vx9Wel5D/kqgryM/sECxL/e7vZb57n1v/3muH313+jqLTwmWEXNuA6TF6m9qHcJGr0/oWZbkHyrwzPn4eKwxotI6HmY3+rwDlx662GSoq8pvB4L+Y9lntUlNGC8xO1jxAD4OYVpLgOQs6uQpNI/YvIiwzNma3QBkm+VeZ2DMdOEPRm2eLH2tQ9y9Y/5LfNjIuuurKo/iHwVEZ5KnwkQLw22njsGIOb3jCDuMgA5+wmLGf1YTF4keP8lk4GPI/mGqJGMde7lbCtbpXhR9fdzmUPMbxW7Dqr0kwKhv0T+458nKMYRPjV8010GoM7r1n/MdgiOAWjIF6zWM2BMHs88/bnhW7q7a5B8w8eTCO0Mz21IYzXmN4S8zs49hIxxgTlH/4v8xzGPGN/yWL3X6DIA9V7iX2u7g6mu5wV5gmt3zdDSL0wedzxBo3+ViaG0tffVI/mGmHfm2lpz/rpDEH/r/W79Y36ry0t2DsbNudME1fgb8h9/PKswOE+8NLkMQNyv6M9tAOq9dgmSNXoSJo8vnqDqb1tOMtkxuBeSLxu8/dXsdFE1tlXNLKr0IWcJKOYj/LzE6of3lkj2eknZ8g7yH2c81TgqR7w4BqDBc9c/+0O1rjWCnlsEippxMyaPE55Kd4rEuFPMDEpIluzxPnhup2B136u4+BPabxkQzAd7vAOX3HBIc7rrx9ZucsinnGy/Tozrc8RLU74avnwGIOa7P7D1XEnTX8LkccHrldTsIUiWbPNO+vz5+zanNt5ZwWf+37N62GM+2ObNXXbncQIx+pFPeei6avxx0aLT9hwXL42FbPdbG6Q5gKjRD2Hy2OYJqv6fkqafjGTJF09Utp5lzusrZYy/v0iEnoH54IsnqgMfFjXjceRTtnlzlt39saLiJXBXoJy3/zF5rPBMt/9bURs4E8mSX561O6Og0ZsETX+vVPHn7PxoPUPGfPDK210jqfSL/lu7I5+GlZfs2Pi9srcIHhsgmDxGeNaV22V+t22RLPnhCUq/PLxTp9cdAZ/4U+nLoqZfG6Q+BPPBB8/q5CiqxsrccYN8Gm5e19PlFX/FmIfBZor3D0nNXjVT2/YBJLdo8izTZ23kNNS7QaWPCRp9J1+8SKmetwVi/Mw0i9+VM/Rj1q6DmI9o8tra+5qsbWZNE/gP5FOGeEW2CA54+592YLAZ4KV63k+mNt/RmuoVkNzAG/Oy9g8wk8TcZfcsmrPsh6dax9xL7/zQgRfdcJD8ma/UYfzAc78Sqa2zZVW/zcwrO5Cfw88zTdslZTMA1tIfDHa4eclUV/fcS3+wEMkNPPDAKxVv7pJ/OyqR2tyL/BzyFsEa3VwW8bc2/BDU7NsY7JDyUt2P2lWgSG7ggQdeWXgtl93zcUnN/gfyc0h5RH/TquMovQEg2dMw2CHkpXqebmv/8dlIbuCBB16leGYOOt08foP8HMIWwerAhwPOcU3gYEimNn8fgx0enpTa8mLrynXtx51y+gwkN/DAA6/ivDPX1oqasVTQ6IvIz+HhWat//ITf3vcn8CZBjXK6+1kMdvV55uS+nkxt+vqR51w2G8kIPPDAqzbP2hLazGdXSqr+BvJ99XmmIXvSR/xjgQyA00/4wGW3HY7Bri7P2oxFVrM3HnzBt1uQjMADD7yw8WZd3rfv2E2okO+rxcu1d4ct/k6/H28DYL/Z6iLU2LJyg4bBrirvNy1q78FIRuCBB17YeQmVzpdU4xnk+yq2CCb6khx6Xm93+63z3PrffnPc7iTUmEx36RjsavH059pI12wkI/DAA48V3iGLr5ubTHX/Cfm+OjxBMzaOm9+4fYwYAC/xt5zCNMsAnHjWhTMktfctDHZ1eAm1/2QkI/DAA4813pzL7j0N+b46PFGjr1tFmvZ8NNh67hiAmJf419lvHDIArSvv/xAGu0oFf6rejWQEHnjgscqz7h4j31eJp/QusO/iT3cZgDqvW/8x2yE4BqBBJjrBYFeHN6f9gS8iGYEHHnis8iQteybyfXV4zR2bFOsRvssA1HuJf63tDqa6nhfsYT1LwGBXh/fBxVe1IBmBBx54rPKSZHAW8n2VeOnN610GIO5X9Oc2ACNOwQT+BYNdHR6SEXjggcc0r3MwhnxfLV7vC7YBaPDc9c+exFrXGsFh8V892IbBrh4PyQg88MBjmleQAYB+lJo3b8m/HxB0w59auwZgxCkIGeMCDHb1eEhG4IEHHtO8wAYA+b7kPLVvt6zoZwedzAkbA5jg2zDY1eMhGYEHHnhM8wIZAOT7cvFEzbg5yITmfD4gqvTXGOzq8ZCMwAMPPKZ5vgYA+b7MvP8qZp6nSOn+GZKm78JgV4+HZAQeeOAxzfM0AMj3FeDtmKlt+0DBky1oxmkY7OrykIzAAw88pnl5DQDyfaV4Mhn4eOF3ADR6DQa7ujwkI/DAA49pXk4DgHxfSZ5IjK8XcwfgJxjs6vKQjMADDzymeRMMAPJ9xXmE0gKnfXeN1UwAg11dHpIReOCBxzRvjAFAvq8KT6WvFjTxCTXbgsGuPg/JCDzwwGOaN2IAkO+ryZM1Xcgxx7l3B5SJ8U8Y7OrzkIzAAw88pnlDBgD5vuo8YnzCLfz2vj975CkANK4c8+VqHwa7CjwkI/DAA49l3qzlN01Fvg8Bj9CMS/xjfgZg7aj4b8VgV4ln1WIgGYEHHnis8hZ9+uIZyPfV5wmE3meLv9Pvx8MAqPrTI+I/7uofg105nlWLgWQEHnjgscqbd8mtRyLfh4GXfcLu8jvVZQAm1gBI6UemmV+yQ1b7JxgADHZlec76TSQj8MADj0Vec2rTd5Hvq88T0/3vnnRGptFtAHJOXoL0HyWT7O4xBsA8MNhVuG2j0XekdPajSEbggQcea7y2y+4/Q1Z63kO+rzLP1HFLz1s7HlhoG4BYvsmrSSi9S2TS7zIAWzHY1eSlet5Ppjbd1rbs3k8deOktRxyw7AeHJ7T+edLqwbZCD+tz1uctjnOABx544JWS13bZPac2d2y6w9SSHcj31Rd/xwAk012L7av/mnwGIJZQ+r7nNgAYbPDAAw888MBjTfz77GPYAJi867zE3yoKqJPTfQ85BgCDDR544IEHHniM8lwGQNKyfXlv/Y8YALL1FasGAIMNHnjggQceeAzzbANg/b2g6S94FW7UNnfcMxviDx544IEHHngc8MY9xm9r72vKawCSSs9xxX0xBhs88MADDzzwwiP+E1fviYQemtcAyJp+FgYbPPDAAw888PjjWX1+ctYAWP8UNboKgw0eeOCBBx54/PFEQlN5N3GQNP1WDDZ44IEHHnjgccgjxg15DYBAaD8GGzzwwAMPPPD444nE6PK4A0D/B4MNHnjggQceeDzy9CfyyP/umqG95zHY4IEHHnjggccfT9XfyCn/sqYLGGzwwAMPPPDA45cnrDZmTjAAs0n2BAwOeJNwlu9bd5BGD+MdSdnyjqz0jhzWn62/H/u+oEepedn32JmPnl3hGz9vnqTSnazEs6DSd8M2ft6H/h7yFXjF8hLqgwvdq//s5//GuRgc8Arj6btEzbhZUIx5LLYsPehL3zm4uWPDtWFtWSqne37Vetl9Xzj2rOX7s9ZCNtk5GDeF9dOipv8qjPE8/LjTuNK688liC15BGzhAIsYtyFfgFXqIGePz9tb/e7gNwJWeXYUw2OCNv3LS6KU89D9vveyBz0mqsTNU4t/R9fiCs9IC6/3j9+0cbJRU/echi+cd5lX0R1gYP7+XpGQ7kK/AK+SQ1a2rJhgA06nfnlv8t2KwwZvoIlX9pzyIv8OTCL07TPMx75LbT2Bd/F31RUeGK571W3kQf4eXTPX8DPkKvCC8oV4/av8tOe4A6H05xX/c1T8GG7whA6DRDl7Ef+iWqko/HZb5kNPdz/Ii/q788lxotkPN0I/xIv4Wp2XlxiuRr8ALIv7DBmDrZtsAjNYACKr+n2PerPZPMAAYbPBGi/7oF3kRf++r1MrPRzLdvZ0n8bcfMW4PSzwLJHs4L+I/ZADa1yxFvgLPU/xNPZdJ/7ABULY+bBmA8bsAPjvaMCA71gDk6CqEwY44zzYAPIh/YQag/PORVHoe5Un8xxqA6sezlwFgMZ5b2tctQb4CL38N39ZxBkD/zYTAEjX6+oj4W28cMQBbMdjg5TQAvIh/cANQofkg+jaexH/UAIQjnvMZAFbjWVKz5yNfgZe3hm+8AVDpy2MCa+HSx+uGxV+fYAAw2ODlrCRVsmfzIv7BDEAl58PYxpP4DxkAom8PzeqVHAaAZTMrEnoe8hV4OVfvDR2OAciOrIKxdv4dCa4keXCWRIwJBgCDDV4+XuuKdV/iRfz9DUCl56MwA8CCeCWVnsfCEs/jDQDrd7IKNwDIf5HhuQyAm5dY/fDeIwGWINlDxhqALAYbPE9e64o1F/Ii/uFbqhbcADCzVC3d/VhY4tltAHh4jFWYAUD+ixTPNgATeKsH20aTH9m6yG0AMNjg+fFcBoCLavXcBqBa8xHMALAkXm4DUPW90G0DwEsNS3ADgPwXOV6ex/hiRj/WVaDT/znHABS7uxAGO1o82wBws1RtogGo5nz4GwDWxMsxAGGIZ8sA8FTAGswAIP9FT/zzr94TVf1UV4FO9hLLAED8wQvKs2sAuFmqNtYAVHs+vA0Ai+Jl1QCEJp6V3gU8FbD6GwDkK/DGmeCMcYFrCaD+ZYg/eIXwrFUAPC1VGzUAYZiP/AaA2aVqRN8elnhuW3bHCTwVsHobAOQr8HKs4iKG4t4D4DsYHPAK4rl2AuShYG3YAIRlPnIbAKZ7LYzZCbC68Tz30ttO5KmANb8BQL4CL89B6NWuRwDhaoQCHgO8Ag1A2MUrqW45OjzzMdEAsP7MunADUL54dhkALmpYchsA5CvwPA3A911FgHQ9Bge8gngFGAAWxGvu8rtODs98jDUAPBSsFWYAyhvPtgHgpoB1ogFAvgLPt5X7/aMGQKU9GBzwCuIFNACsiNe8ZXcsCs98jBoAXqrVgxuA8sezXQPATQHrWAOAfAVeoGO9qwbAyGJwwCuIF8AAsCRebgNQ/fkYNgA8LVULZgAqFM9K7wKeClhHDQDyFXiBWd3uRwCDGBzwCuL5GADWxMsxACE5ObfxJP7BDEDl4tmvHTBr8TxsAJCvwAt+WBf9ZqzVOAbgEQwOeAXxPAwAi+Jl1QCEZj6Ivo0n8fc3AJWN50INQOgbLanZ85GvwCuomRvRHxqJN9MNPO7bVQiDDV4AA8Dqlau1CiAs85FUeh7lSfy9DUDl47kQA8BCPLe0r1uCfAVeAeJvHY+OxJyg0Sc9+wljsMELYABYvm3t3w64cvORTHdv50n88xuA6sRzUAPASjy3tK9ZinwFXhDecLM/0wAo/b8YiTvzP/5PXvEfd/WPwQYvlwFg/Zl14QagfPPhMgDcLFWbaACqF89BDABL8ew2AMhX4HmL/7ABEIn+1EgNgKgaf5jwZrV/ggHAYIOXywDwULBWmAEo73zYBqCJp6VqYw1AdePZzwCwFs+OAUC+Ai+v+Jt6LpN+1x0A/ZmRgBI0+uLYZwTZsQbAo6sQBjuiPNsA8FKtHtwAlH8+7BoAbsR/rAEIQSMUDwPAYjxbNQDIV+B5PcYfbwAkTX/OvRHQq2PE33rjiAHYisEGL6cB4GmpWjADUKH5IPo2nsR/1ACEI57zGQBmGy2p2fORr8DL/xh/rAEY3glQf2n05CT6m6PVgWMNAAYbvJyVpEr2bJ6WqvkbgErOh7GNJ/G3c8z2sMRzLgPAspn1bweMfBVN8e+zD8cAZN1bAf919BGASt+ViDHBAGCwwcvHa12x7ks8LVXzNgCVno/CDAAL4pVUeh4LSzyPNwCs38kq3AAg/0WG5zIA43h/dxkAY5wByGKwwfPkta5YcyFPS9XyG4BqzEdwA8CKeCXT3Y+FphGKywDw8BirMAOA/Bcpnm0AcvD+7ro9l33TbQAw2OD58VwGgItq9dwGoFrzEcwAsCRebgNQ7Xh2DAAvNSzBDQDyX+R4eR7jj3kEIKnGq44BKHZ3IQx2tHi2AeBmqdpEA1DN+fA3AKyJl2MAwhDPlgHgqYA1mAFA/oue+OdfvTemCFDQjBctAwDxBy8oz64B4Gap2lgDUO358DYALIqXVQMQmnhWehfwVMDqbwCQr8Abf7iWAYqq/geIP3iF8KxVADwtVRs1AGGYj/wGgNmlakTfHpZ4blt2xwk8FbB6GwDkK/ByLuN+xrVGN9dWwBhs8Dx4Pu2AWROvYQMQlvnIbQBYvm3t3w64cvE899LbTuSpgDW/AUC+Ai/PYzCNPuneCfBJDA54BfEKNABhFy+rG2B45mOiAWD9mXXhBqB88ewyAFzUsOQ2AMhX4HndAdB/PhpAnu2AMdjg5eAVYABYEK+5y+86OTzzMdYA8FCwVpgBKG882waAmwLWiQYA+Qo83+MR9yOARzA44BXEC2gAWBGvecvuWBSe+Rg1ALxUqwc3AOWPZ7sGgJsC1rEGAPkKvEDHoNsADGJwwCuIF8AAsCRebgNQ/fkYNgA8LVULZgAqFM9K7wKeClhHDQDyFXjBDlEzsu5HAFkMDngF8XwMAGvi5RiAcMyHsY0n8Q9mACoXz37tgFmL52EDgHwFXkG8bjPWauyNgGgPBge8gngeBoBF8bJqAEIzH0TfxpP4+xuAysZzoQYg9I2W1Oz5yFfgFdTMjegbRuLN/Iv1vl2FMNjgBTAArF65WqsAwjIfSaXnUZ7E39sAVD6eCzEALMRzS/u6JchX4BUg/rtFov9o1AAQerdnP2EMNngBDADLt6392wFXbj6S6e7tPIl/fgNQnXgOagBYieeW9jVLka/AC8Ibbvan75ZV/baRuBM1+p284j/u6h+DDV4uA8D6M+vCDUD55sNlALhZqjbRAFQvnoMYAJbi2W0AkK/A8xZ/xwBkrxmpARAzxuUT3qz2TzAAGGzwchkAHgrWCjMA5Z0P2wA08bRUbawBqG48+xkA1uLZMQDIV+DlFX9Tz2XSP2IAEmo/ca8CWDr2GUF2rAHw6CqEwY4ozzYAvFSrBzcA5Z8PuwaAG/EfawCqH89eBoDFeLZqAJCvwPN6jD/eAAgZ/YJRA5DRPztG/K03jhiArRhs8HIaAJ6WqgUzABWaD6Jv40n8Rw1AOOI5nwFgttGSmj0f+Qq8/I/xxxqAoX0AVP1U18mpn+xUB443ABhs8HJWkirZs3laquZvACo5H8Y2nsR/uNBY3x6aRig5DADLZta/HTDyVTTFv88+HAOQHd0IKKMfO5r8MvRgiRgTDAAGG7x8vNYV677E01I1bwNQ6fkozACwIF5JpeexsMTzeAPA+p2swg0A8l9keC4DMIa3erBtJMDmZLbMGmsAshhs8Dx5rSvWXMjTUrX8BqAa8xHcALAiXsl092NhiWe3AeDhMVZhBgD5L1I82wCM5yU7BvcaCbKZHbdPdRsADDZ4fjyXAeCiWj23AajWfAQzACyJl9sAVDueHQPASw1LcAOA/Bc5Xq7H+Kr+/pQpu2vGBJqo6K9ZBqDY3YUw2NHi2QaAm6VqEw1ANefD3wCwJl6OAQhDPFsGgKcC1mAGAPkveuKfd/XeXyYEm6jqz0L8wQvKs2sAuFmqNtYAVHs+vA0Ai+Jl1QCEJp6V3gU8FbD6GwDkK/BcnQBV+uvxAVcjqPp/YnDAC8qzVgHwtFRt1ACEYT7yGwBml6oRfXtY4rlt2R0n8FTA6m0AkK/AG28A9J/mWKer92FwwAvM82kHzJp4DRuAsMxHbgPA8m1r/3bAlYvnuZfediJPBaz5DQDyFXg5DADRN00IIoEYP8DggBeYV6ABCLt4Wd0AwzMfEw0A68+sCzcA5YtnlwHgooYltwFAvgIvnwGg/zbxCojQKzA44AXmFWAAWBCvucvvOjk88zHWAPBQsFaYAShvPNsGgJsC1okGAPkKPI+DDJBcW3Wei8EBLzAvoAFgRbzmLbtjUXjmY9QA8FKtHtwAlD+e7RoAbgpYxxoA5Cvw/O4AGJ+b+AggM3A8Bge8wLwABoAl8XIbgOrPx7AB4GmpWjADUKF4VnoX8FTAOmoAkK/A8z8S6oMLcxVBCRgc8ALzfAwAa+LlGIBwzIexjSfxD2YAKhfPfu2AWYvnYQOAfAVewCPdP8NZ/ecKo93WUsC3MdjgBeJ5GAAWxcuqAQjNfBB9G0/i728AKhvPhRqA0DdaUrPnI1+BF+j2v0Zft4TfPGonxJuk6k/n7SqEwQYvgAFg9crVWgUQlvlIKj2P8iT+3gag8vFciAFgIZ5b2tctQb4CL9iRfcKMmVhOAyAQ2p+znzAGG7wABoDl29b+7YArNx/JdPd2nsQ/vwGoTjwHNQCsxHNL+5qlyFfgBeFJan+3GTN1ue8AEOOWCeI/7uofgw1eLgPA+jPrwg1A+ebDZQC4Wao20QBUL56DGACW4tltAJCvwMvHsxr9JZS+77kMQM3YYhKNrhp5s9o/wQBgsMHLZQB4KFgrzACUdz5sA9DE01K1sQaguvHsZwBYi2fHACBfgZdX/E09l4l5KFsUxwBMXAqo6l+wPmA5hTEGIH9XIQx2VHm2AeClWj24ASj/fNg1ANyI/1gDUP149jIALMazVQOAfAVeXp6p444BaE73ftaqAch3kh4zJP6WUxgxAFsx2ODlNAA8LVULZgAqNB9E38aT+I8agHDEcz4DwGyjJTV7PvIVePnE320Akh2bFky49e+8mpevmTXeAGCwwct1WN0AeVqq5m8AKjkfxjaexH+4vkjfHpZ4zmUAWDaz/u2Aka+iKf599uEYgOzu/RTalC/ArKKAOjOxv+IYAAw2ePl4rSvWfYmnpWreBqDS81GYAWBBvJJKz2NhiefxBoD1O1mFGwDkv8jwXAZAUrPP5wuwmhEDoG4dtJwCBhs8L17rijUX8rRULb8BqMZ8BDcArIhXMt39WFji2W0AeHiMVZgBQP6LFM82AMNLAI0tXkE2ZADMD9yIwQbPj+cyAFxUq+c2ANWaj2AGgCXxchuAasezYwB4qWEJbgCQ/yLHcz/GJ8a3/AxATMrQCzHY4PnxbAPAzVK1iQagmvPhbwBYEy/HAIQhni0DwFMBazADgPwXPfEft3qP6Of4GYAaq1MQBhs8P55dA8DNUrWxBqDa8+FtAFgUL6sGIDTxrPQu4KmA1d8AIF+BZ63cyh6StwZgpFo3/cg08807MNjgefGsVQA8LVUbNQBhmI/8BoDZpWpE3x6WeG5bdscJPBWwehsA5Cvw6G5Bpe9O6RyMBVuyk7MpEAYbPBfPpx0wa+I1bADCMh+5DQDLt6392wFXLp7nXnrbiTwVsOY3AMhX4DmH/kQhm3asxWCD58kr0ACEXbysboDhmY+JBoD1Z9aFG4DyxbPLAHBRw5LbACBfgTfm/fcWYgCuxGCD58krwACwIF5zl991cnjmY6wB4KFgrTADUN54tg0ANwWsEw0A8hV4Ez6jFXA7dOAzGGzwvAtKghkAVsRr3rI7FoVnPkYNAC/V6sENQPnj2a4B4KaAdawBQL4CL8eR0U8Jfjt01WAzBhs8T14AA8CSeLkNQPXnY9gA8LRULZgBqFA8K70LeCpgHTUAyFfg5dm6XdOFgoJT1OjrGGzw8vJ8DABr4uUYgHDMh7GNJ/EPZgAqF89+7YBZi+dhA4B8BV6+Q3/Fb/XfhJeg0ocw2OD5tQPmpVrdqgEIzXwQfRtP4u9vACobz4UagNA3WlKz5yNfgedxGOOF3973J3+8SYRePaarEAYbvAAGgNUrV2sVQFjmI6n0PMqT+HsbgMrHcyEGgIV4bmlftwT5Crx8h6gZXxsn/jFfAyCq+qkj/YQx2OAFMAAs37b2bwdcuflIpru38yT++Q1AlTZFCWgAWInnlvY1S5GvwMv7/D9DP+YS/zr78DYALUSfkVC37Bp/9Y/BBi+XAWD9mXXhBqB88+EyANwsVZtoAKoXz0EMAEvx7DYAyFfgjTt2zNS2fcAW/3rzmOoyADX5gst6c1xWe3/jNgAYbPByGQAeCtYKMwDlnQ/bADTxtFRtrAGobjz7GQDW4tkxAMhX4OU4fmHHS9w+RgyAl/hbTmFaUum9c7ifcB8GG7ycBoCXavXgBqD882HXAHAj/mMNQPXj2csAsBjPVg0A8hV4OZ//q/rNZow0WHruMgAxL/Gvs984LdmxccmYfsIYbPBcBoCnpWrBDECF5oPo23gS/1EDEI54zmcAmG20pGbPR74CLxevZeXGC8wYme4yAHVet/5jtkMYMgDzlt1zMAYbvJyFJUr2bJ6WqvkbgErOh7GNJ/EfXlWkbw9LPOcyACybWf92wMhXkeSpfbsPXHrLAS4DUO8l/rW2O5jqel5gBpf+Zww2eON5rSvWfYmnpWreBqDS81GYAWBBvJJKz2NhiefxBoD1O1mFGwDkv0jwUr3PmzHSaBuAuF/Rn9sAjDgFidANGGzwxvNaV6y5kKelavkNQDXmI7gBYEW8kunux8ISz24DwMNjrMIMAPJfZHiprnW2AWjw3PXPDrJa1xrBkTfLxFAw2OCN57kMABfV6rkNQLXmI5gBYEm83Aag2vHsGABealiCGwDkvyjxWjrWK/bV/x5BAq3WrgGoGbsh0IPHYLDBG8+zDQA3S9UmGoBqzoe/AWBNvBwDEIZ4tgwATwWswQwA8l/UeG0rfnhcoPhzGYAJtwkWLn28TlLpPzDY4I01AEM1ANwsVRtrAKo9H94GgEXxsmoAQhPPSu8CngpY/Q0A8lXUeFJqy+utFy6OBQ24Gu8lPLQXgw2e+7BWAfC0VG3UAIRhPvIbAGaXqhF9e1jiuW3ZHSfwVMDqbQCQryKZn4m+YUqpXlKGrsBggzeG59MOmDXxGjYAYZmP3AaA5dvW/u2AKxfPcy+97USeCljzGwDkqwjzLi6ZAZDJwBwMNnhjeAUagLCLl9UNMDzzMdEAsP7MunADUL54dhkALmpYchsA5Kso88TMoDSllC8z4T+DwQbPrx0wq1euc5ffdXJ45mOsAeChYK0wA1DeeLYNADcFrBMNAPJVlHkCob+cUuqXCb4Rgw1eoQaAFfGat+yOReGZj1EDwEu1enADUIHq6OEaAG4KWMcaAOSrqPNETb+29AaAGJ/AYINXiAFgSbzcBqD68zFsAHhaqhbMAFQonpXeBTwVsI4aAOQr8KwGQMaikhuAA5T7GiSl5y0MNnhBDABr4uUYgHDMh7GNJ/EPZgAqF89+7YBZi+dhA4B8BZ6Vl/U3rKX7pVj9NyFYk+nNOgYbPD8DwKJ4WTUAoZkPom/jSfz9DUCln5EWZgBC32hJzZ6PfAXeUGxrxsYgwm/v+xN4k6DGob7TK9dlMNjgeRkAVq9crVUAYZmPpNLzKE/i720AKh/PhRgAFuK5pX3dEuQr8IZu/xN9SQDxjwUyAHawTncC9sCl/7YAgw1ePgPA8m1r/3bAlZuPZLp7O0/in98AVCeegxoAVuK5pX3NUuQr8IZiW+mXfcTf6ffjbQDsNzfYV/9O0DYJWvZ3GGzwxhsA1p9ZF24AyjcfLgPAzVK1iQagirdJAxgAluLZbQCQryIs/qr+lI+e19vdfuvybf3vfnPcvvp3DMBQsAoavQmDDZ7bAPBQsFaYASjvfNgGoImnpWpjDUB149nPALAWz44BQL6KNk/UjOs84iVuHyMGwM8pTHMZgMbRHb30kzHY4DkGgJdq9eAGoPzzYdcAcCP+Yw1ACK6UPAwAi/Fs1QAgX4Fnde7NEy8Ntp47BiDm94wg7jIAY/sJd3ZadwFexORFnGcaAJ6WqgUzABWaD6Jv40n8Rw1AOOI5nwFgttGSmj0f+SrqPP05jxq+6S4DUOd16z9mOwTHADTkCtZgjwEweTzzrG6APC1V8zcAlZwPYxtP4j9kAIi+PSzxnMsAsGxm/dsBI1/xzjNj4Nt5Vu81ugxAvZf419ruYKrreUHOYJ1Nsidg8qLNa12x7ks8LVXzNgCVno/CDAAL4pVUeh4LSzyPNwCs38kq3AAg//HGS6gPLswRL00uAxD3K/pzG4B6712CdtdIqv48Ji+6vNYVay7kaalafgNQjfkIbgBYEa9kuvuxsMSz2wDw8BirMAOA/McbT9D03+WJF8cANHjquf2hWtcaQd8tAkWNfgeTF12eywBwUa2e2wBUaz6CGQCWxMttAKodz44B4KWGJbgBQP7jkkfo1XnipWlCDZ+PAYgF3R9YytCjMXnR5dkGgJulahMNQDXnw98AsCZejgEIQzxbBoCnAtZgBgD5j1eeuGrgsDzx0ljIdr+1gZsDjN4F+D0mL5o8uwaAm6VqYw1AtefD2wCwKF5WDUBo4lnpXcBTAau/AUC+4nc1lv70pOOvUOEfNQD6tZi8aPKsVQA8LVUbNQBhmI/8BoDZpWpE3x6WeG5bdscJPBWwehsA5CuueWr2qlLGX2EGQN16JCYvmjwz6aR4WqomawOfCc06dVdRDy/V6ubv+t+wxPOcy+77HFeNlgjNIF9Fk3fAsjuPror4O8Eqp7ufxeRFkEfoo3ytU+9/IEzz4V7Ww7r4+y8brnCvhdTm+/kpYB1akfVz5Kvo8eRU96+rKv7WlzZ3bPw2Ji+yPJUL8Vf7P59QenaFaj6I8d+tq4w9WRf/xOqH97aalIQqnlNbdraseOAsHmpYRI1+GfkqmryWjg3frKr4W8f8S753mJU8MXkR5RHjh9bz82TnYHxK52Bs/DFr+U1TjzrjvL2POf3smc5h/dn6+1zv9ztKxZvfuXaqnBk4WFazN5q/b0cY50Mgxm9lop9zyIVXN4dt/Px4cnvPftazaVE1/hDKeFaz74vEuD6Z0Q9auPTxurCNnxfPOtesVViipv8Y+SqqvN4d8y++YX5VxX+0wMegmDzwwAMPPPDAq0jL8P5QiP9Qi2BV/wImDzzwwAMPPPDKz2tb8aNzJiv+gVf/+T2jsm6nSip9GZMHHnjggQceeOXjyUrvS9ZjoknUnDhb/wfeJKjRdztKzbgOkwceeOCBBx545eM1d2y6fpLiHwtkAFz9hJv8qg0FbeAATB544IEHHnjglYvXs6tZ622bhPg7/X68DYD95gb76r8pSMGBoBk/weSBBx544IEHXhl4xKCTEP96u9tvnefW//ab4/bVf6Ort7DnLYP8W1Ji8sADDzzwwANvMjyr4L7IAv64fYwYAD+nMM1lAAJ1FbLWpwqq8TdMHnjggQceeOCVkqe/YhXcFyH+DbaeOwYg5veMIO4yANMLKTgQNHoTJg888MADDzzwSsezNq4qQvwdDXcMQJ3Xrf+Y7RAcA9BQaLWhlNE/iMkDDzzwwAMPvNLxZiv9BxYo/s7de8cA1HuJf63tDqa6nhcUtdRAVLIPY/LAAw888MADrwQ8QmkRm/Y1uQxA3K/oz20A6gPvEpTjy+e0P/BFTB544IEHHnjgTZ4nqvSTRWza5xiABk89tz9U61ojWLT4W1+6aNGpeyWVnt9i8sADDzzwwAOveJ6g0SeL3LG3KVANn8sAxCYr/s6Xt7SvS2HyJs8TNOMdiRjfsvrDi5lBKeiRUPoSBy25+UCrY5RzWH+2/r4QDnjggQdeITyrO6i1M6yg0neR7yfPkwldXOR2/Y2FbPdbWyrxt45jzm7fV1KNlyH+k+Cpxj8EYhzHcr9y8MADL5o8SR34f4Kqv418XzzPNFF/8lv6N+n5LVb4/b5cIrQT4l88T8wYlyMZgQceeKzyRM34GvJ98TyRGKsrOb8lDYbZyuA+gqa/BfEvct1nZlBCMgIPPPBY5clkYA7yfZE8or+Z7Bjci0nxH7kNRIxbIP7F8ZCMwAMPPJZ5C5c+Xod8XySPGDcwLf7Dt4D0uZJKd0L8C+chGYEHHnhM8zoHY8j3RfF2zFIHkkyL/6gJoJsh/oXzkIzAAw88pnkTDADyfRCeqNIHuBD/oedAq4wTIf6F85CMwAMPPKZ5YwwA8n1QnrXsmwvxH60F0P8D4l8YD8kIPPDAY5o3YgCQ74PzjIFKiH/g1X+l+HJB0z8C8S+Mh2QEHnjgMc0bMgDI94XwZpPsCWWeX2fr/8CbBDWW4ssFlT6EYAjOQzICDzzwWObNWn7TVOT74DyB0P4KiH8skAFw9RNuKsWXJ9T+kxEMwXlIRuCBBx7LvKPOOG9v5PsCeKpxVJnF3+n3420A7Dc32Ff/TaUKrkS6awDBQAs2AEhG4IEHHmu8Y04/eybyfTCGSIyuMot/vd3tt85z63/7zXH76r/R1Vt40sE1d/ldH0YwFGYAkIzAAw88FnluA4B873Xou8RVA4eVcT7i9jFiAPycwjSXAWgsZXAlO3q2IhiCGQAkI/DAA49VnmMAkO99DqKvK+N8NNh67hiAmN8zgrjLAEwvdXBJSu8Cy/EgGLwPJCPwwAOPZZ5VAwDx93vuT3cmVDq/TPPhaLhjAOq8bv3HbIfgGICGcgWX+cPXIxi8eUhG4IEHHss8axUAxN+38v++Ms2Hc/feMQD1XuJfa7uDqa7nBWULLjkzcLB/j4Bo7xuAZAQeeOAxzcvZCwD53r3nv6z0HFCm+WhyGYC4X9Gf2wDUB94laBLBJRLjRwiG/DwkI/DAA49pXsEGIGL5Xs3eVcb5cAxAg6ee2x+qda0RrKlEcFmdAgVNfw/BkJuHZAQeeOAxzSvIAEQr3wua8c7Bl9xySBnnoylQDZ/LAMQqJf7OSyL0uwiG3DwkI/DAA49pXmADEL1839yx+foyz0ew1XsuA1BT6eBKdgzuJan0ZYj/llwGAMkIPPDAY5cXyABEL99LypaXDj8/I4ZifosV/lIFl0joJRD/iTwkI/DAA49pnq8BiGa+b+5YsyyM81udLz9zba2k6U9A/MfykIzAAw88pnmeBiCa+V5O9/x80aJT94L4u2sB1P6PQPzH8pCMwAMPPKZ5eQ1AdC/25iy7+2MQ/xy8ZKqrG+JPCzYASEbggQdeKHk5DUCE7/Smu9ZC/PPwDr7oxkNlpfcdiH9wA4BkBB544IWWN8EARFj8U71vzb/4hvkQfw+etTQC4h/MACAZgQceeKHmjTEA0a7xaunYeDXE34cnZdY1CRp9EdtHehsAJCPwwAMv9LwRAxBt8U+mep8/6kx1vzCJf+DVf5UOLpnQxdg+Mr8BQDICDzzwmOANGQCs7pqzcs3iEM2vs/V/4E2CGisbXLtrREIfjvoOUkhG4IEHHss8qxtg1MU/me55KGTiHwtkAFz9hJsqHVzJjH6QoNF3oryJBJIReOCBxzLvqDPO2zvK4i8pPW81a71tIRJ/p9+PtwGw39xgX/03VSO4JGJ8JcqbSCAZgQceeCzzjjn97JlRXtotk2wmROJfb3f7rfPc+t9+c9y++m909RauaHAtXPp4naDRJ6O6jhTJCDzwwGOZ5zYAkVvdpWZ/bu1yG5L5iNvHiAHwcwrTXAagsVrBJaoPHiOpdGcUl5IgGYEHHngs8xwDEEHxf19QjCNCMh8Ntp47BiDm94wg7jIA06sdXOZA3xjFpSRIRuCBBx7LPKsGIJL7uhDjWyGZD0fDHQNQ53XrP2Y7BMcANIQhuPbtHGyUtOxzUasmRTICDzzwWOZZqwCiJv4CMX6b7ByMh2A+nLv3jgGo9xL/WtsdTHU9LwhNcM1Z8aPPRq2aFMkIPPDAY5rn2w6YtwJvfZeoGotCMh9NLgMQ9yv6cxuA+sC7BFUwuBKprjVRKihBMgIPPPCY5hVsANh+zCtq+u0hmg/HADR46rn9oVrXGsGaMAbXIedf3ZpQel6NyjMlu2c0khF44IHHJG9+59qpURF/QdNfSnYM7hWi+WgKVMPnMgCxsIq/w5OV7NlReaZ04NJbD0MyAg888FjlJVQ6PzI7uhJ6RsjmI9jqPZcBqGEhuASN3h+JTSRU/RokI/DAA49VnimK342C+IsqvYPZ+S1W+Kv1Y1pXGXuKqvEH7qtJNf09UdVPRTICDzzwmBN/jZ5uHju4v/JX6TP7q9npPMwvM8E1m2RPiEhw7TRd9N2iNvApgWQP9zokpXdB27I7Tph76W0nOof1Z+vv/T4LHnjggVcKnnXRYuawe62KeN7zs3WRJmv6kRD/KvwYUaNXRblXAHjggQceeNXjmRr0ZYh/tX6MtcSE0EcRrOCBBx544FWSJ6j0oSmdnXtA/Kv4YxKrjVZJ1d9AsIIHHnjggVcR8df0/xOUfhniH4IfIxO6GMEKHnjggQdeJXiCqn8B4h+iHyMTfS2CFTzwwAMPvDLz7uFB/AOv/mNhacoR535DTiq9LyBYwQMPPPDAK8uVv6b/bqa27QOM66Wz9X/gTYIaWViX2rbs3k8lUj3vI1jBAw888MAr7W1/+q6oPngMB+IfC2QAXP2Em1jZlKI5tfEKBCt44IEHHnil5RnLORB/p9+PtwGw39xgX/03sbQjlajSBxCs4IEHHnjglYRH6N0ciH+93e23znPrf/vNcfvqv9HVW5iJ7SitbRkFVX8KwQ8eeOCBB94keb9Idg7GGd++OW4fIwbAzylMcxmARtb2ohYUY56g0tcQ/OCBBx544BXDEzT61+SqwWbGxb/B1nPHAMT8nhHEXQZgOquNLWRt4DPe+1Ej+MEDDzzwwMvxfqsPS0Y/hXHxdzTcMQB1Xrf+Y7ZDcAxAA+tdrUTN+CaCHzzwwAMPvMJ4xpWMi79z994xAPVe4l9ru4OprucF7Le07OzcQyC0H8EPHnjggQdeEJ5IjK4pU3bXMN6yucllAOJ+RX9uA1AfeJcgBgZHSvfPEDX6ewQ/eOCBBx54njyVPtO6ytiTcfHf02UAGjz13P5QrWuNIDfi7yoKPELQsm8h+MEDDzzwwMtz/F3ODBzMgfg7rOlBN/yptWsAuBN/hzdn5ZrFCaVnF4IfPPDAAw+8CUV/hJ7BifjvGXj1nssAcCv+Dq85tf7rCH7wwAMPPPDGPPfXjDRH4h+cV6zwszo4yXTXXQh+8MADDzzw7PX+N0VS/CfzYnVwZi2/aerElQE4mcADDzzwosczuq3VYhD/CIi/w2tr72uSNP0JBD944IEHXmRv+z9ubR0P8Y+Q+I9sEpQZlASV/gknE3jggQdexHgq/WOSDM6C+EdQ/EeWB5Ls4RLR38TJBB544IEXkWf+Kn0t13I/iH+ExH/kToBKP2kGxQ6cTOCBBx54vBf86e+Zx0cg/hD/0TsBGr0UJxN44IEHHt88mdDFEP8CVv9FZXAkYvwLTibwwAMPPG55X426+Lu2/g+8SVBjVAZHJPr3cDKBBx544PHFEzXjOoj/kPjHAhkAVz/hpogMzh6LFp22Z7Jj8704mcADDzzweBF/+u8Q/yHxd/r9eBsA+80N9tV/UxTE3+Gd9KlT9k6mN63HyQQeeOCBxzzvnvGtfSMq/vV2t986z63/7TfH7av/RldvYe7F3zmOOuO8vUVV78bJBB544IHHLG/9lDPX1kZc/Pew9TzuNgB+TmGaywA0Rkn8HV5be1+9GUAGTibwwAMPPMZ4qrFl4dLH6yD+Q3fyp7kMQMzvGUHcZQCmR1H8nffM7uxuEAl9GCcneOCBBx4zvMFk52Ac4j+i4Y4BqPO69R+zHYJjABqiLP7Oy+obIKj0MZyc4IEHHngh5xH66L6dg40Q/5G7944BqPcS/1rbHUx1PS+IvPiP7BGQ7p8hEPpLnJzggQceeKHl/VeyY3AviP9I3Z5jAOJ+RX9uA1AfeJegCC2taLmc7j/RBODkBA888MALg/jPurxvX4j/mFV7jfad/Bq/D9W61ghC/L3uBIw8DsDJCR544IEXhtv+uPKfwGsKVMPnMgAxiL//y6oJEJXswzg5wQMPPPCqX/CHZ/45eY2FbPdbC/EPzltwXsf+idTmB3FyggceeOBVi6f3SelHpkH8J8ErVvijPtjHn37Rfol09xacnOCBBx54ld/kZ37n2qnQI7QIruqOgRLpfwAnJ3jggQdeBbf3xQ5/EP9Q8Do79xA1/XacnOCBBx54lWjsE/m9/SH+4eLtrjGD80ac7OCBBx54aOkL8Y8gzwzQb+JkBw888MArOe+r0COIf+h5pglYKqn6+zjZwQMPPPAmxxM0/T0pM/Al6BHEnxmeRIxPmCbgDZzs4IEHHnhFir9KXzMNwEegR6UX/8Cr/zDYxfHEVQOHmcH7Ak528MADD7wCeSr9o5wZOBh6VHKes/V/4E2CGjHYxfGSK3vkZLrnSZzs4IEHHnjBeKJmPJ4kg7Mg1mUR/1ggA+DqJ9yEwS6ed+g5V0hyutvAyQ4eeOCB58czuvdXs9OhH2URf6ffj7cBsN/cYF/9N2GwJ8c75vSzZybTm+7EyQ4eeOCBl6/gj95k7asC/SiL+Nfb3X7rPLf+t98ct6/+G129hTHYk+RJhGYkTd+Fkx088MADb+R5/06R0BT0o2y8uH2MGAA/pzDNZQAaMdil4wmq/gVB099C8gAPPPDAo383L4zOgH6Ujddg67ljAGJ+zwjiLgMwHYNdet7QCgFCn0XyAA888CJ85f9Mrkp/6EfJeI6GOwagzuvWf8x2CI4BaMBgl4+XWP3w3kPtLJE8wAMPvIjxRGJ0ta4y9oR+lI3n3L13DEC9l/jX2u5gqut5AQa73DyrkRAxvj62LgDJAzzwwOOUp9KdMqFXjG/oA/0oOa/JZQDifkV/bgNQH3iXIAx2SXiCZpwmaPr/IXmABx54vPIEjf5VyuinQD8qwnMMQIOnntsfqnWtEYT4V4GX0Prnyenep5A8wAMPPA55v0io2Rbk+4rxmgLV8LkMQAziX13ekedcNjuR7lqL5AEeeOBxwyP0bin9yDTk+4ryGgvZ7rcW4h8eXnPHxlWSmn0fyQM88MBjlSeo9F2Z6MuQ70PMK1b4Mdjl5c0m2RMkTX8OyQg88MBjTvwJfVZUHzwG+Z4dHgYnZDxrmYyg0fuRjMADDzxmeITePVPb9gHke4g/eCXgmSfZuaJGX0cyAg888MLKs1YyWTudIt9D/MErMS+5arDZPOG2IRmBBx54oRN/lT4kKP0y8j3EH7xy8c5cW2uebF+VVP19JCPwwAOv2jzzqv89MWNcnquLH/I9xB+8MvDEjH6sQIxnkYzAAw+8qvFU+oykGkchP0P8wasw74PndgrNqa4fIRmBBx54leaJmn77/mp2OvIzm+IfePUfBjvcvNb2NReYJ+fLSG7ggQdeuXmCpr+Ur30v8jMTPGfr/8CbBDVisMPNa16xbp+h3baQ3MADD7wy8ayr/mTH4F7Iz0yLfyyQAXD1E27CYLPBE4jxUVGjv0dyAw888ErFM/PKb8288iHkZ+bF3+n3420A7Dc32Ff/TRhsdnizO7sbzJP1O+ZJvQPJDTzwwCuaZ21HToxvJTsH48jPzIt/vd3tt85z63/7zXH76r/R1VsYg80QT9b0I82T97+R3MADD7wixP/ngmIcgXzKBS9uHyMGwM8pTHMZgEYMNqO8zsGYtUZXUPW3kdzAAw88P56k9Lwlk2zG2nME+ZQLXoOt544BiPk9I4i7DMB0DDb7PNPJzzOPnyBZggceePl4yXTPQ81abxvyKTc8R8MdA1Dndes/ZjsExwA0YLD54S1adNqerSsfWCIr3S8iWYIHHngjwp/qfX7OyjWLkU+54jl37x0DUO8l/rW2O5jqel6AweaQt+CstJBMbb5W0LJvIVmCB16Eeanet1o6Nl591Jnqfsin3PGaXAYg7lf05zYA9YF3CcJgM8ubpQ4kzYSwBskSPPCixuvZlUh1rZl/8Q3zkU+55TkGoMFTz+0P1brWCEL8I8STNXqSpOo/R7IEDzz+eXK65+dzlt39MeQ/7nlNgWr4XAYgBvGPKK+zcw9JpReJRP8zkiV44PHHk5QtLzV3rFm2aNGpeyH/RYLXWMh2v7UQf/Da2vuaREK/Laj0XSRf8MBjnydoxjvNHZuvP/z8jIj8B17OGoApRb4w2HzyEquNVjN53GMmnR1IvuCBxyBP1d+XFP3Ogy+55RDkP/BK/sJg889rW3rrkcmOrg1DRUNIvuCBF36eSncKhN4nKz0HIP+BB/EHb9K8A5bddnwi1dWD5AseeGHl6bskoq9LqHQ+8h94EH/wSs5LqA8ulFRjC5IveOCFhycSo0tcNXAY8hV4EH/wys4TiHGcRChF8gUPvOrxBEL7TUN+FPIVeBB/8CrOkzT9ZEEzfoJkDh54leQZA7NJ9gTkK/Ag/uBVnSeqDx5jPX80k9MOJHPwwCsLb4eo0gesNt/IV+BNVvwDr/7DYIMX9DW0fFDN3mwms38gmYMHXgl4RH9TIsYN1tbdyFfglYDnbP0feJOgRgw2eIXwDjuvs7l15cZvyEr3n5HMwQOvcJ6g0j+JxFid7BjcC/kFvBKKfyyQAXD1E27CYINXDO/4M5buIyvZi0VN/xXEATzw/HmCRp+UCV08v3PtVOQX8Eos/k6/H28DYL+5wb76b8Jggzc53u4aUdVPlVT9QYgDeODl4FmraojxCeQX8Mok/vV2t986z63/7TfH7av/RldvYQw2eJPmJTP6QWay+66k0lchDuBFmqfSl0XNuE7QBg5AfgGvjLy4fYwYAD+nMM1lABox2OCVmtfW3ldvJsAvWkuahnYxgziAFwlezy7zSp8Kqv4Fv9v8yC/glYDXYOu5YwBifs8I4i4DMB2DDV65eTIZmCMT/VuS0vNniA14PPJkpfel5o5N1zdrvW3IB+BViOdouGMA6rxu/cdsh+AYgAYMNniV5B1z+tkz56z48bnJ9GY9kdqyE2IDHtu83h3JdHd/24ofnXPUGeftjXwAXgV5zt17xwDUe4l/re0OprqeF2CwwasaTyI9zWYy/aqo0l9DbMBjiSenun/d0rHhm/MvvmE+8gF4VeI1uQxA3K/oz20A6gPvEoTBBq8CPCmjf1DUjG9KKn0GYgNeKHmq/rSkZq86YNmdR+P8BS8EPMcANHjquf2hWtcaQYg/eKHlCYpxhESMb4ka/T3EC7xq8gRN/51E6NVWJz6cv+CFjNcUqIbPZQBiEH/wWOJZndBEYlxvJu3/hXiBVxme/pxI6Let1tg4f8ELMS/Y6j2XAYD4g8ckb9Gi0/acc9kPP57s2Pi9hNL1NMQLvFLyBFV/ylqvbzW9wvkGHle8YoUfgw1eWHliakuLeZV2iajRzUPNVCCG4BXCU/U3BM3YKBJ9iaD0yzjfwEOLYAw2eAzyrM1WRHXgw8M7rtEnIYbg5eIJhP5S1PRrRdVYtHDp43U438CD+GNwwOOMZ13RDV3ZWVd4Gn0dYhhNnpTa8rpM9A3mf79YzAxKOD/Ag/gH/3J3j4CmEmwXDB54leedubZWUnoXNHdsUhLpzesTSu8LQwKh9k1ObMzPjxEc8KrPS/U+L6e717Z0rFfaVvzwuNYLF8dwfoAXdV4xX+7uEdBYgu2CwQMvNLx5S/79AJkY54iacbMpIP8lqXRnYWKzdVhwRo6tkxQv8Irg7TCPX4iqfnNrx4Z/PnDpLQfg/AAPvMmLf4Nrf+HpJdguGDzwQs2bqW37gEwGPi4S4+tDLVu9uhgOidfYY/JiCJ7/JjxDc2KYpu1rcoZ+zJozxDN44JVO/GtcPQKmuZoL1IAHXtR4sqYLVu920xBkBELvk7TsE2K6/11Z7d/tPia1new4FnjWcjz6rqTpT5h/f695aFJGP8WaC8QzeOAVzizky+tdPQLik9wuGDzwuOOddEamsbXjgYXJdNfihLLlOtMU9Ama/kJRYkiy5tHvOrKTE1cWeWr2eUk1tpjvuUYi+jnmnw8JWJ2PeAYPPG9ebdBNgmpcPQKco26SXw4eeJHhtbX3NYmEHioT45/Mf6YkYtwgEqNr6EpW1d8YL4jDYjj2KE5YQ84b+u1Zcwz6uxNK3/dkZYvSnO79bLJj04L9FNqE+AMPvLLwYoEMgOvNda4jVoIvBw888OyXsNqYaW0rK2aMz8vq1lWmIN4iqVs3S8rWhyVF/42k0pftorYixFqfcExO/APwVP19859/sbo4iqr+U5Hom0zj828SGSCm8fmc9VuldP8MxAt44FWNF8gA1I4/pkziBR544BXL212TWP3w3tLqwTYxox9rCuupQsa4QCaGYjWjMY/vCxq93xTe9ZJmdIuakTXF+SHzeFRW+n9hivBTsqI/Y+1jL2j6S+Z7/2q+9+/WYf279XfWf7O6LQ5tlqTqPzf/2yPmMWixLKa1Zt7k/EhW9dtkNXtNQu0nQka/wPp/sf6frP+3ZMfgXtb/K+YXPPBCz6vxcwt7uI6aSX45eOCBBx544IEXEt7/B8Ahp4cl2J+4AAAAAElFTkSuQmCC">\n\n                    </ion-thumbnail>\n\n                    \n\n                <h2 style="text-transform:capitalize;">{{ order.Name }}</h2>\n\n                <p>Branch:{{ order.Address }}</p>\n\n          <div *ngIf="(order.Id!=ActiveTenantId)">\n\n        <button ion-button clear item-end (click)="OnSelect(order)">Set As Default</button>       \n\n      </div>\n\n          <div *ngIf="(order.Id==ActiveTenantId)">\n\n        <!-- <ion-icon name=\'rose\' item-end color="secondary"></ion-icon> -->\n\n        <ion-icon name="heart" item-end color="danger">Active</ion-icon>\n\n       \n\n        \n\n      </div>\n\n      <!-- <button *ngIf="(order.Id!=Active)" ion-button (click)="OnRemove(order.Id)" item-end>Remove</button> -->\n\n      </ion-item>\n\n      </ion-list>\n\n\n\n      <!-- <button  id="register-button7" ion-button color="positive" (click)="OnAddBank()" block>\n\n        \n\n        Add Bank Account\n\n      </button>\n\n      <div *ngIf="showHide">\n\n        <form id="mobileRecharge-form2" (ngSubmit)="OnSubmit(MobileRecharegeform)" #MobileRechargeform="ngForm">\n\n          <ion-item id="mobileRecharge-select1" *ngIf="Options">\n\n            <ion-label>Select Your Bank</ion-label>\n\n              <ion-select id="mobileRecharge-input3" interface="popover" name="OperatorId" #OperatorId="ngModel" [(ngModel)]="tenant.TenantId" (ionChange)="OnAddBankSelection(tenant.TenantId)">\n\n                <ion-option *ngFor="let order of selectboxoptions" [value]="order.Id">\n\n                  {{order.Name}}           \n\n                </ion-option>              \n\n            </ion-select> \n\n        </ion-item> \n\n\n\n        <ion-card *ngIf="NoOptions">              \n\n          \n\n            <h2>All banks added</h2>\n\n          \n\n        \n\n        </ion-card>\n\n         \n\n      </form>\n\n      </div> -->\n\n\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>All Rights Reserved</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\change-bank\change-bank.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ChangeBankPage);
    return ChangeBankPage;
}());

//# sourceMappingURL=change-bank.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UIHelperClasses_UIHelperService__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterService = /** @class */ (function () {
    //constructor(private sqlite: SQLite,private httpclient:HttpClient,private locals:StorageService,private uihelper: UIHelperService,private http: Http) {
    function RegisterService(httpclient, uIHelperService) {
        this.httpclient = httpclient;
        this.uIHelperService = uIHelperService;
        //counter = 30*60;
        this.counter = 60;
        this.tick = 1000;
    }
    RegisterService.prototype.GetToken = function (Token) {
        this.userToken = Token;
        return "true";
    };
    RegisterService.prototype.GetTenantsByMobile = function (mobno) {
        this.MobileNo = mobno;
        var data = "MobileNo=" + mobno;
        var url = this.uIHelperService.CallWebAPIUrlNew("/Tenant/GetTenantsByMobile") + "?" + data;
        return this.httpclient.get(url);
    };
    RegisterService.prototype.RequestOTP = function (oTPRequest) {
        var body = {
            TenantId: oTPRequest.TenantId,
            MobileNo: oTPRequest.MobileNo
        };
        this.TenantId = oTPRequest.TenantId;
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/User/RequestOTP"), body);
    };
    RegisterService.prototype.ValidateOTP = function (postOPT) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/User/ValidateOTP"), postOPT);
    };
    RegisterService.prototype.SaveMPin = function (userPost) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/User/SaveMPin"), userPost);
    };
    RegisterService.prototype.ChangePassword = function (changePassword) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/User/ChangePassword"), changePassword);
    };
    RegisterService.prototype.loginbyHttpClient = function (userName, password, unique) {
        var data = "username=" + userName + "&password=" + password + "&unique=" + unique + "&grant_type=password";
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrl("/token"), data);
    };
    RegisterService.prototype.GetServices = function () {
        return this.httpclient.get(this.uIHelperService.CallWebAPIUrlNew("/Operator/GetServices"));
    };
    RegisterService.prototype.GetAccounts = function (sCRequest) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Banking/GetAccounts"), sCRequest);
    };
    RegisterService.prototype.AddBank = function (addBankRequest) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Banking/AddBank"), addBankRequest);
    };
    RegisterService.prototype.GetOperators = function (oSRequest) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Operator/GetOperators"), oSRequest);
    };
    RegisterService.prototype.GetPlans = function (planRequest) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Operator/GetPlans"), planRequest);
        // return this.httpclient.post<PlanResponse>(this.uIHelperService.CallWebAPIUrlNew("/Operator/GetPlans"), body);
    };
    RegisterService.prototype.PostRecharge = function (rechargeModel) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Recharge/PostRecharge"), rechargeModel);
    };
    RegisterService.prototype.GetFTAccount = function (fundTransferRequest) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Banking/GetFTAccount"), fundTransferRequest);
    };
    RegisterService.prototype.FundTransfer = function (doFundTransfer) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Banking/FundTransfer"), doFundTransfer);
    };
    RegisterService.prototype.GetAccountBalance = function (statementRequest) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Banking/GetAccountBalance"), statementRequest);
    };
    RegisterService.prototype.GetStatement = function (statementRequest) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Banking/GetStatement"), statementRequest);
    };
    RegisterService.prototype.GetOperaterCircle = function (operaterCircleQuery) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Operator/GetOperaterCircle"), operaterCircleQuery);
    };
    RegisterService.prototype.GetRechargeReport = function (rRRequest) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Recharge/GetRechargeReport"), rRRequest);
    };
    RegisterService.prototype.GetLocations = function (TenantId) {
        // var data = "MobileNo=" + mobno;
        // var url = this.uIHelperService.CallWebAPIUrlNew("/Tenant/GetTenantsByMobile") + "?" + data;
        // return this.httpclient.get<Tenant>(url);
        return this.httpclient.get(this.uIHelperService.CallWebAPIUrlNew("/Banking/GetLocations?TenantId=" + TenantId));
    };
    RegisterService.prototype.GetReversedVoucher = function (checkVoucher) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrlNew("/Recharge/GetReversedVoucher"), checkVoucher);
    };
    RegisterService.prototype.getCounter = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].timer(0, this.tick)
            .take(this.counter)
            .map(function () { return --_this.counter; });
    };
    RegisterService.prototype.ExtractData = function (res) {
        var body = res.json();
        return body || [];
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__UIHelperClasses_UIHelperService__["a" /* UIHelperService */]])
    ], RegisterService);
    return RegisterService;
}());

//# sourceMappingURL=app-data.service.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UIHelperService = /** @class */ (function () {
    function UIHelperService() {
        this.rootUrl = 'https://sahakari.azurewebsites.net';
        this.baseUrl = 'https://sahakari.azurewebsites.net/api';
        this.rootUrl1 = 'https://sahakari.azurewebsites.net/token';
    }
    //    readonly rootUrl = 'http://localhost:55394';
    //    readonly baseUrl='http://localhost:55394/api';
    //    readonly rootUrl1 = 'http://localhost:55394/token';
    UIHelperService.prototype.CallWebAPIUrl = function (api_action_name) {
        return this.rootUrl + api_action_name;
    };
    UIHelperService.prototype.CallWebAPIUrlNew = function (api_action) {
        return this.baseUrl + api_action;
    };
    UIHelperService.prototype.CallWebAPIUrl1 = function () {
        return this.rootUrl;
    };
    UIHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], UIHelperService);
    return UIHelperService;
}());

//# sourceMappingURL=UIHelperService.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Constants__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mobile_recharge_mobile_recharge__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BasicPage = /** @class */ (function () {
    function BasicPage(storageService, alertCtrl, viewCtrl, toastr, constant, registerService, loadingController, navParams, navCtrl, platform) {
        var _this = this;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.toastr = toastr;
        this.constant = constant;
        this.registerService = registerService;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.page = 0;
        this.planTypes = ["FTT", "TUP", "LSC", "SMS", "OTR", "RMG"];
        this.isAndroid = false;
        this.isButtonEnabled = false;
        this.active_Segmant = "0";
        var FTT = "FullTalkTime";
        var LSC = "LSC";
        var TUP = "TopUp";
        var SMS = "SMS";
        var OTR = "Other";
        var RMG = "Roaming";
        this.navparams = this.navParams.data;
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        this.isAndroid = platform.is('android');
        this.navparams = this.navParams.data;
        var operatorId = this.navParams.get('OperatorId');
        var circleId = this.navParams.get('CircleId');
        var planRequest = {
            OSId: operatorId,
            CircleId: circleId,
            PlanType: this.planTypes[0],
            TenantId: this.storageService.GetUser().ActiveTenantId
        };
        this.registerService.GetPlans(planRequest).subscribe(function (data) {
            _this.planResponse = data;
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
        loading.dismiss();
    }
    BasicPage.prototype.ngOnInit = function () {
        this.ActiveBankName = this.storageService.GetActiveBankName();
    };
    BasicPage.prototype.onSegmentChange = function (event) {
        // this.slider.slideTo(event.value);
        // this.active_Segmant=event.value.toString();
        this.active_Segmant = event.toString();
        this.slider.slideTo(event);
    };
    BasicPage.prototype.slideChanged = function () {
        var _this = this;
        var operatorId = this.navParams.get('OperatorId');
        var circleId = this.navParams.get('CircleId');
        var currentIndex = this.slider.getActiveIndex();
        this.active_Segmant = currentIndex.toString();
        if (this.active_Segmant == "6") {
            this.slider.isEnd();
            return null;
        }
        console.log('Current index is', currentIndex);
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        this.slider.slideTo(currentIndex);
        var planRequest = {
            OSId: operatorId,
            CircleId: circleId,
            PlanType: this.planTypes[currentIndex],
            TenantId: this.storageService.GetUser().ActiveTenantId
        };
        this.registerService.GetPlans(planRequest).subscribe(function (data) {
            _this.planResponse = data;
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    BasicPage.prototype.OnAmount = function (amount) {
        this.isButtonEnabled = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */], { 'Amount': amount, 'ParentId': this.navParams.get('ParentId'), 'OperatorId': this.navParams.get('OperatorId'), 'CircleId': this.navParams.get('CircleId'), 'SubscriptionId': this.navParams.get('SubscriptionId'), 'nname': this.navParams.get('nname'), 'ButtonEnabled': this.isButtonEnabled });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], BasicPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Segment */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Segment */])
    ], BasicPage.prototype, "segment", void 0);
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ViewPlans_Tabs',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\ViewPlans_Tabs\ViewPlans_Tabs.html"*/'<ion-header>\n\n\n\n  <!-- <ion-navbar hideBackButton="true" color="primary"> -->\n\n  <!-- <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        {{ActiveBankName}}  Mobile App\n\n      </ion-title>\n\n    </ion-navbar> -->\n\n  <!-- <ion-navbar #navbar color="primary" >\n\n      <ion-title>Whatever</ion-title>\n\n      <ion-buttons right>\n\n        <button icon-only ion-button>\n\n          <ion-icon name=\'pause\'></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar> -->\n\n\n\n  <ion-toolbar no-border-top>\n\n    <!-- <ion-segment [(ngModel)]="active_Segmant" color="dark" (ionChange)="onSegmentChange($event)"> -->\n\n    <ion-segment [(ngModel)]="active_Segmant" color="dark">\n\n      <ion-segment-button value="0" (ionSelect)="onSegmentChange(0)">\n\n        FullTalkTime\n\n      </ion-segment-button>\n\n      <ion-segment-button value="1" (ionSelect)="onSegmentChange(1)">\n\n        LSC\n\n      </ion-segment-button>\n\n      <ion-segment-button value="2" (ionSelect)="onSegmentChange(2)">\n\n        TopUp\n\n      </ion-segment-button>\n\n      <ion-segment-button value="3" (ionSelect)="onSegmentChange(3)">\n\n        SMS\n\n      </ion-segment-button>\n\n      <ion-segment-button value="4" (ionSelect)="onSegmentChange(4)">\n\n        Other\n\n      </ion-segment-button>\n\n      <ion-segment-button value="5" (ionSelect)="onSegmentChange(5)">\n\n        Roaming\n\n      </ion-segment-button>\n\n      <!-- <ion-segment-button value="0">\n\n          FullTalkTime\n\n        </ion-segment-button>\n\n        <ion-segment-button value="1">\n\n          LSC\n\n        </ion-segment-button>\n\n        <ion-segment-button value="2">\n\n          TopUp\n\n        </ion-segment-button>\n\n        <ion-segment-button value="3">\n\n          SMS\n\n        </ion-segment-button>\n\n        <ion-segment-button value="4">\n\n          Other\n\n        </ion-segment-button>\n\n        <ion-segment-button value="5">\n\n          Roaming\n\n        </ion-segment-button> -->\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n \n\n</ion-header>\n\n\n\n<ion-content padding id="page5">\n\n  <ion-slides #slider (ionSlideDidChange)="slideChanged()">\n\n    <ion-slide>\n\n      <p> Select the plans you want</p>\n\n      <ion-list *ngFor="let order of planResponse" (click)="OnAmount(order.amount)">\n\n        <ion-item style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;background-color: bisque">\n\n          <h3>Talktime:{{ order.talktime }}</h3>\n\n          <button ion-button outline icon-start item-end round medium>\n\n            {{ order.amount |currency:\'INR\' }}\n\n          </button>\n\n          <a style="color:red">{{ order.detail }}</a>\n\n          <h2>Validity:{{ order.validity }}</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      Select the plans you want\n\n      <ion-list *ngFor="let order of planResponse" (click)="OnAmount(order.amount)">\n\n        <ion-item style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;background-color: bisque">\n\n          <h3>Talktime:{{ order.talktime }}</h3>\n\n          <button ion-button outline icon-start item-end round medium>\n\n            {{ order.amount | currency:\'INR\'}}\n\n          </button>\n\n          <a style="color:red">{{ order.detail }}</a>\n\n          <h2>Validity:{{ order.validity }}</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      Select the plans you want\n\n      <ion-list *ngFor="let order of planResponse" (click)="OnAmount(order.amount)">\n\n        <ion-item style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;background-color: bisque">\n\n          <h3>Talktime:{{ order.talktime }}</h3>\n\n          <button ion-button outline icon-start item-end round medium>\n\n            {{ order.amount | currency:\'INR\'}}\n\n          </button>\n\n          <a style="color:red">{{ order.detail }}</a>\n\n          <h2>Validity:{{ order.validity }}</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      Select the plans you want\n\n      <ion-list *ngFor="let order of planResponse" (click)="OnAmount(order.amount)">\n\n        <ion-item style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;background-color: bisque">\n\n          <h3>Talktime:{{ order.talktime }}</h3>\n\n          <button ion-button outline icon-start item-end round medium>\n\n           {{ order.amount | currency:\'INR\'}}\n\n          </button>\n\n          <a style="color:red">{{ order.detail }}</a>\n\n          <h2>Validity:{{ order.validity }}</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      Select the plans you want\n\n      <ion-list *ngFor="let order of planResponse" (click)="OnAmount(order.amount)">\n\n        <ion-item style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;background-color: bisque">\n\n          <h3>Talktime:{{ order.talktime }}</h3>\n\n          <button ion-button outline icon-start item-end round medium>\n\n          {{ order.amount | currency:\'INR\'}}\n\n          </button>\n\n          <a style="color:red">{{ order.detail }}</a>\n\n          <h2>Validity:{{ order.validity }}</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      Select the plans you want\n\n      <ion-list *ngFor="let order of planResponse" (click)="OnAmount(order.amount)">\n\n        <ion-item style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;background-color: bisque">\n\n          <h3>Talktime:{{ order.talktime }}</h3>\n\n          <button ion-button outline icon-start item-end round medium>\n\n         {{ order.amount | currency:\'INR\'}}\n\n          </button>\n\n          <a style="color:red">{{ order.detail }}</a>\n\n          <h2>Validity:{{ order.validity }}</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\ViewPlans_Tabs\ViewPlans_Tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=ViewPlans_Tabs.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.myParam = params.get('myParam');
        this.Amount = params.get('myParam').Amount;
        this.VendorExtCode = params.get('myParam').VendorExtCode;
        this.Date = params.get('myParam').Date;
        this.Remarks = params.get('myParam').Remarks;
    }
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\modal\modal.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>Reversed Voucher Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [hidden]="!myParam">\n    <p>Reversal Transaction ID: {{VendorExtCode}}</p>\n    <p>Amount: {{Amount|currency:\'INR\'}}</p>\n    <p>Date: {{Date|date:\'dd/MM/yyyy\'}}</p>\n    <p>Remarks: {{Remarks}}</p>\n  </div>\n  <div [hidden]="myParam">\n    <p>No parameters passed.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">Close</button>\n\n</ion-content>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundTransferConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FundTransferConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FundTransferConfirmPage = /** @class */ (function () {
    function FundTransferConfirmPage(storageService, alertCtrl, toastr, loadingController, registerService, navCtrl, navParams) {
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.registerService = registerService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FundTransferConfirmPage.prototype.ngOnInit = function () {
        this.navparams = this.navParams.data;
        this.HeadName = this.navParams.get('HeadName');
        this.AcNo = this.navParams.get('AcNo');
        this.ToName = this.navParams.get('ToName');
        this.ToAcNo = this.navParams.get('ToAcNo');
        this.showConfirm = true;
    };
    FundTransferConfirmPage.prototype.GetSelfCareAcByTenantID = function (ActiveTenantId) {
        var AcSubId = this.navParams.get('AcSubId');
        var SelfCareACs = this.storageService.GetSelfCareAc();
        // this.selfCareAC=this.SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId&&obj.AcActId=="#SB"&&obj.AcSubId===this.AcSubId; });
        this.selfCareAC = SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcSubId === AcSubId; });
        return this.selfCareAC;
    };
    FundTransferConfirmPage.prototype.OnConfirm = function () {
        var _this = this;
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        var loading = this.loadingController.create({
            content: 'Transferring the Fund..'
        });
        loading.present();
        var doFundTransfer = {
            TenantId: this.navparams.doFundTransfer.TenantId,
            DigiPartyId: this.navParams.get('doFundTransfer').DigiPartyId,
            FromAcMastId: this.navParams.get('doFundTransfer').FromAcMastId,
            FromAcSubId: this.navParams.get('doFundTransfer').FromAcSubId,
            FromLocId: this.navParams.get('doFundTransfer').FromLocId,
            ToAcMastId: this.navParams.get('doFundTransfer').ToAcMastId,
            ToAcSubId: this.navParams.get('doFundTransfer').ToAcSubId,
            ToLocId: this.navParams.get('doFundTransfer').ToLocId,
            Amount: this.navParams.get('doFundTransfer').Amount,
            ToAcNo: this.navParams.get('doFundTransfer').ToAcNo
        };
        this.registerService.FundTransfer(doFundTransfer).subscribe(function (data) {
            _this.confirm = null;
            _this.ftd = data;
            if (data.Status == "1") {
                _this.toastr.success('Fund Transferred with Success', 'Success!');
                var alert = _this.alertCtrl.create({
                    title: "Success Message",
                    subTitle: "Fund Transferred",
                    buttons: ['OK']
                });
                alert.present();
                _this.showstatus = true;
                _this.showConfirm = false;
            }
            else {
                _this.toastr.error(data.AISError, 'Error!');
                var alert = _this.alertCtrl.create({
                    title: "Error Message",
                    subTitle: data.AISError,
                    buttons: ['OK']
                });
                alert.present();
                _this.showFailure = true;
                _this.showConfirm = false;
            }
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    FundTransferConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FundTransferConfirmPage');
    };
    FundTransferConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-fund-transfer-confirm',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\fund-transfer-confirm\fund-transfer-confirm.html"*/'<!--\n  Generated template for the FundTransferConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title *ngIf="showConfirm">Confirm Fund Transfer </ion-title>\n    <ion-title *ngIf="showstatus">Fund Transfered </ion-title>\n    <ion-title *ngIf="showFailure">Fund Transfer Failured</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="showConfirm">\n      <div>\n    <ion-card>\n\n      <ion-card-header style="background-color:red">\n        From Account\n      </ion-card-header>\n      <ion-card-content>\n        Account Name: {{HeadName}}\n        <br/>\n        Acount No: {{AcNo}}\n      </ion-card-content>\n    </ion-card>\n    <br/>\n    <ion-card>\n\n      <ion-card-header style="background-color:red">\n        To Account\n      </ion-card-header>\n    <br/>\n    <ion-card-content>\n      Name: {{ToName}}\n      <br/>\n      Acount No: {{ToAcNo}}\n      <br/>\n      Amount: {{navparams.doFundTransfer.Amount}}\n    </ion-card-content>\n      <button id="register-button9" (click)="OnConfirm()" ion-button color="positive" block>\n        Confirm\n      </button>\n  </ion-card>\n  </div>\n  </div>\n  <div *ngIf="showstatus">\n    <h1>Fund transferred with Success</h1>\n  </div>\n  <div *ngIf="showFailure">\n    <h1>Fund transfer failured</h1>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\fund-transfer-confirm\fund-transfer-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], FundTransferConfirmPage);
    return FundTransferConfirmPage;
}());

//# sourceMappingURL=fund-transfer-confirm.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceEnquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BalanceEnquiryPage = /** @class */ (function () {
    function BalanceEnquiryPage(storageService, alertCtrl, toastr, loadingController, registerService, navCtrl) {
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.registerService = registerService;
        this.navCtrl = navCtrl;
    }
    BalanceEnquiryPage.prototype.ngOnInit = function () {
        this.HideMsg = true;
        this.ShowHide = true;
        this.ActiveBankName = this.storageService.GetActiveBankName();
        this.SelfCareAcsBasedOnTenantID = this.storageService.GetSelfCareAcsBasedOnTenantID();
    };
    BalanceEnquiryPage.prototype.OnGetAccountBalance = function (AcHeadId, AcSubId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Loading the Account Balance..'
        });
        loading.present();
        var statementRequest = {
            AcMastId: AcHeadId,
            AcSubId: AcSubId,
            TenantId: this.storageService.GetUser().ActiveTenantId
        };
        this.registerService.GetAccountBalance(statementRequest).subscribe(function (data) {
            _this.balance = data;
            //alert(data.Balance);
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
        this.ShowHide = false;
        this.HideMsg = false;
    };
    BalanceEnquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-balance-enquiry',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\balance-enquiry\balance-enquiry.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Balance-Enquiry  {{ActiveBankName}}\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding id="page3">\n\n      <span style="color: blue" *ngIf="HideMsg">Click on Account of your wish</span>  \n\n    <div  *ngIf="ShowHide">   \n\n      <div *ngFor="let order of SelfCareAcsBasedOnTenantID" (click)="OnGetAccountBalance(order.AcHeadId,order.AcSubId)" style="background-color:#ddd;border: 1px solid lightgrey; padding: 15px; margin: 5px 0;">\n\n        <span>Name: {{order.HeadName}}</span> \n\n        <br/>\n\n        <span>Account No: {{order.AcNo}}</span> \n\n    </div> \n\n      </div>\n\n    <div *ngIf="balance">\n\n        <span>Balance Amount : {{ balance.Balance|currency:\'INR\' }}</span>\n\n    </div>\n\n  </ion-content>\n\n\n\n  <ion-footer color="primary">\n\n    <ion-toolbar>\n\n      <ion-title>{{ActiveBankName}}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n  <ion-footer>\n\n    <ion-toolbar color="primary">\n\n      <ion-title>{{ActiveBankName}} All Rights Rserved</ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\balance-enquiry\balance-enquiry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], BalanceEnquiryPage);
    return BalanceEnquiryPage;
}());

//# sourceMappingURL=balance-enquiry.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniStatementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MiniStatementPage = /** @class */ (function () {
    function MiniStatementPage(storageService, alertCtrl, toastr, loadingController, registerService, navCtrl) {
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.registerService = registerService;
        this.navCtrl = navCtrl;
        this.ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
    }
    MiniStatementPage.prototype.ngOnInit = function () {
        this.ShowHide = true;
        this.HideMsg = true;
        this.ActiveBankName = this.storageService.GetActiveBankName();
        this.SelfCareAcsBasedOnTenantID = this.storageService.GetSelfCareAcsBasedOnTenantID();
    };
    MiniStatementPage.prototype.OnGetMiniStatement = function (AcHeadId, AcSubId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Loading the Mini Statement..'
        });
        loading.present();
        var statementRequest = {
            AcMastId: AcHeadId,
            AcSubId: AcSubId,
            TenantId: this.ActiveTenantId
        };
        this.registerService.GetStatement(statementRequest).subscribe(function (data) {
            _this.balance = data;
            _this.miniStatement = data;
            _this.statementItem = data.StatementItems;
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
        this.ShowHide = false;
        this.HideMsg = false;
    };
    MiniStatementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mini-statement',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\mini-statement\mini-statement.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Mini Statement {{ActiveBankName}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9" >\n\n  <span style="color: blue" *ngIf="HideMsg">Click on Account of your wish</span>  \n\n  <div  *ngIf="ShowHide">   \n\n    <div *ngFor="let order of SelfCareAcsBasedOnTenantID" (click)="OnGetMiniStatement(order.AcHeadId,order.AcSubId)" style="background-color:#ddd;border: 1px solid lightgrey; padding: 15px; margin: 5px 0;">\n\n      <span>Name: {{order.HeadName}}</span> \n\n      <br/>\n\n      <span>Account No: {{order.AcNo}}</span> \n\n  </div> \n\n    </div>\n\n      <div *ngIf="balance">\n\n  <div class="spacer" style="width:300px;height:21px;" id="miniStatement-spacer3"></div>\n\n  <ion-list id="miniStatement-list9">\n\n     <ion-item color="none" id="miniStatement-list-item42" *ngIf="(balance.Amount)<0" style="color: rebeccapurple">\n\n      Account Balance : {{balance.Amount|currency:\'INR\'}} Debit\n\n    </ion-item>\n\n    <ion-item color="none" id="miniStatement-list-item42" *ngIf="(balance.Amount)>0" style="color: rebeccapurple">\n\n      Account Balance : {{balance.Amount|currency:\'INR\'}} Credit\n\n    </ion-item>\n\n  </ion-list>  \n\n  <ion-card id="miniStatement-card22" *ngFor="let order of statementItem">\n\n      <ion-list id="miniStatement-list10">\n\n\n\n      <ion-item color="none" id="miniStatement-list-item46">\n\n        <ion-note item-start>\n\n          <p>{{order.Dt|date:\'dd/MM/yyyy\'}}</p>\n\n         <p *ngIf="(order.Cr)==0" style="color: red">Debited : {{order.Dr|currency:\'INR\'}}</p>\n\n         <p *ngIf="(order.Dr)==0" style="color: green;">Credited : {{order.Cr|currency:\'INR\'}}</p>\n\n          <p style="margin-top:0px;color:#000000;">\n\n              Remark: {{order.Remark}}\n\n            </p>\n\n          </ion-note>\n\n      </ion-item>\n\n    </ion-list>\n\n  \n\n  </ion-card>\n\n</div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>{{ActiveBankName}} All Rights Rserved</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\mini-statement\mini-statement.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], MiniStatementPage);
    return MiniStatementPage;
}());

//# sourceMappingURL=mini-statement.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrepaidConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Constants__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrepaidConfirmPage = /** @class */ (function () {
    function PrepaidConfirmPage(storageService, alertCtrl, toastr, registerService, constantService, loadingController, navCtrl, navParams) {
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.toastr = toastr;
        this.registerService = registerService;
        this.constantService = constantService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrepaidConfirmPage.prototype.ngOnInit = function () {
        this.operator = this.navParams.get('Operator');
        this.SubscriptionId = this.navParams.get('SubscriptionId');
        this.Amount = this.navParams.get('Amount');
        this.ParentId = this.navParams.get('ParentId');
        this.OperatorId = this.navParams.get('OperatorId');
        this.ActiveBankName = this.storageService.GetActiveBankName();
        this.showTitle = true;
        switch (this.ParentId) {
            case "S1":
                this.OperatorService = "PrePaid";
                break;
            case "S2":
                this.OperatorService = "PostPaid";
                break;
            case "S3":
                this.OperatorService = "DTH";
                break;
            default:
                this.OperatorService = "Electricity Bill";
                break;
        }
    };
    PrepaidConfirmPage.prototype.GetDigiPartyandPartyMastID = function (ActiveTenantId) {
        var DigiParties = this.storageService.GetDigiParty();
        var digiparty = DigiParties.find(function (obj) { return obj.TenantId === ActiveTenantId; });
        return digiparty;
    };
    PrepaidConfirmPage.prototype.GetSelfCareAcByTenantID = function (ActiveTenantId) {
        var SelfCareACs = this.storageService.GetSelfCareAc();
        var selfCareAC = SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcActId == "#SB"; });
        return selfCareAC;
    };
    PrepaidConfirmPage.prototype.OnConfirm = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Recharging...'
        });
        loading.present();
        this.showTitle = false;
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        var rechargeModel = {
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
        };
        this.registerService.PostRecharge(rechargeModel).subscribe(function (data) {
            _this.tranResponse = data;
            _this.showConfirm = false;
            switch (data.StatusCode) {
                case 1:
                    var alert = _this.alertCtrl.create({
                        title: "Message",
                        subTitle: 'Recharge is successful with Transaction ID ' + _this.tranResponse.VendorExtCode,
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.showSuccess = true;
                    break;
                case 2:
                    //alert("Recharge is pending with Transaction ID "+ this.tranResponse.VendorExtCode);
                    var alert = _this.alertCtrl.create({
                        title: "Message",
                        subTitle: 'Recharge is pending with Transaction ID ' + _this.tranResponse.VendorExtCode,
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.showPending = true;
                    break;
                case 3:
                    ///alert("Recharge is initiated with Transaction ID "+ this.tranResponse.VendorExtCode);
                    var alert = _this.alertCtrl.create({
                        title: "Message",
                        subTitle: 'Recharge is initiated with Transaction ID ' + _this.tranResponse.VendorExtCode,
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.showInit = true;
                    break;
                case 4:
                    //alert("Recharge is failure with Transaction ID "+ this.tranResponse.VendorExtCode);
                    var alert = _this.alertCtrl.create({
                        title: "Error Message",
                        subTitle: 'Recharge is Unsuccessful with Transaction ID ' + _this.tranResponse.VendorExtCode,
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.showFailure = true;
                    break;
                case 5:
                    //alert("Recharge is refunded with Transaction ID "+ this.tranResponse.VendorExtCode);
                    var alert = _this.alertCtrl.create({
                        title: "Message",
                        subTitle: 'Recharge is refunded with Transaction ID ' + _this.tranResponse.VendorExtCode,
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.showRefund = true;
                    break;
                case 9:
                    //alert("Recharge is blocked with Transaction ID "+ this.tranResponse.VendorExtCode);
                    var alert = _this.alertCtrl.create({
                        title: "Message",
                        subTitle: 'Recharge is blocked with Transaction ID ' + _this.tranResponse.VendorExtCode,
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.showBlocked = true;
                    break;
                default:
                    //alert("Recharge is blocked with Transaction ID "+ this.tranResponse.VendorExtCode);
                    var alert = _this.alertCtrl.create({
                        title: "Message",
                        subTitle: _this.tranResponse.AISError,
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.showBlocked = true;
                    break;
            }
            loading.dismiss();
        }, function (error) {
            //this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    PrepaidConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-prepaid-confirm',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\prepaid-confirm\prepaid-confirm.html"*/'<!--\n  Generated template for the PrepaidConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="showTitle">\n      Confirm {{OperatorService}} Recharge-{{ActiveBankName}}\n    </ion-title>\n    <ion-title *ngIf="showSuccess||showPending||showInit||showFailure||showRefund||showBlocked">\n        <!-- <ion-title *ngIf="showSuccess"> -->\n      {{OperatorService}} Recharge -{{ActiveBankName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="row" *ngIf="showTitle">\n    <div class="col s12 m7">\n      <div class="card">\n          <!--interpolation-->\n        <div class="card-content">     \n        <span>Selected Operator : {{ operator }}</span> <br>\n        <span>Mobile No : {{ SubscriptionId }}</span> <br>\n        <span>Recharge Amount : {{ Amount }}</span> <br>\n        </div>       \n      </div>\n    </div>\n    <button id="register-button8" ion-button color="positive" type="button" (click)="OnConfirm()" block>\n      Confirm\n    </button>\n  </div>\n  <div *ngIf="showSuccess">\n  <h1 style="color: green;">Recharge is Successful...</h1>\n  <p>Transaction ID: {{tranResponse.VendorExtCode}}</p>\n  </div>\n  <div *ngIf="showPending">\n    <h1 style="color: darkorange;">Recharge is Pending...</h1>\n    <p>Transaction ID: {{tranResponse.VendorExtCode}}</p>\n  </div>\n  <div *ngIf="showInit">\n    <h1>Recharge is Initiated...Please wait for a minute..</h1>\n    <p>Transaction ID: {{tranResponse.VendorExtCode}}</p>\n  </div>\n  <div *ngIf="showFailure">\n    <h1 style="color: red;">Sorry, Recharge is Unsuccessful...</h1>\n    <p>Transaction ID: {{tranResponse.VendorExtCode}}</p>\n  </div>\n  <div *ngIf="showRefund">\n    <h1>Recharge is Refunded due to some issues...</h1>\n    <p>Transaction ID: {{tranResponse.VendorExtCode}}</p>\n  </div>\n  <div *ngIf="showBlocked">\n    <h1>Recharge is Blocked due to some issues...</h1>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\prepaid-confirm\prepaid-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_3__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PrepaidConfirmPage);
    return PrepaidConfirmPage;
}());

//# sourceMappingURL=prepaid-confirm.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\setting\setting.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Setting\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\setting\setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enter_otp_enter_otp__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_page__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(toastrService, loadingController, alertCtrl, storageService, registerService, navCtrl, navParams) {
        this.toastrService = toastrService;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.storageService = storageService;
        this.registerService = registerService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Loading the Mini Statement..'
        });
        loading.present();
        this.digipartyname = this.storageService.GetDigipartyBasedOnActiveTenantId().Name;
        this.mobileno = this.storageService.GetUser().UserName;
        this.registerService.GetTenantsByMobile(this.mobileno).subscribe(function (data) {
            _this.tenantList = data;
            _this.storageService.SetTenant(JSON.stringify(_this.tenantList));
            _this.tenants = _this.storageService.GetTenant();
            loading.dismiss();
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    MyProfilePage.prototype.OnChange = function () {
        var ischangePassword = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__enter_otp_enter_otp__["a" /* EnterOTPPage */], { 'ischangePassword': ischangePassword });
    };
    MyProfilePage.prototype.OnLogOut = function () {
        this.storageService.RemoveRecordsForLogout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    MyProfilePage.prototype.OnSync = function () {
        var _this = this;
        this.storageService.RemoveRecordsForLogout();
        var loading = this.loadingController.create({
            content: 'Syncing Operators and Services'
        });
        loading.present();
        this.registerService.GetServices().subscribe(function (data) {
            var oS = JSON.stringify(data);
            _this.storageService.SetOS(oS);
            loading.dismiss();
        }, function (error) {
            _this.toastrService.error(error.message, 'Error!');
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
        var loadingnew = this.loadingController.create({
            content: 'Syncing Accounts'
        });
        loadingnew.present();
        this.callservices();
        loadingnew.dismiss();
    };
    MyProfilePage.prototype.callservices = function () {
        var _this = this;
        var addBankRequest = {
            TenantId: this.storageService.GetUser().ActiveTenantId,
            MobileNo: this.storageService.GetUser().UserName
        };
        this.registerService.AddBank(addBankRequest).subscribe(function (data) {
            var tenant = {
                Id: data.Tenant.Id,
                Name: data.Tenant.Name,
                Address: data.Tenant.Address,
                IconHtml: data.Tenant.IconHtml
            };
            _this.storageService.SetTenant(JSON.stringify([tenant]));
            var ActiveBankName = _this.storageService.GetActiveBankName();
            var digiParty = {
                Id: data.DigiPartyId,
                DigiPartyId: data.DigiPartyId,
                PartyMastId: data.PartyMastId,
                MobileNo: data.MobileNo,
                TenantId: data.TenantId,
                Name: data.Name
            };
            _this.storageService.SetDigiParty(JSON.stringify([digiParty]));
            _this.storageService.SetSelfCareAc(JSON.stringify(data.SelfCareAcs));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_page__["a" /* PagePage */], { 'ActiveBankName': ActiveBankName });
        }, function (error) {
            _this.toastrService.error(error.error.ExceptionMessage, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.error.ExceptionMessage,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\my-profile\my-profile.html"*/'<!--\n  Generated template for the MyProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>My Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list id="miniStatement-list9">\n    <ion-item color="none" id="miniStatement-list-item42">\n     Name :{{digipartyname}}\n   </ion-item>\n   <ion-item color="none" id="miniStatement-list-item42">\n    Mobile Number :{{mobileno}}\n  </ion-item>\n  Linked Bank Accounts\n<ion-item *ngFor="let order of tenants">\n        \n        \n        <h2 style="text-transform:capitalize;">{{ order.Name }}</h2>\n        <p>Branch:{{ order.Address }}</p>\n  \n</ion-item>\n<ion-item>\n    <a style="color:darkorange;" (click)="OnChange()">Change password?</a>\n</ion-item>\n<ion-item>\n  <a style="color:darkorange;" (click)="OnSync()">Sync Accounts</a>\n</ion-item>\n<ion-item>\n    <a style="color:darkorange;" (click)="OnLogOut()">LogOut</a>\n</ion-item>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\my-profile\my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__node_modules_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankBranchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BankBranchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BankBranchesPage = /** @class */ (function () {
    function BankBranchesPage(storageService, alertCtrl, toastr, loadingController, registerService, navCtrl, navParams) {
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.toastr = toastr;
        this.loadingController = loadingController;
        this.registerService = registerService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BankBranchesPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Loading the Account Balance..'
        });
        loading.present();
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        this.registerService.GetLocations(ActiveTenantId).subscribe(function (data) {
            _this.bankBranch = data;
            //alert(data.Balance);
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    BankBranchesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankBranchesPage');
    };
    BankBranchesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bank-branches',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\bank-branches\bank-branches.html"*/'<!--\n  Generated template for the BankBranchesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bank Branches</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let order of bankBranch" style="background-color:#ddd;border: 1px solid lightgrey; padding: 15px; margin: 5px 0;">\n    <span>{{order.Name}}</span> \n    <br/>\n    <span>{{order.MailName}}</span> \n</div> \n</ion-content>\n'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\bank-branches\bank-branches.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BankBranchesPage);
    return BankBranchesPage;
}());

//# sourceMappingURL=bank-branches.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('userToken') != null)
            return true;
        this.router.navigateByUrl('/login');
        //this.navCtrl.push(LoginPage);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileRechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_Constants__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ViewPlans_Tabs_ViewPlans_Tabs__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__favourites_favourites__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__prepaid_confirm_prepaid_confirm__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_page__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_UIService__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MobileRechargePage = /** @class */ (function () {
    function MobileRechargePage(storageService, alertCtrl, uiService, viewCtrl, toastr, constant, registerService, loadingController, navParams, navCtrl, formbuilder) {
        var _this = this;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.uiService = uiService;
        this.viewCtrl = viewCtrl;
        this.toastr = toastr;
        this.constant = constant;
        this.registerService = registerService;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.formbuilder = formbuilder;
        this.ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        this.validationMessages = {
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
        this.isOperatorEnabled = false;
        this.isStateEnabled = false;
        this.isMobileNoEntered = false;
        this.isNickNameEntered = false;
        this.isAmountEntered = false;
        this.isButtonEnabled = false;
        this.StatesOfIndia = [
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
        this.formGroup = formbuilder.group({
            subscriptionId: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(10)]],
            // operatorId: ['', [Validators.required]],
            // circleId: ['', [Validators.required]],
            operatorId: [''],
            circleId: [''],
            amount: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            nickname: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(2)]]
        });
        var subscriptionIdControl = this.formGroup.get('subscriptionId');
        subscriptionIdControl.valueChanges.map(function () { }).subscribe(function (value) { return _this.setErrorMessage(subscriptionIdControl); });
        var amountControl = this.formGroup.get('amount');
        amountControl.valueChanges.subscribe(function (value) { return _this.setErrorMessage(amountControl); });
        var nicknameControl = this.formGroup.get('nickname');
        nicknameControl.valueChanges.subscribe(function (value) { return _this.setErrorMessage(nicknameControl); });
    }
    MobileRechargePage.prototype.ionViewDidLoad = function () {
        this.navCtrl.remove(2, 1);
        //this.navCtrl.pop();
        this.setBackButtonAction();
    };
    MobileRechargePage.prototype.setErrorMessage = function (c) {
        var _this = this;
        var subscriptionId = this.formGroup.controls['subscriptionId'];
        var amount = this.formGroup.controls['amount'];
        var nickname = this.formGroup.controls['nickname'];
        this.subscriptionIdMessage = '';
        this.nicknameMessage = '';
        this.amountMessage = '';
        var control = this.uiService.getControlName(c);
        if ((c.touched || c.dirty) && c.errors) {
            if (control === 'subscriptionId' && subscriptionId.value != null && (this.ParentId == "S3" || this.ParentId == "S5")) {
                // if(c.errors.minlength['requiredLength'].value==9){
                if (c.errors.minlength) {
                    if (c.errors.minlength.requiredLength == 9) {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key + '_9']; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                    else if (c.errors.minlength.requiredLength == 9) {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key + '_9']; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                    else if (c.errors.minlength.requiredLength == 10) {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key + '_10']; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                    else if (c.errors.minlength.requiredLength == 11) {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key + '_11']; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                    else if (c.errors.minlength.requiredLength == 12) {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key + '_12']; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                }
                else if (c.errors.maxlength) {
                    if (c.errors.maxlength.actualLength > 9) {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                }
                else if (c.errors.pattern) {
                    if (c.errors.pattern.requiredPattern == "^0[0-9]{10}$") {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key + '_0']; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                    else if (c.errors.pattern.requiredPattern == "^1[0-9]{9}$") {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key + '_1']; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                    else if (c.errors.pattern.requiredPattern == "^2[0-9]{11}$") {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key + '_2']; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                    else if (c.errors.pattern.requiredPattern == "^3[0-9]{9}$") {
                        this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key + '_3']; }).join(' ');
                        this.subscriptionIdInfo = '';
                    }
                }
                if (subscriptionId.value.length < 10) {
                    this.isMobileNoEntered = false;
                }
                else {
                    this.isMobileNoEntered = true;
                }
            }
            else if (control === 'subscriptionId' && subscriptionId.value != null) {
                this.subscriptionIdMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
                this.OnMobileNo(subscriptionId.value);
            }
            else if (control === 'nickname' && nickname.value != null) {
                this.nicknameMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
                this.onNickName(nickname.value);
            }
            else if (control === 'amount') {
                this.amountMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
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
    };
    MobileRechargePage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__favourites_favourites__["a" /* FavouritesPage */]).then(function () {
                var index = _this.viewCtrl.index;
                _this.navCtrl.remove(index, 1); //this will remove page3 and page2
            });
        };
    };
    MobileRechargePage.prototype.ngOnInit = function () {
        var _this = this;
        this.ShowEntryForm = true;
        this.ActiveBankName = this.storageService.GetActiveBankName();
        this.Id = this.navParams.get('Id');
        this.ParentId = this.navParams.get('ParentId');
        this.amountforRecharge = this.navParams.get('Amount');
        this.osid = this.navParams.get('OperatorId');
        this.isButtonEnabled = this.navParams.get('ButtonEnabled');
        if (this.isButtonEnabled == null) {
            this.isButtonEnabled = false;
        }
        else {
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
            var favourites = this.storageService.GetFavourite();
            if (favourites != null) {
                var favouriteNew = favourites.filter(function (obj) { return obj.ParentId === ParentId; });
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
            }
            else {
                this.prepaid = "Enter";
                this.title = "PREPAID RECHARGE";
            }
        }
        else if (this.ParentId == "S2") {
            this.prepaid = null;
            var PId = this.Id;
            var ParentId = this.ParentId;
            var favourites = this.storageService.GetFavourite();
            if (favourites != null) {
                var favouriteNew = favourites.filter(function (obj) { return obj.ParentId === ParentId; });
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
            }
            else {
                this.postpaid = "Enter";
                this.title = "POSTPAID BILL";
            }
        }
        else if (this.ParentId == "S3") {
            this.prepaid = null;
            this.postpaid = null;
            var PId = this.Id;
            var ParentId = this.ParentId;
            var favourites = this.storageService.GetFavourite();
            if (favourites != null) {
                var favouriteNew = favourites.filter(function (obj) { return obj.ParentId === ParentId; });
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
            }
            else {
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
            var favourites = this.storageService.GetFavourite();
            if (favourites != null) {
                var favouriteNew = favourites.filter(function (obj) { return obj.ParentId === ParentId; });
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
            }
            else {
                this.ElectricityConsumerNo = "Enter";
                this.title = "ELECTRICITY BILL";
            }
        }
        var oSRequest = {
            PerentId: this.ParentId,
            TenantId: this.ActiveTenantId,
        };
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        var loading = this.loadingController.create({
            content: 'Loading the Operators..'
        });
        loading.present();
        this.registerService.GetOperators(oSRequest).subscribe(function (data) {
            _this.OSResponseNew = data;
            var OSResponseNew = data;
            _this.OSResponseNew = OSResponseNew.filter(function (obj) { return obj.TenantId === ActiveTenantId; });
            var SetOfOSes = _this.storageService.GetOSResponse();
            if (SetOfOSes == null) {
                _this.storageService.SetOSResponse(JSON.stringify(_this.OSResponseNew));
            }
            else {
                var ParentId = _this.ParentId;
                var OSesBasedOnParentId = SetOfOSes.filter(function (obj) { return obj.ParentId === ParentId && obj.TenantId === ActiveTenantId; });
                if (OSesBasedOnParentId.length == 0) {
                    SetOfOSes = SetOfOSes.concat(_this.OSResponseNew);
                    _this.storageService.SetOSResponse(JSON.stringify(SetOfOSes));
                }
            }
            loading.dismiss();
        }, function (error) {
            _this.toastr.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
        this.rechargeitem = {
            Id: '',
            NickName: this.navParams.get('nname'),
            OperatorId: this.navParams.get('OperatorId'),
            ParentId: this.navParams.get('ParentId'),
            SubscriptionId: this.navParams.get('SubscriptionId'),
            Amount: this.navParams.get('Amount'),
            CircleId: this.navParams.get('CircleId')
        };
    };
    //favouriteNew: Favourites;
    MobileRechargePage.prototype.OnNext = function () {
        var subscriptionId = this.formGroup.controls['subscriptionId'];
        var amount = this.formGroup.controls['amount'];
        var nickname = this.formGroup.controls['nickname'];
        var circleId = this.formGroup.controls['circleId'];
        var operatorId = this.formGroup.controls['operatorId'];
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
            };
            var favouriteitem = {
                Id: this.guid(),
                NickName: nickname.value,
                OperatorId: operatorId.value,
                ParentId: this.OSResponseNew[0].ParentId,
                SubscriptionId: subscriptionId.value,
                CircleId: circleId.value
            };
            var favourites = this.storageService.GetFavourite();
            if (favourites != null) {
                var favouritesBasedOnParentID = favourites.filter(function (obj) { return obj.ParentId === ParentId; });
                if (favouritesBasedOnParentID.length == 0) {
                    favourites.push(favouriteitem);
                    this.storageService.SetFavourite(JSON.stringify(favourites));
                }
                else {
                    var MobileNumber = favouriteitem.SubscriptionId;
                    var NickName = favouriteitem.NickName;
                    var duplicateFavourite = favouritesBasedOnParentID.find(function (obj) { return obj.SubscriptionId === MobileNumber || obj.NickName === NickName; });
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
                        };
                        favourites.push(duplicateFavourite);
                        this.storageService.SetFavourite(JSON.stringify(favourites));
                    }
                }
            }
            else {
                this.storageService.SetFavourite(JSON.stringify([favouriteitem]));
            }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__prepaid_confirm_prepaid_confirm__["a" /* PrepaidConfirmPage */], { 'ParentId': this.ParentId, 'Operator': this.operator, 'OperatorId': operatorId.value, 'SubscriptionId': subscriptionId.value, 'Amount': amount.value });
        }
        else {
            var MobileNumber = subscriptionId.value;
            var NickName = nickname.value;
            var Id = this.Id;
            var favourites = this.storageService.GetFavourite();
            var favouritesBasedOnParentID = favourites.filter(function (obj) { return obj.ParentId === ParentId; });
            var duplicateFavourite = favouritesBasedOnParentID.find(function (obj) { return obj.SubscriptionId === MobileNumber || obj.NickName === NickName; });
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
            };
            favourites.push(duplicateFavourite);
            this.storageService.SetFavourite(JSON.stringify(favourites));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__prepaid_confirm_prepaid_confirm__["a" /* PrepaidConfirmPage */], { 'ParentId': this.ParentId, 'Operator': this.operator, 'OperatorId': operatorId.value, 'SubscriptionId': subscriptionId.value, 'Amount': amount.value });
        }
        //above code is for updating or adding row for FavouriteKey local storage.
    };
    MobileRechargePage.prototype.GetOperatorBasedOnID = function (operatorId) {
        var ParentId = this.ParentId;
        var ListOfOperatorsBasedOnParentID = this.storageService.GetOSResponse();
        var SingleOperatorDetailBasedOnId = ListOfOperatorsBasedOnParentID.find(function (obj) { return obj.Id === operatorId && obj.ParentId === ParentId; });
        this.label = SingleOperatorDetailBasedOnId.Hint;
        return SingleOperatorDetailBasedOnId.Operator;
    };
    MobileRechargePage.prototype.GetLabelAndValidation_BasedOnID = function (operatorId) {
        var _this = this;
        var ParentId = this.ParentId;
        var ListOfOperatorsBasedOnParentID = this.storageService.GetOSResponse();
        var SingleOperatorDetailBasedOnId = ListOfOperatorsBasedOnParentID.find(function (obj) { return obj.Id === operatorId && obj.ParentId === ParentId; });
        switch (SingleOperatorDetailBasedOnId.Operator) {
            case "DISH TV":
                // this.formGroup.patchValue({ subscriptionId: '' });
                // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(11), Validators.maxLength(11), Validators.pattern("0[0-9]{10}")]);
                // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
                this.formGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
                    subscriptionId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.rechargeitem.SubscriptionId, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern("0[0-9]{10}")]),
                    operatorId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](operatorId),
                    circleId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('7'),
                    amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['amount'].value, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
                    nickname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['nickname'].value, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(2)]),
                });
                var subscriptionIdControl1_1 = this.formGroup.get('subscriptionId');
                subscriptionIdControl1_1.valueChanges.subscribe(function (value) { return _this.setErrorMessage(subscriptionIdControl1_1); });
                this.subscriptionIdInfo = "Your Viewing Card(VC) number starts with 0 and is 11 digits long.";
                break;
            case "TATA SKY":
                // this.formGroup.patchValue({ subscriptionId: '' });
                // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(10), Validators.maxLength(10), Validators.pattern("1[0-9]{9}")]);
                // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
                this.formGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
                    subscriptionId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.rechargeitem.SubscriptionId, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern("1[0-9]{9}")]),
                    operatorId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](operatorId),
                    circleId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('7'),
                    amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['amount'].value, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
                    nickname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['nickname'].value, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(2)]),
                });
                var subscriptionIdControl2_1 = this.formGroup.get('subscriptionId');
                subscriptionIdControl2_1.valueChanges.subscribe(function (value) { return _this.setErrorMessage(subscriptionIdControl2_1); });
                this.subscriptionIdInfo = "Subscriber ID starts with 1 and is 10 digits long.";
                break;
            case "SUN TV":
                // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(10), Validators.maxLength(11)]);
                // this.formGroup.patchValue({ subscriptionId: '' });
                // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
                this.formGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
                    // subscriptionId: new FormControl(this.formGroup.controls['subscriptionId'].value, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
                    subscriptionId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.rechargeitem.SubscriptionId, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(11)]),
                    operatorId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](operatorId),
                    circleId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('7'),
                    amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['amount'].value, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
                    nickname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['nickname'].value, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(2)]),
                });
                var subscriptionIdControl3_1 = this.formGroup.get('subscriptionId');
                subscriptionIdControl3_1.valueChanges.subscribe(function (value) { return _this.setErrorMessage(subscriptionIdControl3_1); });
                this.subscriptionIdInfo = "";
                break;
            case "VIDEOCON D2H":
                // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(9)]);
                // this.formGroup.patchValue({ subscriptionId: '' });
                // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
                this.formGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
                    // subscriptionId: new FormControl(this.formGroup.controls['subscriptionId'].value, [Validators.required, Validators.minLength(9)]),
                    subscriptionId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.rechargeitem.SubscriptionId, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(9)]),
                    operatorId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](operatorId),
                    circleId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('7'),
                    amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['amount'].value, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
                    nickname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['nickname'].value, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(2)]),
                });
                var subscriptionIdControl4_1 = this.formGroup.get('subscriptionId');
                subscriptionIdControl4_1.valueChanges.subscribe(function (value) { return _this.setErrorMessage(subscriptionIdControl4_1); });
                this.subscriptionIdInfo = "To get it, sms 'ID' to 566777 from your registered mobile no.";
                break;
            case "RELIANCE BIG TV":
                // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(12), Validators.maxLength(12), Validators.pattern("2[0-9]{11}")]);
                // this.formGroup.patchValue({ subscriptionId: '' });
                // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
                this.formGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
                    // subscriptionId: new FormControl(this.formGroup.controls['subscriptionId'].value, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern("2[0-9]{11}")]),
                    subscriptionId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.rechargeitem.SubscriptionId, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(12), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern("2[0-9]{11}")]),
                    operatorId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](operatorId),
                    circleId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('7'),
                    amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['amount'].value, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
                    nickname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['nickname'].value, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(2)]),
                });
                var subscriptionIdControl5_1 = this.formGroup.get('subscriptionId');
                subscriptionIdControl5_1.valueChanges.subscribe(function (value) { return _this.setErrorMessage(subscriptionIdControl5_1); });
                this.subscriptionIdInfo = "Smart card number starts with 2 and is 12 digits long. To locate it, look at the rear of the card inserted in your set top box.";
                break;
            case "AIRTEL DIGITAL":
                // this.formGroup.controls['subscriptionId'].setValidators([Validators.minLength(10), Validators.maxLength(10),Validators.pattern("3[0-9]{9}")]);
                // this.formGroup.patchValue({ subscriptionId: '' });
                // this.formGroup.controls['subscriptionId'].updateValueAndValidity();
                this.formGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
                    // subscriptionId: new FormControl(this.formGroup.controls['subscriptionId'].value, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("3[0-9]{9}")]),
                    subscriptionId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.rechargeitem.SubscriptionId, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern("3[0-9]{9}")]),
                    operatorId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](operatorId),
                    circleId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('7'),
                    amount: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['amount'].value, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
                    nickname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](this.formGroup.controls['nickname'].value, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(2)]),
                });
                var subscriptionIdControl6_1 = this.formGroup.get('subscriptionId');
                subscriptionIdControl6_1.valueChanges.subscribe(function (value) { return _this.setErrorMessage(subscriptionIdControl6_1); });
                this.subscriptionIdInfo = "Customer ID starts with 3 and is 10 digits long. To locate it, press the MENU button on remote.";
                break;
            default:
                break;
        }
        this.label = SingleOperatorDetailBasedOnId.Hint;
        return SingleOperatorDetailBasedOnId.Operator;
    };
    MobileRechargePage.prototype.OnMobileNo = function (id) {
        var _this = this;
        if (id.length < 10) {
            this.isMobileNoEntered = false;
            return this.showerrortext = true;
        }
        else {
            var loading_1 = this.loadingController.create({
                content: 'Loading the Operator and Circle..'
            });
            loading_1.present();
            var firstfive = id.substring(0, 5);
            var operaterCircleQuery = {
                ParentId: this.ParentId,
                TenantId: this.storageService.GetUser().ActiveTenantId,
                Mobile: firstfive
            };
            this.registerService.GetOperaterCircle(operaterCircleQuery).subscribe(function (data) {
                _this.operaterCircle = data;
                var operaterCircle = data;
                if (data.ResponseMessage == null) {
                    //var OsId = this.operaterCircle.operator;
                    var OsId = operaterCircle.operator;
                    //this.operatorname = this.operaterCircle.operator;
                    var OSResponseNew = _this.OSResponseNew;
                    _this.singleosrespone = OSResponseNew.find(function (obj) { return obj.Id === OsId; });
                    _this.oid = _this.singleosrespone.Id;
                    _this.rechargeitem.OperatorId = _this.oid;
                    //setTimeout(()=>{ this.rechargeitem.OperatorId = this.oid; }, 8000);
                    var circle = _this.operaterCircle.circle;
                    _this.statename = _this.operaterCircle.circle;
                    _this.singleState = _this.StatesOfIndia.find(function (obj) { return obj.Name === circle; });
                    _this.sid = _this.singleState.Id;
                    _this.rechargeitem.CircleId = _this.sid;
                    _this.isStateEnabled = true;
                    _this.isOperatorEnabled = true;
                    _this.isMobileNoEntered = true;
                }
                else {
                    _this.isStateEnabled = false;
                    _this.isOperatorEnabled = false;
                    _this.isMobileNoEntered = true;
                }
                loading_1.dismiss();
            }, function (error) {
                _this.toastr.error(error.message, 'Error!');
                var alert = _this.alertCtrl.create({
                    title: "Error Message",
                    subTitle: error.message,
                    buttons: ['OK']
                });
                alert.present();
                loading_1.dismiss();
            });
        }
    };
    MobileRechargePage.prototype.GetDigiPartyandPartyMastID = function (ActiveTenantId) {
        var DigiParties = this.storageService.GetDigiParty();
        var digiparty = DigiParties.find(function (obj) { return obj.TenantId === ActiveTenantId; });
        return digiparty;
    };
    MobileRechargePage.prototype.GetSelfCareAcByTenantID = function (ActiveTenantId) {
        var SelfCareACs = this.storageService.GetSelfCareAc();
        var selfCareAC = SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcActId == "#SB"; });
        return selfCareAC;
    };
    MobileRechargePage.prototype.OperatorChanged = function (event) {
        if (event != null) {
            this.isOperatorEnabled = true;
        }
        //this.operatorname=this.GetOperatorBasedOnID(event);
    };
    MobileRechargePage.prototype.AvoidSpace = function (event) {
        var k = event ? event.which : window.event;
        // var k = event.keyCode;
        if (k.keyCode == 32)
            return false;
    };
    MobileRechargePage.prototype.ObjChanged = function (event) {
        this.ShowLabel = false;
        this.isOperatorEnabled = true;
        if (event != null) {
            this.GetLabelAndValidation_BasedOnID(event);
        }
    };
    MobileRechargePage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__page_page__["a" /* PagePage */]);
    };
    MobileRechargePage.prototype.StateChanged = function (event) {
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
    };
    MobileRechargePage.prototype.OnSubscriberID = function (value) {
        if (value.length < 9) {
            this.isMobileNoEntered = false;
        }
        else {
            this.isMobileNoEntered = true;
            this.isOperatorEnabled = true;
            this.isStateEnabled = true;
            this.formGroup.patchValue({
                circleId: "7"
            });
        }
    };
    MobileRechargePage.prototype.onAmount = function (event) {
        if (this.formGroup.controls['amount'].value.length < 1) {
            this.isAmountEntered = false;
            this.isButtonEnabled = false;
            // this.isStateEnabled=false;
            // this.isMobileNoEntered=false;
        }
        else {
            this.isAmountEntered = true;
            this.isButtonEnabled = true;
            // this.isStateEnabled=true;
            // this.isMobileNoEntered=true;
        }
    };
    MobileRechargePage.prototype.onNickName = function (event) {
        if (this.formGroup.controls['nickname'].value.length < 2) {
            this.isNickNameEntered = false;
        }
        else {
            this.isNickNameEntered = true;
        }
    };
    MobileRechargePage.prototype.OnViewPlans = function () {
        var subscriptionId = this.formGroup.controls['subscriptionId'];
        var nickname = this.formGroup.controls['nickname'];
        var circleId = this.formGroup.controls['circleId'];
        var operatorId = this.formGroup.controls['operatorId'];
        this.showConfirm = false;
        //this.navCtrl.push(BasicPage, { 'OperatorId':operatorId,'ParentId':this.ParentId});
        // this.navCtrl.push(BasicPage, { 'OperatorId': operatorId, 'CircleId': circleId, 'ParentId': this.ParentId, 'SubscriptionId': subscriptionId, 'nname': nname });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ViewPlans_Tabs_ViewPlans_Tabs__["a" /* BasicPage */], { 'OperatorId': operatorId.value, 'CircleId': circleId.value, 'ParentId': this.ParentId, 'SubscriptionId': subscriptionId.value, 'nname': nickname.value });
    };
    MobileRechargePage.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */])
    ], MobileRechargePage.prototype, "navBar", void 0);
    MobileRechargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mobile-recharge',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\mobile-recharge\mobile-recharge.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true" color="primary">\n\n    <!-- <button ion-button menuToggle type="button" ng-click="OnBack()"> -->\n\n        <button ion-button menuToggle type="button" [navPush]="FavouritesPage">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!-- <button ion-button type="button" (click)="OnBack()">\n\n        <ion-icon name="menu"></ion-icon>\n\n        Back\n\n      </button> -->\n\n    <ion-title>\n\n      {{title}} - {{ActiveBankName}}  \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page10">\n\n    <form [formGroup]="formGroup" id="mobileRecharge-form2" #MobileRechargeform="ngForm" (ngSubmit)="OnNext()">\n\n     <!-- <form id="mobileRecharge-form2" *ngIf="ShowEntryForm" (ngSubmit)="OnNext(MobileRecharegeform)" #MobileRechargeform="ngForm"> -->\n\n      <div *ngIf="prepaid">\n\n      <ion-item id="mobileRecharge-input4">\n\n        <ion-label floating>\n\n          Mobile No\n\n        </ion-label>\n\n        <!-- <ion-input type="text" placeholder="" name="SubscriptionId" #SubscriptionId="ngModel" [(ngModel)]="rechargeitem.SubscriptionId" (ngModelChange)="OnMobileNo($event)" maxlength="10"></ion-input> -->\n\n        <!-- <ion-input type="text" placeholder="" name="SubscriptionId" #SubscriptionId="ngModel" [(ngModel)]="rechargeitem.SubscriptionId" (change)="OnMobileNo($event.target.value)" maxlength="10"></ion-input>-->\n\n        <!-- <ion-input type="text" placeholder="" name="SubscriptionId" #SubscriptionId="ngModel" [(ngModel)]="rechargeitem.SubscriptionId" (input)="OnMobileNo($event.target.value)" minlength="5"></ion-input> -->\n\n        \n\n        <!-- <ion-input type="text" placeholder="" name="SubscriptionId" #SubscriptionId="ngModel" [(ngModel)]="rechargeitem.SubscriptionId" (keyup)="OnMobileNo($event.target.value)" maxlength="10"></ion-input>      -->\n\n        <ion-input formControlName="subscriptionId" type="number" placeholder="" [(ngModel)]="rechargeitem.SubscriptionId" (keyup)="OnMobileNo($event.target.value)" maxlength="10"></ion-input>\n\n      </ion-item>\n\n      <p style="color:red;">{{subscriptionIdMessage}}</p>\n\n      <ion-item id="mobileRecharge-select1">\n\n        <ion-label>Operator</ion-label>\n\n          <!-- <ion-select id="mobileRecharge-input3" interface="popover" name="OperatorId" #OperatorId="ngModel" [(ngModel)]="rechargeitem.OperatorId" (ngModelChange)="OperatorChanged($event)">\n\n            <ion-option *ngFor="let order of OSResponseNew" [value]="order.Id">{{order.Operator}}</ion-option>\n\n        </ion-select> -->\n\n        <ion-select id="mobileRecharge-input3" interface="popover" formControlName="operatorId" [(ngModel)]="rechargeitem.OperatorId" (ngModelChange)="OperatorChanged($event)">\n\n            <ion-option *ngFor="let order of OSResponseNew" [value]="order.Id">{{order.Operator}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item id="mobileRecharge-select1">\n\n      <ion-label>State</ion-label>\n\n        <!-- <ion-select id="mobileRecharge-input3" interface="popover" name="CircleId" #CircleId="ngModel" [(ngModel)]="rechargeitem.CircleId" (ngModelChange)="StateChanged($event)">\n\n          <ion-option *ngFor="let order of StatesOfIndia" [value]="order.Id">{{order.Name}}</ion-option>\n\n      </ion-select> -->\n\n      <ion-select id="mobileRecharge-input3" interface="popover" formControlName="circleId" [(ngModel)]="rechargeitem.CircleId" (ngModelChange)="StateChanged($event)">\n\n          <ion-option *ngFor="let order of StatesOfIndia" [value]="order.Id">{{order.Name}}</ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n    </div>\n\n\n\n    \n\n    <div *ngIf="postpaid">\n\n      <ion-item id="mobileRecharge-input4">\n\n        <ion-label floating>\n\n          Mobile No\n\n        </ion-label>\n\n        <ion-input formControlName="subscriptionId" type="number" placeholder="" [(ngModel)]="rechargeitem.SubscriptionId" (keyup)="OnMobileNo($event.target.value)" maxlength="10"></ion-input>\n\n      </ion-item>\n\n      <p style="color:red;">{{subscriptionIdMessage}}</p>\n\n      <ion-item id="mobileRecharge-select1">\n\n        <ion-label>Operator</ion-label>\n\n        <ion-select id="mobileRecharge-input3" interface="popover" formControlName="operatorId" [(ngModel)]="rechargeitem.OperatorId" (ngModelChange)="OperatorChanged($event)">\n\n            <ion-option *ngFor="let order of OSResponseNew" [value]="order.Id">{{order.Operator}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item id="mobileRecharge-select1">\n\n      <ion-label>State</ion-label>\n\n      <ion-select id="mobileRecharge-input3" interface="popover" formControlName="circleId" [(ngModel)]="rechargeitem.CircleId" (ngModelChange)="StateChanged($event)">\n\n          <ion-option *ngFor="let order of StatesOfIndia" [value]="order.Id">{{order.Name}}</ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n    </div>\n\n\n\n\n\n      <div *ngIf="DTHNo">\n\n          <ion-item id="mobileRecharge-select1">\n\n              <ion-label>Operator</ion-label>\n\n            <ion-select id="mobileRecharge-input3" interface="popover" formControlName="operatorId" [(ngModel)]="rechargeitem.OperatorId" (ngModelChange)="ObjChanged($event)">\n\n                <ion-option *ngFor="let order of OSResponseNew" [value]="order.Id">{{order.Operator}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        <ion-item id="mobileRecharge-input4">\n\n          <ion-label *ngIf="ShowLabel" floating>\n\n            Subsriber ID\n\n          </ion-label>\n\n          <ion-label floating>\n\n           {{label}}\n\n          </ion-label>\n\n          <!-- <ion-input type="text" placeholder="" formControlName="subscriptionId" minlength="9" [(ngModel)]="rechargeitem.SubscriptionId" (keyup)="OnSubscriberID($event.target.value)"></ion-input>      -->\n\n          <ion-input type="text" placeholder="" (keypress)="AvoidSpace(event)" formControlName="subscriptionId" [(ngModel)]="rechargeitem.SubscriptionId" (keyup)="OnSubscriberID($event.target.value)"></ion-input>     \n\n        </ion-item>\n\n          <p style="color:black;">{{subscriptionIdInfo}}</p>\n\n        <p style="color:red;">{{subscriptionIdMessage}}</p>\n\n      </div>\n\n\n\n\n\n      <div *ngIf="ElectricityConsumerNo">\n\n          <ion-item id="mobileRecharge-select1">\n\n              <ion-label>Operator</ion-label>\n\n                    <ion-select id="mobileRecharge-input3" interface="popover" formControlName="operatorId" [(ngModel)]="rechargeitem.OperatorId" (ngModelChange)="ObjChanged($event)">\n\n                  <ion-option *ngFor="let order of OSResponseNew" [value]="order.Id">{{order.Operator}}</ion-option>\n\n            </ion-select>  \n\n          </ion-item>\n\n          <ion-item id="mobileRecharge-input4">\n\n            <ion-label *ngIf="ShowLabel" floating>\n\n              Consumer Number\n\n            </ion-label>\n\n            <ion-label floating>\n\n              {{label}}\n\n             </ion-label>\n\n            <ion-input type="text" placeholder="" (keypress)="AvoidSpace(event)" formControlName="subscriptionId" maxlength="10" [(ngModel)]="rechargeitem.SubscriptionId" (keyup)="OnSubscriberID($event.target.value)"></ion-input>     \n\n          </ion-item>\n\n          <p style="color:red;">{{subscriptionIdMessage}}</p>\n\n        </div>\n\n\n\n\n\n      <ion-item id="mobileRecharge-input6">\n\n        <ion-label floating>\n\n          Amount\n\n        </ion-label>\n\n        <!-- <ion-input type="text" placeholder="" formControlName="amount" [(ngModel)]="rechargeitem.Amount" (keyup)="onAmount($event)" minlength="4"></ion-input> -->\n\n        <ion-input type="number" placeholder="" formControlName="amount" [(ngModel)]="rechargeitem.Amount"></ion-input>\n\n        <button *ngIf="prepaid" ion-button clear item-end (click)="OnViewPlans()" type="button" [disabled]="!isStateEnabled||!isOperatorEnabled">View Plans</button>\n\n        <!-- <ion-card-content item-end>of {{operatorname}}-{{statename}}</ion-card-content> -->\n\n    </ion-item>\n\n    <p style="color:red;">{{amountMessage}}</p>\n\n\n\n      <ion-item id="mobileRecharge-input7">\n\n        <ion-label floating>\n\n          Nick Name\n\n        </ion-label>\n\n        <!-- <ion-input type="text" placeholder="" formControlName="nickname" [(ngModel)]="rechargeitem.NickName" (keyup)="onNickName($event)" minlength="2"></ion-input> -->\n\n        <ion-input type="text" placeholder="" formControlName="nickname" [(ngModel)]="rechargeitem.NickName"></ion-input>\n\n      </ion-item>\n\n      <p style="color:red;">{{nicknameMessage}}</p>\n\n      \n\n      <div class="spacer" style="width:300px;height:21px;" id="mobileRecharge-spacer5"></div>\n\n      <div id="mobileRecharge-markdown7" class="show-list-numbers-and-dots">\n\n        <p style="color:#000000;">\n\n          <strong>\n\n            Disclaimer\n\n          </strong>\n\n          : While we support most recharges, we request you to verify with your operator once before proceding\n\n        </p>\n\n      </div>\n\n        <!-- <button id="mobileRecharge-button3" ion-button color="positive" block [disabled]="!isStateEnabled||!isOperatorEnabled||!isMobileNoEntered||!isNickNameEntered||!isAmountEntered||!isButtonEnabled"> -->\n\n          <button id="mobileRecharge-button3" ion-button color="positive" block [disabled]="!isStateEnabled||!isOperatorEnabled||!isMobileNoEntered||MobileRechargeform.invalid"> \n\n          Next\n\n      </button>\n\n  </form>\n\n    <button ion-button clear item-centre (click)="OnGoBack()">GoBack</button>       \n\n</ion-content>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\mobile-recharge\mobile-recharge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__services_UIService__["a" /* UISercice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_5__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_2__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], MobileRechargePage);
    return MobileRechargePage;
}());

//# sourceMappingURL=mobile-recharge.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fund_transfer_fund_transfer__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__balance_enquiry_balance_enquiry__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mini_statement_mini_statement__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_page__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AutoLogoutService } from '../services/AutoLogOutService';





var BankingPage = /** @class */ (function () {
    // constructor(public constant:ConstantService,private autoLogoutService: AutoLogoutService,public navCtrl: NavController) {
    function BankingPage(storageService, navCtrl) {
        //StorageService.SetItem('lastAction', Date.now().toString());
        this.storageService = storageService;
        this.navCtrl = navCtrl;
    }
    BankingPage.prototype.ngOnInit = function () {
        this.ActiveBankName = this.storageService.GetActiveBankName();
    };
    BankingPage.prototype.OnFundTransfer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fund_transfer_fund_transfer__["a" /* FundTransferPage */]);
    };
    BankingPage.prototype.OnBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_page__["a" /* PagePage */]);
    };
    BankingPage.prototype.OnBalanceEnquiry = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__balance_enquiry_balance_enquiry__["a" /* BalanceEnquiryPage */]);
    };
    BankingPage.prototype.OnMiniStatement = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mini_statement_mini_statement__["a" /* MiniStatementPage */]);
    };
    BankingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-banking',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\banking\banking.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle (click)="OnBack()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Banking - {{ActiveBankName}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <ion-list id="banking-list4">\n\n    <ion-item color="assertive" id="banking-list-item13" (click)="OnFundTransfer()">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/png;base64,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"/>\n\n      </ion-avatar>\n\n      <h2>\n\n        Fund Transfer\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="assertive" id="banking-list-item15" (click)="OnBalanceEnquiry()">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/png;base64,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"/>\n\n      </ion-avatar>\n\n      <h2>\n\n        Balance Enquiry\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="assertive" id="banking-list-item16" (click)="OnMiniStatement()">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/jpeg;base64,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4Kpv5la09I/kjgeKUfcOyWvJ57BVpzlORlI3ItiEIwiIxFAK8zz2CQ5jk9ylB7cnkpAdhwE1c//Z/+0aZlBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQAAAAAAAAAAAAAAAAAAAAADhCSU0ELwAAAAAASkMAAQBIAAAASAAAAAAAAAAAAAAA0AIAAEACAAAAAAAAAAAAABgDAABkAgAAAAHAAwAAsAQAAAEADycBADEAMgAuAHAAbgBnAAAAOEJJTQPtAAAAAAAQAEgAAAABAAEASAAAAAEAAThCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAHjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTQQKAAAAAAABAAA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAADOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0EAAAAGAAAAAAAAAAAAAADIAAAAyAAAAAYAMQA4AC0ANQAxADIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAMgAAADIAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAADIAAAAAFJnaHRsb25nAAAAyAAAAAZzbGljZXNWbExz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eG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4YXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4YXA6Q3JlYXRlRGF0ZT0iMjAxOC0wNS0wOVQxNDozMzoyOSswNTo0NSIgeGFwOk1vZGlmeURhdGU9IjIwMTgtMDUtMDlUMTQ6MzM6MjkrMDU6NDUiIHhhcDpNZXRhZGF0YURhdGU9IjIwMTgtMDUtMDlUMTQ6MzM6MjkrMDU6NDUiIHhhcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTMyBXaW5kb3dzIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgcGhvdG9zaG9wOkhpc3Rvcnk9IiIgeGFwTU06SW5zdGFuY2VJRD0idXVpZDpDOTFBMDBDOTY0NTNFODExQTE5N0EwQUUxNDkxODU1RCIgeGFwTU06RG9jdW1lbnRJRD0idXVpZDpDODFBMDBDOTY0NTNFODExQTE5N0EwQUUxNDkxODU1RCIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIHRpZmY6TmF0aXZlRGlnZXN0PSIyNTYsMjU3LDI1OCwyNTksMjYyLDI3NCwyNzcsMjg0LDUzMCw1MzEsMjgyLDI4MywyOTYsMzAxLDMxOCwzMTksNTI5LDUzMiwzMDYsMjcwLDI3MSwyNzIsMzA1LDMxNSwzMzQzMjs5REMyMEI1NzYyNzdCNTgzNDlCRDgzNkFEOTE1NDc1RiIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjIwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjIwMCIgZXhpZjpDb2xvclNwYWNlPSIxIiBleGlmOk5hdGl2ZURpZ2VzdD0iMzY4NjQsNDA5NjAsNDA5NjEsMzcxMjEsMzcxMjIsNDA5NjIsNDA5NjMsMzc1MTAsNDA5NjQsMzY4NjcsMzY4NjgsMzM0MzQsMzM0MzcsMzQ4NTAsMzQ4NTIsMzQ4NTUsMzQ4NTYsMzczNzcsMzczNzgsMzczNzksMzczODAsMzczODEsMzczODIsMzczODMsMzczODQsMzczODUsMzczODYsMzczOTYsNDE0ODMsNDE0ODQsNDE0ODYsNDE0ODcsNDE0ODgsNDE0OTIsNDE0OTMsNDE0OTUsNDE3MjgsNDE3MjksNDE3MzAsNDE5ODUsNDE5ODYsNDE5ODcsNDE5ODgsNDE5ODksNDE5OTAsNDE5OTEsNDE5OTIsNDE5OTMsNDE5OTQsNDE5OTUsNDE5OTYsNDIwMTYsMCwyLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDIwLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDMwO0ZGNkE4RkMzMjk3QTAxMzY5MzQ5MDBBQjcyM0VBNjMyIj4gPHhhcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAA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"/>\n\n      </ion-avatar>\n\n      <h2>\n\n        Mini Statement\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="assertive" id="banking-list-item14">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/4RU7RXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAcAAAAcgEyAAIAAAAUAAAAjodpAAQAAAABAAAApAAAANAACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIENTMyBXaW5kb3dzADIwMTg6MDU6MDkgMTQ6MzM6MjkAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAyKADAAQAAAABAAAAyAAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAEeARsABQAAAAEAAAEmASgAAwAAAAEAAgAAAgEABAAAAAEAAAEuAgIABAAAAAEAABQFAAAAAAAAAEgAAAABAAAASAAAAAH/2P/gABBKRklGAAECAABIAEgAAP/tAAxBZG9iZV9DTQAB/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAoACgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9UJj+AS147pd9OU3l27lFS8/cOSlPft2Tfk7BL8vYJKXk/M9ktePvKbyHPcpaR/JSUvPfsEp7/cFC26qmp197hXVWNznO0AA7lcl1D65ZNjy3pzG1VDi60bnu/lNr+jW3+upcPL5MpqA0G8j8rFlzQxD1HfYD5nsJPHdKfuHJXEt6t9cHsD2C9zHCWubjggg6hzXemn/AGn9cv3Mj/2GH/pNTfcJ/wCcx/43/oLF98h+5k/xf/QntZ79uyUn5ngLiv2n9cv3L/8A2GH/AKTS/af1y/cv/wDYYf8ApNL7jP8AzmL/ABv/AEFX3yP7mT/F/wDQntdeO/cpp+4d1xf7T+uX7mR/7DD/ANJpftP65fuZH/sMP/SaX3Gf+cx/43/oKvvkf3Mn+L/6E9rPc/IJSfmuK/af1y/cv/8AYYf+k1F3X/rRhxZlNcK5j9PRsYf5O9ra/wDqkvuGQ7Txk9hL/wBBV98h1hMeJj/a9v5feUp79ll9E65j9Vqc2PRyKh+loJnQ8WVu/PrWn5nnsFWnCUJGMhUg2ITjOIlE2CvJ+fYJT25PdN5DnuUh5cdz4pq5/9D1Q/cO5Tfk7BOfPjwTfl7BFSvy9gl5DnuUvIc9ylpH8lJStI/kqN11VNTr73CuqsbnOdoAB3KV11VNTr73CuqsbnOdoAB3K4nqvVczr+YzDw2O9Dd+hp4LiP8AtRkfuMZ/4H/xqm5flzlP7sI/PP8AdYc2YYx+9OXyx7q6r1XM6/mMw8NjvQ3foaeC4j/tRkfuMZ/4H/xqh1/pFXSsbCra71LrRa6+3xcPS2tb+7Wzd7V1PRei0dLoLWkWZFg/T3+P8hn7tbVj/XmP1GOIu/8ARKu4c8Tnx4sQ4cUeL/DPBL1SauXCRhnkyG8kq/wPUNA9B0r/AJKwj2+z1f8AUNVrX5ngKr0r/kvC7n7PVA/sNVryHPcrOyfPLzLeh8sfIK14HPcpfP2just/1m6ExzqzliWEtdDXuBI5h7Wlrk3/ADp6Dz9qEDgbH/8AkE72M3+bn/iyW+9i/fj/AI0XVnufkEtfi4/cFlf86eg8/axP9Sz/AMgl/wA6Og8fax5nY/8A8gl93zf5uf8AiyV72L/OR/xour5A/EqL2ssY5ljQ6pwhzXCQ4HSHNKFiZmJm0C/FsFtBJEieRy1zXe5qP5nnsEwgg0QQR9q8EEWNQXh6av2T9bGUUH9GLm1tH/B3gfozP+j3/wDga7jvA57lcX1P/wAWTP8AwxjfkrXaePYdyrXOGxhkfmljjZa3K6HLEbCZoK/J3KX4DsEvM8dgl3158PBVGy//0fVDz4nsm8hz3Kfvp8ym0j+SipWkfyVG26qmp197hXVWNznO0AA7lS8z8guJ+tXVbsvOfhMMY2Kdpb2fYNXOf/xf0GKbl8BzT4QaA1kf6rFnzDFDi3J0iPFj1XquZ1/MZh4bHehu/Q08F5H/AGoyP3GM/wDA/wDjV03Rei0dLoLWkPyHj9Pf4/yGfu1tWD0brXQ+lUFrasizIs/nr9jJP8hn6X2VNWj/AM9OlcejkQO21n/pVWuYhmMRixY5RxR/8c/rSa2GWIH3MmQSyH/meAd/SP5I4HiuU+vR1wgeYuMeX6FW3/XXpwaSyjIc+Pa0hjRP9b1HLEYzP+s/VdzxtqENtc36FVQ19Nrj9K6z/wAz/mk3lcE8eT3cg4IYwSTLxHCu5jNDJD28Z45TIGn2vY9Kn9l4YHP2eqT/AGGq0PLRo7+KZrWtYGMG2togAeA0hP5n5BUpG5E9zbaiKAHYU4LvqZ0kuLmvvraSS2trmwJ/Nbvrc7b/AGk3/Mvpcx62RP8AWZ/6SW/+Lil5D5lS/es/+ckx/dsP7gcD/mX0v/TZGnfcz/0kl/zL6VE+tkR/WZ/6SW/pHg38qXmeewR+9Z/85JX3bD+4Gr03puN0zG+z4wcQXF5LzLnOP5zj9H6I2q1rwPpdz4JazH53c+CWkR+b3KhlIyJlI2TuSygCIAAoDYPF9T/8WTP/AAxjfkrXaHxPHYLi+p/+LJn/AIYxvyVrtO/ieytc38nL/wCzDW5b5s3+0KtZ8XHgeCQ5gfMpeQ+ZSHlo38qqNp//0vVD58JvM/IJzzJ+QTflRUrv4lcNjYtGZ9a7sbIb6lNmRkbmyRO31HN1bDvpLuR4D5lcX0z/AMWT/wDwxk/ksVzkyRHOQaIxmiGrzQBlhB1BmHf/AOa/QIn7II7e+zX/AKaX/NfoP/cQSe29/wD5NavmeewS8hz3Kr+/m/zk/wDGkzezi/zcf8WLlj6r9BB0xAT3lzyPxetCmiiioVUVtqpbw1gDR+CJHbsOfNLzI07BNlknLSU5S/vHiTGEI/LER8hSvM/IJfi4pa/ElKDwPmU1eryHzKWkeDR+KXb+SO3ilryeewSQrzPPYJazA+l3PglB+Z5KUdu3c+KSlaRA47lLzPHYJeZ47BLX+0eB4JKeL6n/AOLJn/H435K12ncgfMri+p/+LJn/AIYxvyVrtD56N/KrfN/Jy/8As4tblvmzf7Qq0jwb+VLuCfkEvM89gkOfE91UbT//0/VO+nKbyHzKc/d4lN/1PYIqVz5DsuL6Z/4sn/8AhjJ/JYu17689guK6Z/4sn/8AH5P5LFb5T5OY/wBlJq8z82H/AGge014HPcrO67T1O/p5r6W8su3tLtrtjnM/PbXYfoO3bVo6R/JHJ8UvMjTsFWhLhkJAA8JupbNiUeKJjZFitN3i/wBmfXL9/I/9iR/6US/Zn1y/fv8A/Ykf+lF2kHnk/kSg8DvyVZ+/T/zeL/F/9Ca/3OP7+T/G/wDQXi/2Z9cv37//AGJH/pRL9mfXL9/I/wDYkf8ApRdpHb80dvFLXkjXsEvv0/8AN4/8X/0JX3OP7+T/ABv/AEF4v9mfXL9/I/8AYkf+lEv2Z9cv37//AGJH/pRdpB+Z5KUdu3c+KX36f+bxf4v/AKEr7nH9/J/jf+gvF/sz65fv5H/sSP8A0ol+zPrl+/kf+xI/9KLtI8RoOAlB55P5Evv0/wDN4v8AF/8AQlfc4/v5P8b/ANBc7oNPU6MAM6m82ZG9xZudvc1h+i2ywfTWj5D5lKDwPmUtI8lWnLikZEAcRuo/K2Ix4YiNk0K13eL6n/4smf8AhjG/JWu0PMn5BcX1P/xZM/4/G/JWu076ak/gFZ5v5OX/ANlFr8t82b/aFWs+Ljz5JDwHHcpeQ47lIfcOwVRsv//U9UPnwm/L2Cc8+J7BN+XuUVL9/PuVxXTP/Fk//wAMZP5LF2g8uPyri+mf+LJ//hjJ/JYrfKfJzH+zk1eZ+bD/ALQPaeZ+QWd17puR1Pp5xqLRVYXtcQ6QxzR/grNnu2/n/wBhaOvz/In4MD5lVoTMJCUd4mw2JREomJ2IovFf8yOqf6TG+9//AKTTf8yOqf6TG+9//pNdtOvGnilOkwrP+kOY7j7Gv9yw9j9rxX/Mjqn+kxvvf/6TS/5kdU/0mN97/wD0mu1k6aalKdY/FL/SHMdx9ivuWHsfteK/5kdU/wBJjfe//wBJpf8AMjqn+kxvvf8A+k12s86aJSYmNfBL/SHMdx9ivuWHsfteJ/5kdU/0mN97/wD0ml/zI6p/pMb73/8ApNdtOsQlOqX+kOY7j7FfcsPY/a53QemX9M6eMXItFrt7ngNktaD/AIOvf7tv560UgfL4JflVWczORlLeRstiMRGIiNgKDxXU/wDxZM/4/G/JWu08Y0Hcri+p/wDiyZ/4YxvyVrtD4ngcDxVrm/k5f/Zxa/LfNm/2hV2k8dgl3158PBLWZP0uw8EhzHJ7lVG0/wD/1fVO+nPcptI/k9ynP3Dum8z8gipXx+QXF9M/8WT/APj8n8li7Tv4lcX0z/xZP/4/J/JYrfKfJzH+yk1eZ+bD/tA9r/qSqXWMTJzemX4uLb9ntsbDLZI7guaXM97Wvb7Parv5Ezy1oL3mGtEmdAI7lVIkggjcG2zIAgg7EU8H/wAzOvR9OoeA9V//AJBL/mZ16f5yqf8AjX/+QXZftTpvP2ugk8fpWf8Akkv2n0zgZlGvJ9Rn/klb+9Z/3R/itX7rg/eP+M8b/wAzOvf6Srz/AEr/APyCX/Mzr0fzlMf8a/8A8guy/afTOPtdAaP+FZr/ANJL9qdN5OXR5D1Wf+SS+9Z/3R/iq+64P3j/AIzxv/Mzr3+kqnsPVf8A+QS/5mden+cqn/jX/wDkF2X7U6b/ANzKNx7+ozT/AKSX7T6ZwMyiO59Vn/kkvvWf90f4qvuuDuf8Z43/AJmde/0lUePqv/8AIJf8zOvf6Sry/Sv/APILsv2p0z/uXRA4HqM/8kl+1Om8/a6Cew9Vmn/SS+9Z/wB0f4qvuuD94/4zn/VfpHUOl03MzbhYbXA11Nc57WAD3u3Pj3W/98W2h03UXN30WNtZwXscHCR23NRPyKtkkZSMpbnfo2YREYiMdhs8V1P/AMWTP+PxvyVrtDz4nsFxfU//ABZM/wCPxvyVrtO5A57lWeb+Tl/9lFr8t82b/aFXkOe5SHl9H8qWkeDR+KXgT8gqjZf/1vVD4n5BN+VOefNN5D5lFSh4D5lcX0z/AMWT/wDj8n8li7T8AuL6Z/4sn/8AH5P5LFb5T5OY/wBnJq8z82H/AGge1VPq/T29T6fdgueaze0DeBMQQ8S3Tcz2+9quJKpEmJBG4NhskAgg7HQvGf8AjfXf9za/+2T/AOlUv/G+t/7m1/8AbJ/9KrtElP8AfM/73/NiwfdMH7v4yeL/APG+u/7m1/8AbJ/9Kpf+N9d/3Nr/AO2T/wClV2iSX3zP+9/zYq+6YP3fxk8X/wCN9d/3Nr/7ZP8A6VS/8b63/ubX/wBsn/0qu0SS++Z/3v8AmxV90wfu/jJ4v/xvrv8AubXP/En/ANKpf+N9d/3Nr/7ZP/pVdokl98z/AL3/ADYq+6YP3fxk431d+r/7FrvabvXfe5pdDdjQGghu1m5/v93vethIl0iBIJ1M8aJKGc5TkZSNks0IRhERiKAeK6n/AOLJn/H435K12h+5vfzXF9T/APFkz/wxjfkrXaHmT8grXN/Jy/8As4tflvmzf7Qq8z8gkOfE/kS1nxcfwSHgPmVUbT//1/VPIfMptI/kpz58JvM89gipfvr8guK6Z/4sn/8AH5P5LF2nfxPdcPbb+yfrY++8RWLnWOPP6O8H9IP+L3/+Bq3yQsZoj5pYzQavNGjikdhMWXufyJJmPZYxtlbg9jgC1zTIIPDmkJ1TbS6SZJJS6SZJJS6SZJJS6SZJJS6iT93dOdfgovexjDZaQxjBJLjAAH5znFEKeM6n/wCLJn/H435K12nfTUn8AuHpt/a31sZfQJrNzbGnj9HQB+kP/GbP/BF3HiBx3Kuc6KGGJ+aOMWGryps5ZDYzNFXkPmUh9zeyWkfyRwPFLvJ57BU2y//Q9UPPiewTeQ57lOfLk900du3c+KKleXbuVmdb6Hj9Vqa4n0cmvSm4CdD/AIOxv59f/ULT+I0HAS157/kToTlCQlE1ILZwjOJjIWC8S3oH1owyasVzhXM/oL9jCf3tjnV/9Spfsz65fv3/APsSP/Si7SDwO/JSjt+b+VWfv+TrDGfEx/8AQmv9zh0nMeAl/Y8X+zPrl+/kf+xI/wDSiX7M+uX7+R/7Ej/0ou015PyCUH5nul9+n/m8X+L/AOhK+5x/fyf43/oLxf7M+uX79/8A7Ej/ANKJfsz65fv3/wDsSP8A0ou0jsOO5Sjy0HAS+/T/AM3j/wAX/wBCV9zj+/k/xv8A0F4v9mfXL9/I/wDYkf8ApRL9mfXL9+//ANiR/wClF2mvPfsPBKD25PJS+/T/AM3i/wAX/wBCV9zj+/k/xv8A0F4v9mfXL9+//wBiR/6US/Zn1y/fv/8AYkf+lF2kduB+VLzPyCX36f8Am8f+L/6Er7nH9/J/jf8AoLxf7M+uX7+R/wCxI/8ASii76v8A1ozCK8oucyZm+/eweexrrP8AqV20H4k/glHYfMpff8g2hjB7iP8A6Er7nDrOZ85f2OZ0TodHSq3EO9XJs0tvIjQf4Kpv5la09I/kjgeKUfcOyWvJ57BVpzlORlI3ItiEIwiIxFAK8zz2CQ5jk9ylB7cnkpAdhwE1c//Z/+0aZlBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQAAAAAAAAAAAAAAAAAAAAADhCSU0ELwAAAAAASkMAAQBIAAAASAAAAAAAAAAAAAAA0AIAAEACAAAAAAAAAAAAABgDAABkAgAAAAHAAwAAsAQAAAEADycBADEAMgAuAHAAbgBnAAAAOEJJTQPtAAAAAAAQAEgAAAABAAEASAAAAAEAAThCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAHjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTQQKAAAAAAABAAA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAADOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0EAAAAGAAAAAAAAAAAAAADIAAAAyAAAAAYAMQA4AC0ANQAxADIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAMgAAADIAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAADIAAAAAFJnaHRsb25nAAAAyAAAAAZzbGljZXNWbExz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eG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4YXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4YXA6Q3JlYXRlRGF0ZT0iMjAxOC0wNS0wOVQxNDozMzoyOSswNTo0NSIgeGFwOk1vZGlmeURhdGU9IjIwMTgtMDUtMDlUMTQ6MzM6MjkrMDU6NDUiIHhhcDpNZXRhZGF0YURhdGU9IjIwMTgtMDUtMDlUMTQ6MzM6MjkrMDU6NDUiIHhhcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTMyBXaW5kb3dzIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgcGhvdG9zaG9wOkhpc3Rvcnk9IiIgeGFwTU06SW5zdGFuY2VJRD0idXVpZDpDOTFBMDBDOTY0NTNFODExQTE5N0EwQUUxNDkxODU1RCIgeGFwTU06RG9jdW1lbnRJRD0idXVpZDpDODFBMDBDOTY0NTNFODExQTE5N0EwQUUxNDkxODU1RCIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIHRpZmY6TmF0aXZlRGlnZXN0PSIyNTYsMjU3LDI1OCwyNTksMjYyLDI3NCwyNzcsMjg0LDUzMCw1MzEsMjgyLDI4MywyOTYsMzAxLDMxOCwzMTksNTI5LDUzMiwzMDYsMjcwLDI3MSwyNzIsMzA1LDMxNSwzMzQzMjs5REMyMEI1NzYyNzdCNTgzNDlCRDgzNkFEOTE1NDc1RiIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjIwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjIwMCIgZXhpZjpDb2xvclNwYWNlPSIxIiBleGlmOk5hdGl2ZURpZ2VzdD0iMzY4NjQsNDA5NjAsNDA5NjEsMzcxMjEsMzcxMjIsNDA5NjIsNDA5NjMsMzc1MTAsNDA5NjQsMzY4NjcsMzY4NjgsMzM0MzQsMzM0MzcsMzQ4NTAsMzQ4NTIsMzQ4NTUsMzQ4NTYsMzczNzcsMzczNzgsMzczNzksMzczODAsMzczODEsMzczODIsMzczODMsMzczODQsMzczODUsMzczODYsMzczOTYsNDE0ODMsNDE0ODQsNDE0ODYsNDE0ODcsNDE0ODgsNDE0OTIsNDE0OTMsNDE0OTUsNDE3MjgsNDE3MjksNDE3MzAsNDE5ODUsNDE5ODYsNDE5ODcsNDE5ODgsNDE5ODksNDE5OTAsNDE5OTEsNDE5OTIsNDE5OTMsNDE5OTQsNDE5OTUsNDE5OTYsNDIwMTYsMCwyLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDIwLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDMwO0ZGNkE4RkMzMjk3QTAxMzY5MzQ5MDBBQjcyM0VBNjMyIj4gPHhhcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAA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"/>\n\n      </ion-avatar>\n\n      <h2>\n\n        Stop Cheque\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>{{ActiveBankName}} All Rights Rserved</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\banking\banking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], BankingPage);
    return BankingPage;
}());

//# sourceMappingURL=banking.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_change_bank_change_bank__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_banking_banking__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_page__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_recharge_recharge__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_favourites_favourites__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mini_statement_mini_statement__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mobile_recharge_mobile_recharge__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_confirm_page_confirm_page__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_recharge_successful_recharge_successful__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_bank_list_bank_list__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_enter_otp_enter_otp__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_auth_auth_guard__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic2_auto_complete__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_UIHelperClasses_UIHelperService__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_auth_auth_interceptor__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__routes__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_services_Constants__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_services_AutoLogOutService__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_fund_transfer_fund_transfer__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_balance_enquiry_balance_enquiry__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_ViewPlans_Tabs_ViewPlans_Tabs__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_recharge_report_recharge_report__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_prepaid_confirm_prepaid_confirm__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_services_UIService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_my_profile_my_profile__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_bank_branches_bank_branches__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_fund_transfer_confirm_fund_transfer_confirm__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_modal_modal__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { environment } from '../environments/environment';





























//import { IonicPageModule } from 'ionic-angular';












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_change_bank_change_bank__["a" /* ChangeBankPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_banking_banking__["a" /* BankingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_page__["a" /* PagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_recharge_recharge__["a" /* RechargePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mini_statement_mini_statement__["a" /* MiniStatementPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirm_page_confirm_page__["a" /* ConfirmPagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recharge_successful_recharge_successful__["a" /* RechargeSuccessfulPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_bank_list_bank_list__["a" /* BankListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_enter_otp_enter_otp__["a" /* EnterOTPPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_fund_transfer_fund_transfer__["a" /* FundTransferPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_balance_enquiry_balance_enquiry__["a" /* BalanceEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_ViewPlans_Tabs_ViewPlans_Tabs__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_recharge_report_recharge_report__["a" /* RechargeReportPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_prepaid_confirm_prepaid_confirm__["a" /* PrepaidConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_enter_otp_enter_otp__["b" /* FormatTimePipe */],
                __WEBPACK_IMPORTED_MODULE_42__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_bank_branches_bank_branches__["a" /* BankBranchesPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_fund_transfer_confirm_fund_transfer_confirm__["a" /* FundTransferConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_modal_modal__["a" /* ModalPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_23__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["c" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_25_ionic2_auto_complete__["a" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-bottom-center',
                    // positionClass: 'toast-top-center',
                    preventDuplicates: true,
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_31__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_32__routes__["a" /* appRoutes */]),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_change_bank_change_bank__["a" /* ChangeBankPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_banking_banking__["a" /* BankingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_page__["a" /* PagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_recharge_recharge__["a" /* RechargePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mini_statement_mini_statement__["a" /* MiniStatementPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirm_page_confirm_page__["a" /* ConfirmPagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recharge_successful_recharge_successful__["a" /* RechargeSuccessfulPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_bank_list_bank_list__["a" /* BankListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_enter_otp_enter_otp__["a" /* EnterOTPPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_fund_transfer_fund_transfer__["a" /* FundTransferPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_balance_enquiry_balance_enquiry__["a" /* BalanceEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_ViewPlans_Tabs_ViewPlans_Tabs__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_recharge_report_recharge_report__["a" /* RechargeReportPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_prepaid_confirm_prepaid_confirm__["a" /* PrepaidConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_bank_branches_bank_branches__["a" /* BankBranchesPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_fund_transfer_confirm_fund_transfer_confirm__["a" /* FundTransferConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_modal_modal__["a" /* ModalPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__pages_auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], {
                    provide: __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_30__pages_auth_auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_28__pages_services_app_data_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_29__pages_UIHelperClasses_UIHelperService__["a" /* UIHelperService */],
                __WEBPACK_IMPORTED_MODULE_33__pages_services_Storage_Service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_34__pages_services_Constants__["a" /* ConstantService */],
                __WEBPACK_IMPORTED_MODULE_35__pages_services_AutoLogOutService__["a" /* AutoLogoutService */],
                __WEBPACK_IMPORTED_MODULE_41__pages_services_UIService__["a" /* UISercice */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_mobile_recharge_mobile_recharge__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_banking_banking__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_setting_setting__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_change_bank_change_bank__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page_page__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_services_Constants__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_my_profile_my_profile__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bank_branches_bank_branches__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = /** @class */ (function () {
    // constructor(platform: Platform, statusBar: StatusBar, private reg:RegisterPage, log:LoginPage, splashScreen: SplashScreen) {
    function MyApp(storageService, event, constant, platform, statusBar, splashScreen, regService) {
        var _this = this;
        this.storageService = storageService;
        this.event = event;
        this.constant = constant;
        this.regService = regService;
        this.event.subscribe('UNAUTHORIZED', function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //localStorage.clear();
            //localStorage.removeItem('userToken');
            _this.event.subscribe('REFRESH_DIGIPARTYNAME', function () {
                _this.ActiveBankName = _this.storageService.GetActiveBankName();
                _this.digipartyname = _this.storageService.GetDigipartyBasedOnActiveTenantId().Name;
                _this.showMenuOptions = true;
            });
            if (_this.storageService.GetUser() == null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
                _this.showMenuOptions = false;
            }
        });
    }
    MyApp.prototype.goToPage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_page_page__["a" /* PagePage */]);
    };
    MyApp.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    MyApp.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_banking_banking__["a" /* BankingPage */]);
    };
    MyApp.prototype.goToSetting = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_setting_setting__["a" /* SettingPage */]);
    };
    MyApp.prototype.goToChangeBank = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_change_bank_change_bank__["a" /* ChangeBankPage */]);
    };
    MyApp.prototype.goToMyProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_my_profile_my_profile__["a" /* MyProfilePage */]);
    };
    MyApp.prototype.goToBankBranches = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_bank_branches_bank_branches__["a" /* BankBranchesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\app\app.html"*/'<ion-menu [content]="mainContent" *ngIf="showMenuOptions">\n\n\n\n\n\n\n\n  <ion-content id="side-menu21">\n\n    <div class="spacer" style="width:268px;height:17px;" id="menu-spacer9"></div>\n\n\n\n    <img src="data:image/png;base64,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"\n\n      style="display:block;width:30%;height:30;margin-left:auto;margin-right:auto;" />\n\n\n\n    <div class="spacer" style="width:268px;height:11px;" id="menu-spacer12"></div>\n\n    <h3 style="margin-left:35%; color:deeppink; ">{{digipartyname}}</h3>\n\n    <hr>\n\n    <ion-list id="menu-list1">\n\n      <ion-item-sliding>\n\n\n\n        <ion-item color="positive" menuClose="" on-click="goToPage()" id="menu-list-item1" >\n\n\n\n          <ion-icon name="home" item-left></ion-icon>\n\n          Home\n\n        </ion-item>\n\n        <ion-item-options side="left">\n\n          <button ion-button color="positive"></button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n      <ion-item color="positive" menuClose="" on-click="goToSetting()" id="menu-list-item2" *ngIf="showMenuOptions">\n\n        <ion-icon name="settings" item-left></ion-icon>\n\n        Settings\n\n      </ion-item>\n\n      <ion-item color="positive" menuClose="" on-click="goToChangeBank()" id="menu-list-item3" *ngIf="showMenuOptions">\n\n        <ion-icon name="repeat" item-left></ion-icon>\n\n        Change Bank\n\n      </ion-item>\n\n      <ion-item color="positive" menuClose="" on-click="goToChangeBank()" id="menu-list-item12">\n\n        <ion-icon name="mail" item-left></ion-icon>\n\n        Contact Us\n\n      </ion-item>\n\n      <ion-item color="positive" menuClose="" on-click="goToMyProfile()" id="menu-list-item12" *ngIf="showMenuOptions">\n\n        <ion-icon name="mail" item-left></ion-icon>\n\n        My Account\n\n      </ion-item>\n\n      <ion-item color="positive" menuClose="" on-click="goToBankBranches()" id="menu-list-item12" *ngIf="showMenuOptions">\n\n        <ion-icon name="mail" item-left></ion-icon>\n\n        Bank Branches\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_13__pages_services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__pages_services_app_data_service__["a" /* RegisterService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmPagePage = /** @class */ (function () {
    function ConfirmPagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConfirmPagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-confirm-page',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\confirm-page\confirm-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Confirm Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <ion-list id="confirmPage-list12">\n    <ion-item color="none" id="confirmPage-list-item20">\n      Operator\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="confirmPage-list-item29">\n      Mobile No:\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="confirmPage-list-item30">\n      Amount\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="confirmPage-list-item31">\n      Nick Name\n      <ion-note item-right></ion-note>\n    </ion-item>\n  </ion-list>\n  <button id="confirmPage-button5" ion-button color="positive">\n    <ion-icon name="arrow-dropleft"></ion-icon>\n    Cancel\n  </button>\n  <button id="confirmPage-button6" ion-button color="positive" icon-right>\n    Submit\n    <ion-icon name="arrow-dropright"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\confirm-page\confirm-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ConfirmPagePage);
    return ConfirmPagePage;
}());

//# sourceMappingURL=confirm-page.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargeSuccessfulPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RechargeSuccessfulPage = /** @class */ (function () {
    function RechargeSuccessfulPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RechargeSuccessfulPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recharge-successful',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\recharge-successful\recharge-successful.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Recharge Successful\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <ion-list id="rechargeSuccessful-list16">\n    <ion-item color="balanced" id="rechargeSuccessful-list-item52">\n      <ion-icon name="information" item-left></ion-icon>\n      Recharge Succesfull\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="rechargeSuccessful-spacer6"></div>\n  <ion-list id="rechargeSuccessful-list15">\n    <ion-item color="none" id="rechargeSuccessful-list-item48">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Idea\n      </h2>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="rechargeSuccessful-spacer7"></div>\n  <ion-list id="rechargeSuccessful-list17">\n    <ion-item color="none" id="rechargeSuccessful-list-item49">\n      <ion-icon name="help" item-left></ion-icon>\n      Issue with this transaction\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\recharge-successful\recharge-successful.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], RechargeSuccessfulPage);
    return RechargeSuccessfulPage;
}());

//# sourceMappingURL=recharge-successful.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mobile_recharge_mobile_recharge__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banking_banking__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BankListPage = /** @class */ (function () {
    function BankListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BankListPage.prototype.goToEnterOTP = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__["a" /* EnterOTPPage */]);
    };
    BankListPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    BankListPage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    BankListPage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__banking_banking__["a" /* BankingPage */]);
    };
    BankListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bank-list',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\bank-list\bank-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Bank List\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page14">\n\n  <ion-list id="bankList-list14">\n\n    <ion-item color="none" on-click="goToEnterOTP()" id="bankList-list-item17">\n\n      <ion-avatar item-left>\n\n        <img />\n\n      </ion-avatar>\n\n      <h2>\n\n        1. Co-Operative Bank\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" on-click="goToEnterOTP()" id="bankList-list-item19">\n\n      <ion-avatar item-left>\n\n        <img />\n\n      </ion-avatar>\n\n      <h2>\n\n        2. Co-Operative Bank\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" on-click="goToEnterOTP()" id="bankList-list-item32">\n\n      <ion-avatar item-left>\n\n        <img />\n\n      </ion-avatar>\n\n      <h2>\n\n        3.Co-Operative Bank\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" on-click="goToEnterOTP()" id="bankList-list-item18">\n\n      <ion-avatar item-left>\n\n        <img />\n\n      </ion-avatar>\n\n      <h2>\n\n        4. Co-Operative Bank\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\bank-list\bank-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], BankListPage);
    return BankListPage;
}());

// export class ShuklaDay{
//   static Sun:number[]=[2,3,1,4,5];
//   static Mon:number[]=[5,2,3,1,4];
//   static Tue:number[]=[2,3,1,4,5];
//   static Wed:number[]=[5,2,3,1,4];
//   static Thu:number[]=[4,5,2,3,1];
//   static Fri:number[]=[1,4,5,2,3];
//   static Sat:number[]=[3,1,4,5,2];
// }
// export class ShuklaNight{
//   static Sun:number[]=[5,3,4,2,1];
//   static Mon:number[]=[3,4,2,1,5];
//   static Tue:number[]=[5,3,4,2,1];
//   static Wed:number[]=[3,4,2,1,5];
//   static Thu:number[]=[4,2,1,5,3];
//   static Fri:number[]=[2,1,5,3,4];
//   static Sat:number[]=[1,5,3,4,2];
// }
// export class KrishnaDay{
//   static Sun:number[]=[3,2,5,4,1];
//   static Mon:number[]=[4,1,3,2,5];
//   static Tue:number[]=[3,2,5,4,1];
//   static Wed:number[]=[5,4,1,3,2];
//   static Thu:number[]=[1,3,2,5,4];
//   static Fri:number[]=[2,5,4,1,3];
//   static Sat:number[]=[4,1,3,2,5];
// }
// export class KrishnaNight{
//   static Sun:number[]=[2,4,3,5,1];
//   static Mon:number[]=[5,1,2,4,3];
//   static Tue:number[]=[2,4,3,5,1];
//   static Wed:number[]=[4,3,5,1,2];
//   static Thu:number[]=[3,5,1,2,4];
//   static Fri:number[]=[1,2,4,3,5];
//   static Sat:number[]=[5,1,2,4,3];
// }
// export class xxxxx{
//  static Paksha:number[]=[1,2];
//  static DayNight:number[]=[1,2];
//  static Vara:number[]=[1,2,3,4,5,6,7];
//  static Activities:number[]=[1,2,3,4,5];
// }
// if(xxxxx.Paksha[0]==1&&xxxxx.DayNight[0]==1&&xxxxx.Vara[0]==1&&xxxxx.Activities[0]==1){
// }
// if(xxxxx.Paksha[0]==1&&xxxxx.DayNight[0]==1&&xxxxx.Vara[0]==1){
//   switch(xxxxx.Activities){
//     case [0]:var y=3;
//     break;
//     case [1]:
//     break;
//     default:
//     break;
//   }
// }
// if(xxxxx.Paksha[0]==1&&xxxxx.DayNight[0]==1&&xxxxx.Activities[0]==1){
//   switch(xxxxx.Vara){
//     case [0]:var y=3;
//     break;
//     case [1]:
//     break;
//     default:
//     break;
//   }
// }
// xxxxx.Paksha
//# sourceMappingURL=bank-list.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstantService = /** @class */ (function () {
    function ConstantService() {
        this.favouriteBasedOnParentId = {
            Favourite_S1: "Favourite(S1)",
            Favourite_S2: "Favourite(S2)",
            Favourite_S3: "Favourite(S3)",
            Favourite_S4: "Favourite(S4)",
            Favourite_S5: "Favourite(S5)",
            Favourite_S6: "Favourite(S6)",
            Favourite_S7: "Favourite(S7)"
        };
        this.osBasedOnParentId = {
            OS_S1: "OS(S1)",
            OS_S2: "OS(S2)",
            OS_S3: "OS(S3)",
            OS_S4: "OS(S4)",
            OS_S5: "OS(S5)",
            OS_S6: "OS(S6)",
            OS_S7: "OS(S7)"
        };
    }
    ConstantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConstantService);
    return ConstantService;
}());

//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__banking_banking__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recharge_recharge__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recharge_report_recharge_report__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PagePage = /** @class */ (function () {
    function PagePage(storageService, viewCtrl, events, navCtrl, navParams) {
        this.storageService = storageService;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagePage.prototype.ngOnInit = function () {
        this.ActiveBankName = this.storageService.GetActiveBankName();
        this.events.publish('REFRESH_DIGIPARTYNAME');
        this.viewCtrl.didEnter.subscribe(function () {
            console.log('Component active');
        });
    };
    PagePage.prototype.OnBanking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__banking_banking__["a" /* BankingPage */]);
    };
    PagePage.prototype.OnRecharge = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recharge_recharge__["a" /* RechargePage */]);
    };
    PagePage.prototype.OnReports = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recharge_report_recharge_report__["a" /* RechargeReportPage */]);
    };
    PagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-page',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\page\page.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n    {{ActiveBankName}} - Mobile App\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <ion-list id="page-list6">\n\n    <ion-item color="assertive" id="page-list-item21" (click)="OnBanking()">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/jpeg;charset=utf-8;base64,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SU//2f/tFtZQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAABxwCAAACxVYAOEJJTQQlAAAAAAAQiFuw9VdJYKMDYLLY8Ls/SjhCSU0ELwAAAAAASgyGAQBIAAAASAAAAAAAAAAAAAAA0AIAAEACAAAAAAAAAAAAABgDAABkAgAAAAHAAwAAsAQAAAEADycBAGxsdW4AAAAAAAAAAAAAOEJJTQPtAAAAAAAQAGAAAAABAAEAYAAAAAEAAThCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAHjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTQQKAAAAAAABAAA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAAOHAAAABgAAAAAAAAAAAAAAxwAAAMgAAAApAEkAbgBkAGkAYQBuAF8AUgB1AHAAZQBlAF8AUwB5AG0AYgBvAGwAXwBUAGgAZQBaAGUAcgBvAEwAaQBmAGUALgBDAG8AbQBfAHQAaAB1AG0AYgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAyAAAAMcAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAMcAAAAAUmdodGxvbmcAAADIAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAA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Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeGFwOkNyZWF0ZURhdGU9IjIwMTgtMDUtMDdUMTY6NTU6NTkrMDU6NDUiIHhhcDpNb2RpZnlEYXRlPSIyMDE4LTA1LTA3VDE2OjU3OjA2KzA1OjQ1IiB4YXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA1LTA3VDE2OjU3OjA2KzA1OjQ1IiB4YXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzMgV2luZG93cyIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SGlzdG9yeT0iIiB4YXBNTTpJbnN0YW5jZUlEPSJ1dWlkOjRENUE4NzVBRTc1MUU4MTE4QjUyRUVFRjlBMzRBMUM3IiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOlhSZXNvbHV0aW9uPSI5NjAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249Ijk2MDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgdGlmZjpOYXRpdmVEaWdlc3Q9IjI1NiwyNTcsMjU4LDI1OSwyNjIsMjc0LDI3NywyODQsNTMwLDUzMSwyODIsMjgzLDI5NiwzMDEsMzE4LDMxOSw1MjksNTMyLDMwNiwyNzAsMjcxLDI3MiwzMDUsMzE1LDMzNDMyOzk0RDlBMEQ1RDA5OTgyQ0M3MjM1MTA5NDkwQkM4NTg5IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTk5IiBleGlmOkNvbG9yU3BhY2U9Ii0xIiBleGlmOk5hdGl2ZURpZ2VzdD0iMzY4NjQsNDA5NjAsNDA5NjEsMzcxMjEsMzcxMjIsNDA5NjIsNDA5NjMsMzc1MTAsNDA5NjQsMzY4NjcsMzY4NjgsMzM0MzQsMzM0MzcsMzQ4NTAsMzQ4NTIsMzQ4NTUsMzQ4NTYsMzczNzcsMzczNzgsMzczNzksMzczODAsMzczODEsMzczODIsMzczODMsMzczODQsMzczODUsMzczODYsMzczOTYsNDE0ODMsNDE0ODQsNDE0ODYsNDE0ODcsNDE0ODgsNDE0OTIsNDE0OTMsNDE0OTUsNDE3MjgsNDE3MjksNDE3MzAsNDE5ODUsNDE5ODYsNDE5ODcsNDE5ODgsNDE5ODksNDE5OTAsNDE5OTEsNDE5OTIsNDE5OTMsNDE5OTQsNDE5OTUsNDE5OTYsNDIwMTYsMCwyLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDIwLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDMwOzc0MkExRTk2Rjg4Q0U4Q0E1NDlBNkM3Njc2NkUyOEREIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/uACFBZG9iZQBkQAAAAAEDABADAgMGAAAAAAAAAAAAAAAA/9sAhAAEAwMDAwMEAwMEBgQDBAYHBQQEBQcIBgYHBgYICggJCQkJCAoKDAwMDAwKDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQQFBQgHCA8KCg8UDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCADHAMgDAREAAhEBAxEB/8QA4wABAAIDAQEBAQAAAAAAAAAAAAcIAQUGBAMCCQEBAAMBAQEBAAAAAAAAAAAAAAUGBwQDAgEQAAAFAwIFBAIDAQEAAAAAAAECAwQFAAYHEBMgMEARFRIWFxgkCCExFDI0EQACAQIDAwYICgcHBQEAAAABAgMRBAAh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" />\n\n      </ion-avatar>\n\n      <h2>\n\n        Banking\n\n      </h2>\n\n      <p>Mobile Banking</p>\n\n    </ion-item>\n\n    <ion-item color="assertive" id="page-list-item22" (click)="OnRecharge()">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/jpeg;charset=utf-8;base64,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+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADdQAAAAYAAAAAAAAAAAAAAM4AAADIAAAAIABtAG8AYgBpAGwAZQAtAHAAaABvAG4AZQAtAGkAYwBvAG4ALQB2AGUAYwB0AG8AcgAtADIAOQA0ADUANwAwADYAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAMgAAADOAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAADOAAAAAFJnaHRsb25nAAAAyAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAzgAAAABSZ2h0bG9uZwAAAMgAAAADdXJsVEVYVAAAAAEAAAAAAABudWxsVEVYVAAAAAEAAAAAAABNc2dlVEVYVAAAAAEAAAAAAAZhbHRUYWdURVhUAAAAAQAAAAAADmNlbGxUZXh0SXNIVE1MYm9vbAEAAAAIY2VsbFRleHRURVhUAAAAAQAAAAAACWhvcnpBbGlnbmVudW0AAAAPRVNsaWNlSG9yekFsaWduAAAAB2RlZmF1bHQAAAAJdmVydEFsaWduZW51bQAAAA9FU2xp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bnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4YXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhhcDpDcmVhdGVEYXRlPSIyMDE4LTA1LTA3VDE2OjQ5OjQxKzA1OjQ1IiB4YXA6TW9kaWZ5RGF0ZT0iMjAxOC0wNS0wN1QxNjo0OTo0MSswNTo0NSIgeGFwOk1ldGFkYXRhRGF0ZT0iMjAxOC0wNS0wN1QxNjo0OTo0MSswNTo0NSIgeGFwOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1MzIFdpbmRvd3MiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpIaXN0b3J5PSIiIHhhcE1NOkluc3RhbmNlSUQ9InV1aWQ6QUYzNTRCQkNFNTUxRTgxMUI5MzlGMUNENEM3ODEyQUYiIHhhcE1NOkRvY3VtZW50SUQ9InV1aWQ6QUUzNTRCQkNFNTUxRTgxMUI5MzlGMUNENEM3ODEyQUYiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiB0aWZmOk5hdGl2ZURpZ2VzdD0iMjU2LDI1NywyNTgsMjU5LDI2MiwyNzQsMjc3LDI4NCw1MzAsNTMxLDI4MiwyODMsMjk2LDMwMSwzMTgsMzE5LDUyOSw1MzIsMzA2LDI3MCwyNzEsMjcyLDMwNSwzMTUsMzM0MzI7OEYxMjQ4RDlEREUxRjMxNzMwMUUwMTlCNjU4NThFNEUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyMDAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyMDYiIGV4aWY6Q29sb3JTcGFjZT0iLTEiIGV4aWY6TmF0aXZlRGlnZXN0PSIzNjg2NCw0MDk2MCw0MDk2MSwzNzEyMSwzNzEyMiw0MDk2Miw0MDk2MywzNzUxMCw0MDk2NCwzNjg2NywzNjg2OCwzMzQzNCwzMzQzNywzNDg1MCwzNDg1MiwzNDg1NSwzNDg1NiwzNzM3NywzNzM3OCwzNzM3OSwzNzM4MCwzNzM4MSwzNzM4MiwzNzM4MywzNzM4NCwzNzM4NSwzNzM4NiwzNzM5Niw0MTQ4Myw0MTQ4NCw0MTQ4Niw0MTQ4Nyw0MTQ4OCw0MTQ5Miw0MTQ5Myw0MTQ5NSw0MTcyOCw0MTcyOSw0MTczMCw0MTk4NSw0MTk4Niw0MTk4Nyw0MTk4OCw0MTk4OSw0MTk5MCw0MTk5MSw0MTk5Miw0MTk5Myw0MTk5NCw0MTk5NSw0MTk5Niw0MjAxNiwwLDIsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMjAsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMzA7ODUyN0Q0NzA0MDMxQkZGQUFGOUVDNTNDQUM2RThDQ0QiPiA8ZGM6Y3JlYXRvcj4gPHJkZjpTZXE+IDxyZGY6bGk+VmVjdG9yU3RvY2suY29tLzI5NDU3MDY8L3JkZjpsaT4gPC9yZGY6U2VxPiA8L2RjOmNyZWF0b3I+IDx4YXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4AIUFkb2JlAGRAAAAAAQMAEAMCAwYAAAAAAAAAAAAAAAD/2wCEAAQDAwMDAwQDAwQGBAMEBgcFBAQF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"/>\n\n       </ion-avatar>\n\n      <h2>\n\n        Recharge/Payments\n\n      </h2>\n\n      <p>Recharge/Pay Bills</p>\n\n    </ion-item>\n\n    <ion-item color="assertive" id="page-list-item23" (click)="OnReports()">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/jpeg;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAA7pJREFUeNrs3b9qFEEcwPGZdSERCxENEm2ClVVIJYh1hFiIT2BnF3wEqzxCGkE7i5QBCxuxMmJnuBcIIiiEIPFPk3h3YxXIgcpJdvd2Zz+fTszqZW+/95tLZpOYUgrAnxVOAQgEBAICAYGAQEAgIBAQCAgEEAgIBAQCdSrb9oBWNgfTfJgtyPmI//rL3fVlgUxJFHlK04RiiSUOobTweS6cNLwYepOOSLILxOQQiUDEQZtZYmGKCATyCcTyCoGAQEAgkK+yw489evo6r/XvN00QEAgIBAQCAgGBgEBAICAQEAggEBAICAQEAgIBgUC3lE5Bu22Uzx6PQjG8O955eXv8/JMz0qyYUrtu6lrZHEz7gHK4o3C6z3V0nOYP99K1o4/jG3NfP69eOXj9pHi0cTSa28v9899dX44C6VcgVZ/wKBBLrBykBv5d9+kLJMswYkUhJZEIJJc4Ys3/p1AEIgzTpF6+D9JcHHEGF6yfcyyQzsSR2xcHBMKZL8QY2rHMEYlAWid2IGAEMpOLL3bkcSIQcSAQTBGBmB4IxJtyU0QglioIxPQQuEBMDwQCAqFHyyuTUCAgEBCIZQmz4o5CwWCCgEBAICAQEAgIJEfu+RAIIBAQCJaLAgGBeOVFIIhcIC4wBIK4BeJCQyCIWiC44BBIvyMRs0AQh0BcgOIQiEjEIRCRiEMgvYwkikMgtO8ijeIQiGliajTCT1ZsfpqkEEK4uP/h6MLo29z+/FIYXloShkA4fTGvXT14sHbwYu19eevezdHhwvGwOPfm+/XwauFhKQqB9N5WWt3eury6ffLnnfn1xZ/nF+//CIN3b8fLAyEIhFPu/Nr8EkJ4Kgpv0kEgIBAQCAgEEAgIBAQCAoEZ68N30v/n1zTHMx7P38+jCQKWWCAQQCAgEBAI1KIPX+aNMz4eEwQEAgIBBAICAYFAjezmnWQ3bzXs5gVLLBAIIBAQCFTLZsX6j8cEAYGAQACBgEBAIFAjmxUn2axYDZsVwRILBAIIBAQC1bJZsf7jMUFAICAQQCAgEBAI1MhmxUk2K1bDZkWwxAKBAAIBgYBAoDF289Z/PCYICAQEAggEBAICgRrZzTvJbt5q2M0LllggEEAgIBCols2K9R+PCQICAYEAAgGBgEBAICAQEAgIBAQC+evyXix3+mGCgEBAICCQKrj/AoGAQKDjq4nCiYFuThCRmB4CgTa/OBYdOFEmiTgEYrkljDY+z2XHTuAJ+7BMjGYeXEquNfAmHQQCAgGBgEBAICAQyNLvAQAaapKUaXyGZQAAAABJRU5ErkJggg=="/>\n\n      </ion-avatar>\n\n      <h2>\n\n        Reports\n\n      </h2>\n\n      <p>Your Transaction Reports</p>\n\n    </ion-item>\n\n    <!-- <ion-item color="assertive" id="page-list-item24">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/jpeg;charset=utf-8;base64,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"/>\n\n      </ion-avatar>\n\n      <h2>\n\n        Settings\n\n      </h2>\n\n      <p>Application & Security Settings</p>\n\n    </ion-item>\n\n    <ion-item color="assertive" id="page-list-item25">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/jpeg;charset=utf-8;base64,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"/>\n\n       </ion-avatar>\n\n      <h2>\n\n        Help\n\n      </h2>\n\n      <p>Customer Support</p>\n\n    </ion-item>\n\n    <ion-item color="assertive" id="page-list-item26">\n\n      <ion-avatar item-left>\n\n        <img src="data:image/jpeg;charset=utf-8;base64,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736P/oTNg5CUvVk9A/d/T/8AQXG6R9VMHALb8j9bym6h7x7GH/gavzf+Mf8ApFuJJLPnOUzxSNl0oY4QHDACIUkkkmrn/9D1VJJJJSkkkklKSSSSU183Aw8+k0ZdTbqzrDuQf3mOHuY7+Uxcd1f6oZmHN2Buy8camv8AwzfkP6R/Z/S/8Yu5SUuLPPEfSdP3T8rDm5fHlHqHq6SHzPk4IPHbQ/FJeg9Y+rXT+pzbH2fLPGQwan/jmfRu/wDPn/CLjOpdG6j0x5GTUTX+bkVy6s/F3+Cd/ItWlh5nHk0+WX7p/wC5/ecvPyuTFrXFD94f91+60UiQBJMDxV3p3RupdSfGLUfT/OvsltY/t/4T+rUuy6R9V+n9NLbn/rWWP8NYNGn/AIGr3Nq/8+/8Ilm5nHj0J4pfuj/uv3VYeVyZdQOGP70v+5/eeb6T9VOoZ+23JnDxTrLh+lcP+Dqd/Nf17v8Atpdj07pWB0yr08OoMn6bzq9x8bLHe5yuJLOzcxky7mo/ujZ08PLY8Xyi5fvH5lJJJKFnUkkkkpSSSSSn/9n/7R94UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAccAgAAAthcADhCSU0EJQAAAAAAEK5ki1XQNgbGgQQC9wSLdBA4QklNBC8AAAAAAEpjAAEASAAAAEgAAAAAAAAAAAAAANACAABAAgAAAAAAAAAAAAAYAwAAZAIAAAABwAMAALAEAAABAA8nAQBfADMAMQA4AC0AMwAyADhCSU0D7QAAAAAAEABIAAAAAQABAEgAAAABAAE4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAB44QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0ECgAAAAAAAQAAOEJJTScQAAAAAAAKAAEAAAAAAAAAAjhCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA////////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bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeGFwOkNyZWF0ZURhdGU9IjIwMTgtMDUtMDdUMTY6NDErMDU6NDUiIHhhcDpNb2RpZnlEYXRlPSIyMDE4LTA1LTA3VDE2OjU0OjA0KzA1OjQ1IiB4YXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA1LTA3VDE2OjU0OjA0KzA1OjQ1IiB4YXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzMgV2luZG93cyIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SGlzdG9yeT0iIiB4YXBNTTpJbnN0YW5jZUlEPSJ1dWlkOjc1NjQ0N0Y5RTY1MUU4MTE4NTU2RDU1RDM2RkU0RTQ3IiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOlhSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgdGlmZjpOYXRpdmVEaWdlc3Q9IjI1NiwyNTcsMjU4LDI1OSwyNjIsMjc0LDI3NywyODQsNTMwLDUzMSwyODIsMjgzLDI5NiwzMDEsMzE4LDMxOSw1MjksNTMyLDMwNiwyNzAsMjcxLDI3MiwzMDUsMzE1LDMzNDMyO0NFMTlFRkI4QkFEOUEyMkFDNjYzRDNCRjk5NDI3QjMwIiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMjAwIiBleGlmOkNvbG9yU3BhY2U9Ii0xIiBleGlmOk5hdGl2ZURpZ2VzdD0iMzY4NjQsNDA5NjAsNDA5NjEsMzcxMjEsMzcxMjIsNDA5NjIsNDA5NjMsMzc1MTAsNDA5NjQsMzY4NjcsMzY4NjgsMzM0MzQsMzM0MzcsMzQ4NTAsMzQ4NTIsMzQ4NTUsMzQ4NTYsMzczNzcsMzczNzgsMzczNzksMzczODAsMzczODEsMzczODIsMzczODMsMzczODQsMzczODUsMzczODYsMzczOTYsNDE0ODMsNDE0ODQsNDE0ODYsNDE0ODcsNDE0ODgsNDE0OTIsNDE0OTMsNDE0OTUsNDE3MjgsNDE3MjksNDE3MzAsNDE5ODUsNDE5ODYsNDE5ODcsNDE5ODgsNDE5ODksNDE5OTAsNDE5OTEsNDE5OTIsNDE5OTMsNDE5OTQsNDE5OTUsNDE5OTYsNDIwMTYsMCwyLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDIwLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDMwO0Q4OTFBOEI0OTNFNzU1MTMxQTMyNjc3MzlGNjI3N0RCIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/uACFBZG9iZQBkQAAAAAEDABADAgMGAAAAAAAAAAAAAAAA/9sAhAAEAwMDAwMEAwMEBgQDBAYHBQQEBQcIBgYHBgYICggJCQkJCAoKDAwMDAwKDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQQFBQgHCA8KCg8UDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCADIAMgDAREAAhEBAxEB/8QA2QABAQEAAwEBAQAAAAAAAAAAAAcIBAUGAwECAQEBAAMBAQEAAAAAAAAAAAAABgQFBwMCARAAAAYBAwQBAwUBAAMAAAAAAAIDBAUGARA0CCAwMQc2QDU3ERITFBVBFhcYEQACAQMBAgkICQQCAgMBAAABAgMRBAUAIRIQMUFRYSJiFAYgcYFyghOzdTAyQlKywnN0FZEjYyRAQ6IzsZJTgxIAAQEEBAoIBwEBAQEAAAAAAQIAERIDEMEiUiAhMVGBkbFCcoIwQWHR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"/>\n\n      </ion-avatar>\n\n      <h2>\n\n        Products\n\n      </h2>\n\n      <p>Our Products</p>\n\n    </ion-item> -->\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>{{ActiveBankName}} All Rights Reserved</ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\page\page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PagePage);
    return PagePage;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mobile_recharge_mobile_recharge__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banking_banking__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_page__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_UIService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LoginPage = /** @class */ (function () {
    function LoginPage(storageService, alertCtrl, uiService, navParams, toastrService, loadingController, formbuilder, registerService, navCtrl) {
        var _this = this;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.uiService = uiService;
        this.navParams = navParams;
        this.toastrService = toastrService;
        this.loadingController = loadingController;
        this.formbuilder = formbuilder;
        this.registerService = registerService;
        this.navCtrl = navCtrl;
        this.validationMessages = {
            password_required: '*Enter Password',
            password_minlength: 'Password cannot be less than 4 character'
        };
        this.userName = this.storageService.GetUser().UserName;
        this.uniqueKey = this.storageService.GetUser().UniqueKey;
        this.isForgotten = false;
        this.formGroup = formbuilder.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(4)]]
        });
        var passwordControl = this.formGroup.get('password');
        passwordControl.valueChanges.subscribe(function (value) { return _this.setErrorMessage(passwordControl); });
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.setErrorMessage = function (c) {
        var _this = this;
        this.passwordMessage = '';
        var control = this.uiService.getControlName(c);
        if ((c.touched || c.dirty) && c.errors) {
            if (control === 'password') {
                this.passwordMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
        }
    };
    LoginPage.prototype.ngOnInit = function () {
        if (this.storageService.GetTenant() != null) {
            this.ActiveBankName = this.storageService.GetActiveBankName();
        }
    };
    LoginPage.prototype.OnLogin = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Wait for a second..'
        });
        loading.present();
        var OS = this.storageService.GetOS();
        this.registerService.loginbyHttpClient(this.userName, this.formGroup.get('password').value, this.uniqueKey).subscribe(function (data) {
            _this.registerService.userToken = data.access_token;
            //StorageService.SetItem('userToken', data.access_token);
            _this.sendToken(data.access_token);
            if (OS == null) {
                var loading_1 = _this.loadingController.create({
                    content: 'Syncing Operators and Services'
                });
                loading_1.present();
                _this.registerService.GetServices().subscribe(function (data) {
                    var oS = JSON.stringify(data);
                    _this.storageService.SetOS(oS);
                    loading_1.dismiss();
                }, function (error) {
                    _this.toastrService.error(error.message, 'Error!');
                    loading_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: "Error Message",
                        subTitle: error.message,
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
            var tenants = _this.storageService.GetTenant();
            var DigiParties = _this.storageService.GetDigiParty();
            var SelfCareAcs = _this.storageService.GetSelfCareAc();
            if (tenants == null || DigiParties == null || SelfCareAcs == null) {
                var loadingnew = _this.loadingController.create({
                    content: 'Syncing Accounts'
                });
                loadingnew.present();
                _this.callservices();
                loadingnew.dismiss();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_page__["a" /* PagePage */], { 'ActiveBankName': _this.ActiveBankName });
            }
            loading.dismiss();
        }, function (error) {
            //this.toastrService.error(error.error.ExceptionMessage, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: 'Incorrect Password',
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
            _this.navCtrl.setRoot(LoginPage_1);
        });
    };
    LoginPage.prototype.sendToken = function (token) {
        // this.registerService.GetToken(token).subscribe((data:any)=>{
        // });
        this.registerService.GetToken(token);
    };
    LoginPage.prototype.callservices = function () {
        var _this = this;
        var addBankRequest = {
            TenantId: this.storageService.GetUser().ActiveTenantId,
            MobileNo: this.storageService.GetUser().UserName
        };
        this.registerService.AddBank(addBankRequest).subscribe(function (data) {
            var tenant = {
                Id: data.Tenant.Id,
                Name: data.Tenant.Name,
                Address: data.Tenant.Address,
                IconHtml: data.Tenant.IconHtml
            };
            _this.storageService.SetTenant(JSON.stringify([tenant]));
            var digiParty = {
                Id: data.DigiPartyId,
                DigiPartyId: data.DigiPartyId,
                PartyMastId: data.PartyMastId,
                MobileNo: data.MobileNo,
                TenantId: data.TenantId,
                Name: data.Name
            };
            _this.storageService.SetDigiParty(JSON.stringify([digiParty]));
            _this.storageService.SetSelfCareAc(JSON.stringify(data.SelfCareAcs));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_page__["a" /* PagePage */], { 'ActiveBankName': _this.ActiveBankName });
        }, function (error) {
            _this.toastrService.error(error.error.ExceptionMessage, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.error.ExceptionMessage,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.OnForgot = function () {
        this.isForgotten = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__register_register__["a" /* RegisterPage */], { 'isForgotPassword': this.isForgotten });
    };
    LoginPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    LoginPage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__banking_banking__["a" /* BankingPage */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="back-image" padding id="page6">\n\n  <div class="spacer" style="width:300px;height:199px;" id="enterOTP-spacer11"></div>\n\n  <!-- <form [formGroup]="formGroup" id="login-form1" #loginForm="ngForm" (ngSubmit)="OnLogin(Password.value)"> -->\n\n    <form [formGroup]="formGroup" id="login-form1" #loginForm="ngForm" (ngSubmit)="OnLogin()">\n\n    <ion-list id="login-list5">\n\n      <ion-item id="login-input2">\n\n        <ion-label floating>\n\n          Password\n\n        </ion-label>\n\n        <!-- <ion-input formControlName="pword" type="password" #Password ngModel name="Password" placeholder=""></ion-input> -->\n\n        <ion-input formControlName="password" type="password" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <a style="color:darkorange;" (click)="OnForgot()">Forgot password?</a>\n\n      <!-- <p style="color:red;" *ngIf="password.hasError(\'required\') && password.touched"> *Please Enter Password</p> -->\n\n      <p style="color:darkorange;">{{passwordMessage}}</p>\n\n    </ion-list>\n\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n\n    <button [disabled]="loginForm.invalid" id="login-button1" ion-button color="assertive" block on-click="goToHome()">\n\n      Log in\n\n    </button>\n\n    <!-- <button id="login-button2" ion-button clear color="assertive" block href-inappbrowser="/signup">\n\n      Reset Password\n\n    </button> -->\n\n  </form>\n\n \n\n</ion-content>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__services_UIService__["a" /* UISercice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UISercice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UISercice = /** @class */ (function () {
    function UISercice() {
    }
    UISercice.prototype.getControlName = function (c) {
        var formGroup = c.parent.controls;
        return Object.keys(formGroup).find(function (name) { return c === formGroup[name]; }) || null;
    };
    UISercice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], UISercice);
    return UISercice;
}());

//# sourceMappingURL=UIService.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banking_banking__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, registerService) {
        this.navCtrl = navCtrl;
        this.registerService = registerService;
    }
    HomePage.prototype.ngOnInit = function () {
        this.tenantList = this.registerService.tenantlist;
    };
    HomePage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    HomePage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__banking_banking__["a" /* BankingPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\home\home.html"*/'<div class="row" *ngIf="tenantlist">\n  <div class="col s12 m7">\n    <div class="card">\n        <!--interpolation-->\n      <div class="card-content">     \n           <div *ngFor="let order of tenantlist" style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;">\n      <span> Id : {{ order.Id |json }}</span> <br>\n      <span>Name : {{ order.Name | json }}</span> <br>\n      <span>Address : {{ order.Address }}</span> <br>\n\n    </div> \n\n      </div>       \n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__["a" /* RegisterService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mobile_recharge_mobile_recharge__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banking_banking__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_UIService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_Storage_Service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegisterPage = /** @class */ (function () {
    function RegisterPage(storageService, alertCtrl, uiService, navParams, loadingController, formbuilder, toastrService, regService, navCtrl) {
        var _this = this;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.uiService = uiService;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.formbuilder = formbuilder;
        this.toastrService = toastrService;
        this.regService = regService;
        this.navCtrl = navCtrl;
        this.validationMessages = {
            mobilenum_required: '*Enter mobile number',
            mobilenum_minlength: 'invalid mobile number',
            mobilenumforOTP_required: '*Enter mobile number',
            mobilenumforOTP_minlength: 'invalid mobile number'
        };
        this.formgroup1 = formbuilder.group({
            mobilenum: ['', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].minLength(10)]]
        });
        this.formgroup1.controls['mobilenum']
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (val) {
            if (val && val.length < 10) {
                _this.formgroup1.controls['mobilenum'].setErrors({ minlength: true });
            }
        });
        // let loader = this.loadingController.create({
        //   content: "Page Loading....."
        // });  
        // loader.present();
        // setTimeout(() => {
        //   loader.dismiss();
        // }, 2000); 
        var mobilenumControl = this.formgroup1.get('mobilenum');
        mobilenumControl.valueChanges.subscribe(function (value) { return _this.setErrorMessage(mobilenumControl); });
        this.formgroup2 = formbuilder.group({
            mobilenumforOTP: ['', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].minLength(10)]]
        });
        var mobilenumforOTPControl = this.formgroup2.get('mobilenumforOTP');
        mobilenumforOTPControl.valueChanges.subscribe(function (value) { return _this.setErrorMessage(mobilenumforOTPControl); });
    }
    RegisterPage.prototype.setErrorMessage = function (c) {
        var _this = this;
        this.mobilenum_Message = '';
        this.mobilenumforOTP_Message = '';
        var control = this.uiService.getControlName(c);
        if ((c.touched || c.dirty) && c.errors) {
            if (control === 'mobilenum') {
                this.mobilenum_Message = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
            else if (control === 'mobilenumforOTP') {
                this.mobilenumforOTP_Message = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
        }
    };
    RegisterPage.prototype.ngOnInit = function () {
        this.hidethisform = true;
        this.isForgotPassword = this.navParams.get('isForgotPassword');
        if (this.isForgotPassword == true) {
            this.hidethisform = false;
        }
    };
    RegisterPage.prototype.OnGetTenants = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait till we get banks for you'
        });
        loading.present();
        this.tenant = null;
        this.regService.GetTenantsByMobile(this.formgroup1.get('mobilenum').value).subscribe(function (data) {
            _this.tenant = data;
            var TenantList = data;
            if (TenantList.length == 0) {
                _this.toastrService.error("Non-Registered/InCorrect Mobile Number", 'Error!');
                _this.tenant = null;
            }
            else {
                _this.hidethisform = false;
            }
            loading.dismiss();
        }, function (error) {
            _this.toastrService.error(error.error.ExceptionMessage, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.error.ExceptionMessage,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    //TenantIdActive: string;
    //digiCustWithOTPRefNo: DigiCustWithOTPRefNo;
    RegisterPage.prototype.OnRequestOTP = function (Id) {
        var _this = this;
        var mobilenum = this.formgroup1.get('mobilenum');
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        //this.TenantIdActive = Id;
        var oTPRequest = {
            TenantId: Id,
            MobileNo: mobilenum.value
        };
        this.regService.RequestOTP(oTPRequest).subscribe(function (data) {
            //this.digiCustWithOTPRefNo = data;
            //this.digiCustWithOTPRefNo.OTPRef = data.OTPRef;
            //ADDED toastr.css in the path "node_modules/ngx-toastr/toastr.css" from https://github.com/scttcper/ngx-toastr/blob/master/src/lib/toastr.css
            _this.toastrService.success('OTP Sent to ' + mobilenum.value + ' with Reference No. ' + data.OTPRef, 'Success!');
            loading.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__["a" /* EnterOTPPage */], { 'OTPRefNo': data.OTPRef, 'TenantId': Id, 'MobileNo': mobilenum.value, 'DigiPartyId': data.DigiPartyId });
        }, function (error) {
            _this.toastrService.error(error.error.ExceptionMessage, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.error.ExceptionMessage,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    RegisterPage.prototype.OnMobNo = function () {
        var _this = this;
        var mobilenumforOTP = this.formgroup2.get('mobilenumforOTP');
        var ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
        localStorage.clear();
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        var oTPRequest = {
            TenantId: ActiveTenantId,
            MobileNo: mobilenumforOTP.value
        };
        this.regService.RequestOTP(oTPRequest).subscribe(function (data) {
            // this.digiCustWithOTPRefNo = data;
            //this.digiCustWithOTPRefNo.OTPRef = data.OTPRef;
            _this.toastrService.success('OTP Sent to ' + mobilenumforOTP.value + ' with Reference No. ' + data.OTPRef, 'Success!');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__["a" /* EnterOTPPage */], { 'OTPRefNo': data.OTPRef, 'TenantId': ActiveTenantId, 'MobileNo': mobilenumforOTP.value, 'DigiPartyId': data.DigiPartyId });
            loading.dismiss();
        }, function (error) {
            _this.toastrService.error(error.error.ExceptionMessage, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.error.ExceptionMessage,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    RegisterPage.prototype.goToBankList = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.goToEnterOTP = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__["a" /* EnterOTPPage */]);
    };
    RegisterPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    RegisterPage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__banking_banking__["a" /* BankingPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\register\register.html"*/'<ion-content padding id="page13" class="back-image">\n\n  <form *ngIf="hidethisform" [formGroup]="formgroup1" id="register-form3" #registrationForm="ngForm" (ngSubmit)="OnGetTenants()">\n\n    <div class="spacer" style="width:300px;height:217px;" id="register-spacer10"></div>\n\n    <h5 id="register-heading1" style="color:#DEE1EE;">\n\n      Enter mobile number to search your bank\n\n    </h5>\n\n    <ion-list id="register-list11">\n\n      <ion-item id="register-input8">\n\n        <ion-label>\n\n          Phone Number\n\n        </ion-label>\n\n        <ion-input formControlName="mobilenum" type="number" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <!-- <p style="color:black;" *ngIf="mobilenum.hasError(\'required\') && mobilenum.touched">*MobileNumber is required</p> -->\n\n      <p style="color:darkorange">{{mobilenum_Message}}</p>\n\n    </ion-list>\n\n    <button [disabled]="registrationForm.invalid" id="register-button7" ion-button color="positive" block>\n\n      Search Bank\n\n    </button>\n\n  </form>\n\n\n\n  <div *ngIf="tenant">\n\n    <p style="color: #fff">Click on Account of your wish</p>\n\n  </div>\n\n  <ion-list>\n\n    <ion-item *ngFor="let order of tenant" (click)="OnRequestOTP(order.Id)">\n\n      <!-- <img src={{order.IconHtml}}/> -->\n\n        <!-- <img [src]="order.IconHtml"/> -->\n\n      <!-- <ion-thumbnail item-start>\n\n        <img src="data:image/png;base64,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…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"\n\n        />\n\n      </ion-thumbnail> -->\n\n\n\n      <h3>{{ order.Name | json }}</h3>\n\n      <h4>{{ order.Address }}</h4>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- <div *ngFor="let i of items">\n\n    <span *ngFor="let j of i">\n\n        {{j}}\n\n    </span>\n\n</div> -->\n\n\n\n<form *ngIf="isForgotPassword" [formGroup]="formgroup2" id="register-form4" #AskingMobNoForOTPForm="ngForm" (ngSubmit)="OnMobNo()">\n\n  <div class="spacer" style="width:300px;height:217px;" id="register-spacer10"></div>\n\n  <h5 id="register-heading1" style="color:#DEE1EE;">\n\n    Enter Registered Mobile Number\n\n  </h5>\n\n  <ion-list id="register-list11">\n\n    <ion-item id="register-input8">\n\n      <ion-label>\n\n        Phone Number\n\n      </ion-label>\n\n      <ion-input formControlName="mobilenumforOTP" type="number" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <p style="color:darkorange">{{mobilenumforOTP_Message}}</p>\n\n\n\n  </ion-list>\n\n  <button [disabled]="AskingMobNoForOTPForm.invalid" id="register-button7" ion-button color="positive" block>\n\n    Send OTP\n\n  </button>\n\n</form>\n\n</ion-content>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__services_UIService__["a" /* UISercice */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_6__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_data_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(registerService, storageService, event, router, localstorageService) {
        this.registerService = registerService;
        this.storageService = storageService;
        this.event = event;
        this.router = router;
        this.localstorageService = localstorageService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // console.log(req);
        if (req.headers.get('No-Auth') == "True") {
            return next.handle(req.clone());
        }
        if (req.url.indexOf("/token") > 0) {
            var headersforTokenAPI = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-urlencoded' });
            return next.handle(req);
        }
        // if(req.method=="POST"){
        // }
        // if(req.method=="GET"){
        // }
        //if (localStorage.getItem('userToken') != null) {
        if (this.registerService.userToken != null) {
            var clonedreq = req.clone({
                // headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
                headers: req.headers.set("Authorization", "Bearer " + this.registerService.userToken)
            });
            return next.handle(clonedreq)
                .do(function (succ) { }, function (err) {
                if (err.status === 401)
                    //this.router.navigateByUrl('/login');
                    // this.navCtrl.push(LoginPage);  
                    _this.event.publish('UNAUTHORIZED');
            });
        }
        else if (this.storageService.GetUser() == null && this.registerService.userToken == null) {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer ")
            });
            return next.handle(clonedreq)
                .do(function (succ) { }, function (err) {
                if (err.status === 401)
                    //this.router.navigateByUrl('/login');
                    // this.navCtrl.push(LoginPage);  
                    _this.event.publish('UNAUTHORIZED');
            });
        }
        else {
            this.router.navigateByUrl('/login');
            // this.navCtrl.push(LoginPage); 
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* unused harmony export routing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_register_register__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_guard__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(93);





var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_0__pages_register_register__["a" /* RegisterPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_guard__["a" /* AuthGuard */]] },
];
var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoLogoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Storage_Service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MINUTES_UNITL_AUTO_LOGOUT = 5; // in mins
var CHECK_INTERVAL = 15000; // in ms
var STORE_KEY = 'lastAction';
var AutoLogoutService = /** @class */ (function () {
    function AutoLogoutService(app) {
        this.app = app;
        this.navCtrl = app.getActiveNav();
        console.log('object created');
        this.check();
        this.initListener();
        this.initInterval();
    }
    AutoLogoutService.prototype.getLastAction = function () {
        return parseInt(__WEBPACK_IMPORTED_MODULE_3__Storage_Service__["a" /* StorageService */].GetItem(STORE_KEY));
    };
    AutoLogoutService.prototype.setLastAction = function (lastAction) {
        __WEBPACK_IMPORTED_MODULE_3__Storage_Service__["a" /* StorageService */].SetItem(STORE_KEY, lastAction.toString());
    };
    AutoLogoutService.prototype.initListener = function () {
        var _this = this;
        document.body.addEventListener('click', function () { return _this.reset(); });
        document.body.addEventListener('mouseover', function () { return _this.reset(); });
        document.body.addEventListener('mouseout', function () { return _this.reset(); });
        document.body.addEventListener('keydown', function () { return _this.reset(); });
        document.body.addEventListener('keyup', function () { return _this.reset(); });
        document.body.addEventListener('keypress', function () { return _this.reset(); });
    };
    AutoLogoutService.prototype.reset = function () {
        this.setLastAction(Date.now());
    };
    AutoLogoutService.prototype.initInterval = function () {
        var _this = this;
        setInterval(function () {
            _this.check();
        }, CHECK_INTERVAL);
    };
    AutoLogoutService.prototype.check = function () {
        var now = Date.now();
        var timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
        var diff = timeleft - now;
        var isTimeout = diff < 0;
        if (isTimeout) {
            __WEBPACK_IMPORTED_MODULE_3__Storage_Service__["a" /* StorageService */].RemoveItem("lastAction");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
    };
    AutoLogoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AutoLogoutService);
    return AutoLogoutService;
}());

//# sourceMappingURL=AutoLogOutService.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterOTPPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormatTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mobile_recharge_mobile_recharge__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banking_banking__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_data_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_UIService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EnterOTPPage = /** @class */ (function () {
    function EnterOTPPage(storageService, alertCtrl, uiService, toastrService, navParams, loadingController, fb, navCtrl, registerService) {
        var _this = this;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.uiService = uiService;
        this.toastrService = toastrService;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.registerService = registerService;
        this.validationMessages = {
            otp_required: '*Enter OTP Number',
            otp_minlength: 'Enter 4 digits',
            oldPassword_required: '*Please Enter Old Password',
            oldPassword_minlength: 'Mobile Number cannot be less than 4 characters',
            password_required: 'Please enter password',
            password_minlength: 'Enter minimum 4 digits',
            confirmpwd_required: 'Please Re-Enter password',
            confirmpwd_minlength: 'This field should match with Password',
            confirmpwd_invalid: 'Password doesnot match'
        };
        this.counter = 40;
        this.tick = 1000;
        this.HideIf = true;
        this.formgroup = this.fb.group({
            otp: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(4)]]
        });
        var otpControl = this.formgroup.get('otp');
        otpControl.valueChanges.subscribe(function (value) { return _this.setErrorMessageForOTPField(otpControl); });
        this.SavePasswordForm = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(4)]],
            confirmpwd: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(4)]]
        }, { validator: this.matchingPasswords });
        var passwordControl = this.SavePasswordForm.get('password');
        passwordControl.valueChanges.subscribe(function (value) { return _this.setErrorMessageForPasswordField(passwordControl); });
        var confirmpasswordControl = this.SavePasswordForm.get('confirmpwd');
        confirmpasswordControl.valueChanges.subscribe(function (value) { return _this.setErrorMessageForPasswordField(confirmpasswordControl); });
        this.ChangePasswordForm = this.fb.group({
            oldPassword: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]],
            newPassword: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(4)]],
            confirmNewpwd: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(4)]]
        }, { validator: this.matchingPasswordsForCP });
        var oldPasswordControl = this.ChangePasswordForm.get('oldPassword');
        oldPasswordControl.valueChanges.subscribe(function (value) { return _this.setErrorMessageForChangePasswordForm(oldPasswordControl); });
        var passwordControl_CP = this.ChangePasswordForm.get('newPassword');
        passwordControl_CP.valueChanges.subscribe(function (value) { return _this.setErrorMessageForChangePasswordForm(passwordControl_CP); });
        var confirmpasswordControl_CP = this.ChangePasswordForm.get('confirmNewpwd');
        confirmpasswordControl_CP.valueChanges.subscribe(function (value) { return _this.setErrorMessageForChangePasswordForm(confirmpasswordControl_CP); });
    }
    EnterOTPPage.prototype.setErrorMessageForOTPField = function (c) {
        var _this = this;
        this.userMessage = '';
        var control = this.uiService.getControlName(c);
        if ((c.touched || c.dirty) && c.errors) {
            if (control === 'otp') {
                this.userMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
        }
    };
    EnterOTPPage.prototype.setErrorMessageForPasswordField = function (c) {
        var _this = this;
        this.passwordMessage = '';
        this.confirmpasswordMessage = '';
        var control = this.uiService.getControlName(c);
        if ((c.touched || c.dirty) && c.errors) {
            if (control === 'password') {
                this.passwordMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
            else if (control === 'confirmpwd') {
                this.confirmpasswordMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
        }
    };
    EnterOTPPage.prototype.setErrorMessageForChangePasswordForm = function (c) {
        var _this = this;
        this.oldPasswordMessage = '';
        this.passwordMessage = '';
        this.confirmpasswordMessage = '';
        var control = this.uiService.getControlName(c);
        if ((c.touched || c.dirty) && c.errors) {
            if (control === 'oldPassword') {
                this.oldPasswordMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
            else if (control === 'newPassword') {
                this.passwordMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
            else if (control === 'confirmNewpwd') {
                this.confirmpasswordMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[control + '_' + key]; }).join(' ');
            }
        }
    };
    EnterOTPPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.countDown = Observable.timer(0, this.tick)
        //   .take(this.counter)
        //   .map(() => --this.counter);
        this.ShowIf = this.navParams.get('ischangePassword');
        if (this.ShowIf == null) {
            this.ShowIf == false;
            this.ShowUserNameAndOldPassword = false;
        }
        else if (this.ShowIf == true) {
            this.HideIf = false;
            this.ShowUserNameAndOldPassword = true;
            this.ShowIf = false;
        }
        this.countDown = this.registerService.getCounter().do(function () { return --_this.counter; });
    };
    // stopTimer() {
    //   this.countDown = null;
    // }
    EnterOTPPage.prototype.matchingPasswords = function (group) {
        var password = group.controls.password.value;
        var confirmpwd = group.controls.confirmpwd.value;
        if (!password || !confirmpwd) {
            return null;
        }
        return password === confirmpwd ? null : { notSame: true };
    };
    EnterOTPPage.prototype.matchingPasswordsForCP = function (group) {
        var password = group.controls.newPassword.value;
        var confirmpwd = group.controls.confirmNewpwd.value;
        if (!password || !confirmpwd) {
            return null;
        }
        return password === confirmpwd ? null : { notSame: true };
    };
    EnterOTPPage.prototype.OnSubmit = function () {
        var _this = this;
        var OTPRefNo = this.navParams.get('OTPRefNo');
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        var postOPT = {
            TenantId: this.registerService.TenantId,
            MobileNo: this.registerService.MobileNo,
            OTPRef: OTPRefNo,
            OTP: this.formgroup.get('otp').value
        };
        this.registerService.ValidateOTP(postOPT).subscribe(function (data) {
            _this.storeboolean = data;
            if (_this.storeboolean == true) {
                _this.ShowIf = true;
                _this.HideIf = false;
                _this.ShowUserNameAndOldPassword = false;
            }
            else {
                _this.ShowIf = false;
                _this.HideIf = true;
                _this.toastrService.error("OTP is Invalid", 'Error!');
                _this.formgroup.get('otp').reset();
            }
            loading.dismiss();
        }, function (error) {
            _this.toastrService.error(error.message, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    EnterOTPPage.prototype.OnResendOTP = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        var oTPRequest = {
            TenantId: this.navParams.get('TenantId').value,
            MobileNo: this.navParams.get('MobileNo').value
        };
        this.registerService.RequestOTP(oTPRequest).subscribe(function (data) {
            //ADDED toastr.css in the path "node_modules/ngx-toastr/toastr.css" from https://github.com/scttcper/ngx-toastr/blob/master/src/lib/toastr.css
            _this.toastrService.success('OTP Sent to ' + data.MobileNo + ' with Reference No. ' + data.OTPRefNo, 'Success!');
            loading.dismiss();
        }, function (error) {
            _this.toastrService.error(error.error.ExceptionMessage, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.error.ExceptionMessage,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    EnterOTPPage.prototype.OnSavePassword = function () {
        var _this = this;
        var DigiPartyId = this.navParams.get('DigiPartyId');
        var userPost = {
            DigiPartyId: DigiPartyId,
            TenantId: this.registerService.TenantId,
            PIN: this.SavePasswordForm.controls['confirmpwd'].value,
            UniqueId: this.guid(),
            OTPRef: this.navParams.get('OTPRefNo'),
            OTP: this.formgroup.get('otp').value,
            MobileNo: this.registerService.MobileNo
        };
        var loading = this.loadingController.create({
            content: 'Please wait while registering the Password......'
        });
        loading.present();
        this.registerService.SaveMPin(userPost).subscribe(function (data) {
            var user = {
                ActiveTenantId: _this.registerService.TenantId,
                UserId: data.UserId,
                UserName: data.UserName,
                UniqueKey: data.UniqueKey
            };
            _this.storageService.SetUser(JSON.stringify(user));
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            loading.dismiss();
        }, function (error) {
            _this.toastrService.error(error.error.ExceptionMessage, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.error.ExceptionMessage,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    EnterOTPPage.prototype.OnChangePassword = function () {
        var _this = this;
        var changePassword = {
            UserName: this.storageService.GetUser().UserName,
            Old: this.ChangePasswordForm.get('oldPassword').value,
            New: this.ChangePasswordForm.get('confirmNewpwd').value
        };
        var loading = this.loadingController.create({
            content: 'Please wait while we Change Password....'
        });
        loading.present();
        this.registerService.ChangePassword(changePassword).subscribe(function (data) {
            if (data.IsValid == false) {
                _this.toastrService.error(data.Message, 'Error!');
            }
            else {
                _this.toastrService.success('Please login with the New Password', 'Success!');
                var alert = _this.alertCtrl.create({
                    title: "Message",
                    subTitle: "Please login with the New Password",
                    buttons: ['OK']
                });
                alert.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            }
            loading.dismiss();
        }, function (error) {
            _this.toastrService.error(error.error.ExceptionMessage, 'Error!');
            var alert = _this.alertCtrl.create({
                title: "Error Message",
                subTitle: error.error.ExceptionMessage,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    EnterOTPPage.prototype.OnForgot = function () {
        this.isForgotten = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__register_register__["a" /* RegisterPage */], { 'isForgotPassword': this.isForgotten });
    };
    //below code is from here https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/105074#105074
    EnterOTPPage.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    EnterOTPPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    EnterOTPPage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    EnterOTPPage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__banking_banking__["a" /* BankingPage */]);
    };
    EnterOTPPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-enter-otp',template:/*ion-inline-start:"D:\sahakariupdate\sahakariupdate\src\pages\enter-otp\enter-otp.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="HideIf">\n\n      Enter OTP\n\n    </ion-title>\n\n    <ion-title *ngIf="ShowIf">\n\n      Password Entry\n\n    </ion-title>\n\n    <ion-title *ngIf="ShowUserNameAndOldPassword">\n\n      Change Password \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="back-image" id="page15">\n\n    <!-- <div class="spacer" style="width:300px;height:199px;" id="enterOTP-spacer11"></div> -->\n\n    <div *ngIf="HideIf">\n\n  <form [formGroup]="formgroup" id="enterOTP-form4" #enterOTPForm="ngForm" (ngSubmit)="OnSubmit()">\n\n    <ion-list id="enterOTP-list18">\n\n      <ion-item id="enterOTP-input12">\n\n        <ion-label floating>\n\n          OTP\n\n        </ion-label>\n\n        <ion-input formControlName="otp" type="number" placeholder=""></ion-input>\n\n        <!-- <ion-input formControlName="otp" type="number" #OTPNo ngModel name="OTPNo" placeholder=""></ion-input> -->\n\n        <!-- <ion-input type="number" placeholder="" name="OTPNo" #OTPNo="ngModel" [(ngModel)]="order.Id"></ion-input> -->\n\n     \n\n      </ion-item>\n\n      <!-- <p style="color:darkorange;" *ngIf="otp.hasError(\'required\') && otp.touched"> *OTP is required</p> -->\n\n      <p style="color:darkorange;">{{userMessage}}</p>\n\n    </ion-list>\n\n    <div class="spacer" style="height:40px;" id="enterOTP-spacer8"></div>\n\n    <button [disabled]="enterOTPForm.invalid" id="enterOTP-button8" ion-button color="positive" block>\n\n      Submit\n\n    </button>\n\n  </form>\n\n  <h2>{{countDown | async | formatTime}}</h2>\n\n  <!-- <button (click)="stopTimer()">Stop</button> -->\n\n\n\n  <button style="color: darkorange" [disabled]="counter !== 0" ion-button clear item-centre (click)="OnResendOTP()">Click here to Resend OTP</button>       \n\n  </div>\n\n  <div *ngIf="ShowIf">\n\n  <!-- <form id="enterOTP-form2" [formGroup]="SavePasswordForm"  #NewPasswordEntryForm="ngForm" (ngSubmit)="OnSavePassword(CPassword.value)"> -->\n\n    <form id="enterOTP-form2" [formGroup]="SavePasswordForm"  #NewPasswordEntryForm="ngForm" (ngSubmit)="OnSavePassword()">\n\n      <ion-item id="enterOTP-input3">\n\n      <ion-label floating>\n\n        New Password\n\n      </ion-label>\n\n      <!-- <ion-input type="text" placeholder="" name="NPassword" #NPassword="ngModel" [(ngModel)]="npef.NPassword"></ion-input> -->\n\n      <!-- <ion-input formControlName="password" type="password" required #NPassword ngModel name="NPassword" placeholder=""></ion-input>       -->\n\n      <ion-input formControlName="password" type="password" placeholder=""></ion-input>      \n\n    </ion-item>\n\n    <!-- <p style="color:red;" *ngIf="password.hasError(\'required\') && password.touched"> *Password is required</p> -->\n\n    <p style="color:darkorange;">{{passwordMessage}}</p>\n\n\n\n    <ion-item id="enterOTP-input5">\n\n      <ion-label floating>\n\n        Confirm Password\n\n      </ion-label>\n\n      <!-- <ion-input type="text" placeholder="" name="CPassword" #CPassword="ngModel" [(ngModel)]="npef.CPassword"></ion-input> -->\n\n      <!-- <ion-input formControlName="confirmpwd" type="password" required Equalvalidate="password" #CPassword ngModel name="CPassword" placeholder=""></ion-input> -->\n\n      <ion-input formControlName="confirmpwd" type="password" Equalvalidate="password" placeholder=""></ion-input>\n\n      <!-- <div [hidden]="CPassword.valid || CPassword.pristine" class="alert alert-danger">\n\n        Password mismatch\n\n    </div> -->\n\n    </ion-item>\n\n    <!-- <p style="color:red;" *ngIf="confirmpwd.hasError(\'required\') && confirmpwd.touched"> *Confirmation is required</p> -->\n\n    <p style="color:darkorange;">{{confirmpasswordMessage}}</p>\n\n    <button [disabled]="NewPasswordEntryForm.invalid" id="enterOTP-button9" ion-button color="positive" block>\n\n      Save Password\n\n    </button>\n\n  </form>\n\n  <div style="color:red;" *ngIf="NewPasswordEntryForm.errors?.notSame"><span>Passwords do not match</span></div>\n\n</div>\n\n\n\n\n\n<div *ngIf="ShowUserNameAndOldPassword">\n\n    <form id="enterOTP-form2" [formGroup]="ChangePasswordForm"  #ChangePasswordEntryForm="ngForm" (ngSubmit)="OnChangePassword()">\n\n      <ion-item id="enterOTP-input3">\n\n        <ion-label floating>\n\n          Old Password\n\n        </ion-label>\n\n        <ion-input formControlName="oldPassword" type="password" placeholder=""></ion-input>      \n\n      </ion-item>\n\n      <p style="color:darkorange;">{{oldPasswordMessage}}</p>\n\n      <ion-item id="enterOTP-input3">\n\n      <ion-label floating>\n\n        New Password\n\n      </ion-label>\n\n      <ion-input formControlName="newPassword" type="password" placeholder=""></ion-input>      \n\n    </ion-item>\n\n    <p style="color:darkorange;">{{passwordMessage}}</p>\n\n    <ion-item id="enterOTP-input5">\n\n      <ion-label floating>\n\n        Confirm Password\n\n      </ion-label>\n\n      <ion-input formControlName="confirmNewpwd" type="password" Equalvalidate="password" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <p style="color:darkorange;">{{confirmpasswordMessage}}</p>\n\n    <a style="color:darkorange;" (click)="OnForgot()">Forgot password?</a>\n\n    <button [disabled]="ChangePasswordEntryForm.invalid" id="enterOTP-button9" ion-button color="positive" block>\n\n      Change Password\n\n    </button>\n\n  </form>\n\n  <div style="color:red;" *ngIf="ChangePasswordEntryForm.errors?.notSame"><span>Passwords do not match</span></div>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"D:\sahakariupdate\sahakariupdate\src\pages\enter-otp\enter-otp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__services_UIService__["a" /* UISercice */], __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_app_data_service__["a" /* RegisterService */]])
    ], EnterOTPPage);
    return EnterOTPPage;
}());

var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
    };
    FormatTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'formatTime'
        })
    ], FormatTimePipe);
    return FormatTimePipe;
}());

//# sourceMappingURL=enter-otp.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map