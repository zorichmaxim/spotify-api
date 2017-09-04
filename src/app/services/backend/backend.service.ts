import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ErrorHandlerService} from "../error-handler/error.service";
import {RequestOptions, URLSearchParams} from '@angular/http';
import {AuthService} from "../auth/auth.service";

import {ArtistData} from "../artist-mock-data/artist-data";

@Injectable()
export class BackendService {
    constructor(protected http: HttpClient,
                protected errorHandler: ErrorHandlerService,
                private authService: AuthService) {
    }

    private requestHandler(source: Observable<any>, retryDelay: number = 1000): Observable<any> {
        return source
            .retryWhen(errors => errors.delay(retryDelay).switchMap(_errors => Observable.throw(_errors)))
            .catch((err: HttpErrorResponse) => this.errorHandler.handleError(err));
    }

    public get(url: string, options?): any { //Observable<any> needed
        if(options.from === 'search'){
            console.log(ArtistData.getArtist());
            return ArtistData.getArtist();
        }
        const source = this.http.get(url, this.getRequestOptionArgs(options));
        return this.requestHandler(source);
    }

    public post(url: string, body, options?): Observable<any> {
        const source = this.http.post(url, body, options);
        return this.requestHandler(source);
    }

    public request(url: string, options?): Observable<any> {
        return this.http.request(url, options)
            .catch((err) => {
                if (err.status === 401 || err.status === 403) {
                    this.authService.login();
                }
                return Observable.throw(err);
            })
    }


    private getRequestOptionArgs(options?): any {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }

        if (options.from === 'search') {
            let requestOptions = new RequestOptions();
            let params: URLSearchParams = new URLSearchParams();
            params.set('query', options['query']);
            params.set('type', options['type']);
            requestOptions.search = params;

            return requestOptions;
        }

        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', 'Bearer ' + this.authService.getToken());

        return options;
    }
}
