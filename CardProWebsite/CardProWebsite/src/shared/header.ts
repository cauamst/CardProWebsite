import { Component, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from '../modules/app/app.routing';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styles: [`
    .mdl-layout__header {
        z-index : 1 !important;
    }
`]
})
export class HeaderComponent {
    title = 'CARD PRO';
    routes = routes.filter((val) => val.path != '' && val.path != 'login' && val.path != 'Login' && val.path != 'products' && val.path !='cardRegistration');
    logoUrl = require("../assets/img/logo-ngan-hang-sacombank.png")
    constructor(private route: ActivatedRoute, private router: Router) {}

    isActive(path: string): boolean {
        return this.router.url.substring(1) === path;
    }
}