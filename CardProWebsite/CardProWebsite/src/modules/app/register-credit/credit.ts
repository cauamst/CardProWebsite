import { Component, OnInit, Input, Output, NgZone, NgModule, OnChanges, HostListener, SimpleChanges, Attribute, Directive, Pipe } from '@angular/core';
import { CardService } from '../services/card.service';
import { CARDES } from '../models/Card-Data';
import { CARD, Content } from '../models/interface-card';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { Accordion, AccordionGroup } from './accordion';
import { CreditCardForm } from '../models/creditCardForm';
import { NotificationService } from '../../../shared/utils';

import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';


@Component({
    selector: 'credit',
    templateUrl: './credit.html',
    styleUrls: ['./credit.css'],

})
export class CreditComponent implements OnInit {
    cardes: CARD[];
    card: CARD;
    currentCatId: number = 1;
    selectCardId: number;
    cards: CARD[] = [];
    showDialog = false;
    content: Content;
    currentContentType: number = 1;
    sampleCaptchaImg = require("../../../assets/img/input-black.jpg")
    // Slider Region
    private maximumActive: number = 4;
    private leftMostIndex: number;
    private rightMostIndex: number;
    private prevIsHide: boolean;
    private nextIsHide: boolean;
    private nbOfCards: number;
    private initialWidth: number;

    private registerInfo: CreditCardForm = new CreditCardForm();
    formIsSubmitting: boolean;

    titleResultFormCheck: boolean;
    successResult: boolean;
    hasErrorResult: boolean;
    invalidCaptcha: boolean;
    emailExisted: boolean;

    registerForm: FormGroup;
    name: FormControl;
    email: FormControl;
    phone: FormControl;
    address: FormControl;
    salary: FormControl;
    agree: FormControl;
    captcha: FormControl;
    captchaBase64Img: string = this.sampleCaptchaImg;

    showCompare = true;
    showButtonBack = false;
    showBenefit: boolean = true;
    showDetail: boolean = false;
    selectedImage: CARD;
    currentCardId: number;

    card1toform: number;

    private NextPhotoInterval: number = 3000;
    //Looping or not
    private noLoopSlides: boolean = true;
    //Photos
    private slides: Array<any> = [];

