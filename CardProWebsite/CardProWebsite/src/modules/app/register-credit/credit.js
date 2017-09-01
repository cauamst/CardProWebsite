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
        this.currentCatId = 1;
        //get all card
        this.cards = [];
        this.showDialog = false;
        this.currentContentType = 1;
        this.maximumActive = 4;
        this.showCompare = true;
        this.showButtonBack = false;
        this.showBenefit = true;
        this.showDetail = false;
        this.NextPhotoInterval = 3000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
        this.benefit = [
            { id: 1, director: 'Dặm bay' },
            { id: 2, director: 'Hoàn tiền' },
            { id: 3, director: 'Điểm thưởng' },
            { id: 4, director: 'Rút tiền mặt miễn phí' },
        ];
        this.button = [
            { id: 1, name: 'Dặm bay', ContentType: 1, idTT: 'Xem ưu điểm tiện ích dặm bay', option: "b1", for: "b1" },
            { id: 2, name: 'Hoàn tiền', ContentType: 2, idTT: 'Xem ưu điểm tiện ích hoàn tiền', option: "b2", for: "b2" },
            { id: 3, name: 'Điểm thưởng', ContentType: 3, idTT: 'xem ưu điểm tiện ích điểm thưởng', option: "b3", for: "b3" },
            { id: 4, name: 'Rút tiền mặt miễn phí', ContentType: 4, idTT: 'Xem ưu điểm tiện ích rút tiền mặt miễn phí', option: "b4", for: "b4" }
        ];
        this.CardView = [
            { Id: 1, url: require("../../../assets/img/card_credit.jpg") },
            { Id: 2, url: require("../../../assets/img/card_credit1.jpg") },
            { Id: 3, url: require("../../../assets/img/card_credit2.jpg") },
            { Id: 4, url: require("../../../assets/img/card_credit3.jpg") },
            { Id: 5, url: require("../../../assets/img/card_credit4.jpg") },
            { Id: 6, url: require("../../../assets/img/card_credit5.jpg") },
            { Id: 7, url: require("../../../assets/img/card_credit6.jpg") },
            { Id: 8, url: require("../../../assets/img/card_credit7.jpg") },
            { Id: 9, url: require("../../../assets/img/card_credit8.jpg") },
            { Id: 10, url: require("../../../assets/img/card_credit9.jpg") },
            { Id: 11, url: require("../../../assets/img/card_credit10.jpg") },
        ];
        this.Salary = [
            { id: 1, content: 'Thấp hơn 7 triệu' },
            { id: 2, content: 'Từ 7 - 15 triệu' },
            { id: 3, content: 'Trên 15 triệu' }
        ];
        this.City = [
            { id: 1, content: 'Cần thơ' },
            { id: 2, content: 'Thành phố HCM' },
            { id: 3, content: 'Hà Nội' }
        ];
        //accordion-example
        this.firstDisabled = false;
        this.isOpen = false;
        this.groups = [
            {
                heading: 'Dynamic 1',
                content: 'I am dynamic!'
            },
            {
                heading: 'Dynamic 2',
                content: 'Dynamic as well'
            }
        ];
        this.addNewSlide();
        this.showDetailCard();
        this.showbenefit();
        this.onSelected(this.card);
    }
    CreditComponent.prototype.ngOnInit = function () {
        this.GetCards();
        this.getCardType(this.currentCatId);
        console.log(this.getCardType);
        this.getContentCard(this.currentContentType);
    };
    CreditComponent.prototype.addNewSlide = function () {
        this.slides.push({ image: require("../../../assets/img/ChungChiTienGui1600x530px_1.jpg") }, { image: require("../../../assets/img/ComboDoanhNGhiep-1600x530px.jpg") }, { image: require("../../../assets/img/CTKM-Contactless1600x530.jpg") }, { image: require("../../../assets/img/DichVuKieuHoi1600x530px.jpg") }, { image: require("../../../assets/img/DonThuSangNganQuaTang1600x530.jpg") }, { image: require("../../../assets/img/Top40ThuongHIeu2017_1600x530.jpg") });
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
            _this.nbOfCards = cardes.length;
            _this.activateCards();
            _this.leftMostIndex = 0;
            _this.rightMostIndex = _this.maximumActive - 1;
            _this.updatePrevAndNext();
        });
    };
    CreditComponent.prototype.updatePrevAndNext = function () {
        this.prevIsHide = this.nbOfCards <= this.maximumActive
            || this.leftMostIndex <= 0;
        this.nextIsHide = this.nbOfCards <= this.maximumActive
            || this.rightMostIndex == (this.nbOfCards - 1);
    };
    CreditComponent.prototype.prevSmallSlider = function () {
        if (this.leftMostIndex - 1 >= 0) {
            this.leftMostIndex = this.leftMostIndex - 1;
            this.cardes[this.leftMostIndex]['active'] = true;
        }
        if (this.rightMostIndex - 1 >= 0) {
            this.cardes[this.rightMostIndex]['active'] = false;
            this.rightMostIndex = this.rightMostIndex - 1;
        }
        this.updatePrevAndNext();
    };
    CreditComponent.prototype.nextSmallSlider = function () {
        if (this.rightMostIndex + 1 < this.nbOfCards) {
            this.rightMostIndex = this.rightMostIndex + 1;
            this.cardes[this.rightMostIndex]['active'] = true;
        }
        if (this.leftMostIndex + 1 < this.nbOfCards) {
            this.cardes[this.leftMostIndex]['active'] = false;
            this.leftMostIndex = this.leftMostIndex + 1;
        }
        this.updatePrevAndNext();
    };
    CreditComponent.prototype.activateCards = function () {
        var nbOfActive = this.nbOfCards >= this.maximumActive
            ? this.maximumActive
            : this.nbOfCards;
        for (var i = 0; i < this.nbOfCards; i++) {
            this.cardes[i]['active'] = i < nbOfActive
                ? true
                : false;
        }
    };
    //get card by id for creditdetail page
    CreditComponent.prototype.getCard = function (Id) {
        this.card = this.cardes.find(function (card) { return card.Id == Id; });
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
        this.CardService.getTypeContent(ContentType).then(function (contents) {
            _this.contents = contents;
        });
    };
    CreditComponent.prototype.removeDynamic = function () {
        this.groups.pop();
    };
    CreditComponent.prototype.showbenefit = function () {
        this.showBenefit = true;
        this.showDetail = false;
    };
    CreditComponent.prototype.showDetailCard = function () {
        this.showDetail = true;
        this.showBenefit = false;
    };
    CreditComponent.prototype.onSelected = function (card) {
        this.selectedImage = card;
    };
    CreditComponent.prototype.ScrollToTop = function () {
        window.scrollTo(0, 0);
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