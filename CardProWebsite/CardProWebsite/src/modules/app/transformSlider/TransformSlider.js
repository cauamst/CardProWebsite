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
        this.maxAmount = 500000000;
        this.minAmount = 0;
        this.step = 1000;
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
        this.formattedAmount = String(amount);
        this.sliderInput.nativeElement.value = amount;
        this.firstCardPoints = pointTransform_service_1.PointTransformService.
            Transform(this.transformTypeId, this.firstCardId, amount, this.isOnlineExpenses);
        this.secondCardPoints = pointTransform_service_1.PointTransformService.
            Transform(this.transformTypeId, this.secondCardId, amount, this.isOnlineExpenses);
    };
    return TransformSlider;
}());
tslib_1.__decorate([
    core_2.ViewChild("sliderInput"),
    tslib_1.__metadata("design:type", core_2.ElementRef)
], TransformSlider.prototype, "sliderInput", void 0);
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
        styleUrls: ['./transformSlider.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [pointTransform_service_1.PointTransformService,
        core_1.NgZone])
], TransformSlider);
exports.TransformSlider = TransformSlider;
//# sourceMappingURL=TransformSlider.js.map