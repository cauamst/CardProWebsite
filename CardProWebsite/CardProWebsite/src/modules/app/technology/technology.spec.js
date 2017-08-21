"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var technology_1 = require("./technology");
describe('Technology Component', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [technology_1.TechnologyComponent]
        });
    });
    it('Should render heading', function () {
        var fixture = testing_1.TestBed.createComponent(technology_1.TechnologyComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('h4').textContent).toContain('Technology');
    });
});
//# sourceMappingURL=technology.spec.js.map