import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    showDialog1: boolean;
    showDialog2: boolean;
    cat1Id: number;
    cat2Id: number;
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

    readonly benefits = [
        { currentCatId: 1, director: 'Dặm bay' },
        { currentCatId: 2, director: 'Hoàn tiền' },
        { currentCatId: 3, director: 'Điểm thưởng' },
        { currentCatId: 4, director: 'Rút tiền mặt miễn phí' },
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
            this.card2 = null;
        } else {
            this.card2 = null;
        }
    }

    selectCard(card: CARD) {
        this.selectedCardToFormEvent.emit(card);
    }

    confirm(isFirstCard: boolean, isOk = false) {
        if (isFirstCard) {
            this.card1 = isOk ? this.tempCard : null;
        } else {
            this.card2 = isOk ? this.tempCard : null;
        }
        this.cat1Id = undefined;
        this.cat2Id = undefined;
        this.tempCard = null;
        this.cards1 = null;
        this.cards2 = null;
    }

    moveToTopButton() {
        let width = window.innerWidth;
        this.initialWidth = width;
        if (width >= 839) {
            this.NotificationService.needToTop(true);
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