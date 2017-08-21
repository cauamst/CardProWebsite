"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.images = IMAGES;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    return CarouselComponent;
}());
CarouselComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-carousel',
        templateUrl: './carousel.html',
        styleUrls: ['./carousel.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
// add image -> binding to view 
var IMAGES = [
    { "title": "We are covered", "url": require("../../../assets/img/1.jpg") },
    { "title": "Generation Gap", "url": require("../../../assets/img/2.jpg") },
    { "title": "Potter Me", "url": require("../../../assets/img/3.jpg") },
    { "title": "Pre-School Kids", "url": require("../../../assets/img/3.jpg") },
    { "title": "Young Peter Cech", "url": require("../../../assets/img/10.jpg") }
];
//# sourceMappingURL=carousel.js.map