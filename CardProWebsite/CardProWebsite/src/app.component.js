"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routing_1 = require("./modules/app/app.routing");
var AppComponent = (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'CARD PRO';
        this.routes = app_routing_1.routes.filter(function (val) { return val.path != '' && val.path != 'login' && val.path != 'products' && val.path != 'cardRegistration'; });
        this.logoUrl = require("./assets/img/logo.png");
        this.url = 'https://servicestack.net/vs-templates/AngularApp';
    }
    AppComponent.prototype.isActive = function (path) {
        return this.router.url.substring(1) === path;
    };
    return AppComponent;
}());
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'app.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map