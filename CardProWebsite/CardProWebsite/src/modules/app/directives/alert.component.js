"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var alert_service_1 = require("../services/alert.service");
var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'alert',
        templateUrl: 'alert.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [alert_service_1.AlertService])
], AlertComponent);
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map