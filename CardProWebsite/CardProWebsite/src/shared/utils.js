"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var servicestack_client_1 = require("servicestack-client");
var Subject_1 = require("rxjs/Subject");
exports.client = new servicestack_client_1.JsonServiceClient(global.BaseUrl || '/');
var MDL = (function () {
    function MDL() {
    }
    MDL.prototype.ngAfterViewChecked = function () {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    };
    return MDL;
}());
MDL = tslib_1.__decorate([
    core_1.Directive({
        selector: '[mdl]'
    })
], MDL);
exports.MDL = MDL;
var NotificationService = (function () {
    function NotificationService() {
        this.notify = new Subject_1.Subject();
        this.needToTopNotify = new Subject_1.Subject();
        /**
         * Observable string streams
         */
        this.notifyObservable$ = this.notify.asObservable();
        this.needToTopObservable$ = this.needToTopNotify.asObservable();
    }
    NotificationService.prototype.notifyOther = function (data) {
        if (data) {
            this.notify.next(data);
        }
    };
    NotificationService.prototype.needToTop = function (data) {
        if (data) {
            this.needToTopNotify.next(data);
        }
    };
    return NotificationService;
}());
NotificationService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=utils.js.map