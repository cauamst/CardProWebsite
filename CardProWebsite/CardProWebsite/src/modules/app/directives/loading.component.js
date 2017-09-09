"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Loading = (function () {
    function Loading() {
    }
    Loading.prototype.ngOnChanges = function (changes) {
        if (changes.isLoading) {
            console.log('loading');
        }
    };
    return Loading;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], Loading.prototype, "isLoading", void 0);
Loading = tslib_1.__decorate([
    core_1.Directive({
        selector: '[loader]',
    })
], Loading);
exports.Loading = Loading;
//# sourceMappingURL=loading.component.js.map