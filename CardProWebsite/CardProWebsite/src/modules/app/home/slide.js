"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carousel_1 = require("./carousel");
var Slide = (function () {
    function Slide(carousel, zone) {
        this.carousel = carousel;
        this.zone = zone;
        this.addClass = true;
    }
    Slide.prototype.ngOnInit = function () {
        var _this = this;
        this.zone.run(function () {
            _this.carousel.addSlide(_this);
        });
    };
    Slide.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.run(function () {
            _this.carousel.removeSlide(_this);
        });
    };
    return Slide;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Number)
], Slide.prototype, "index", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Number)
], Slide.prototype, "direction", void 0);
tslib_1.__decorate([
    core_1.HostBinding('class.active'),
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], Slide.prototype, "active", void 0);
tslib_1.__decorate([
    core_1.HostBinding('class.item'),
    core_1.HostBinding('class.carousel-item'),
    tslib_1.__metadata("design:type", Boolean)
], Slide.prototype, "addClass", void 0);
Slide = tslib_1.__decorate([
    core_1.Component({
        selector: 'slide',
        template: "\n    <div [class.active]=\"active\" class=\"item text-center\">\n      <ng-content></ng-content>\n    </div>\n  ",
        styles: ["\n        .item {\n        -webkit-transition: -webkit-transform .6s ease-in-out;\n        -o-transition: -o-transform .6s ease-in-out;\n        transition: transform .6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        perspective: 1000px;\n    }\n\n    .item {\n        position: relative;\n        display: none;\n        -webkit-transition: .6s ease-in-out left;\n        -o-transition: .6s ease-in-out left;\n        transition: .6s ease-in-out left;\n    }\n    .item.active {\n            display: block;\n            left: 0;\n            -webkit-transform: translate3d(0,0,0);\n            transform: translate3d(0,0,0);\n        }\n"]
    }),
    tslib_1.__metadata("design:paramtypes", [carousel_1.Carousel, core_1.NgZone])
], Slide);
exports.Slide = Slide;
//# sourceMappingURL=slide.js.map