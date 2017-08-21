"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_config_1 = require("../../../app.config");
var ToTopComponent = (function () {
    function ToTopComponent(document, zone) {
        this.document = document;
        this.zone = zone;
    }
    ToTopComponent.prototype.ngOnInit = function () {
        this.display = false;
    };
    ToTopComponent.prototype.onWindowScroll = function () {
        var _this = this;
        var scrollPosition = this.document.body.scrollTop;
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
        window.scrollTo(0, 0);
    };
    return ToTopComponent;
}());
tslib_1.__decorate([
    core_1.HostListener('window:scroll', []),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ToTopComponent.prototype, "onWindowScroll", null);
ToTopComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'to-top',
        templateUrl: 'toTop.html',
        styleUrls: ['toTop.css']
    }),
    tslib_1.__param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Document, core_1.NgZone])
], ToTopComponent);
exports.ToTopComponent = ToTopComponent;
//# sourceMappingURL=toTop.js.map