"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var card_service_1 = require("../services/card.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var creditCardForm_1 = require("../models/creditCardForm");
var utils_1 = require("../../../shared/utils");
var forms_1 = require("@angular/forms");
var CreditComponent = (function () {
    function CreditComponent(CardService, route, location, zone, NotificationService) {
        this.CardService = CardService;
        this.route = route;
        this.location = location;
        this.zone = zone;
        this.NotificationService = NotificationService;
        this.currentCatId = 1;
        this.cards = [];
        this.showDialog = false;
        this.currentContentType = 1;
        this.captchaImgUrl = require("../../../assets/img/input-black.jpg");
        // Slider Region
        this.maximumActive = 4;
        this.registerInfo = new creditCardForm_1.CreditCardForm();
        this.titleResultFormCheck = false;
        this.titleForm = "Thông tin khách hàng";
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
            { id: 1, director: 'Hoàn tiền' },
            { id: 2, director: 'Dặm bay' },
            { id: 3, director: 'Điểm thưởng' },
            { id: 4, director: 'Rút tiền miễn phí' },
        ];
        this.button = [
            { id: 1, name: 'Hoàn tiền', ContentType: 1, idTT: 'Xem ưu điểm tiện ích dặm bay', option: "b1", for: "b1" },
            { id: 2, name: 'Dặm bay', ContentType: 2, idTT: 'Xem ưu điểm tiện ích hoàn tiền', option: "b2", for: "b2" },
            { id: 3, name: 'Điểm thưởng', ContentType: 3, idTT: 'xem ưu điểm tiện ích điểm thưởng', option: "b3", for: "b3" },
            { id: 4, name: 'Rút tiền miễn phí', ContentType: 4, idTT: 'Xem ưu điểm tiện ích rút tiền mặt miễn phí', option: "b4", for: "b4" }
        ];
        this.CardView = [
            { Id: 1, url: require("../../../assets/img/FamilyCard.jpg") },
            { Id: 2, url: require("../../../assets/img/UnionPaycard.jpg") },
            { Id: 3, url: require("../../../assets/img/VisaLadiesFirst.jpg") },
            { Id: 4, url: require("../../../assets/img/VisaCreditClassic.jpg") },
            { Id: 5, url: require("../../../assets/img/MCcreditclassic.jpg") },
            { Id: 6, url: require("../../../assets/img/Motorcard.jpg") },
            { Id: 7, url: require("../../../assets/img/VisaCreditGold.jpg") },
            { Id: 8, url: require("../../../assets/img/MCcreditgold.jpg") },
            { Id: 9, url: require("../../../assets/img/Carcard.jpg") },
            { Id: 10, url: require("../../../assets/img/VisaCreditPlantinum.jpg") },
            { Id: 11, url: require("../../../assets/img/VisaCreditSignature.jpg") },
            { Id: 12, url: require("../../../assets/img/MCworld.jpg") },
            { Id: 13, url: require("../../../assets/img/Infinitecard_Front.jpg") },
            { Id: 14, url: require("../../../assets/img/VisaCreditPlantinumCashback.jpg") },
        ];
        this.Salary = [
            { id: 1, content: 'Thấp hơn 7 triệu' },
            { id: 2, content: 'Từ 7 - 20 triệu' },
            { id: 3, content: 'Trên 20 triệu' }
        ];
        this.City = [
            { id: 1, content: 'An Giang' },
            { id: 2, content: 'Bà rịa - Vũng tàu' },
            { id: 3, content: 'Bắc Cạn' },
            { id: 4, content: 'Bắc Giang' },
            { id: 5, content: 'Bắc Kan' },
            { id: 6, content: 'Bạc Liêu' },
            { id: 7, content: 'Bắc Ninh' },
            { id: 8, content: 'Bến Tre' },
            { id: 9, content: 'Bình Định' },
            { id: 10, content: 'Bình Dương' },
            { id: 11, content: 'Bình Phước' },
            { id: 12, content: 'Bình Thuận' },
            { id: 13, content: 'Cà Mau' },
            { id: 14, content: 'Cần Thơ' },
            { id: 15, content: 'Cao Bằng' },
            { id: 16, content: 'Đà Nẵng' },
            { id: 17, content: 'Đắc Lắc' },
            { id: 18, content: 'Đắc Nông' },
            { id: 19, content: 'DAK LAK' },
            { id: 20, content: 'DAK NONG' },
            { id: 21, content: 'Điện Biên' },
            { id: 22, content: 'Hà Nội' },
            { id: 23, content: 'Thành phố HCM' }
        ];
        this.initialWidth = window.innerWidth;
        this.addNewSlide();
        this.showDetailCard();
        this.showbenefit();
        this.onSelected(this.card);
    }
    CreditComponent.prototype.ngOnInit = function () {
        this.GetCards();
        this.getCardType(this.currentCatId);
        this.getContentCard(this.currentContentType);
        this.CreateValidatorForm();
        this.CreateRegisterForm();
    };
    CreditComponent.prototype.addNewSlide = function () {
        this.slides.push({ image: require("../../../assets/img/1200x350.jpg") }, { image: require("../../../assets/img/ComboDoanhNGhiep-1600x530px.jpg") }, { image: require("../../../assets/img/CTKM-Contactless1600x530.jpg") }, { image: require("../../../assets/img/DichVuKieuHoi1600x530px.jpg") }, { image: require("../../../assets/img/DonThuSangNganQuaTang1600x530.jpg") }, { image: require("../../../assets/img/Top40ThuongHIeu2017_1600x530.jpg") });
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
            _this.maximumActive = _this.getNbOfActiveByWindowWidth(_this.initialWidth);
            _this.activateCards();
            _this.leftMostIndex = 0;
            _this.rightMostIndex = _this.maximumActive - 1;
            _this.updatePrevAndNext();
        });
    };
    // ---- slider Region -------------------
    CreditComponent.prototype.getNbOfActiveByWindowWidth = function (wWidth) {
        var nbOfActive;
        if (wWidth < 380) {
            nbOfActive = 1;
        }
        else if (wWidth >= 380 && wWidth <= 560) {
            nbOfActive = 2;
        }
        else if (wWidth > 560 && wWidth <= 720 || (wWidth >= 840 && wWidth < 1040)) {
            nbOfActive = 3;
        }
        else if (wWidth >= 720 && wWidth < 840 || wWidth >= 1040) {
            nbOfActive = 4;
        }
        return nbOfActive;
    };
    CreditComponent.prototype.onResize = function (event) {
        var wWidth = event.target.innerWidth;
        var nbOfActive = this.getNbOfActiveByWindowWidth(wWidth);
        this.initialWidth = wWidth;
        if (nbOfActive != this.maximumActive) {
            this.maximumActive = nbOfActive;
            this.activateCards();
            this.leftMostIndex = 0;
            this.rightMostIndex = this.maximumActive - 1;
            this.updatePrevAndNext();
        }
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
    // ---- slider Region ------------------
    CreditComponent.prototype.chooseOption = function (btn) {
        this.getContentCard(btn.ContentType);
        this.getCardType(btn.id);
        this.showbenefit();
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
    CreditComponent.prototype.moveToTopButton = function () {
        this.NotificationService.needToTop(true);
    };
    CreditComponent.prototype.addCardToForm = function (card) {
        this.selectedImage = card;
    };
    CreditComponent.prototype.CreateRegisterForm = function () {
        this.registerForm = new forms_1.FormGroup({
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            salary: this.salary,
            agree: this.agree,
            captcha: this.captcha
        });
    };
    CreditComponent.prototype.CreateValidatorForm = function () {
        this.name = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(24)]);
        this.email = new forms_1.FormControl('', [forms_1.Validators.pattern("[^ @]*@[^ @]*")]);
        this.phone = new forms_1.FormControl('', [forms_1.Validators.pattern(/^(01[2689]|09)[0-9]{8}$/)]);
        this.address = new forms_1.FormControl('', forms_1.Validators.required);
        this.salary = new forms_1.FormControl('', forms_1.Validators.required);
        this.agree = new forms_1.FormControl('', forms_1.Validators.requiredTrue);
        this.captcha = new forms_1.FormControl('', [forms_1.Validators.required]);
    };
    CreditComponent.prototype.submitForm = function () {
        var _this = this;
        this.formIsSubmitting = true;
        if ((this.salary.value == "1") && (this.address.value == "23" || this.address.value == "22")) {
            this.ResultRegister = "Cảm ơn bạn đã quan tâm đến thẻ tín dụng Sacombank. Chúng tôi rất tiếc không thể xử lý đơn đăng ký do bạn chưa đủ điều kiện tham gia. Vui lòng quay lại sau.";
        }
        else {
            this.ResultRegister = "Chúc mừng bạn đã đăng ký thành công, vui lòng chờ nhân viên gọi hỗ trợ";
        }
        setTimeout(function () {
            _this.formIsSubmitting = false;
            if (_this.titleResultFormCheck = false) {
                _this.titleForm = "Thông tin khách hàng";
            }
            else {
                _this.titleForm = "Kết quả đăng ký";
            }
            _this.titleResultFormCheck = true;
        }, 5000);
    };
    CreditComponent.prototype.ClearInput = function () {
        this.titleResultFormCheck = !this.titleResultFormCheck;
        this.titleForm = "Thông tin khách hàng";
        this.registerForm.reset();
    };
    return CreditComponent;
}());
tslib_1.__decorate([
    core_1.HostListener('window:resize', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreditComponent.prototype, "onResize", null);
CreditComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'credit',
        templateUrl: './credit.html',
        styleUrls: ['./credit.css'],
    }),
    tslib_1.__metadata("design:paramtypes", [card_service_1.CardService,
        router_1.ActivatedRoute,
        common_1.Location,
        core_1.NgZone,
        utils_1.NotificationService])
], CreditComponent);
exports.CreditComponent = CreditComponent;
//# sourceMappingURL=credit.js.map