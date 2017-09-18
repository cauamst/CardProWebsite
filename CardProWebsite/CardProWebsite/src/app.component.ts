import { Component, Inject, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
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
    routes = routes.filter((val) => val.path != '' && val.path != 'login' && val.path != 'Login' && val.path != 'products' && val.path != 'cardRegistration');

    constructor( @Inject(DOCUMENT) private document: Document, private route: ActivatedRoute,
        private router: Router, private notificationService: NotificationService
    ) {
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
            scrollPosition = scrollPosition - 20;
            this.cardProMain.nativeElement.scrollTop = scrollPosition < 0
                ? 0
                : scrollPosition;
            if (scrollPosition <= 0) {
                clearInterval(id);
            }
        }, 1)
    }
    CloseDrawer()
    {
        document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
          document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
          this.classList.remove('is-visible');
        }, false);
    }
    
}
