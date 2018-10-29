import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { StorageService } from '../services/Storage_Service';
import { RegisterService } from '../services/app-data.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable()
export class AuthService {
    // Assuming this would be cached somehow from a login call.
    public authTokenStale: string = 'stale_auth_token';
    public authTokenNew: string = 'new_auth_token';
    public currentToken: any;

    constructor(handler: HttpBackend, private registerService: RegisterService, private httpclient: HttpClient, ) {
        // constructor() {
        // this.registerService.GetToken(StorageService.GetItem('refreshToken')).subscribe((data: any) => {
        //     StorageService.SetItem('refreshToken',data.RefreshToken);
        //     this.registerService.SetToken(data.AccessToken);
        //     this.registerService.SetRefreshTokenNeeded();
        //     this.currentToken =data.AccessToken;
        // });
        this.httpclient = new HttpClient(handler);
        //this.currentToken = this.authTokenStale;
        this.currentToken = this.getAuthToken().subscribe((data:any)=>{return data.AccessToken;});

    }

    getAuthToken(): Observable<string> {
        //return this.currentToken;
        var data = "RefreshToken=" + StorageService.GetItem('refreshToken');
        var url = "https://sahakariapi.azurewebsites.net/api/User/GetToken" + "?" + data;
        return this.httpclient.get(url).pipe(tap((data: any) => {
            //this.RefreshToken = data.RefreshToken;
            this.currentToken = data.AccessToken;
            // return Observable.of(data.AccessToken).delay(200);
            return this.currentToken;
        }));
    }

    refreshToken(): Observable<string> {
        /*
            The call that goes in here will use the existing refresh token to call
            a method on the oAuth server (usually called refreshToken) to get a new
            authorization token for the API calls.
        */

        //this.currentToken = this.authTokenNew;
        this.currentToken = StorageService.GetItem('refreshToken');
        // this.GetTokenNew(StorageService.GetItem('refreshToken')).subscribe((data: any) => {
        //         StorageService.SetItem('refreshToken',data.RefreshToken);
        //         this.registerService.SetToken(data.AccessToken);
        //         this.registerService.SetRefreshTokenNeeded();
        //         this.currentToken =data.AccessToken;
        //         return Observable.of(this.currentToken).delay(200);
        //     });

        var data = "RefreshToken=" + StorageService.GetItem('refreshToken');
        var url = "https://sahakariapi.azurewebsites.net/api/User/GetToken" + "?" + data;
        return this.httpclient.get(url).pipe(tap((data: any) => {
            //this.RefreshToken = data.RefreshToken;
            this.currentToken = data.AccessToken;
            return Observable.of(data.AccessToken).delay(200);
        }));
        // return Observable.of(StorageService.GetItem('refreshToken')).delay(200);
        // return Observable.of(this.authTokenNew).delay(200);
        //return Observable.of(this.currentToken).delay(200);
    }
    // GetTokenNew(refreshToken: string) {
    //     var data = "RefreshToken=" + refreshToken;
    //     var url = "https://sahakariapi.azurewebsites.net/api/User/GetToken" + "?" + data;
    //     return this.httpclient.get(url).pipe(tap((data: any) => {
    //         //this.RefreshToken = data.RefreshToken;
    //         this.currentToken = data.AccessToken;
    //     }));
    // }
}