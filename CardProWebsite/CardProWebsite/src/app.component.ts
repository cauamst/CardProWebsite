import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { routes } from './modules/app/app.routing';
import { DOCUMENT } from "@angular/platform-browser";
import { NotificationService } from './shared/utils';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    url: string;
    logoUrl: string;
    @ViewChild("cardProMain") cardProMain: ElementRef;
    private subscription: Subscription;
    title = 'CARD PRO';
    routes = routes.filter((val) => val.path != '' && val.path != 'login' && val.path != 'products' && val.path != 'cardRegistration');

    constructor( @Inject(DOCUMENT) private document: Document, private route: ActivatedRoute,
        private router: Router, private notificationService: NotificationService
    ) {

        this.logoUrl = require("./assets/img/logo.png");
        this.url = 'https://servicestack.net/vs-templates/AngularApp';
    }
   
    ngOnInit() {
        this.subscription = this.notificationService.needToTopObservable$.subscribe((res) => {
            if (res) {
                this.scrollToTop();
            }
        });

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.cardProMain.nativeElement.scrollTop = 0;
        });
    }

    isActive(path: string): boolean {
        return this.router.url.substring(1) === path;
    }

    public scroll() {
        let scrollPosition = this.cardProMain.nativeElement.scrollTop;
        this.notificationService.notifyOther(scrollPosition);
    }

    public scrollToTop() {
        let scrollPosition = this.cardProMain.nativeElement.scrollTop;
        let id = setInterval(() => {
            if (scrollPosition <= 0) {
                clearInterval(id);
            }
            scrollPosition = scrollPosition - 10;
            this.cardProMain.nativeElement.scrollTop = scrollPosition < 0
                ? 0
                : scrollPosition;
        }, 1)
    }
}
