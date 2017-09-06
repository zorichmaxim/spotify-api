import {Injectable} from '@angular/core';
import {LocalStorage} from "../../decorators/localstorage.decorator";
import {AuthenticatedUrl} from "../../classes/authenticated-url";

@Injectable()
export class AuthService {
    @LocalStorage() token: any;

    constructor (private authUrl: AuthenticatedUrl){}

    public getToken(): any {
       return this.token;
    }

    public setToken(token: any): void {
        this.token = token;
    }

    public authenticated(): boolean {
        return !!this.token;
    }

    public login(): void {
        window.location.href = this.authUrl.loginUrl();
    }
}
