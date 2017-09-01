import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Accordion, AccordionGroup } from './accordion';
import { CardService } from '../services/card.service';
import { CARDES } from '../models/Card-Data';
import { CARD, Content } from '../models/interface-card';
import { PointTransform } from '../services/pointTransform.service';
@Component({
    selector: 'compare',
    templateUrl: './compare.html',
    styleUrls : ['compare.css']

})
export class CompareComponent implements OnInit  {
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

    constructor(
        private location: Location,
        private CardService: CardService,
        private pointService: PointTransform,
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
    ShowValue(value): void {
        var message = document.getElementById("message");
        message.innerHTML = value;
        console.log(this);
    }
   


    

}
