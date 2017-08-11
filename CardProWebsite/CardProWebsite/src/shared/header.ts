import { Component, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from '../modules/app/app.routing';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styles: [`
.card_pro_header {
    background-color: transparent;
    overflow-y: hidden;
    border-bottom: 2px solid #eee;
    min-height: 100px;
}

.card_pro_sub_row {
    height: 20px;
    padding-top: 20px;
}

.card_pro_header .card_pro_title, 
.card_pro_header .card_pro_link,  
.card_pro_header .card_pro_menu_btn {
    color: #7c8082;
}
.card_pro_header .card_pro_link.sub_menu {
    font-size: 11px;
}
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
.mdl-layout__header-row > * {
            padding-left: 24px !important;
            
        }
.mdl-layout{
    position :initial;
}
.is-visible {
    position: fixed !important;
}

`]
})
export class HeaderComponent {
    title = 'CARD PRO';
    routes = routes.filter((val) => val.path != '' && val.path != 'login');
    logoUrl = require("../assets/img/Logo_Sacombank.png")
    constructor(private route: ActivatedRoute, private router: Router) {}

    isActive(path: string): boolean {
        return this.router.url.substring(1) === path;
    }
}