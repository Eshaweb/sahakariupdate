import { Injectable } from '@angular/core';


@Injectable()
export class UIHelperService {
    //  readonly rootUrl = 'https://sahakari.azurewebsites.net';
    //  readonly baseUrl = 'https://sahakari.azurewebsites.net/api';
    // readonly rootUrl1 = 'https://sahakari.azurewebsites.net/token';

     readonly baseUrl = 'https://sahakariapi.azurewebsites.net/api';

    CallWebAPIUrl(api_action: any) {
        return this.baseUrl + api_action;
    }
    
}
