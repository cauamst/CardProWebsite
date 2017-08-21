"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var alert_service_1 = require("../services/alert.service");
var authentication_service_1 = require("../services/authentication.service");
var app_config_1 = require("../../../app.config");
var LoginComponent = (function () {
    function LoginComponent(zone, route, router, authenticationService, alertService) {
        this.zone = zone;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.clientId = '916226986619-3l67d53pvpu0rrk9c80ea5t8rspg0mfe.apps.googleusercontent.com';
        this.scope = [
            'profile'
        ].join(' ');
    }
    LoginComponent.prototype.attachSignin = function (element) {
        var that = this;
        console.log(this.auth2);
        console.log(element);
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            //YOUR CODE HERE
        }, function (error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
    };
    LoginComponent.prototype.googleInit = function () {
        var _this = this;
        var that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                scope: 'profile'
            });
            gapi.signin2.render('googleBtn', {
                'scope': 'profile',
                'width': 240,
                'height': 50,
                'longtitle': true,
                'theme': 'light',
                'onsuccess': function (googleUser) {
                    _this.login(googleUser.getAuthResponse().access_token);
                }
            });
            //that.attachSignin(that.googleBtn);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout().subscribe(function (response) {
            console.log(response);
            localStorage.removeItem("currentUser");
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    LoginComponent.prototype.login = function (accessToken) {
        var _this = this;
        if (accessToken === void 0) { accessToken = null; }
        this.zone.run(function () {
            _this.loading = true;
        });
        var service = !accessToken
            ? this.authenticationService.login(this.model.username, this.model.password)
            : this.authenticationService.oAuthLogin(app_config_1.appConfig.googleOAuth2AuthenticateUrl, accessToken);
        service
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
tslib_1.__decorate([
    core_1.ViewChild("googleBtn"),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "googleBtn", void 0);
LoginComponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: 'login.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.NgZone,
        router_1.ActivatedRoute,
        router_1.Router,
        authentication_service_1.AuthenticationService,
        alert_service_1.AlertService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map