"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var testing_2 = require("@angular/router/testing");
var header_1 = require("./shared/header");
var footer_1 = require("./shared/footer");
var app_component_1 = require("./app.component");
describe('App', function () {
    // provide our implementations or mocks to the dependency injector
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule],
            declarations: [header_1.HeaderComponent, footer_1.FooterComponent, app_component_1.AppComponent],
            providers: [router_1.provideRoutes([])]
        });
    });
    it('Should have a URL', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        expect(fixture.debugElement.componentInstance.url).toEqual('https://servicestack.net/vs-templates/AngularApp');
    });
});
//# sourceMappingURL=app.component.spec.js.map