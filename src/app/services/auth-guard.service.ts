import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import { DefaultGuardService } from './default-guard.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService extends DefaultGuardService implements CanActivate {

    constructor(router: Router,
                authenticationService: AuthenticationService) {
        super(router, authenticationService);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return super.isAuthenticated(route, state);
    }
}
