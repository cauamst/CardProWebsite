import { Component, HostListener, Inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { appConfig } from '../../../app.config';
import { NotificationService } from '../../../shared/utils';
import { Subscription } from "rxjs/Subscription";
@Component({
    selector: 'to-top',
    templateUrl: 'toTop.html',
    styleUrls: ['toTop.css']
})
export class ToTopComponent {
    display: boolean;
    private subscription: Subscription;

    constructor( @Inject(DOCUMENT) private document: Document, private zone: NgZone,
        private notificationService: NotificationService) { }

    ngOnInit() {
        this.display = false;
        this.subscription = this.notificationService.notifyObservable$.subscribe((res) => {
            this.handleScroll(res);
        });
    }

    public handleScroll(scrollPosition) {
        if (scrollPosition >= appConfig.minimumDistance) {
            if (!this.display) {
                this.zone.run(() => this.display = true);
            }
        } else if (this.display) {
            this.zone.run(() => this.display = false);
        }
    }

    moveToTop() {
        this.notificationService.needToTop(true);
        this.handleScroll(0);
    }
}