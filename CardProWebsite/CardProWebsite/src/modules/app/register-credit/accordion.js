"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Accordion = (function () {
    function Accordion() {
        this.groups = [];
    }
    Accordion.prototype.closeOthers = function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    return Accordion;
}());
Accordion = tslib_1.__decorate([
    core_1.Component({
        selector: 'accordion',
        template: "\n  <ng-content></ng-content>\n          ",
        host: {
            'class': 'panel-group'
        }
    })
], Accordion);
exports.Accordion = Accordion;
var AccordionGroup = (function () {
    function AccordionGroup(accordion) {
        this.accordion = accordion;
        this._isOpen = false;
    }
    Object.defineProperty(AccordionGroup.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOthers(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionGroup.prototype.ngOnDestroy = function () {
    };
    AccordionGroup.prototype.toggleOpen = function (event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    };
    return AccordionGroup;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], AccordionGroup.prototype, "heading", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], AccordionGroup.prototype, "isOpen", null);
AccordionGroup = tslib_1.__decorate([
    core_1.Component({
        selector: 'accordion-group',
        template: "\n                <div class=\"panel panel-default\" [ngClass]=\"{'panel-open': isOpen}\">\n                  <div class=\"panel-heading\" (click)=\"toggleOpen($event)\">\n                    <h4 class=\"panel-title\">\n                      <a href tabindex=\"0\"><span>{{heading}}</span></a>\n                    </h4>\n                  </div>\n                  <div class=\"panel-collapse\" [hidden]=\"!isOpen\">\n                    <div class=\"panel-body\">\n                        <ng-content></ng-content>\n                    </div>\n                  </div>\n                </div>\n          ",
        styles: ["\n.panel-heading{\n    text-transform: uppercase;\n    font-weight: 600;\n    background: #ececec;\n    line-height: 49px;\n    padding-left: 15px;\n    cursor: pointer;\n}\n"]
    }),
    tslib_1.__metadata("design:paramtypes", [Accordion])
], AccordionGroup);
exports.AccordionGroup = AccordionGroup;
//# sourceMappingURL=accordion.js.map