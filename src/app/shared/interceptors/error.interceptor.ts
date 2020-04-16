import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private injector: Injector,
    private router: Router
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        let error = err.error ? err.error.message || err.statusText : 'Erro interno';
        if ([401, 403].indexOf(err.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this.authenticationService.logout();
          this.getRouterInstance()
            .navigateByUrl('/', {skipLocationChange: true})
            .then(() => this.router.navigate(['/login']));
        }

        if ([0].indexOf(err.status) !== -1) {
          error = '';
          this.getRouterInstance().navigateByUrl('/error', {
            replaceUrl: false,
            skipLocationChange: true,
            queryParams: {
              redirectUrl: request.url,
              status: err.status,
              message: err.statusText
            }
          });
        }
        return throwError(error);
      })
    );
  }

  getRouterInstance(): any {
    if (this.router === undefined) {
      this.router = this.injector.get(Router);
    }
    return this.router;
  }
}
