"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var card_service_1 = require("../services/card.service");
var pointTransform_service_1 = require("../services/pointTransform.service");
var CompareComponent = (function () {
    function CompareComponent(location, CardService, pointService) {
        this.location = location;
        this.CardService = CardService;
        this.pointService = pointService;
        this.showDialog1 = false;
        this.showDialog2 = false;
        this.cards = [];
        this.ShowimageCompare1 = true;
        this.ShowimageCompare2 = true;
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
    CompareComponent.prototype.ShowValue = function (value) {
        var message = document.getElementById("message");
        message.innerHTML = value;
    };
    return CompareComponent;
}());
CompareComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'compare',
        templateUrl: './compare.html',
        styleUrls: ['compare.css']
    }),
    tslib_1.__metadata("design:paramtypes", [common_1.Location,
        card_service_1.CardService,
        pointTransform_service_1.PointTransform])
], CompareComponent);
exports.CompareComponent = CompareComponent;
//# sourceMappingURL=compare.js.map