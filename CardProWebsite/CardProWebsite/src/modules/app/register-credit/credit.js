"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var card_service_1 = require("../services/card.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var CreditComponent = (function () {
    function CreditComponent(CardService, route, location, zone) {
        this.CardService = CardService;
        this.route = route;
        this.location = location;
        this.zone = zone;
        this.selected = false;
        //get all card
        this.cards = [];
        this.showDialog = false;
        this.isOpen = false;
        this.currentContentType = 1;
        this.NextPhotoInterval = 3000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
        this.benefit = [
            { currentCatId: 1, director: 'Tiện ích 1' },
            { currentCatId: 2, director: 'Tiện ích 2' },
            { currentCatId: 3, director: 'Tiện ích 3' },
            { currentCatId: 4, director: 'Tiện ích 4' },
        ];
        this.button = [
            { name: 'Tiện ích 1', ContentType: 1 },
            { name: 'Tiện ích 2', ContentType: 2 },
            { name: 'Tiện ích 3', ContentType: 3 },
            { name: 'Tiện ích 4', ContentType: 4 },
        ];
        this.addNewSlide();
    }
    CreditComponent.prototype.ngOnInit = function () {
        this.GetCards();
        this.getCard(this.selectCardId);
        this.getCardType(this.currentCatId);
        this.getContentCard(this.currentContentType);
    };
    CreditComponent.prototype.addNewSlide = function () {
        this.slides.push({ image: require("../../../assets/img/slide1.jpg") }, { image: require("../../../assets/img/slide2.jpg") }, { image: require("../../../assets/img/slide3.jpg") }, { image: require("../../../assets/img/slide4.jpg") }, { image: require("../../../assets/img/slide5.jpg") }, { image: require("../../../assets/img/slide1.jpg") });
    };
    CreditComponent.prototype.removeLastSlide = function () {
        this.slides.pop();
    };
    CreditComponent.prototype.goBack = function () {
        this.location.back();
    };
    // get card by type for textfield compare
    CreditComponent.prototype.getCardType = function (type) {
        var _this = this;
        this.CardService.getCardType(type).then(function (cardes) {
            _this.cardes = cardes;
        });
    };
    //get card by id for creditdetail page
    CreditComponent.prototype.getCard = function (Id) {
        var _this = this;
        this.CardService.getCard(Id).then(function (card) {
            _this.card = card;
            console.log(Id);
            console.log(_this.selectCardId);
        });
    };
    //get all card table compare
    CreditComponent.prototype.GetCards = function () {
        var _this = this;
        this.CardService.getAllCard().then(function (cards) {
            _this.cards = cards;
        });
    };
    //get contentCard
    CreditComponent.prototype.getContentCard = function (ContentType) {
        var _this = this;
        this.zone.run(function () {
            _this.CardService.getTypeContent(ContentType).then(function (contents) {
                _this.contents = contents;
            });
        });
    };
    return CreditComponent;
}());
CreditComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'credit',
        templateUrl: './credit.html',
        styleUrls: ['./credit.css'],
    }),
    tslib_1.__metadata("design:paramtypes", [card_service_1.CardService,
        router_1.ActivatedRoute,
        common_1.Location,
        core_1.NgZone])
], CreditComponent);
exports.CreditComponent = CreditComponent;
//# sourceMappingURL=credit.js.map