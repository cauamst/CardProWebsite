"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var pointTransform_service_1 = require("../services/pointTransform.service");
var core_2 = require("@angular/core");
var TransformSlider = (function () {
    function TransformSlider(pointTransformService, zone) {
        this.pointTransformService = pointTransformService;
        this.zone = zone;
        this.amount = 0;
        this.maxAmount = 100000000;
        this.minAmount = 0;
        this.step = 1000;
        this.firstCardPoints = 0;
        this.secondCardPoints = 0;
        this.formattedAmount = "0";
    }
    TransformSlider.prototype.ngOnInit = function () {
        switch (this.transformTypeId) {
            case 1:
                this.transformLabel = "Đổi điểm thưởng (Điểm)";
                this.transformTitle = "Số tiền chi tiêu/tháng (VNĐ)";
                break;
            case 2:
                if (this.isOnlineExpenses == true) {
                    this.transformLabel = "Số tiền được hoàn khi chi tiêu online (VNĐ)";
                    this.transformTitle = "Số tiền chi tiêu oniline, Chi tiêu ở nước ngoài/ tháng (VNĐ)";
                }
                else {
                    this.transformLabel = "Số tiền được hoàn khi chi tiêu trong nước (VNĐ)";
                    this.transformTitle = "Số tiền chi tiêu/tháng (VNĐ)";
                }
                break;
            case 3:
                this.transformLabel = "Dặm bay (Dặm)";
                this.transformTitle = "Số tiền chi tiếu/tháng (VNĐ)";
                break;
        }
    };
    TransformSlider.prototype.transform = function (amount) {
        this.onInputChange(String(amount), true);
        this.sliderInput.nativeElement.value = amount;
        this.firstCardPoints = pointTransform_service_1.PointTransformService.
            Transform(this.transformTypeId, this.firstCardId, amount, this.isOnlineExpenses);
        this.secondCardPoints = pointTransform_service_1.PointTransformService.
            Transform(this.transformTypeId, this.secondCardId, amount, this.isOnlineExpenses);
    };
    TransformSlider.prototype.onInputChange = function (event, updateFromSlider) {
        if (updateFromSlider === void 0) { updateFromSlider = false; }
        var newVal = event.replace(/\D/g, '');
        if (newVal.length >= 9) {
            newVal = String(this.maxAmount);
        }
        var rawValue = newVal;
        if (newVal.length == 0) {
            newVal = '';
        }
        var L = newVal.length;
        if (L > 3) {
            var firstColonPosition = L % 3;
            var matchingPattern = "";
            var replacePattern = "";
            var nbOfGroups = Math.floor(L / 3) + (firstColonPosition != 0 ? 1 : 0);
            for (var i = 1; i <= nbOfGroups; i++) {
                var nbOfDigits = (i == 1 && firstColonPosition != 0)
                    ? firstColonPosition
                    : 3;
                var colon = i != nbOfGroups
                    ? ","
                    : "";
                matchingPattern += "(\\d{0," + nbOfDigits + "})";
                replacePattern += "$" + i + colon;
            }
            newVal = newVal.replace(new RegExp("^" + matchingPattern), replacePattern);
        }
        // set the new value
        this.formattedAmount = newVal;
        this.textInput.nativeElement.value = newVal;
        this.amount = Number(rawValue);
        if (!updateFromSlider) {
            this.transform(this.amount);
        }
    };
    return TransformSlider;
}());
tslib_1.__decorate([
    core_2.ViewChild("sliderInput"),
    tslib_1.__metadata("design:type", core_2.ElementRef)
], TransformSlider.prototype, "sliderInput", void 0);
tslib_1.__decorate([
    core_2.ViewChild("textInput"),
    tslib_1.__metadata("design:type", core_2.ElementRef)
], TransformSlider.prototype, "textInput", void 0);
tslib_1.__decorate([
    core_2.Input(),
    tslib_1.__metadata("design:type", Number)
], TransformSlider.prototype, "transformTypeId", void 0);
tslib_1.__decorate([
    core_2.Input(),
    tslib_1.__metadata("design:type", Boolean)
], TransformSlider.prototype, "isOnlineExpenses", void 0);
tslib_1.__decorate([
    core_2.Input(),
    tslib_1.__metadata("design:type", Number)
], TransformSlider.prototype, "firstCardId", void 0);
tslib_1.__decorate([
    core_2.Input(),
    tslib_1.__metadata("design:type", Number)
], TransformSlider.prototype, "secondCardId", void 0);
TransformSlider = tslib_1.__decorate([
    core_1.Component({
        selector: 'transform-slider',
        templateUrl: './transformSlider.html',
        styleUrls: ['./transformSlider.scss']
    }),
    core_1.Directive({
        host: {
            '(ngModelChange)': 'onInputChange($event)',
            '(keydown.backspace)': 'onInputChange($event.target.value, true)'
        }
    }),
    tslib_1.__metadata("design:paramtypes", [pointTransform_service_1.PointTransformService,
        core_1.NgZone])
], TransformSlider);
exports.TransformSlider = TransformSlider;
//# sourceMappingURL=TransformSlider.js.map