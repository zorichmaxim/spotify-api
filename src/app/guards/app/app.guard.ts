import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Injectable()
export class AppGuard implements CanActivate {

    constructor(private authService: AuthService) {}

    canActivate(activatedRoute: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): boolean {
        if (!this.authService.authenticated()) {
            this.authService.login();
            return false;
        }
        return true;
    }
}
