"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var NgbAccordion = (function () {
    function NgbAccordion() {
        this.groups = [];
    }
    NgbAccordion.prototype.addGroup = function (group) { this.groups.push(group); };
    NgbAccordion.prototype.closeOthers = function (openGroup) {
        if (!this.onlyOneOpen) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    NgbAccordion.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    return NgbAccordion;
}());
NgbAccordion = tslib_1.__decorate([
    core_1.Component({
        selector: 'ngb-accordion, [ngb-accordion]',
        template: "<ng-content></ng-content>"
    })
], NgbAccordion);
exports.NgbAccordion = NgbAccordion;
var NgbAccordionGroup = (function () {
    function NgbAccordionGroup(accordion) {
        this.accordion = accordion;
        this._isOpen = false;
        this.accordion.addGroup(this);
    }
    NgbAccordionGroup.prototype.toggleOpen = function (event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    NgbAccordionGroup.prototype.ngOnDestroy = function () { this.accordion.removeGroup(this); };
    Object.defineProperty(NgbAccordionGroup.prototype, "isOpen", {
        get: function () { return this._isOpen; },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOthers(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgbAccordionGroup;
}());
NgbAccordionGroup = tslib_1.__decorate([
    core_1.Component({
        selector: 'ngb-accordion-group, [ngb-accordion-group]',
        template: "\n<div class=\"card\">\n      <div class=\"card-header\">\n        <a href tabindex=\"0\"><span [class.text-muted]=\"isDisabled\" (click)=\"toggleOpen($event)\">{{heading}}</span></a>\n      </div>\n      <div class=\"card-block\" [hidden]=\"!isOpen\">\n        <div class=\"card-text\">\n    \t    <ng-content></ng-content>\n  \t    </div>\n      </div>\n    </div>\n"
    }),
    tslib_1.__metadata("design:paramtypes", [NgbAccordion])
], NgbAccordionGroup);
exports.NgbAccordionGroup = NgbAccordionGroup;
//# sourceMappingURL=Accordion-example.js.map