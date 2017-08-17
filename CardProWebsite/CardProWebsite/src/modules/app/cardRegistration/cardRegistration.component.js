"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var alert_service_1 = require("../services/alert.service");
var handshake_service_1 = require("../services/handshake.service");
var card_service_1 = require("../services/card.service");
var CardRegistrationComponent = (function () {
    function CardRegistrationComponent(zone, route, router, handshakeService, cardService, alertService) {
        this.zone = zone;
        this.route = route;
        this.router = router;
        this.handshakeService = handshakeService;
        this.cardService = cardService;
        this.alertService = alertService;
        this.model = {};
        this.success = false;
    }
    CardRegistrationComponent.prototype.ngOnInit = function () {
        this.heading = "Card Registration";
        this.loading = false;
    };
    CardRegistrationComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        this.handshakeService.handShake(this.model)
            .subscribe(function (obj) {
            if (obj) {
                _this.cardService.registerCard(obj.ssId, obj.data)
                    .subscribe(function (res) {
                    _this.zone.run(function () {
                        _this.responseJson = JSON.stringify(res);
                        _this.success = true;
                    });
                });
            }
            else {
                console.log("data encrypted failed");
            }
        });
    };
    return CardRegistrationComponent;
}());
CardRegistrationComponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: 'cardRegistration.component.html',
        styleUrls: ['cardRegistration.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.NgZone,
        router_1.ActivatedRoute,
        router_1.Router,
        handshake_service_1.HandShakeService,
        card_service_1.CardService,
        alert_service_1.AlertService])
], CardRegistrationComponent);
exports.CardRegistrationComponent = CardRegistrationComponent;
//# sourceMappingURL=cardRegistration.component.js.map