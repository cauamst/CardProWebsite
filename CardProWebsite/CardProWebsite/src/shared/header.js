"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routing_1 = require("../modules/app/app.routing");
var HeaderComponent = (function () {
    function HeaderComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'CARD PRO';
        this.routes = app_routing_1.routes.filter(function (val) { return val.path != '' && val.path != 'login'; });
        this.logoUrl = require("../assets/img/Logo_Sacombank.png");
    }
    HeaderComponent.prototype.isActive = function (path) {
        return this.router.url.substring(1) === path;
    };
    return HeaderComponent;
}());
HeaderComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './header.html',
        styles: ["\n.card_pro_header {\n    background-color: transparent;\n    border-bottom: 2px solid #eee;\n    min-height: 100px;\n}\n\n.card_pro_sub_row {\n    height: 20px;\n    padding-top: 20px;\n}\n.mdl-layout{\n    overflow-y: hidden; \n    overflow-x: hidden;\n}\n\n.card_pro_header .card_pro_title, \n.card_pro_header .card_pro_link,  \n.card_pro_header .card_pro_menu_btn {\n    color: #7c8082;\n}\n.card_pro_header .card_pro_link.sub_menu {\n    font-size: 11px;\n}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0px 65px 0px 80px;\n    overflow: hidden;\n    background-color: #333;\n}\n\nli {\n    float: left;\n    border-right:1px solid #bbb;\n}\n\nli:last-child {\n    border-right: none;\n}\n\nli a {\n    display: inline;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover:not(.active) {\n    background-color: #111;\n}\n\n.active {\n    background-color: #4CAF50;\n}\n.mdl-layout__header-row > * {\n            padding-left: 24px !important;\n            \n        }\n\n.small-menu, .mdl-layout__obfuscator {\n   position: fixed; \n}\n"]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map