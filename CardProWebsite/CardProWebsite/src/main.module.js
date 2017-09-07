"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var header_1 = require("./shared/header");
var footer_1 = require("./shared/footer");
var app_module_1 = require("./modules/app/app.module");
var utils_1 = require("./shared/utils");
var toTop_1 = require("./modules/app/toTop/toTop");
var routes = [
    { path: '', redirectTo: 'main/0', pathMatch: 'full' },
];
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            utils_1.MDL,
            app_component_1.AppComponent,
            header_1.HeaderComponent,
            footer_1.FooterComponent,
            toTop_1.ToTopComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes),
            app_module_1.AppModule
        ],
        providers: [utils_1.NotificationService],
        bootstrap: [app_component_1.AppComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map