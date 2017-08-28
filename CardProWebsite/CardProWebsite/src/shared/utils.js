"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var servicestack_client_1 = require("servicestack-client");
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
//# sourceMappingURL=utils.js.map