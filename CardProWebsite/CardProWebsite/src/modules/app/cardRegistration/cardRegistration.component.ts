import { Component, OnInit, NgZone, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../services/alert.service';
import { HandShakeService } from '../services/handshake.service';
import { CardService } from '../services/card.service';
import { appConfig } from '../../../app.config';
declare const gapi: any;

@Component({
    templateUrl: 'cardRegistration.component.html',
    styleUrls: ['cardRegistration.component.scss']
})

export class CardRegistrationComponent implements OnInit {
    heading: string;
    loading: boolean;
    model: any = {};
    constructor(
        private zone: NgZone,
        private route: ActivatedRoute,
        private router: Router,
        private handshakeService: HandShakeService,
        private cardService: CardService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.heading = "Card Registration";
        this.loading = false;
    }

    register(event) {
        event.preventDefault();
        console.log("model: " + this.model);
        this.handshakeService.handShake(this.model)
            .subscribe((encryptedData) => {
                if (encryptedData) {
                    this.cardService.registerCard(encryptedData)
                        .subscribe((res) => {
                            console.log("response: " + res);
                        })
                }
                else {
                    console.log("data encrypted failed");
                }
            });
    }
}