"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_config_1 = require("../../../app.config");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var CardProHttp = (function (_super) {
    tslib_1.__extends(CardProHttp, _super);
    function CardProHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    CardProHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, app_config_1.appConfig.apiUrl + url, this.addJwt(options)).catch(this.handleError);
    };
    CardProHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, app_config_1.appConfig.apiUrl + url, body, this.addJwt(options)).catch(this.handleError);
    };
    CardProHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, app_config_1.appConfig.apiUrl + url, body, this.addJwt(options)).catch(this.handleError);
    };
    CardProHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, app_config_1.appConfig.apiUrl + url, this.addJwt(options)).catch(this.handleError);
    };
    // private helper methods
    CardProHttp.prototype.addJwt = function (options) {
        // ensure request options and headers are not null
        options = options || new http_1.RequestOptions();
        options.headers = options.headers || new http_1.Headers();
        // add authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.BearerToken) {
            options.headers.append('Authorization', 'Bearer ' + currentUser.BearerToken);
        }
        return options;
    };
    CardProHttp.prototype.handleError = function (error) {
        if (error.status === 401) {
            // 401 unauthorized response so log user out of client
            window.location.href = '/login';
        }
        return Observable_1.Observable.throw(error._body);
    };
    return CardProHttp;
}(http_1.Http));
CardProHttp = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.ConnectionBackend, http_1.RequestOptions])
], CardProHttp);
exports.CardProHttp = CardProHttp;
function CardProHttpFactory(xhrBackend, requestOptions) {
    return new CardProHttp(xhrBackend, requestOptions);
}
exports.CardProHttpFactory = CardProHttpFactory;
exports.CardProHttpProvider = {
    provide: http_1.Http,
    useFactory: CardProHttpFactory,
    deps: [http_1.XHRBackend, http_1.RequestOptions]
};
//# sourceMappingURL=cardProHttp.js.map