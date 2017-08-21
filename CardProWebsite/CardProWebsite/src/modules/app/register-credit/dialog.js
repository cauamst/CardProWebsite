"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var DialogComponent = (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new core_1.EventEmitter();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return DialogComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], DialogComponent.prototype, "closable", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], DialogComponent.prototype, "visible", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], DialogComponent.prototype, "visibleChange", void 0);
DialogComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-dialog',
        templateUrl: './dialog.html',
        styleUrls: ['./dialog.css'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DialogComponent);
exports.DialogComponent = DialogComponent;
//# sourceMappingURL=dialog.js.map