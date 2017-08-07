import { Component, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from '../modules/app/app.routing';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styles: [` 
ul {
    list-style-type: none;
    margin: 0;
    padding: 0px 65px 0px 80px;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
    border-right:1px solid #bbb;
}

li:last-child {
    border-right: none;
}

li a {
    display: inline;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}

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