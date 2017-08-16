"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var card_service_1 = require("../services/card.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var CreditComponent = (function () {
    function CreditComponent(CardService, route, location) {
        this.CardService = CardService;
        this.route = route;
        this.location = location;
        this.selected = false;
        this.selectcard = 0;
        //get all card
        this.cards = [];
        this.showDialog = false;
        this.isOpen = false;
        this.NextPhotoInterval = 3000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
        this.button = [
            { currentCatId: 1, director: 'Tiện ích 1', Type: 1 },
            { currentCatId: 2, director: 'Tiện ích 2', Type: 2 },
            { currentCatId: 3, director: 'Tiện ích 3', Type: 3 },
            { currentCatId: 4, director: 'Tiện ích 4', Type: 4 },
        ];
        this.addNewSlide();
    }
    CreditComponent.prototype.ngOnInit = function () {
        this.GetCards();
        this.getCard(this.selectcard);
        this.getCardType(this.currentCatId);
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
    // get card by type for credit menu
    CreditComponent.prototype.getCardType = function (type) {
        var _this = this;
        console.log(type);
        this.CardService.getCardType(type).then(function (cardes) {
            _this.cardes = cardes;
            console.log(cardes);
            console.log(_this.currentCatId);
        });
    };
    //get card by id for creditdetail page
    CreditComponent.prototype.getCard = function (Id) {
        var _this = this;
        this.CardService.getCard(Id).then(function (card) {
            _this.card = card;
        });
    };
    //get all card table compare
    CreditComponent.prototype.GetCards = function () {
        var _this = this;
        this.CardService.getAllCard().then(function (cards) {
            _this.cards = cards;
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
        common_1.Location])
], CreditComponent);
exports.CreditComponent = CreditComponent;
//# sourceMappingURL=credit.js.map