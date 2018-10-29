import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UIHelperService } from '../UIHelperClasses/UIHelperService';
import { Observable } from 'rxjs/Observable';
import { OTPRequest } from '../View Models/OTPrequest.vm';
import { DigiCustWithOTPRefNo } from '../View Models/DigiCustWithOTPRefNo';
import { PostOPT } from '../View Models/PostOPT';
import { UserPost } from '../View Models/UserPost';
import { UserResult } from '../View Models/UserResult';
import { TokenParams } from '../View Models/TokenParams';
import { OS } from '../View Models/OS';
import { SCRequest } from '../View Models/SCRequest';
import { OSRequest } from '../View Models/OSRequest';
import { OSResponse } from '../View Models/OSResponse';
import { RechargeModel } from '../View Models/RechargeModel';
import { TranResponse } from '../View Models/TranResponse';
import { FundTransferRequest } from '../View Models/FundTransferRequest';
import { DoFundTransfer } from '../View Models/DoFundTransfer';
import { StatementRequest } from '../View Models/StatementRequest';
import { AddBankRequest } from '../View Models/AddBankRequest';
//import { TenantList } from '../View Models/TenantList';
import { PlanRequest } from '../View Models/PlanRequest';
import { PlanResponse } from '../View Models/PlanResponse';
import { RRRequest } from '../View Models/RRRequest';
import { OperaterCircleQuery } from '../View Models/OperaterCircleQuery';
import { Tenant } from '../LocalStorageTables/Tenant';
import { ChangePassword } from '../View Models/ChangePassword';
import { ChangePasswordResult } from '../View Models/ChangePasswordResult';
import { AddBankResponse } from '../View Models/AddBankResponse';
import { FundTransferResponse } from '../View Models/FundTransferResponse';
import { BankBranch } from '../View Models/BankBranch';
import { CheckVoucher } from '../View Models/CheckVoucher';
import { Login } from '../View Models/Login';
import { StorageService } from './Storage_Service';
import { AlertController } from 'ionic-angular';
import { ErrorFromServer } from '../View Models/ErrorFromServer';
import { isArray } from 'ionic-angular/umd/util/util';
import { tap } from 'rxjs/operators'

@Injectable()
export class RegisterService {
    TenantId: string;
    MobileNo: string;
    userToken: string;
    tenantlist: Tenant;
    countDown;
    counter = 270;
    tick = 1000;
    AccessToken: string;
    Password: string;
    RefreshToken: string;
    refreshTokenNeeded: boolean;
    isLogOut: boolean;
    //constructor(private sqlite: SQLite,private httpclient:HttpClient,private locals:StorageService,private uihelper: UIHelperService,private http: Http) {
    constructor(private alertCtrl: AlertController, private httpclient: HttpClient, private uIHelperService: UIHelperService) {
        this.countDown = Observable.timer(0, this.tick)
            .take(this.counter)
            .map(() => --this.counter);  //To count down the time.
        if (this.countDown == 0) {
            var RefreshToken = StorageService.GetItem('refreshToken');
            this.GetToken(RefreshToken).subscribe((data: any) => {
                this.SetToken(data.AccessToken);
            });
        }

    }

    SetToken(Token: string) {
        this.AccessToken = Token;
        return "true";
    }
    SetTenantId(Id: string) {
        this.TenantId = Id;
        return "true";
    }
    SetRefreshTokenNeeded() {
        if (this.refreshTokenNeeded == true) {
            this.refreshTokenNeeded = false;
        }
        else {
            this.refreshTokenNeeded = true;
        }
    }
    SetLoginLogOut() {
        this.isLogOut = true;

    }
    RequestOTP(oTPRequest: OTPRequest) {

        const body: OTPRequest = {
            MobileNo: oTPRequest.MobileNo
        }
        this.MobileNo = oTPRequest.MobileNo;
        return this.httpclient.post<DigiCustWithOTPRefNo>(this.uIHelperService.CallWebAPIUrl("/User/RequestOTP"), body).catch(this.handleError);

    }
    GetTenantsByMobile(mobno: any) {
        this.MobileNo = mobno;
        var data = "MobileNo=" + mobno;
        var url = this.uIHelperService.CallWebAPIUrl("/Tenant/GetTenantsByMobile") + "?" + data;
        return this.httpclient.get<Tenant>(url).catch(this.handleError);
    }
    ValidateOTP(postOPT: PostOPT) {
        return this.httpclient.post(this.uIHelperService.CallWebAPIUrl("/User/ValidateOTP"), postOPT).catch(this.handleError);
    }

    CreateUser(userPost: UserPost) {
        return this.httpclient.post<UserResult>(this.uIHelperService.CallWebAPIUrl("/User/CreateUser"), userPost).catch(this.handleError);
    }

    ChangePassword(changePassword: ChangePassword) {
        return this.httpclient.post<ChangePasswordResult>(this.uIHelperService.CallWebAPIUrl("/User/ChangePassword"), changePassword).catch(this.handleError);
    }

    Login(login: Login): Observable<TokenParams> {
        return this.httpclient.post<TokenParams>(this.uIHelperService.CallWebAPIUrl("/User/Login"), login).catch(this.handleError);
    }

    GetServices(): Observable<OS[]> {
        return this.httpclient.get<OS[]>(this.uIHelperService.CallWebAPIUrl("/Operator/GetServices")).catch(this.handleError);
    }

    GetAccounts(sCRequest: SCRequest) {
        return this.httpclient.post<TokenParams>(this.uIHelperService.CallWebAPIUrl("/Banking/GetAccounts"), sCRequest).catch(this.handleError);
    }

