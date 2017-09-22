import { Component, Inject, ViewChild, ElementRef, HostListener, Input, Directive, HostBinding } from '@angular/core';
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
    changeArrow = "keyboard_arrow_right";
    showSubmenu: boolean = false;
    url: string;
    logoUrl: string;
    @ViewChild("cardProMain") cardProMain: ElementRef;
    @ViewChild("target-move") formElement: ElementRef;
    private subscription: Subscription;
    private moveToSubs: Subscription;
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
        this.moveToSubs = this.notificationService.moveToObservable$.subscribe((res) => {
            if (res) {
                this.moveTo();
            }
        });
       

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.cardProMain.nativeElement.scrollTop = 0;
        });
        this.showSubmenu = false;
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
    public moveTo() {
        let el = this.document.getElementById("target-move");
        if (el) {
            var formPos = el.offsetTop;
            this.cardProMain.nativeElement.scrollTop = formPos;
        }
    }

    CloseDrawer(n : number): void
    {   
        if (n == 1 || n == 2) {
            document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
                document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
                this.classList.remove('is-visible');
            }, false);
        }
        else {
            document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
                document.querySelector('.mdl-layout__obfuscator').classList.add('is-visible');
                this.classList.add('is-visible');
            }, false);
        }
    }
    ChangeArrow(): void {
        if (this.changeArrow === 'keyboard_arrow_right') {
            this.changeArrow = 'keyboard_arrow_down';
                this.showSubmenu = true;
        }
        else {
            this.changeArrow = 'keyboard_arrow_right';
            this.showSubmenu = false;
        }
    }

    
}

