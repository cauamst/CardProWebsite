"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var card_service_1 = require("../services/card.service");
var platform_browser_1 = require("@angular/platform-browser");
var app_config_1 = require("../../../app.config");
var ProductsComponent = (function () {
    function ProductsComponent(cardService, zone, document) {
        this.cardService = cardService;
        this.zone = zone;
        this.document = document;
        this.numberOfResults = app_config_1.appConfig.numberOfResults;
        this.heading = "Products";
        this.currentIndex = 0;
        this.cards = [];
        this.sampleUrl = require("../../../assets/img/credit-card-sample.png");
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.loadCards();
    };
    ProductsComponent.prototype.loadCards = function () {
        var _this = this;
        this.cardService
            .getCards(this.currentIndex, this.numberOfResults)
            .subscribe(function (dto) {
            _this.zone.run(function () {
                dto.Results.forEach(function (result) {
                    _this.cards.push(result);
                });
                _this.total = dto.Total;
                _this.currentIndex += _this.numberOfResults;
            });
        });
    };
    ProductsComponent.prototype.onWindowScroll = function () {
        var _this = this;
        if (this.timer) {
            window.clearTimeout(this.timer);
        }
        this.timer = window.setTimeout(function () {
            var positionToTop = _this.document.body.scrollTop;
            console.log(positionToTop);
            if (positionToTop >= app_config_1.appConfig.minimumHeight && _this.currentIndex < _this.total) {
                _this.loadCards();
            }
        }, app_config_1.appConfig.lazyLoadDelayTime);
    };
    return ProductsComponent;
}());
tslib_1.__decorate([
    core_1.HostListener('window:scroll', []),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsComponent.prototype, "onWindowScroll", null);
ProductsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'products',
        templateUrl: 'products.html',
        styleUrls: ['products.scss']
    }),
    tslib_1.__param(2, core_1.Inject(platform_browser_1.DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [card_service_1.CardService, core_1.NgZone,
        Document])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.js.map