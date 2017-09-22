import { Component, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from '../modules/app/app.routing';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styles: [`
    .active-link  {
        border-bottom: 4px solid #3f51b5 !important;
    }
    .nav-menu{
    border-bottom: 4px solid #3f51b5 !important;
    }
    a {
    color : #757575 !important;    
    }
    
    .active-sublink{
        background-color: #1bb1db;
        color: #fff !important;
    }
    .card-submenu{
    padding : 0 0 !important;     
    }
    .none-bottom{
        text-decoration : none;
    }
`]
})
export class HeaderComponent {
    object: boolean = false;

    title = 'Sacombank-Card';
    routes = routes.filter((val) => val.path != '' && val.path != 'login' && val.path != 'Login' && val.path != 'products' && val.path !='cardRegistration');
    logoUrl = require("../assets/img/logo-ngan-hang-sacombank.png")
    constructor(private route: ActivatedRoute, private router: Router) {}

    isActive(path: string): boolean {
        return this.router.url.substring(1) === path;
    }

    ActiveMenu() {
        if (this.object) {
            this.object = true;
        }
        this.object = false;
    }
}