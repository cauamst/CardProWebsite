"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(route) {
        this.route = route;
        this.NextPhotoInterval = 3000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
        this.cardhome = [
            { id: 1, url: require("../../../assets/img/card1.jpg"), Name: 'Name-Data' },
            { id: 2, url: require("../../../assets/img/card2.jpg"), Name: 'Da-taName' },
            { id: 3, url: require("../../../assets/img/card3.jpg"), Name: 'Data-Name' }
        ];
        this.heading = "Home";
        this.addNewSlide();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (x) { return _this.name = x.name; });
    };
    HomeComponent.prototype.addNewSlide = function () {
        this.slides.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
    };
    HomeComponent.prototype.removeLastSlide = function () {
        this.slides.pop();
    };
    return HomeComponent;
}());
HomeComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.html',
        styleUrls: ['./home.css'],
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map