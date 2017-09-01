import { Component, OnInit, Input, Output, NgZone, NgModule, OnChanges } from '@angular/core';
import { FormControl } from "@angular/forms/forms";
import { Validators } from "@angular/forms/src/validators";
import { FormGroup } from "@angular/forms/src/forms";
import { CardService } from '../services/card.service';
import { CARDES } from '../models/Card-Data';
import { CARD, Content } from '../models/interface-card';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { Accordion, AccordionGroup } from './accordion';
declare var $: any;
@Component({
    selector: 'credit',
    templateUrl: './credit.html',
    styleUrls: ['./credit.css'],

})
export class CreditComponent implements OnInit {

    //get card theo type
    cardes: CARD[];
    card: CARD;
    currentCatId: number = 1;
    //get id card compare
    selectCardId: number;
    //get all card
    cards: CARD[] = [];
    showDialog = false;
    //isOpen = false;
    //content - uu diem
    contents: Content[];
    currentContentType: number = 1;
    private maximumActive: number = 4;
    private leftMostIndex: number;
    private rightMostIndex: number;
    private prevIsHide: boolean;
    private nextIsHide: boolean;
    private nbOfCards: number;

    showCompare = true;
    showButtonBack = false;
    showBenefit: boolean = true;
    showDetail: boolean = false;
    selectedImage: CARD;
    currentCardId: number;

    private NextPhotoInterval: number = 3000;
    //Looping or not
    private noLoopSlides: boolean = true;
    //Photos
    private slides: Array<any> = [];
    benefit = [
        { id: 1, director: 'Dặm bay' },
        { id: 2, director: 'Hoàn tiền' },
        { id: 3, director: 'Điểm thưởng' },
        { id: 4, director: 'Rút tiền mặt miễn phí' },
    ];
    button = [
        { id: 1, name: 'Dặm bay', ContentType: 1, idTT: 'Xem ưu điểm tiện ích dặm bay', option: "b1", for: "b1" },
        { id: 2, name: 'Hoàn tiền', ContentType: 2, idTT: 'Xem ưu điểm tiện ích hoàn tiền', option: "b2", for: "b2" },
        { id: 3, name: 'Điểm thưởng', ContentType: 3, idTT: 'xem ưu điểm tiện ích điểm thưởng', option: "b3", for: "b3" },
        { id: 4, name: 'Rút tiền mặt miễn phí', ContentType: 4, idTT: 'Xem ưu điểm tiện ích rút tiền mặt miễn phí', option: "b4", for: "b4" }
    ];

    CardView = [
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
    Salary = [
        { id: 1, content: 'Thấp hơn 7 triệu' },
        { id: 2, content: 'Từ 7 - 15 triệu' },
        { id: 3, content: 'Trên 15 triệu' }
    ];
    City = [
        { id: 1, content: 'Cần thơ' },
        { id: 2, content: 'Thành phố HCM' },
        { id: 3, content: 'Hà Nội' }
    ];


    constructor(
        private CardService: CardService,
        private route: ActivatedRoute,
        private location: Location,
        private zone: NgZone
    ) {

        this.addNewSlide();
        this.showDetailCard();
        this.showbenefit();
        this.onSelected(this.card);
    }
    ngOnInit(): void {
        this.GetCards();
        this.getCardType(this.currentCatId);
        console.log(this.getCardType);
        this.getContentCard(this.currentContentType);
    }

    private addNewSlide() {
        this.slides.push(
            { image: require("../../../assets/img/ChungChiTienGui1600x530px_1.jpg") },
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
            this.activateCards();
            this.leftMostIndex = 0;
            this.rightMostIndex = this.maximumActive - 1;
            this.updatePrevAndNext();
        });
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

    //accordion-example
    firstDisabled: boolean = false;
    isOpen: boolean = false;

    groups: Array<any> = [
        {
            heading: 'Dynamic 1',
            content: 'I am dynamic!'
        },
        {
            heading: 'Dynamic 2',
            content: 'Dynamic as well'
        }
    ];

    removeDynamic() {
        this.groups.pop();
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
    ScrollToTop() {
        window.scrollTo(0, 0);
    }
}

