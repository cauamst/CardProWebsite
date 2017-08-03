import { Component, NgZone, HostListener, Inject } from '@angular/core';
import { Card } from '../models/Card';
import { CardService } from '../services/card.service';
import { DOCUMENT } from '@angular/platform-browser';
import { appConfig } from '../../../app.config';

@Component({
    selector: 'products', 
    templateUrl:'products.html',
    styleUrls: ['products.scss']
})

export class ProductsComponent {
    sampleUrl: string;
    heading: string;
    cards: Card[];
    private total: number;
    private currentIndex: number;
    private timer;
    private readonly numberOfResults: number = appConfig.numberOfResults;

    constructor(private cardService: CardService, private zone: NgZone,
        @Inject(DOCUMENT) private document: Document) {
        this.heading = "Products";
        this.currentIndex = 0;
        this.cards = [];
        this.sampleUrl = require("../../../assets/img/credit-card-sample.png");
    }

    ngOnInit() {
        this.loadCards();
    }

    private loadCards() {
        this.cardService
            .getCards(this.currentIndex, this.numberOfResults)
            .subscribe((dto) => {
                this.zone.run(() => {
                    dto.Results.forEach((result) => {
                        this.cards.push(result);
                    });
                    this.total = dto.Total;
                    this.currentIndex += this.numberOfResults;
                });
        });
    }

    @HostListener('window:scroll', [])
    public onWindowScroll() {
        if (this.timer) {
            window.clearTimeout(this.timer);
        }
        this.timer = window.setTimeout(() => {
            let positionToTop = this.document.body.scrollTop;
            console.log(positionToTop);
            if (positionToTop >= appConfig.minimumHeight && this.currentIndex < this.total) {
                this.loadCards();
            }
        }, appConfig.lazyLoadDelayTime);
    }
}