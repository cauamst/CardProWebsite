import { Component, OnInit, Input, Output, NgZone } from '@angular/core';
import { FormControl } from "@angular/forms/forms";
import { Validators } from "@angular/forms/src/validators";
import { FormGroup } from "@angular/forms/src/forms";
import { CardService } from '../services/card.service';
import { CARDES } from '../models/Card-Data';
import { CARD, Content } from '../models/interface-card';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
    selector: 'credit',
    templateUrl: './credit.html',
    styleUrls: ['./credit.css'],

})
export class CreditComponent implements OnInit {
    selected: boolean = false;
    //get card theo type
    cardes: CARD[];
    card: CARD;
    currentCatId: number;
    //get id card compare
    selectCardId: number;
    //get all card
    cards: CARD[] = [];
    showDialog = false;
    isOpen = false;
    //content - uu diem
    contents: Content[];
    currentContentType: number = 1;

    showCompare = true;

    private NextPhotoInterval: number = 3000;
    //Looping or not
    private noLoopSlides: boolean = true;
    //Photos
    private slides: Array<any> = [];
    benefit = [
        { currentCatId: 1, director: 'Dặm bay' },
        { currentCatId: 2, director: 'Hoàn tiền' },
        { currentCatId: 3, director: 'Điểm thưởng' },
        { currentCatId: 4, director: 'Rút tiền mặt miễn phí' },
    ];
    button = [
        { id: 1, name: 'Dặm bay', ContentType: 1, idTT: 'Xem ưu điểm tiện ích dặm bay' },
        { id: 2, name: 'Hoàn tiền', ContentType: 2, idTT: 'Xem ưu điểm tiện ích hoàn tiền' },
        { id: 3, name: 'Điểm thưởng', ContentType: 3, idTT: 'xem ưu điểm tiện ích điểm thưởng' },
        { id: 4, name: 'Rút tiền mặt miễn phí', ContentType: 4, idTT: 'Xem ưu điểm tiện ích rút tiền mặt miễn phí' }
    ];
    buttonTooltip =
    [
        { id: 1, content: 'Xem ưu điểm tiện ích dặm bay' },
        { id: 2, content: 'Xem ưu điểm tiện ích hoàn tiền' },
        { id: 3, content: 'xem ưu điểm tiện ích điểm thưởng' },
        { id: 4, content: 'Xem ưu điểm tiện ích rút tiền mặt miễn phí' }
    ];

    CardView = [
        { url: require("../../../assets/img/card_credit.jpg") },
        { url: require("../../../assets/img/card_credit1.jpg") },
        { url: require("../../../assets/img/card_credit2.jpg") },
        { url: require("../../../assets/img/card_credit3.jpg") },
        { url: require("../../../assets/img/card_credit4.jpg") },
        { url: require("../../../assets/img/card_credit5.jpg") },
        { url: require("../../../assets/img/card_credit6.jpg") },
        { url: require("../../../assets/img/card_credit7.jpg") },
        { url: require("../../../assets/img/card_credit8.jpg") },
        { url: require("../../../assets/img/card_credit9.jpg") },
        { url: require("../../../assets/img/card_credit10.jpg") },
    ];

    constructor(
        private CardService: CardService,
        private route: ActivatedRoute,
        private location: Location,
        private zone: NgZone
    ) {

        this.addNewSlide();
    }
    ngOnInit(): void {
        this.GetCards();
        this.getCard(this.selectCardId);
        this.getCardType(this.currentCatId);
        this.getContentCard(this.currentContentType);
    }

    private addNewSlide() {
        this.slides.push(
            { image: require("../../../assets/img/slide1.jpg") },
            { image: require("../../../assets/img/slide2.jpg") },
            { image: require("../../../assets/img/slide3.jpg") },
            { image: require("../../../assets/img/slide4.jpg") },
            { image: require("../../../assets/img/slide5.jpg") },
            { image: require("../../../assets/img/slide1.jpg") }
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
        });
    }
    //get card by id for creditdetail page
    getCard(Id: number): void {
        this.CardService.getCard(Id).then(card => {
            this.card = card;
        });
    }
    //get all card table compare
    GetCards(): void {
        this.CardService.getAllCard().then(cards => {
            this.cards = cards;
        });
    }
    //get contentCard
    getContentCard(ContentType: number): void {
        this.zone.run(() => {
            this.CardService.getTypeContent(ContentType).then(contents => {
                this.contents = contents;
            })
        });
    }

}