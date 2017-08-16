import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from "@angular/forms/forms";
import { Validators } from "@angular/forms/src/validators";
import { FormGroup } from "@angular/forms/src/forms";
import { CardService } from '../services/card.service';
import { CARDES } from '../models/Card-Data';
import { CARD } from '../models/interface-card';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import {TabComponent } from './tab';
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
    currentCatId :number;
    selectcard: number = 0;
    //get all card
    cards: CARD[] = [];
    showDialog = false;
    isOpen = false;

    private NextPhotoInterval: number = 3000;
    //Looping or not
    private noLoopSlides: boolean = true;
    //Photos
    private slides: Array<any> = [];
    button = [
        { currentCatId: 1, director: 'Tiện ích 1', Type: 1 },
        { currentCatId: 2, director: 'Tiện ích 2', Type: 2 },
        { currentCatId: 3, director: 'Tiện ích 3', Type: 3 },
        { currentCatId: 4, director: 'Tiện ích 4', Type: 4 },
    ];

    constructor(
        private CardService: CardService,
        private route: ActivatedRoute,
        private location: Location
    ) {

        this.addNewSlide();
    }
    ngOnInit(): void {
        this.GetCards();
        this.getCard(this.selectcard);
        this.getCardType(this.currentCatId);
    }

    private addNewSlide() {
        this.slides.push(
            { image: require("../../../assets/img/slide1.jpg")},
            { image: require("../../../assets/img/slide2.jpg")},
            { image: require("../../../assets/img/slide3.jpg")},
            { image: require("../../../assets/img/slide4.jpg")},
            { image: require("../../../assets/img/slide5.jpg")},
            { image: require("../../../assets/img/slide1.jpg")}
        );
    }
    private removeLastSlide() {
        this.slides.pop();

    }
    goBack(): void {
        this.location.back();
    }
    // get card by type for credit menu
    getCardType(type: number): void {
        console.log(type);
        this.CardService.getCardType(type).then(cardes => {
            this.cardes = cardes;
            console.log(cardes);
            console.log(this.currentCatId);
        });
    }
    //get card by id for creditdetail page
    getCard(Id : number): void
    {
        this.CardService.getCard(Id).then(card => {
            this.card = card;
        })
           
    }
    //get all card table compare
    GetCards(): void {
        this.CardService.getAllCard().then(cards => {
            this.cards = cards;
        });
    }



}