import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Page } from '../models/page.model';
import { BaseModel } from '../models/base.model';

export abstract class BaseService<T extends BaseModel> {
    protected http: HttpClient;
    urlResource: string = environment.URL_GATEWAY;

    protected constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected type: T,
        protected jsonToResourceFn: (json: any) => T
    ) {
        this.http = injector.get(HttpClient);
        this.urlResource += apiPath;
    }

    getAll(httpParams?: HttpParams): Observable<T[]> {
        return this.http.get(this.urlResource, { params: httpParams }).pipe(
            map(response => this.jsonToResources(response)),
            catchError(this.handleError.bind(this))
        );
    }

    getPage(httpParams?: HttpParams): Observable<Page<T>> {
        return this.http.get(`${this.urlResource}/page`, { params: httpParams }).pipe(
            map(response => this.jsonToPage(response)),
            catchError(this.handleError.bind(this))
        );
    }

    getById(id: number): Observable<T> {
        const url = `${this.urlResource}/${id}`;
        return this.http
            .get(url)
            .pipe(
                map(this.jsonToResourceFn.bind(this)),
                catchError(this.handleError.bind(this))
            );
    }

    create(resource: T): Observable<T> {
        return this.http
            .post(this.urlResource, resource)
            .pipe(
                map(this.jsonToResourceFn.bind(this)),
                catchError(this.handleError.bind(this))
            );
    }

    update(resource: T): Observable<T> {
        const url = `${this.urlResource}/${resource.id}`;
        return this.http.put(url, resource).pipe(
            map(() => resource),
            catchError(this.handleError)
        );
    }

    delete(id: number): Observable<any> {
        const url = `${this.urlResource}/${id}`;
        return this.http.delete(url).pipe(
            map(() => null),
            catchError(this.handleError.bind(this))
        );
    }

    protected jsonToPage(json: any): Page<T> {
        return Page.fromJson(
            this.jsonToResources(json.content),
            json,
            this.type
        );
    }

    protected jsonToResources(json: any): T[] {
        const resources: T[] = [];
        if ( json != null && json.forEach ) {
            json.forEach((e: T) => resources.push(this.jsonToResourceFn(e)));
        }
        return resources;
    }

    protected handleError(error: any): Observable<any> {
        return throwError(error);
    }
}
