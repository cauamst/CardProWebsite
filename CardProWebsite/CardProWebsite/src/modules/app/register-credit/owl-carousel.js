"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var jquery_1 = require("jquery");
var OwlCarousel = (function () {
    function OwlCarousel(el) {
        this.el = el;
        this.defaultClass = 'owl-carousel';
        this.defaultOptions = {};
    }
    OwlCarousel.prototype.ngAfterViewInit = function () {
        // use default - empty
        // for (var key in this.options) {
        //   this.defaultOptions[key] = this.options[key];
        // }
        this.$owlElement = jquery_1.default(this.el.nativeElement).owlCarousel(this.defaultOptions);
    };
    OwlCarousel.prototype.ngOnDestroy = function () {
        this.$owlElement.data('owlCarousel').destroy();
        this.$owlElement = null;
    };
    return OwlCarousel;
}());
tslib_1.__decorate([
    core_1.HostBinding('class'),
    tslib_1.__metadata("design:type", Object)
], OwlCarousel.prototype, "defaultClass", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], OwlCarousel.prototype, "options", void 0);
OwlCarousel = tslib_1.__decorate([
    core_1.Component({
        selector: 'owl-carousel',
        template: "<ng-content></ng-content>"
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], OwlCarousel);
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=owl-carousel.js.map