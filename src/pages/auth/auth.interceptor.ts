import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from '../services/Storage_Service';
import { tap } from 'rxjs/operators'
import { NavController, Events } from "ionic-angular";
import { RegisterService } from "../services/app-data.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor, OnInit {
    refreshTokenNeeded: boolean;
    ngOnInit() {
        this.countDown = Observable.timer(0, this.tick)
            .take(this.counter)
            .map(() => --this.counter);  //To count down the time.
        if (this.counter == 0) {
            // this.refreshToken = StorageService.GetItem('refreshToken');

        }
    }
    countDown;
    counter = 270;
    tick = 1000;
    refreshToken: string;
    // constructor(private registerService: RegisterService, private storageService:StorageService,private event: Events,private router: Router, private localstorageService:StorageService) { 
    //     this.countDown = Observable.timer(0, this.tick)
    //     .take(this.counter)
    //     .map(() => --this.counter);  
    //     if(this.countDown==0){
    //     }
    // }
    // sendToken(token:string){
    //     this.registerService.GetToken(token);
    //   }
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     if (req.headers.get('No-Auth') == "True"){
    //         return next.handle(req.clone());
    //     }
    //         if(req.url.indexOf("/token")>0){
    //         var headersforTokenAPI= new HttpHeaders({'Content-Type': 'application/x-www-urlencoded'})
    //         return next.handle(req);
    //     }
    //     if (this.registerService.userToken != null) {  
    //     const clonedreq = req.clone({
    //             headers: req.headers.set("Authorization", "Bearer " + this.registerService.userToken)
    //         });
    //         return next.handle(clonedreq)
    //             .do(
    //             succ => { },
    //             err => {
    //                 if (err.status === 401)      
    //                 this.event.publish('UNAUTHORIZED');           
    //                 }
    //             );
    //     }
    //         else if(this.registerService.userToken== null){ 
    //         const clonedreq = req.clone({
    //             headers: req.headers.set("Authorization", "Bearer ")
    //         });
    //         return next.handle(clonedreq)
    //             .do(
    //             succ => { },
    //             err => {
    //                 if (err.status === 401)     
    //                 this.event.publish('UNAUTHORIZED');           
    //                 }
    //             );
    //     } 
    //     else {

    //     }
    // }

    constructor(private registerService: RegisterService, private storageService: StorageService, private event: Events, private router: Router, private localstorageService: StorageService) {

    }
    sendToken(token: string) {
        this.registerService.SetToken(token);
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log(req);
        if (req.headers.get('No-Auth') == "True") {
            return next.handle(req.clone());
        }

        if (req.url.indexOf("/token") > 0) {
            var headersforTokenAPI = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' })
            return next.handle(req);
        }

        // if(req.method=="POST"){

        // }
        // if(req.method=="GET"){

        // }


        if (this.registerService.AccessToken != null) {
            if (this.registerService.refreshTokenNeeded == true) {
                const clonedreq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer ")

                });
                return next.handle(clonedreq)
                // .catch(error=>{

                // })
                .pipe(tap((data: any) => {
                    // StorageService.SetItem('refreshToken', data.RefreshToken);
                    // this.registerService.SetRefreshTokenNeeded();
                }, error => {
                    console.error('NICE ERROR', error)
                  })
                    // .do(
                    //     succ => {
                    //         //this.refreshToken = succ['body'].RefreshToken;
                    //         //this.sendToken(succ['body'].AccessToken);
                    //         StorageService.SetItem('refreshToken', succ['body'].RefreshToken);
                    //         //this.registerService.refreshTokenNeeded == false;
                    //         this.registerService.SetRefreshTokenNeeded();
                    //     },
                    //     err => {
                    //         if (err.status === 401) {
                    //             //this.event.publish('UNAUTHORIZED');
                    //             // this.refreshToken = localStorage.getItem('refreshToken');
                    //             // this.registerService.GetToken(this.refreshToken).subscribe((data: any) => {
                    //             //     this.refreshToken = data.RefreshToken;
                    //             //     localStorage.setItem('refreshToken', this.refreshToken);
                    //             // });
                    //         }
                    //     }
                );
            }
            else {
                this.refreshToken = localStorage.getItem('refreshToken');
                const clonedreq = req.clone({
                    // headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
                    headers: req.headers.set("Authorization", "Bearer " + this.registerService.AccessToken)

                });
                return next.handle(clonedreq)
                    .do(
                        succ => { },
                        err => {
                            if (err.status === 401) {
                                //this.router.navigateByUrl('/login');
                                // this.navCtrl.push(LoginPage);  
                                //this.event.publish('UNAUTHORIZED');

                                // this.registerService.SetRefreshTokenNeeded();
                                // this.registerService.GetToken(this.refreshToken).subscribe((data: any) => {
                                //     this.sendToken(data.AccessToken);
                                //     this.refreshToken = data.RefreshToken;
                                //     StorageService.SetItem('refreshToken', this.refreshToken);
                                // });
                            }
                        }
                    );
            }
        }

        // else if(this.storageService.GetUser()==null&&this.registerService.AccessToken== null){
        else if (this.registerService.AccessToken == null) {
            //this.refreshToken = StorageService.GetItem('refreshToken');
            this.refreshToken = localStorage.getItem('refreshToken');
            if (this.refreshToken == null) {
                const clonedreq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer ")

                });
                return next.handle(clonedreq)
                    .do(
                        succ => { },
                        err => {
                            if (err.status === 401)
                                this.event.publish('UNAUTHORIZED');
                        }
                    );
            }
            else if (this.registerService.RefreshToken != null) {
                const clonedreq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer ")

                });
                return next.handle(clonedreq)
                .pipe(tap((data: any) => {
                    // StorageService.SetItem('refreshToken', data.RefreshToken);
                    // this.registerService.SetRefreshTokenNeeded();
                }, error => {
                    console.error('NICE ERROR', error)
                  })
                    // .do(
                    //     succ => {
                    //         //this.refreshToken = succ['body'].RefreshToken;
                    //         //this.sendToken(succ['body'].AccessToken);
                    //          StorageService.SetItem('refreshToken', this.refreshToken);
                    //         //StorageService.SetItem('refreshToken', succ['body'].RefreshToken);
                    //         this.registerService.refreshTokenNeeded == false;
                    //     },
                    //     err => {
                    //         if (err.status === 401)
                    //             this.event.publish('UNAUTHORIZED');
                    //         // this.refreshToken = localStorage.getItem('refreshToken');
                    //         // this.registerService.GetToken(this.refreshToken).subscribe((data: any) => {
                    //         //     this.refreshToken = data.RefreshToken;
                    //         //     localStorage.setItem('refreshToken', this.refreshToken);
                    //         // });
                    //     }
                    );
            }
            else if (this.refreshToken != null && this.registerService.AccessToken == null) {
                this.registerService.GetToken(this.refreshToken).subscribe((data: any) => {
                    this.sendToken(data.AccessToken);
                    this.refreshToken = data.RefreshToken;
                    localStorage.setItem('refreshToken', this.refreshToken);
                    const clonedreq = req.clone({
                        headers: req.headers.set("Authorization", "Bearer " + this.refreshToken)

                    });
                    return next.handle(clonedreq)
                        .do(
                            succ => { },
                            err => {
                                if (err.status === 401)
                                    //this.event.publish('UNAUTHORIZED');
                                    this.refreshToken = localStorage.getItem('refreshToken');
                                this.registerService.GetToken(this.refreshToken).subscribe((data: any) => {
                                    this.sendToken(data.AccessToken);
                                    this.refreshToken = data.RefreshToken;
                                    localStorage.setItem('refreshToken', this.refreshToken);
                                });
                            }
                        );
                });
            }
            else if (this.refreshToken != null && this.registerService.AccessToken != null) {
                const clonedreq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer " + this.registerService.AccessToken)
                });
                return next.handle(clonedreq)
                    .do(
                        succ => { },
                        err => {
                            if (err.status === 401)
                                this.event.publish('UNAUTHORIZED');
                        }
                    );
            }
            else {
                const clonedreq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer ")
                });
                return next.handle(clonedreq)
                    .do(
                        succ => { },
                        err => {
                            if (err.status === 401)
                                //this.router.navigateByUrl('/login');
                                // this.navCtrl.push(LoginPage);  
                                this.event.publish('UNAUTHORIZED');
                            this.refreshToken = localStorage.getItem('refreshToken');
                            this.registerService.GetToken(this.refreshToken).subscribe((data: any) => {
                                this.sendToken(data.AccessToken);
                                this.refreshToken = data.RefreshToken;
                                localStorage.setItem('refreshToken', this.refreshToken);
                            });
                        }
                    );
            }

        }
        else {
            //this.router.navigateByUrl('/login');
            // this.navCtrl.push(LoginPage); 
        }
    }
}