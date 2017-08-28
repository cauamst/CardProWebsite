import { Component, HostListener, Inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { appConfig } from '../../../app.config';
@Component({
    selector: 'to-top',
    templateUrl: 'toTop.html',
    styleUrls: ['toTop.css']
})
export class ToTopComponent {
    display: boolean;
    constructor( @Inject(DOCUMENT) private document: Document, private zone: NgZone) { }
    ngOnInit() {
        this.display = false;
    }

    @HostListener('window:scroll', [])
    public onWindowScroll() {
        let scrollPosition = this.document.body.scrollTop;
        
        if (scrollPosition >= appConfig.minimumDistance) {
            if (!this.display) {
                this.zone.run(() => this.display = true);
            }
        } else if (this.display) {
            this.zone.run(() => this.display = false);
        }
    }

    moveToTop() {
        window.scrollTo(0, 0);
    }
}