import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BackendService} from "../services/backend/backend.service";


@Injectable()
export class InterceptedHttp {
    constructor(private backend: BackendService){}

    public baseUrl: string  = 'https://api.spotify.com/v1';

    public request(url: string, options?): Observable<any> {
        return this.backend.request(url, options);
    }
    public get(url: string, options?) : Observable<any>{
        return this.backend.get(this.updateUrl(url), options);
    }
    public post(url:string, body: string, options?) :Observable<any>{
        return this.backend.post(this.updateUrl(url), body, options)
    }
    private updateUrl(request: any): string {
        return this.baseUrl + request;
    }
}
