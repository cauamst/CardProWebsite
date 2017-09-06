"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Accordion = (function () {
    function Accordion() {
        this.groups = [];
    }
    Accordion.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
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
        template: "\n     <ng-content></ng-content>\n          ",
        host: {
            'class': 'panel-group'
        }
    })
], Accordion);
exports.Accordion = Accordion;
var AccordionGroup = (function () {
    function AccordionGroup(accordion) {
        this.accordion = accordion;
        this.changeArrow = "keyboard_arrow_down";
        this._isOpen = false;
        this.accordion.addGroup(this);
    }
    Object.defineProperty(AccordionGroup.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    AccordionGroup.prototype.ngOnInit = function () {
        this.isOpen = this.isGroupOpen;
    };
    AccordionGroup.prototype.toggleOpen = function (event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.accordion.closeOthers(this);
        }
    };
    AccordionGroup.prototype.ChangeArrow = function () {
        if (this.changeArrow == 'keyboard_arrow_right') {
            this.changeArrow = 'keyboard_arrow_down';
        }
        else {
            this.changeArrow = 'keyboard_arrow_right';
        }
    };
    return AccordionGroup;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], AccordionGroup.prototype, "isGroupOpen", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], AccordionGroup.prototype, "isOpen", null);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], AccordionGroup.prototype, "heading", void 0);
AccordionGroup = tslib_1.__decorate([
    core_1.Component({
        selector: 'accordion-group',
        template: "\n                <div class=\"panel panel-default\" [ngClass]=\"{'panel-open': isOpen}\">\n                  <div class=\"panel-heading\" (click)=\"toggleOpen($event);ChangeArrow()\">\n                    <h4 class=\"panel-title\">\n                        <i class=\"material-icons\">{{changeArrow}}</i> \n                      <p href tabindex=\"0\" class=\"accordion-margin\">{{heading}}</p>\n                    </h4>\n                  </div>\n                  <div class=\"panel-collapse\" [hidden]=\"!isOpen\">\n                    <div class=\"panel-body\">\n                        <ng-content></ng-content>\n                    </div>\n                  </div>\n                </div>\n          ",
        styles: ["\na {\n    color: rgba(0,0,0,.87) !important;\n    font-size: 20px;\n}\n.accordion-margin{\n    padding-left: 30px;\n}\n.panel-title{\n    text-transform: uppercase;\n    font-weight: 600;\n    line-height: 49px;\n    cursor: pointer;\n    background: #0066b3;\n    color: #fff;\n    padding-left: 15px;\n}\ni {\n    position: absolute;\n}\n"]
    }),
    tslib_1.__metadata("design:paramtypes", [Accordion])
], AccordionGroup);
exports.AccordionGroup = AccordionGroup;
//# sourceMappingURL=accordion.js.map