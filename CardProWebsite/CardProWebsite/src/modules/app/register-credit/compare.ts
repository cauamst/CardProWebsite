import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Accordion, AccordionGroup } from './accordion';
import { CardService } from '../services/card.service';
import { CARDES } from '../models/Card-Data';
import { CARD, Content } from '../models/interface-card';
import { NotificationService } from '../../../shared/utils';
import { CreditComponent } from './credit';


@Component({
    selector: 'compare',
    templateUrl: './compare.html',
    styleUrls: ['compare.css']

})
export class CompareComponent implements OnInit {
    showDialog1: boolean;
    showDialog2: boolean;
    cat1Id: number;
    cat2Id: number;
    cat1HiddenId: number;
    cat2HiddenId: number;
    card1: CARD;
    card2: CARD;
    cards1: CARD[];
    cards2: CARD[];
    isAddClass1: boolean;
    isAddClass2: boolean;
    initialWidth: number;
    tempCard: CARD;

    @Output('AddCardToFormEvent')
    selectedCardToFormEvent = new EventEmitter();

    @ViewChild(NotificationService) notificationService: NotificationService;

    benefits = [
        { currentCatId: 1, director: 'Hoàn tiền' },
        { currentCatId: 2, director: 'Dặm bay' },
        { currentCatId: 3, director: 'Điểm thưởng' },
        { currentCatId: 4, director: 'Rút tiền miễn phí' },
    ]

    constructor(
        private location: Location,
        private CardService: CardService,
        private NotificationService: NotificationService
    ) {
        this.initialWidth = window.innerWidth;
    }


    ngOnInit(): void {
    }

    selectTempCard(card: CARD) {
        this.tempCard = card;
    }

    getCard(card: CARD, firstCard = false): void {
        if (firstCard) {
            this.card1 = card;
        } else {
            this.card2 = card;
        }
    }

    getCardByType(typeId: number, firstCard = false): void {
        if (typeId !== -1) {
            this.CardService.getCardType(typeId).then(cards => {
                if (firstCard) {
                    this.cards1 = cards;
                }
                else {
                    this.cards2 = cards;
                }
            });
        } else {
            if (firstCard) {
                this.cards1 = null;

            } else {
                this.cards2 = null;
            }
        }
        this.tempCard = null;

    }

    removeCard(firstCard = false): void {
        if (firstCard) {
            this.card1 = this.card2;
            this.cat1Id = this.cat2Id;
        }
        if (this.card1 && (this.cat1Id == 1 || this.cat1Id == 2)) {
            this.cat2HiddenId = this.cat1Id;
        } else if (firstCard){
            this.cat2HiddenId = null;
        }
        this.card2 = null;
        this.cat1HiddenId = null;
        this.cat1Id = null;
        this.cat2Id = null;
    }

    selectCard(card: CARD) {
        this.selectedCardToFormEvent.emit(card);
    }

    confirm(isFirstCard: boolean, isOk = false) {
        if (isFirstCard) {
            this.card1 = isOk ? this.tempCard : null;
            if (this.card1 && (this.cat1Id == 1 || this.cat1Id == 2)) {
                this.cat2HiddenId = this.cat1Id;
            }
        } else {
            this.card2 = isOk ? this.tempCard : null;
            if (this.card2 && (this.cat2Id == 1 || this.cat2Id == 2)) {
                this.cat1HiddenId = this.cat2Id;
            }
        }
        this.tempCard = null;
        this.cards1 = null;
        this.cards2 = null;
    }

    moveToTopButton(isSelect) {
        let width = window.innerWidth;
        this.initialWidth = width;
        if (width >= 839) {
            this.NotificationService.needToTop(true);
        } else if (isSelect) {
            this.NotificationService.moveTo(true);
        }
    }

    addClassbutton(n: number) {
        switch (n) {
            case 1:
                this.isAddClass1 = !this.isAddClass1;
                if (this.isAddClass1) {
                    this.isAddClass2 = false;
                }
                break;
            case 2:
                this.isAddClass2 = !this.isAddClass2;
                if (this.isAddClass2) {
                    this.isAddClass1 = false;
                }
                break;
            default:
                break;
        }
        if (this.isAddClass1) {
            this.selectCard(this.card1);
        }
        else if (this.isAddClass2) {
            this.selectCard(this.card2);
        } else {
            this.selectCard(null);
        }

    }
    
}