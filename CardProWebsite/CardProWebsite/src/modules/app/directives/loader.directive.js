"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Loader = (function () {
    function Loader(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Loader.prototype.ngOnChanges = function (changes) {
        if (!changes.isLoading.firstChange) {
            if (changes.isLoading.currentValue) {
                this.renderer.setElementClass(this.el.nativeElement, 'is-loading-state', true);
            }
            else {
                this.renderer.setElementClass(this.el.nativeElement, 'is-loading-state', false);
            }
        }
    };
    return Loader;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], Loader.prototype, "isLoading", void 0);
Loader = tslib_1.__decorate([
    core_1.Directive({
        selector: '[loader]',
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], Loader);
exports.Loader = Loader;
//# sourceMappingURL=loader.directive.js.map