"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// This shows a different way of testing a component, see technology for a simpler one
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var testing_1 = require("@angular/core/testing");
var hello_1 = require("./hello");
var home_1 = require("./home");
describe('Home Component', function () {
    var html = '<home></home>';
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [hello_1.HelloComponent, home_1.HomeComponent, TestComponent],
            providers: [{
                    provide: router_1.ActivatedRoute,
                    useValue: {
                        data: {
                            subscribe: function (fn) { return fn({
                                title: 'Home', name: 'Angular4'
                            }); }
                        }
                    }
                }]
        });
        testing_1.TestBed.overrideComponent(TestComponent, { set: { template: html } });
    });
    it('Should render heading', function () {
        var fixture = testing_1.TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('h4').textContent).toContain('Welcome');
    });
});
var TestComponent = (function () {
    function TestComponent() {
    }
    return TestComponent;
}());
TestComponent = tslib_1.__decorate([
    core_1.Component({ selector: 'my-test', template: '' })
], TestComponent);
//# sourceMappingURL=home.spec.js.map