import { UIHelperService } from "../UIHelperClasses/UIHelperService";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { RegisterService } from "../services/app-data.service";
import { Tenant } from "../LocalStorageTables/Tenant";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class TokenService{
    RefreshToken: string;
    AccessToken: any;
    refreshTokenNeeded: boolean;
    constructor(private uIHelperService:UIHelperService, handler: HttpBackend, private registerService: RegisterService, private httpclient: HttpClient){
        this.httpclient = new HttpClient(handler);
    }
    SetToken(Token: string) {
        this.AccessToken = Token;
        return "true";
    }
    GetToken(refreshToken: string) {
        this.RefreshToken = refreshToken;
        var data = "RefreshToken=" + refreshToken;
        var url = this.uIHelperService.CallWebAPIUrl("/User/GetToken") + "?" + data;
        return this.httpclient.get(url).pipe(tap((data: any) => {
            this.RefreshToken = data.RefreshToken;
            this.AccessToken = data.AccessToken;
        }));
    }

}