﻿import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Accordion, AccordionGroup } from './accordion';
import { CardService } from '../services/card.service';
import { CARDES } from '../models/Card-Data';
import { CARD, Content } from '../models/interface-card';
import { NotificationService } from '../../../shared/utils';


@Component({
    selector: 'compare',
    templateUrl: './compare.html',
    styleUrls: ['compare.css']

})
export class CompareComponent implements OnInit {
    currentCatId1: number
    currentCatId2: number;
    selectCardId1: number;
    selectCardId2: number;
    showDialog1 = false;
    showDialog2 = false;
    cards: CARD[] = [];
    card1: CARD;
    card2: CARD;
    cardes1: CARD[];
    cardes2: CARD[];
    ShowimageCompare1 = true;
    ShowimageCompare2 = true;

    selectedCard1ToForm: CARD;
    selectedCard2ToForm: CARD;

    @Output('AddCardToFormEvent')
    selectedCardToFormEvent = new EventEmitter();

    constructor(
        private location: Location,
        private CardService: CardService,
        private NotificationService: NotificationService
    ) {
    }


    ngOnInit(): void {
        this.GetCards();
        this.getCard1(this.selectCardId1);
        this.getCard2(this.selectCardId2);
        this.getCardType1(this.currentCatId1);
        this.getCardType2(this.currentCatId2);
        this.ShowimageCompare1;
        this.ShowimageCompare2;
    }
    groups: Array<any> = [
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
    benefit1 = [
        { currentCatId: 1, director: 'Dặm bay' },
        { currentCatId: 2, director: 'Hoàn tiền' },
        { currentCatId: 3, director: 'Điểm thưởng' },
        { currentCatId: 4, director: 'Rút tiền mặt miễn phí' },
    ];
    benefit2 = [
        { currentCatId: 1, director: 'Dặm bay' },
        { currentCatId: 2, director: 'Hoàn tiền' },
        { currentCatId: 3, director: 'Điểm thưởng' },
        { currentCatId: 4, director: 'Rút tiền mặt miễn phí' },
    ];

    //get card by id for creditdetail page
    getCard2(Id: number): void {
        this.CardService.getCard(Id).then(card => {
            this.card2 = card;
        });
    }
    getCard1(Id: number): void {
        this.CardService.getCard(Id).then(card => {
            this.card1 = card;
        });
    }
    //get all card table compare
    GetCards(): void {
        this.CardService.getAllCard().then(cards => {
            this.cards = cards;
        });
    }
    getCardType1(type: number): void {
        this.CardService.getCardType(type).then(cardes => {
            this.cardes1 = cardes;
        });
    }
    getCardType2(type: number): void {
        this.CardService.getCardType(type).then(cardes => {
            this.cardes2 = cardes;
        });
    }
    RemoveCard1(): void {
        this.card1 = null;
        this.card1 = this.card2;
        this.card2 = null;
    }
    RemoveCard2(): void {
        this.card2 = null;
    }
    UnSelectedCard1(): void
    {
        this.currentCatId1 = undefined;
        this.selectCardId1 = undefined;
    }
    UnSelectedCard2(): void {
        this.currentCatId2 = undefined;
        this.selectCardId2 = undefined;
    }
    onSelectedCard1(): void {
        this.selectedCard1ToForm = this.card1;
        console.log(this.selectedCard1ToForm);
    }
    onSelectedCard2(): void {
        this.selectedCard2ToForm = this.card2;
        console.log(this.selectedCard2ToForm);
    }

    selectCard(card: CARD) {
        this.selectedCardToFormEvent.emit(card);
    }
    moveToTopButton() {
        this.NotificationService.needToTop(true);
    }

}