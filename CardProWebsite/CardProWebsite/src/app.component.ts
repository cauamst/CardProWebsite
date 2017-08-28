import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { routes } from './modules/app/app.routing';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    url: string;
    logoUrl: string;

    constructor(private route: ActivatedRoute,
        private router: Router
    ) {

        this.logoUrl = require("./assets/img/logo.png");
        this.url = 'https://servicestack.net/vs-templates/AngularApp';
    }
    title = 'CARD PRO';
    routes = routes.filter((val) => val.path != '' && val.path != 'login' && val.path != 'products' && val.path != 'cardRegistration');

    isActive(path: string): boolean {
        return this.router.url.substring(1) === path;
    }
}
