"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routing_1 = require("./modules/app/app.routing");
var platform_browser_1 = require("@angular/platform-browser");
var utils_1 = require("./shared/utils");
var AppComponent = (function () {
    function AppComponent(document, route, router, notificationService) {
        this.document = document;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.title = 'CARD PRO';
        this.routes = app_routing_1.routes.filter(function (val) { return val.path != '' && val.path != 'login' && val.path != 'products' && val.path != 'cardRegistration'; });
        this.logoUrl = require("./assets/img/logo.png");
        this.url = 'https://servicestack.net/vs-templates/AngularApp';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.notificationService.needToTopObservable$.subscribe(function (res) {
            if (res) {
                _this.scrollToTop();
            }
        });
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            _this.cardProMain.nativeElement.scrollTop = 0;
        });
    };
    AppComponent.prototype.isActive = function (path) {
        return this.router.url.substring(1) === path;
    };
    AppComponent.prototype.scroll = function () {
        var scrollPosition = this.cardProMain.nativeElement.scrollTop;
        this.notificationService.notifyOther(scrollPosition);
    };
    AppComponent.prototype.scrollToTop = function () {
        this.cardProMain.nativeElement.scrollTop = 0;
    };
    return AppComponent;
}());
tslib_1.__decorate([
    core_1.ViewChild("cardProMain"),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "cardProMain", void 0);
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'app.component.html'
    }),
    tslib_1.__param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Document, router_1.ActivatedRoute,
        router_1.Router, utils_1.NotificationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map