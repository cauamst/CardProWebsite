"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var PointTransformService = (function () {
    function PointTransformService() {
    }
    PointTransformService.AwardedPoints = function (cardId, amount) {
        switch (cardId) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 12:
            case 13:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            default:
                return 0;
        }
    };
    PointTransformService.Refund = function (cardId, amount, isOnlineExpenses) {
        if (isOnlineExpenses === void 0) { isOnlineExpenses = false; }
        var coEfficient = 0;
        var minAmount = 0;
        var constAmount = 100000;
        switch (cardId) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                coEfficient = 1;
                minAmount = 1170;
                break;
            case 7:
            case 8:
            case 9:
                coEfficient = 0.95;
                minAmount = 1170;
                break;
            case 10:
            case 12:
            case 13:
                coEfficient = 0.85;
                minAmount = 1170;
                break;
            case 11:
                return Math.floor(((amount * 100) / 20000)) * this.monthsInYear;
            case 14:
                if (isOnlineExpenses) {
                    if (amount > 2000000) {
                        var total_1 = amount * 0.05;
                        return total_1 >= 300000
                            ? 300000 * this.monthsInYear
                            : Math.floor(total_1);
                    }
                    else {
                        return Math.floor(amount * 0.003) * this.monthsInYear;
                    }
                }
                else {
                    var total_2 = amount * 0.003;
                    return total_2 >= 300000
                        ? 300000 * this.monthsInYear
                        : Math.floor(total_2) * this.monthsInYear;
                }
            default:
                return 0;
        }
        var total = amount / (this.factor * coEfficient * minAmount);
        return (amount / (this.factor * coEfficient)) >= minAmount
            ? Math.floor(total) * constAmount * this.monthsInYear
            : 0;
    };
    PointTransformService.FlightMiles = function (cardId, amount) {
        var coEfficient = 0;
        var minAmount = 0;
        var constAmount = 10;
        switch (cardId) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                coEfficient = 1;
                minAmount = 12;
                break;
            case 7:
            case 8:
            case 9:
                coEfficient = 0.95;
                minAmount = 12;
                break;
            case 10:
            case 12:
            case 13:
                coEfficient = 0.85;
                minAmount = 12;
            case 11:
                return Math.floor((amount / 20000)) * this.monthsInYear;
            default:
                return 0;
        }
        var total = amount / (this.factor * coEfficient * minAmount);
        return (amount / (this.factor * coEfficient)) >= minAmount
            ? Math.floor(total) * constAmount * this.monthsInYear
            : 0;
    };
    PointTransformService.Transform = function (type, cardId, amount, isOnlineExpenses) {
        if (isOnlineExpenses === void 0) { isOnlineExpenses = false; }
        switch (type) {
            case 1:
                return this.AwardedPoints(cardId, amount);
            case 2:
                return this.Refund(cardId, amount, isOnlineExpenses);
            case 3:
                return this.FlightMiles(cardId, amount);
            default:
                return 0;
        }
    };
    return PointTransformService;
}());
PointTransformService.factor = 33000;
PointTransformService.monthsInYear = 12;
PointTransformService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], PointTransformService);
exports.PointTransformService = PointTransformService;
//# sourceMappingURL=pointTransform.service.js.map