import { Component, HostListener, Inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { appConfig } from '../../../app.config';
import { NotificationService } from '../../../shared/utils';
import { Subscription } from "rxjs/Subscription";
import { Router, NavigationEnd } from "@angular/router";
@Component({
    selector: 'to-top',
    templateUrl: 'toTop.html',
    styleUrls: ['toTop.css']
})
export class ToTopComponent {
    display: boolean;
    private subscription: Subscription;

    constructor( @Inject(DOCUMENT) private document: Document, private router: Router, private zone: NgZone,
        private notificationService: NotificationService) { }

    ngOnInit() {
        this.display = false;
        this.subscription = this.notificationService.notifyObservable$.subscribe((res) => {
            this.handleScroll(res);
        });
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.zone.run(() => this.display = false);
        });
    }

    public handleScroll(scrollPosition) {
        if (scrollPosition >= appConfig.minimumDistance) {
                this.zone.run(() => this.display = true);

        } else {
            this.zone.run(() => this.display = false);
        }
    }

    moveToTop() {
        this.notificationService.needToTop(true);
        this.handleScroll(0);
    }
}