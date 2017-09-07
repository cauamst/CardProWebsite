"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var PADDING = "000000";
var MyCurrencyPipe = (function () {
    function MyCurrencyPipe() {
        // TODO comes from configuration settings
        this.DECIMAL_SEPARATOR = ".";
        this.THOUSANDS_SEPARATOR = ",";
    }
    MyCurrencyPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").toString().split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        return integer + fraction;
    };
    MyCurrencyPipe.prototype.Parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");
        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        return integer + fraction;
    };
    return MyCurrencyPipe;
}());
MyCurrencyPipe = tslib_1.__decorate([
    core_1.Pipe({ name: "myCurrency" }),
    tslib_1.__metadata("design:paramtypes", [])
], MyCurrencyPipe);
exports.MyCurrencyPipe = MyCurrencyPipe;
//# sourceMappingURL=PipeCurrency.js.map