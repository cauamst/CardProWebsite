"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HandShake_1 = require("../models/HandShake");
var app_config_1 = require("../../../app.config");
var cryptoUtils_1 = require("../helpers/cryptoUtils");
var HandShakeService = (function () {
    function HandShakeService(http, crypto) {
        this.http = http;
        this.crypto = crypto;
    }
    HandShakeService.prototype.handShake = function (data) {
        var ssId;
        var base64Data = cryptoUtils_1.CryptoUtils.toBase64(JSON.stringify(data));
        console.log("data: " + JSON.stringify(data));
        var jwk = {
            kty: 'oct',
            alg: 'A256GCM',
            kid: '4cA7CcxinDmcgiCHokULDrN1ktyTo2wl',
            use: 'enc',
            k: cryptoUtils_1.CryptoUtils.toBase64("4cA7CcxinDmcgiCHokULDrN1ktyTo2wl"),
            length: 256
        };
        return this.doHandShake()
            .flatMap(function (obj) {
            ssId = obj.key;
            return cryptoUtils_1.CryptoUtils
                .importKey(JSON.stringify(jwk), "json");
        })
            .flatMap(function (jwk) {
            return cryptoUtils_1.CryptoUtils
                .encrypt(JSON.stringify(data), jwk);
        })
            .map(function (result) {
            console.log("encryptedData: " + JSON.stringify(result));
            return { "ssId": ssId, "data": result };
        });
    };
    HandShakeService.prototype.doHandShake = function () {
        var _this = this;
        var sharedSecret = "4cA7CcxinDmcgiCHokULDrN1ktyTo2wl";
        var sharedSecretBase64 = cryptoUtils_1.CryptoUtils.toBase64(sharedSecret);
        var jwk = {
            kty: 'oct',
            alg: 'dir',
            kid: '4cA7CcxinDmcgiCHokULDrN1ktyTo2wl',
            k: sharedSecretBase64,
            length: 256
        };
        var pageJWK;
        return cryptoUtils_1.CryptoUtils
            .importKey(JSON.stringify(jwk), "json")
            .flatMap(function (jwk) {
            pageJWK = jwk;
            return cryptoUtils_1.CryptoUtils.importKey(app_config_1.HandShakeConfig.publicKey, "pem");
        })
            .flatMap(function (rsaKey) {
            var sharedSecretBuffer = cryptoUtils_1.CryptoUtils.toBufferFromBase64(sharedSecretBase64);
            return cryptoUtils_1.CryptoUtils.encrypt(sharedSecretBuffer, rsaKey);
        })
            .flatMap(function (encryptedContent) {
            var handShakeDto = new HandShake_1.HandShake();
            handShakeDto.Key = encryptedContent;
            return _this.http.post(app_config_1.HandShakeConfig.handshakeUrl, handShakeDto)
                .map(function (response) { return response.json(); })
                .flatMap(function (dto) {
                return _this.doChallenge(dto, pageJWK, sharedSecret);
            });
        });
    };
    HandShakeService.prototype.doChallenge = function (dto, secretKey, pageKey) {
        return cryptoUtils_1.CryptoUtils
            .decryptFromKeyStore(dto.Challenge, secretKey)
            .map(function (result) {
            var decryptedKey = result.plaintext.toString();
            if (decryptedKey !== pageKey) {
                throw new Error("Handshake failed");
            }
            return { "key": dto.Key, "pageJWK": secretKey };
        });
    };
    return HandShakeService;
}());
HandShakeService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.Http, cryptoUtils_1.CryptoUtils])
], HandShakeService);
exports.HandShakeService = HandShakeService;
//# sourceMappingURL=handshake.service.js.map