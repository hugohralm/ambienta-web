import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

export class DefaultGuardService {

    constructor(private router: Router,
                public authenticationService: AuthenticationService) {
    }

    protected isAuthenticated(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const currentUser = this.authenticationService.currentUserTokenValue;
        if (!currentUser) {
            this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
            return false;
        }
        return true;
    }
}
