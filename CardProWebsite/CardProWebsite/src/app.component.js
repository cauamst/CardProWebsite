"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.logoUrl = require("./assets/img/logo.png");
        this.url = 'https://servicestack.net/vs-templates/AngularApp';
    }
    return AppComponent;
}());
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'app.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map