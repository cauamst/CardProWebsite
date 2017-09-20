import { Injectable } from "@angular/core";
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { appConfig, HandShakeConfig } from '../../../app.config';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CardProHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(appConfig.apiUrl + url, this.addCookiesToRequest(options)).catch(this.handleError);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(appConfig.apiUrl + url, body, this.addCookiesToRequest(options)).catch(this.handleError);
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(appConfig.apiUrl + url, body, this.addCookiesToRequest(options)).catch(this.handleError);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(appConfig.apiUrl + url, this.addCookiesToRequest(options)).catch(this.handleError);
    }

    // private helper methods

    private addJwt(options?: RequestOptionsArgs): RequestOptionsArgs {
        // ensure request options and headers are not null
        options = options || new RequestOptions();
        options.headers = options.headers || new Headers();

        // add authorization header with jwt token
        
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.BearerToken) {
            options.headers.append('Authorization', 'Bearer ' + currentUser.BearerToken);
        }

        return options;
    }

	private addCookiesToRequest(options?: RequestOptionsArgs) : RequestOptionsArgs {
		options = options || new RequestOptions();
        options.withCredentials = true;

        options.headers = options.headers || new Headers();
        options.headers.append('Signature', HandShakeConfig.signature);

		return options;
	}
    private handleError(error: any) {
        return Observable.throw(error._body);
    }
}

export function CardProHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new CardProHttp(xhrBackend, requestOptions);
}

export let CardProHttpProvider = {
    provide: Http,
    useFactory: CardProHttpFactory,
    deps: [XHRBackend, RequestOptions]
};