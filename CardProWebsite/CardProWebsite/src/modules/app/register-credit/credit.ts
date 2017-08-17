import { Component, OnInit, Input, Output, NgZone } from '@angular/core';
import { FormControl } from "@angular/forms/forms";
import { Validators } from "@angular/forms/src/validators";
import { FormGroup } from "@angular/forms/src/forms";
import { CardService } from '../services/card.service';
import { CARDES } from '../models/Card-Data';
import { CARD, Content } from '../models/interface-card';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { TabComponent } from './tab';
import { TabsComponent } from './tabs';

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

    contents: Content[];
    currentContentType: number = 1;

    private NextPhotoInterval: number = 3000;
    //Looping or not
    private noLoopSlides: boolean = true;
    //Photos
    private slides: Array<any> = [];
    benefit = [
        { currentCatId: 1, director: 'Tiện ích 1' },
        { currentCatId: 2, director: 'Tiện ích 2' },
        { currentCatId: 3, director: 'Tiện ích 3' },
        { currentCatId: 4, director: 'Tiện ích 4' },
    ];
    button = [
        { name: 'Tiện ích 1', ContentType: 1 },
        { name: 'Tiện ích 2', ContentType: 2 },
        { name: 'Tiện ích 3', ContentType: 3 },
        { name: 'Tiện ích 4', ContentType: 4 },
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
            console.log(Id);
            console.log(this.selectCardId);
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