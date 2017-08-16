"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var home_1 = require("./home/home");
var hello_1 = require("./home/hello");
var cardRegistration_component_1 = require("./cardRegistration/cardRegistration.component");
var products_1 = require("./products/products");
var technology_1 = require("./technology/technology");
var auth_guard_1 = require("./guard/auth.guard");
var alert_service_1 = require("./services/alert.service");
var authentication_service_1 = require("./services/authentication.service");
var card_service_1 = require("./services/card.service");
var handshake_service_1 = require("./services/handshake.service");
var login_component_1 = require("./login/login.component");
var cardProHttp_1 = require("./helpers/cardProHttp");
var cryptoUtils_1 = require("./helpers/cryptoUtils");
var carousel_1 = require("./home/carousel");
var slide_1 = require("./home/slide");
var credit_1 = require("./register-credit/credit");
var carousel_2 = require("./carousel/carousel");
var login_1 = require("./_login/login");
var platform_browser_1 = require("@angular/platform-browser");
var credit_detail_1 = require("./register-credit/credit-detail");
var tab_1 = require("./register-credit/tab");
var tabs_1 = require("./register-credit/tabs");
var dialog_1 = require("./register-credit/dialog");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            home_1.HomeComponent,
            hello_1.HelloComponent,
            products_1.ProductsComponent,
            technology_1.TechnologyComponent,
            login_component_1.LoginComponent,
            cardRegistration_component_1.CardRegistrationComponent,
            carousel_1.Carousel,
            slide_1.Slide,
            credit_1.CreditComponent,
            carousel_2.CarouselComponent,
            login_1.LoginLayoutComponent,
            credit_detail_1.CreditDetailComponent,
            tab_1.TabComponent,
            tabs_1.TabsComponent,
            dialog_1.DialogComponent
        ],
        providers: [
            auth_guard_1.AuthGuard,
            alert_service_1.AlertService,
            authentication_service_1.AuthenticationService,
            handshake_service_1.HandShakeService,
            card_service_1.CardService,
            cardProHttp_1.CardProHttpProvider,
            cryptoUtils_1.CryptoUtils
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map