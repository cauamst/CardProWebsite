import { Component, NgZone } from '@angular/core';
import { Card } from '../models/Card';
import { CardService } from '../services/card.service';
@Component({
    selector: 'products', 
    templateUrl:'products.html',
    styleUrls: ['products.scss']
})
export class ProductsComponent {
    heading: string;
    cards: Card[];
    constructor(private cardService: CardService, private zone: NgZone) {
        this.heading = "Products";
    }
    ngOnInit() {
        this.loadCards();
    }

    private loadCards() {
        this.cardService.getCards(0, 5).subscribe(cards => {
            console.log(cards);
            this.zone.run(() => this.cards = cards);
        });
    }

}