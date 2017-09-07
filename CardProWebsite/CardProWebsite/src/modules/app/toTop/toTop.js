"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_config_1 = require("../../../app.config");
var utils_1 = require("../../../shared/utils");
var ToTopComponent = (function () {
    function ToTopComponent(document, zone, notificationService) {
        this.document = document;
        this.zone = zone;
        this.notificationService = notificationService;
    }
    ToTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.display = false;
        this.subscription = this.notificationService.notifyObservable$.subscribe(function (res) {
            _this.handleScroll(res);
        });
    };
    ToTopComponent.prototype.handleScroll = function (scrollPosition) {
        var _this = this;
        if (scrollPosition >= app_config_1.appConfig.minimumDistance) {
            if (!this.display) {
                this.zone.run(function () { return _this.display = true; });
            }
        }
        else if (this.display) {
            this.zone.run(function () { return _this.display = false; });
        }
    };
    ToTopComponent.prototype.moveToTop = function () {
        this.notificationService.needToTop(true);
        this.handleScroll(0);
    };
    return ToTopComponent;
}());
ToTopComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'to-top',
        templateUrl: 'toTop.html',
        styleUrls: ['toTop.css']
    }),
    tslib_1.__param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Document, core_1.NgZone,
        utils_1.NotificationService])
], ToTopComponent);
exports.ToTopComponent = ToTopComponent;
//# sourceMappingURL=toTop.js.map