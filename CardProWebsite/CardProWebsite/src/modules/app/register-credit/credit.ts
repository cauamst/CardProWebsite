﻿import { Component, OnInit, Input, Output, NgZone, NgModule, OnChanges, HostListener, SimpleChanges, Attribute, Directive, Pipe } from '@angular/core';
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
    contents: Content[];
    currentContentType: number = 1;

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

    titleResultFormCheck: boolean = false;
    titleForm: string = "Thông tin khách hàng";
    ResultRegister: string;

    registerForm: FormGroup;
    name: FormControl;
    email: FormControl;
    phone: FormControl;
    address: FormControl;
    salary: FormControl;
    agree: FormControl;
    captcha:FormControl;

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
        { id: 1, director: 'Dặm bay' },
        { id: 2, director: 'Hoàn tiền' },
        { id: 3, director: 'Điểm thưởng' },
        { id: 4, director: 'Rút tiền miễn phí' },
    ];
    button = [
        { id: 1, name: 'Dặm bay', ContentType: 1, idTT: 'Xem ưu điểm tiện ích dặm bay', option: "b1", for: "b1" },
        { id: 2, name: 'Hoàn tiền', ContentType: 2, idTT: 'Xem ưu điểm tiện ích hoàn tiền', option: "b2", for: "b2" },
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
        {id : 23,content : 'Thành phố HCM'}
    ];

    constructor(
        private CardService: CardService,
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
        this.CardService.getCardType(type).then(cardes => {
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
    private getNbOfActiveByWindowWidth(wWidth: number) : number {
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
        this.CardService.getAllCard().then(cards => {
            this.cards = cards;
        });
    }
    //get contentCard
    getContentCard(ContentType: number): void {
        this.CardService.getTypeContent(ContentType).then(contents => {
            this.contents = contents;
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
        this.selectedImage = card;
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
        this.formIsSubmitting = true;
        if ((this.salary.value == "1") && (this.address.value == "23" || this.address.value == "22")) {
            this.ResultRegister = "Cảm ơn bạn đã quan tâm đến thẻ tín dụng Sacombank. Chúng tôi rất tiếc không thể xử lý đơn đăng ký do bạn chưa đủ điều kiện tham gia. Vui lòng quay lại sau.";
        }
        else {
            this.ResultRegister = "Chúc mừng bạn đã đăng ký thành công, vui lòng chờ nhân viên gọi hỗ trợ";
        }
        setTimeout(() => {
            this.formIsSubmitting = false;
            if (this.titleResultFormCheck = false) {
                this.titleForm = "Thông tin khách hàng";
            } else {
                this.titleForm = "Kết quả đăng ký";
            }
            this.titleResultFormCheck = true;
        }, 5000);
       
    }
    ClearInput() {
        this.titleResultFormCheck = !this.titleResultFormCheck;
        this.titleForm = "Thông tin khách hàng";
        this.registerForm.reset();
    }
}