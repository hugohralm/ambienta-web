import { UserToken } from './../models/user-token.model';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserTokenSubject: BehaviorSubject<UserToken>;
    public currentUserToken: Observable<UserToken>;

    private urlResource = `${environment.URL_GATEWAY}/api/authenticate`;

    constructor(private http: HttpClient) {
        this.currentUserTokenSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserToken = this.currentUserTokenSubject.asObservable();
    }

    public get currentUserTokenValue(): UserToken {
        return this.currentUserTokenSubject.value;
    }

    login(username: string, password: string): any {
        return this.http.post<any>(this.urlResource, { cpf: username, senha: password })
            .pipe(map(user => {
                console.log(user);
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserTokenSubject.next(user);
                }
            }),
            catchError(this.handleError.bind(this)));
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUserTokenSubject.next(null);
    }

    protected handleError(error: any): Observable<any> {
        return throwError(error);
    }
}
