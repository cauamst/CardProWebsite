"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var app_config_1 = require("../../../app.config");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(app_config_1.appConfig.authenticateUrl, { Username: username, Password: password })
            .map(function (response) {
            console.log(response);
            var user = response.json();
            if (user && user.BearerToken) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.oAuthLogin = function (url, accessToken) {
        return this.http.post(url, { AccessToken: accessToken })
            .map(function (response) {
            console.log(response);
            var user = response.json();
            if (user && user.BearerToken) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        return this.http.get(app_config_1.appConfig.logoutUrl).map(function (response) { return response; });
    };
    return AuthenticationService;
}());
AuthenticationService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map