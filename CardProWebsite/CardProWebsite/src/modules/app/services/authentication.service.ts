import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { appConfig } from '../../../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
		let user;
        return this.http
			.post(appConfig.authenticateUrl, { Username: username, Password: password, UseTokenCookie: true })
            .flatMap((response: Response) => {
				user = response.json();
				return this.toToken();
            })
			.flatMap((response: Response) => {
				console.log(response);
					
				if (user && user.BearerToken) {
					user.BearerToken = null;
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
				return user;
			});
    }

    logout() {
        return this.http.get(appConfig.logoutUrl);
    }

	private toToken() {
		return this.http.post(appConfig.authenticateUrl, {PreserveSession: false});
	}
}