"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var card_service_1 = require("../services/card.service");
var utils_1 = require("../../../shared/utils");
var CompareComponent = (function () {
    function CompareComponent(location, CardService, NotificationService) {
        this.location = location;
        this.CardService = CardService;
        this.NotificationService = NotificationService;
        this.showDialog1 = false;
        this.showDialog2 = false;
        this.cards = [];
        this.ShowimageCompare1 = true;
        this.ShowimageCompare2 = true;
        this.selectedCardToFormEvent = new core_1.EventEmitter();
        this.groups = [
            {
                heading: 'Tiện ích chung',
                content: ' I’m a dynamic content to show in angular 2 accordion : )'
            },
            {
                heading: 'Quy đổi điểm thưởng',
                content: 'I’m a dynamic content to show in angular 2 accordion : )'
            },
            {
                heading: 'Quy đổi hoàn tiền',
                content: 'I’m a dynamic content to show in angular 2 accordion : ) '
            },
            {
                heading: 'Quy đổi dặm bay',
                content: 'I’m a dynamic content to show in angular 2 accordion : '
            }
        ];
        this.benefit1 = [
            { currentCatId: 1, director: 'Dặm bay' },
            { currentCatId: 2, director: 'Hoàn tiền' },
            { currentCatId: 3, director: 'Điểm thưởng' },
            { currentCatId: 4, director: 'Rút tiền mặt miễn phí' },
        ];
        this.benefit2 = [
            { currentCatId: 1, director: 'Dặm bay' },
            { currentCatId: 2, director: 'Hoàn tiền' },
            { currentCatId: 3, director: 'Điểm thưởng' },
            { currentCatId: 4, director: 'Rút tiền mặt miễn phí' },
        ];
    }
    CompareComponent.prototype.ngOnInit = function () {
        this.GetCards();
        this.getCard1(this.selectCardId1);
        this.getCard2(this.selectCardId2);
        this.getCardType1(this.currentCatId1);
        this.getCardType2(this.currentCatId2);
        this.ShowimageCompare1;
        this.ShowimageCompare2;
    };
    //get card by id for creditdetail page
    CompareComponent.prototype.getCard2 = function (Id) {
        var _this = this;
        this.CardService.getCard(Id).then(function (card) {
            _this.card2 = card;
        });
    };
    CompareComponent.prototype.getCard1 = function (Id) {
        var _this = this;
        this.CardService.getCard(Id).then(function (card) {
            _this.card1 = card;
        });
    };
    //get all card table compare
    CompareComponent.prototype.GetCards = function () {
        var _this = this;
        this.CardService.getAllCard().then(function (cards) {
            _this.cards = cards;
        });
    };
    CompareComponent.prototype.getCardType1 = function (type) {
        var _this = this;
        this.CardService.getCardType(type).then(function (cardes) {
            _this.cardes1 = cardes;
        });
    };
    CompareComponent.prototype.getCardType2 = function (type) {
        var _this = this;
        this.CardService.getCardType(type).then(function (cardes) {
            _this.cardes2 = cardes;
        });
    };
    CompareComponent.prototype.RemoveCard1 = function () {
        this.card1 = null;
        this.card1 = this.card2;
        this.card2 = null;
    };
    CompareComponent.prototype.RemoveCard2 = function () {
        this.card2 = null;
    };
    CompareComponent.prototype.UnSelectedCard1 = function () {
        this.currentCatId1 = undefined;
        this.selectCardId1 = undefined;
    };
    CompareComponent.prototype.UnSelectedCard2 = function () {
        this.currentCatId2 = undefined;
        this.selectCardId2 = undefined;
    };
    CompareComponent.prototype.onSelectedCard1 = function () {
        this.selectedCard1ToForm = this.card1;
        console.log(this.selectedCard1ToForm);
    };
    CompareComponent.prototype.onSelectedCard2 = function () {
        this.selectedCard2ToForm = this.card2;
        console.log(this.selectedCard2ToForm);
    };
    CompareComponent.prototype.selectCard = function (card) {
        this.selectedCardToFormEvent.emit(card);
    };
    CompareComponent.prototype.moveToTopButton = function () {
        this.NotificationService.needToTop(true);
    };
    return CompareComponent;
}());
tslib_1.__decorate([
    core_1.Output('AddCardToFormEvent'),
    tslib_1.__metadata("design:type", Object)
], CompareComponent.prototype, "selectedCardToFormEvent", void 0);
CompareComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'compare',
        templateUrl: './compare.html',
        styleUrls: ['compare.css']
    }),
    tslib_1.__metadata("design:paramtypes", [common_1.Location,
        card_service_1.CardService,
        utils_1.NotificationService])
], CompareComponent);
exports.CompareComponent = CompareComponent;
//# sourceMappingURL=compare.js.map