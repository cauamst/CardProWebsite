"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var DtoWrapper_1 = require("../models/DtoWrapper");
var app_config_1 = require("../../../app.config");
var Card_Data_1 = require("../models/Card-Data");
var PointsTransform = (function () {
    function PointsTransform(http) {
        this.http = http;
    }
    PointsTransform.prototype.getCards = function (index, numberOfResults) {
        var dtoWrapper = new DtoWrapper_1.DtoWrapper();
        dtoWrapper.Index = index;
        dtoWrapper.NumberOfResults = numberOfResults;
        console.log(dtoWrapper);
        return this.http.post(app_config_1.appConfig.getCardsUrl, dtoWrapper)
            .map(function (response) { return response.json(); })
            .map(function (dto) { return dto; });
    };
    PointsTransform.prototype.registerCard = function (ssId, data) {
        var headers = new http_1.Headers();
        headers.append('X-ss-id', ssId);
        var opts = { headers: headers };
        return this.http.post(app_config_1.appConfig.registerCard, { Data: data }, opts)
            .map(function (response) { return response.json(); });
    };
    PointsTransform.prototype.getAllCard = function () {
        return Promise.resolve(Card_Data_1.CARDES);
    };
    PointsTransform.prototype.getCard = function (Id) {
        return this.getAllCard().then(function (card) { return card.find(function (CARD) { return CARD.Id === Id; }); });
    };
    PointsTransform.prototype.getCardType = function (type) {
        return this.getAllCard().then(function (cards) { return cards.filter(function (card) { return card.Type === type; }); });
    };
    //serviceContent
    PointsTransform.prototype.getAllContent = function () {
        return Promise.resolve(Card_Data_1.CONTENT);
    };
    PointsTransform.prototype.getTypeContent = function (contentType) {
        return this.getAllContent().then(function (Contents) { return Contents.filter(function (Content) { return Content.ContentType === contentType; }); });
    };
    return PointsTransform;
}());
PointsTransform = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.Http])
], PointsTransform);
exports.PointsTransform = PointsTransform;
//# sourceMappingURL=pointsTransform.service.js.map