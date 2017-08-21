"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_1 = require("./home/home");
var products_1 = require("./products/products");
var cardRegistration_component_1 = require("./cardRegistration/cardRegistration.component");
var login_component_1 = require("./login/login.component");
var auth_guard_1 = require("./guard/auth.guard");
var credit_1 = require("./register-credit/credit");
var login_1 = require("./_login/login");
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: home_1.HomeComponent, data: { title: 'Home', name: 'Angular4' } },
    { path: 'products', component: products_1.ProductsComponent, data: { title: 'Products' }, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'cardRegistration', component: cardRegistration_component_1.CardRegistrationComponent, data: { title: 'Card Registration' }, canActivate: [auth_guard_1.AuthGuard] },
    {
        path: 'register', component: credit_1.CreditComponent, data: { title: 'Credit' },
    },
    {
        path: 'Login', component: login_1.LoginLayoutComponent, data: { title: 'Login' }
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', redirectTo: 'home' },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map