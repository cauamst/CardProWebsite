import { Component, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from '../modules/app/app.routing';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styles: [` 

`]
})
export class HeaderComponent {
    title = 'Card Pro';
    routes = routes.filter((val) => val.path != '' && val.path != 'login' );

    constructor(private route: ActivatedRoute, private router: Router) {}

    isActive(path: string): boolean {
        return this.router.url.substring(1) === path;
    }
}