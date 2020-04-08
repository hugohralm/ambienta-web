import { Denuncia } from './../models/denuncia.model';
import { catchError } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DenunciaAnonimaService {
    private  http: HttpClient;
    private  urlResource: string = environment.URL_GATEWAY;

    constructor(
        private injector: Injector,
    ) {
        this.http = injector.get(HttpClient);
        this.urlResource += '/api/denuncias-anonima';
    }

    getAll(): Observable<Denuncia[]> {
        const url = `${this.urlResource}`;
        return this.http.get(url).pipe(
            map(this.jsonDataToResourceList),
            catchError(this.handleError)
        );
    }

    private jsonDataToResourceList(jsonData: any[]): Denuncia[]{
        const entries: Denuncia[] = [];
        if (jsonData !== undefined && jsonData !== null) {
            jsonData.forEach(element => {
            const rt = Object.assign(new Denuncia(), element);
            entries.push(rt);
            });
        }
        return entries;
      }

    protected handleError(error: any): Observable<any> {
        return throwError(error);
    }
}
