import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { OAuthService } from 'angular-oauth2-oidc';


@Injectable()
export class DataService {
    private headers: any;
    constructor(private http: Http, private _authService: OAuthService) {

    }

    setHeders() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', this._authService.authorizationHeader());
        this.headers.append('UserContext', this._authService.getIdToken());
    }
    get(url: string, param?: string) { 
        try {
            this.setHeders();
            if (param !== undefined) {
                url = url + param;
            }
            return this.http.get(url, { headers: this.headers }).map(this.extractData);

        } catch (error) {
            console.error(error);
        }
    }
    post(url: string, param: any) {
        this.setHeders();
        return this.http.post(url, param, { headers: this.headers }).map(this.extractData).catch(this.handleError);
    }
    patch(url: string, param: any) {
        this.setHeders();
        return this.http.patch(url, param, { headers: this.headers }).map(this.extractData).catch(this.handleError);
    }
    delete(url: string) {
        this.setHeders();
        return this.http.delete(url, { headers: this.headers }).map(this.extractData).catch(this.handleError);
    }
    private extractData(res: Response) {
        let body: any;
        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || body;
            errMsg = err;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}