    AddBank(addBankRequest: AddBankRequest) {
        return this.httpclient.post<AddBankResponse>(this.uIHelperService.CallWebAPIUrl("/Banking/AddBank"), addBankRequest).catch(this.handleError);
    }
    GetOperators(oSRequest: OSRequest) {
        return this.httpclient.post<OSResponse>(this.uIHelperService.CallWebAPIUrl("/Operator/GetOperators"), oSRequest).catch(this.handleError);

    }
    GetToken(refreshToken: string) {
        this.RefreshToken = refreshToken;
        var data = "RefreshToken=" + refreshToken;
        var url = this.uIHelperService.CallWebAPIUrl("/User/GetToken") + "?" + data;
        return this.httpclient.get<Tenant>(url).pipe(tap((data: any) => {
            this.RefreshToken = data.RefreshToken;
            this.AccessToken = data.AccessToken;
        })).catch(this.handleError);
    }
    GetPlans(planRequest: PlanRequest) {

        return this.httpclient.post<PlanResponse>(this.uIHelperService.CallWebAPIUrl("/Operator/GetPlans"), planRequest).catch(this.handleError);
        // return this.httpclient.post<PlanResponse>(this.uIHelperService.CallWebAPIUrlNew("/Operator/GetPlans"), body);

    }
    PostRecharge(rechargeModel: RechargeModel) {

        return this.httpclient.post<TranResponse>(this.uIHelperService.CallWebAPIUrl("/Recharge/PostRecharge"), rechargeModel).catch(this.handleError).catch(this.handleError);

    }

    GetFTAccount(fundTransferRequest: FundTransferRequest) {
        return this.httpclient.post<FundTransferResponse>(this.uIHelperService.CallWebAPIUrl("/Banking/GetFTAccount"), fundTransferRequest).catch(this.handleError);

    }

    FundTransfer(doFundTransfer: DoFundTransfer) {

        return this.httpclient.post<TranResponse>(this.uIHelperService.CallWebAPIUrl("/Banking/FundTransfer"), doFundTransfer).catch(this.handleError);

    }

    CheckPassword(login: Login) {
        return this.httpclient.post<TokenParams>(this.uIHelperService.CallWebAPIUrl("/User/CheckPassword"), login).catch(this.handleError);
    }

    GetAccountBalance(statementRequest: StatementRequest) {

        return this.httpclient.post<StatementRequest>(this.uIHelperService.CallWebAPIUrl("/Banking/GetAccountBalance"), statementRequest).catch(this.handleError);
    }

    GetStatement(statementRequest: StatementRequest) {

        return this.httpclient.post<StatementRequest>(this.uIHelperService.CallWebAPIUrl("/Banking/GetStatement"), statementRequest).catch(this.handleError);
    }

    GetOperaterCircle(operaterCircleQuery: OperaterCircleQuery) {

        return this.httpclient.post<OperaterCircleQuery>(this.uIHelperService.CallWebAPIUrl("/Operator/GetOperaterCircle"), operaterCircleQuery).catch(this.handleError);

    }
    GetRechargeReport(rRRequest: RRRequest) {

        return this.httpclient.post<StatementRequest>(this.uIHelperService.CallWebAPIUrl("/Recharge/GetRechargeReport"), rRRequest).catch(this.handleError);
    }
    GetLocations(TenantId) {
        return this.httpclient.get<BankBranch>(this.uIHelperService.CallWebAPIUrl("/Banking/GetLocations?TenantId=" + TenantId)).catch(this.handleError);
    }
    GetReversedVoucher(checkVoucher: CheckVoucher) {

        return this.httpclient.post<StatementRequest>(this.uIHelperService.CallWebAPIUrl("/Recharge/GetReversedVoucher"), checkVoucher).catch(this.handleError);
    }
    // countDown;
    // //counter = 30*60;
    // counter = 60;
    // tick = 1000;
    // getCounter() {
    //     return Observable.timer(0, this.tick)
    //         .take(this.counter)
    //         .map(() => --this.counter)
    // }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = null;
        if (err.status == 401) {
            errorMessage = 401;
            // this.SetRefreshTokenNeeded();
            // var RefreshToken=localStorage.getItem('refreshToken');
            // this.GetToken(RefreshToken).subscribe((data: any) => {
            //     this.SetToken(data.AccessToken);
            //     this.RefreshToken = data.RefreshToken;
            //     StorageService.SetItem('refreshToken', this.RefreshToken);
            // });
        }
        else if (err.status == 0) {
            errorMessage = 'Internal Server Error';
            console.clear();
        }
        else if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error}`;
        }
        else if (err == null || err == undefined) {
            errorMessage = 'Network Error';
        }
        else {
            if (err.error != null) {
                if (typeof err.error === 'string') {
                    errorMessage = err.error;
                }
                else if (err.error instanceof ErrorFromServer) {
                    //err.error.find(x => x.username == '2');
                }
                else if (err.error.Errors != undefined) {
                    for (var i = 0; i < err.error.Errors.length; i++) {
                        errorMessage = err.error.Errors[i].ErrorString;
                    }
                }
                else {  
                    errorMessage = err.error;
                }
            }
            else {
                errorMessage = 'Network Error';
            }
        }
        
        console.log(errorMessage);
        // if (errorMessage != '') {
        if (errorMessage != null) {
            return Observable.throw(errorMessage);
        } else {
            return Observable.throw(err);
        }
    }
}