    benefit = [
        { id: 1, director: 'Hoàn tiền' },
        { id: 2, director: 'Dặm bay' },
        { id: 3, director: 'Điểm thưởng' },
        { id: 4, director: 'Rút tiền miễn phí' },
    ];
    button = [
        { id: 1, name: 'Hoàn tiền', ContentType: 1, idTT: 'Xem ưu điểm tiện ích hoàn tiền', option: "b1", for: "b1" },
        { id: 2, name: 'Dặm bay', ContentType: 2, idTT: 'Xem ưu điểm tiện ích dặm bay', option: "b2", for: "b2" },
        { id: 3, name: 'Điểm thưởng', ContentType: 3, idTT: 'xem ưu điểm tiện ích điểm thưởng', option: "b3", for: "b3" },
        { id: 4, name: 'Rút tiền miễn phí', ContentType: 4, idTT: 'Xem ưu điểm tiện ích rút tiền mặt miễn phí', option: "b4", for: "b4" }
    ];
    CardView = [
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
    Salary = [
        { id: 1, content: 'Thấp hơn 7 triệu' },
        { id: 2, content: 'Từ 7 - 20 triệu' },
        { id: 3, content: 'Trên 20 triệu' }
    ];
    City = [
        { id: 1, content: 'An Giang' },
        { id: 2, content: 'Bà rịa - Vũng tàu' },
        { id: 3, content: 'Bạc Liêu' },
        { id: 4, content: 'Bắc Kạn' },
        { id: 6, content: 'Bắc Giang' },
        { id: 7, content: 'Bắc Ninh' },
        { id: 8, content: 'Bến Tre' },
        { id: 9, content: 'Bình Dương' },
        { id: 10, content: 'Bình Định' },
        { id: 11, content: 'Bình Phước' },
        { id: 12, content: 'Bình Thuận' },
        { id: 13, content: 'Cà Mau' },
        { id: 14, content: 'Cần Thơ' },
        { id: 15, content: 'Cao Bằng' },
        { id: 16, content: 'Đà Nẵng' },
        { id: 17, content: 'Đắk Lắk' },
        { id: 18, content: 'Đắk Nông' },
        { id: 19, content: 'Đồng Nai' },
        { id: 20, content: 'Đồng Tháp' },
        { id: 21, content: 'Điện Biên' },
        { id: 22, content: 'Gia Lai' },
        { id: 23, content: 'Hà Giang' },
        { id: 24, content: 'Hà Nam' },
        { id: 25, content: 'Hà Nội' },
        { id: 26, content: 'Hà Tĩnh' },
        { id: 27, content: 'Hải Dương' },
        { id: 28, content: 'Hải Phòng' },
        { id: 29, content: 'Hòa Bình' },
        { id: 30, content: 'Hậu Giang' },
        { id: 31, content: 'Hưng Yên' },
        { id: 32, content: 'Thành phố Hồ Chí Minh' },
        { id: 33, content: 'Khánh Hòa' },
        { id: 34, content: 'Kiên Giang' },
        { id: 35, content: 'Kon Tum' },
        { id: 36, content: 'Lai Châu' },
        { id: 37, content: 'Lào Cai' },
        { id: 38, content: 'Lạng Sơn' },
        { id: 39, content: 'Lâm Đồng' },
        { id: 40, content: 'Long An' },
        { id: 41, content: 'Nam Định' },
        { id: 42, content: 'Nghệ An' },
        { id: 43, content: 'Ninh Bình' },
        { id: 44, content: 'Ninh Thuận' },
        { id: 45, content: 'Phú Thọ' },
        { id: 46, content: 'Phú Yên' },
        { id: 47, content: 'Quảng Bình' },
        { id: 48, content: 'Quảng Nam' },
        { id: 49, content: 'Quảng Ngãi' },
        { id: 50, content: 'Quảng Ninh' },
        { id: 51, content: 'Quảng Trị' },
        { id: 52, content: 'Sóc Trăng' },
        { id: 53, content: 'Sơn La' },
        { id: 54, content: 'Tây Ninh' },
        { id: 55, content: 'Thái Bình' },
        { id: 56, content: 'Thái Nguyên' },
        { id: 57, content: 'Thanh Hóa' },
        { id: 58, content: 'Thừa Thiên - Huế' },
        { id: 59, content: 'Tiền Giang' },
        { id: 60, content: 'Trà Vinh' },
        { id: 61, content: 'Tuyên Quang' },
        { id: 62, content: 'Vĩnh Long' },
        { id: 63, content: 'Vĩnh Phúc' },
        { id: 64, content: 'Yên Bái' },
    ];

    constructor(
        private cardService: CardService,
        private route: ActivatedRoute,
        private location: Location,
        private zone: NgZone,
        private NotificationService: NotificationService
    ) {
        this.initialWidth = window.innerWidth;
        this.addNewSlide();
        this.showDetailCard();
        this.showbenefit();
        this.onSelected(this.card);
    }

    ngOnInit() {
        this.GetCards();
        this.getCardType(this.currentCatId);
        this.getContentCard(this.currentContentType);
        this.CreateValidatorForm();
        this.CreateRegisterForm();
        this.updateCaptcha();
    }

    private addNewSlide() {
        this.slides.push(
            { image: require("../../../assets/img/1200x350.jpg") },
            { image: require("../../../assets/img/ComboDoanhNGhiep-1600x530px.jpg") },
            { image: require("../../../assets/img/CTKM-Contactless1600x530.jpg") },
            { image: require("../../../assets/img/DichVuKieuHoi1600x530px.jpg") },
            { image: require("../../../assets/img/DonThuSangNganQuaTang1600x530.jpg") },
            { image: require("../../../assets/img/Top40ThuongHIeu2017_1600x530.jpg") }
        );
    }

    private removeLastSlide() {
        this.slides.pop();

    }

    goBack(): void {
        this.location.back();
    }

    // get card by type for textfield compare
    getCardType(type: number): void {
        this.cardService.getCardType(type).then(cardes => {
            this.cardes = cardes;
            this.nbOfCards = cardes.length;
            this.maximumActive = this.getNbOfActiveByWindowWidth(this.initialWidth);
            this.activateCards();
            this.leftMostIndex = 0;
            this.rightMostIndex = this.maximumActive - 1;
            this.updatePrevAndNext();
        });
    }

    // ---- slider Region -------------------
    private getNbOfActiveByWindowWidth(wWidth: number): number {
        let nbOfActive: number;
        if (wWidth < 380) {
            nbOfActive = 1;
        } else if (wWidth >= 380 && wWidth <= 560) {
            nbOfActive = 2;
        } else if (wWidth > 560 && wWidth <= 720 || (wWidth >= 840 && wWidth < 1040)) {
            nbOfActive = 3;
        } else if (wWidth >= 720 && wWidth < 840 || wWidth >= 1040) {
            nbOfActive = 4;
        }
        return nbOfActive;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        let wWidth = event.target.innerWidth;
        let nbOfActive = this.getNbOfActiveByWindowWidth(wWidth);
        this.initialWidth = wWidth;
        if (nbOfActive != this.maximumActive) {
            this.maximumActive = nbOfActive;
            this.activateCards();
            this.leftMostIndex = 0;
            this.rightMostIndex = this.maximumActive - 1;
            this.updatePrevAndNext();
        }

    }

    private updatePrevAndNext() {
        this.prevIsHide = this.nbOfCards <= this.maximumActive
            || this.leftMostIndex <= 0;
        this.nextIsHide = this.nbOfCards <= this.maximumActive
            || this.rightMostIndex == (this.nbOfCards - 1);
    }

    public prevSmallSlider() {
        if (this.leftMostIndex - 1 >= 0) {
            this.leftMostIndex = this.leftMostIndex - 1;
            this.cardes[this.leftMostIndex]['active'] = true;
        }

        if (this.rightMostIndex - 1 >= 0) {
            this.cardes[this.rightMostIndex]['active'] = false;
            this.rightMostIndex = this.rightMostIndex - 1;
        }
        this.updatePrevAndNext();
    }

    public nextSmallSlider() {
        if (this.rightMostIndex + 1 < this.nbOfCards) {
            this.rightMostIndex = this.rightMostIndex + 1;
            this.cardes[this.rightMostIndex]['active'] = true;
        }

        if (this.leftMostIndex + 1 < this.nbOfCards) {
            this.cardes[this.leftMostIndex]['active'] = false;
            this.leftMostIndex = this.leftMostIndex + 1;
        }
        this.updatePrevAndNext();
    }

    private activateCards() {
        let nbOfActive = this.nbOfCards >= this.maximumActive
            ? this.maximumActive
            : this.nbOfCards;

        for (let i = 0; i < this.nbOfCards; i++) {
            this.cardes[i]['active'] = i < nbOfActive
                ? true
                : false;
        }
    }

    // ---- slider Region ------------------

    updateCaptcha() {
        this.cardService.getCaptcha().subscribe((res) =>
            this.captchaBase64Img = `data:image/png;base64,${res}`,
            (err) => {
                if (err) {
                    this.captchaBase64Img = this.sampleCaptchaImg;
                }
            }
        );
    }

    chooseOption(btn: any) {
        this.getContentCard(btn.ContentType);
        this.getCardType(btn.id);
        this.showbenefit();
    }

    //get card by id for creditdetail page
    getCard(Id: number): void {
        this.card = this.cardes.find(card => card.Id == Id);
    }
    //get all card table compare
    GetCards(): void {
        this.cardService.getAllCard().then(cards => {
            this.cards = cards;
        });
    }
    //get contentCard
    getContentCard(ContentType: number): void {
        this.cardService.getTypeContent(ContentType).then(content => {
            this.content = content;
        });
    }

    showbenefit() {
        this.showBenefit = true;
        this.showDetail = false;
    }

    showDetailCard() {
        this.showDetail = true;
        this.showBenefit = false;
    }

    onSelected(card: CARD): void {
        this.selectedImage = this.selectedImage === card
            ? null
            : card;
        if (this.selectedImage) {
            this.showDetailCard();
        } else {
            this.showbenefit();
        }

    }

    moveToTopButton() {
        this.NotificationService.needToTop(true);
    }

    addCardToForm(card: CARD) {
        this.selectedImage = card;
    }

    CreateRegisterForm() {
        this.registerForm = new FormGroup({
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            salary: this.salary,
            agree: this.agree,
            captcha: this.captcha
        });
    }

    CreateValidatorForm() {
        this.name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]);
        this.email = new FormControl('', [Validators.pattern("[^ @]*@[^ @]*")]);
        this.phone = new FormControl('', [Validators.pattern(/^(01[2689]|09)[0-9]{8}$/)]);
        this.address = new FormControl('', Validators.required);
        this.salary = new FormControl('', Validators.required);
        this.agree = new FormControl('', Validators.requiredTrue);
        this.captcha = new FormControl('', [Validators.required]);
    }

    submitForm(): void {
        if (!this.formIsSubmitting) {
            this.invalidCaptcha = false;
            this.formIsSubmitting = true;

            this.registerInfo.captcha = this.captcha.value;
            this.registerInfo.name = this.name.value;
            this.registerInfo.email = this.email.value;
            this.registerInfo.phoneNumber = this.phone.value;
            this.registerInfo.cityId = this.address.value;
            this.registerInfo.incomeRangeId = this.salary.value;
            this.registerInfo.selectedCardId = this.selectedImage != null
                ? this.selectedImage.Id
                : null
                ;

            this.cardService
                .anonymousRegister(this.registerInfo)
                .subscribe((result) => {
                    if (result) {
                        this.successResult = result.IsSuccess;
                        this.hasErrorResult = result.HasErrors;
                        this.invalidCaptcha = result.InvalidCaptcha;
                        this.emailExisted = result.EmailExisted;
                    }
                    this.formIsSubmitting = false;
                    this.titleResultFormCheck = !(this.invalidCaptcha || this.emailExisted);

                    if (this.invalidCaptcha) {
                        this.captcha.setErrors({ "verificationFailed": true });
                        this.updateCaptcha();
                    }

                    if (this.emailExisted) {
                        this.email.setErrors({ "existed": true });
                        this.updateCaptcha();
                    }
                   
                },
                (err) => {
                    if (err) {
                        this.hasErrorResult = true;
                    }
                    this.formIsSubmitting = false;
                    this.titleResultFormCheck = true;

                }
                );
        }
    }

    ClearInput() {
        this.invalidCaptcha = false;
        this.titleResultFormCheck = false;
        this.registerForm.reset();
        this.updateCaptcha();
    }
    CheckRegister() {
        if ((this.address.value == 25 || this.address.value == 32) && (this.salary.value == 1))
        {
            this.titleResultFormCheck = true;
        }
    }
    RefreshCaptcha() {
        this.updateCaptcha();
    }
    
}