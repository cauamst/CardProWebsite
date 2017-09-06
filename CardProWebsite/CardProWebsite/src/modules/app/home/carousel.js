"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction = exports.Direction || (exports.Direction = {}));
var Carousel = (function () {
    function Carousel(zone) {
        this.zone = zone;
        this.slides = [];
        this.destroyed = false;
    }
    Object.defineProperty(Carousel.prototype, "interval", {
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Carousel.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.run(function () {
            _this.destroyed = true;
        });
    };
    Carousel.prototype.select = function (nextSlide, direction) {
        var _this = this;
        if (direction === void 0) { direction = Direction.UNKNOWN; }
        this.zone.run(function () {
            var nextIndex = nextSlide.index;
            if (direction === Direction.UNKNOWN) {
                direction = nextIndex > _this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
            }
            // Prevent this user-triggered transition from occurring if there is already one in progress
            if (nextSlide && nextSlide !== _this.currentSlide) {
                _this.goNext(nextSlide, direction);
            }
        });
    };
    Carousel.prototype.goNext = function (slide, direction) {
        var _this = this;
        this.zone.run(function () {
            if (_this.destroyed) {
                return;
            }
            slide.direction = direction;
            slide.active = true;
            if (_this.currentSlide) {
                _this.currentSlide.direction = direction;
                _this.currentSlide.active = false;
            }
            _this.currentSlide = slide;
            // every time you change slides, reset the timer
            _this.restartTimer();
        });
    };
    Carousel.prototype.getSlideByIndex = function (index) {
        var len = this.slides.length;
        for (var i = 0; i < len; ++i) {
            if (this.slides[i].index === index) {
                return this.slides[i];
            }
        }
    };
    Carousel.prototype.getCurrentIndex = function () {
        return !this.currentSlide ? 0 : this.currentSlide.index;
    };
    Carousel.prototype.next = function () {
        var newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
        if (newIndex === 0 && this.noWrap) {
            this.pause();
            return;
        }
        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    };
    Carousel.prototype.prev = function () {
        var newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;
        if (this.noWrap && newIndex === this.slides.length - 1) {
            this.pause();
            return;
        }
        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
    };
    Carousel.prototype.restartTimer = function () {
        var _this = this;
        this.zone.run(function () {
            _this.resetTimer();
            var interval = +_this.interval;
            if (!isNaN(interval) && interval > 0) {
                _this.currentInterval = setInterval(function () {
                    var nInterval = +_this.interval;
                    if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                        _this.next();
                    }
                    else {
                        _this.pause();
                    }
                }, interval);
            }
        });
    };
    Carousel.prototype.resetTimer = function () {
        var _this = this;
        this.zone.run(function () {
            if (_this.currentInterval) {
                clearInterval(_this.currentInterval);
                _this.currentInterval = null;
            }
        });
    };
    Carousel.prototype.play = function () {
        var _this = this;
        this.zone.run(function () {
            if (!_this.isPlaying) {
                _this.isPlaying = true;
                _this.restartTimer();
            }
        });
    };
    Carousel.prototype.pause = function () {
        var _this = this;
        this.zone.run(function () {
            if (!_this.noPause) {
                _this.isPlaying = false;
                _this.resetTimer();
            }
        });
    };
    Carousel.prototype.addSlide = function (slide) {
        var _this = this;
        this.zone.run(function () {
            slide.index = _this.slides.length;
            _this.slides.push(slide);
            if (_this.slides.length === 1 || slide.active) {
                _this.select(_this.slides[_this.slides.length - 1]);
                if (_this.slides.length === 1) {
                    _this.play();
                }
            }
            else {
                slide.active = false;
            }
        });
    };
    Carousel.prototype.removeSlide = function (slide) {
        var _this = this;
        this.zone.run(function () {
            _this.slides.splice(slide.index, 1);
            if (_this.slides.length === 0) {
                _this.currentSlide = null;
                return;
            }
            for (var i = 0; i < _this.slides.length; i++) {
                _this.slides[i].index = i;
            }
        });
    };
    return Carousel;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], Carousel.prototype, "noWrap", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], Carousel.prototype, "noPause", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], Carousel.prototype, "noTransition", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], Carousel.prototype, "interval", null);
Carousel = tslib_1.__decorate([
    core_1.Component({
        selector: 'carousel',
        template: "\n    <div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" class=\"carousel slide\">\n      <ol class=\"carousel-indicators\" [hidden]=\"slides.length <= 1\">\n         <li *ngFor=\"let slidez of slides\" [class.active]=\"slidez.active === true\" (click)=\"select(slidez)\"></li>\n      </ol>\n      <div class=\"carousel-inner\"><ng-content></ng-content></div>\n                  <a class=\"left carousel-control\" (click)=\"prev()\" [hidden]=\"!slides.length\">\n                         <i class = \"mdl-icon-toggle__label material-icons size-icons\">chevron_left</i>\n                  </a>\n                  <a class=\"right carousel-control\" (click)=\"next()\" [hidden]=\"!slides.length\">\n                 <i class = \"mdl-icon-toggle__label material-icons size-icons\">chevron_right</i>\n                 </a>\n    </div>\n  ",
        styles: ["\n/*carousel*/\n.carousel {\n    position: relative;\n    margin-bottom: 10px;\n}\n\n.carousel-indicators {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    z-index: 15;\n    width: 60%;\n    padding-left: 0;\n    margin-left: -30%;\n    text-align: center;\n    list-style: none;\n}\n\n.carousel-inner {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n}\n\n\n.carousel-control {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 10%;\n    font-size: 20px;\n    color: #fff;\n    text-shadow: rgba(25, 23, 23, 0.8);;\n    background-color: rgba(0,0,0,0);\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n\n    .carousel-control.right {\n        right: 0;\n        left: auto;\n        background-image: -webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);\n        background-image: -o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);\n        background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));\n        background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n        background-repeat: repeat-x;\n    }\n\n    .carousel-control.left {\n        background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);\n        background-image: -o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);\n        background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));\n        background-image: linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n        background-repeat: repeat-x;\n    }\n\na {\n    color: #337ab7;\n    text-decoration: none;\n},\n.carousel-inner > .active, .carousel-inner > .next, .carousel-inner > .prev {\n        display: block;\n        left: 0;\n        -webkit-transform: translate3d(0,0,0);\n        transform: translate3d(0,0,0);\n    }\n.mdl-icon-toggle__label{\n    font-size: 44px !important;\n    top : 43%;\n    color: #e0e0e0;\n}\n\n"]
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.NgZone])
], Carousel);
exports.Carousel = Carousel;
//# sourceMappingURL=carousel.js.map