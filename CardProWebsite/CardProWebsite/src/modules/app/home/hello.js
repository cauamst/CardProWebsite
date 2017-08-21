"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var utils_1 = require("../../../shared/utils");
var dtos_1 = require("../../../dtos");
var HelloComponent = (function () {
    function HelloComponent(cdref) {
        this.cdref = cdref;
    }
    HelloComponent.prototype.ngOnInit = function () {
        this.nameChanged(this.name);
    };
    HelloComponent.prototype.nameChanged = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!name) return [3 /*break*/, 2];
                        req = new dtos_1.Hello();
                        req.name = name;
                        return [4 /*yield*/, utils_1.client.get(req)];
                    case 1:
                        r = _a.sent();
                        this.result = r.result;
                        return [3 /*break*/, 3];
                    case 2:
                        this.result = '';
                        _a.label = 3;
                    case 3:
                        this.cdref.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HelloComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], HelloComponent.prototype, "name", void 0);
HelloComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'hello',
        templateUrl: 'hello.html',
        styleUrls: ['hello.css']
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], HelloComponent);
exports.HelloComponent = HelloComponent;
//# sourceMappingURL=hello.js.map