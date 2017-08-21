"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var jose = require("node-jose");
var CryptoUtils = (function () {
    function CryptoUtils() {
    }
    CryptoUtils.importKey = function (input, format) {
        return Observable_1.Observable.fromPromise(jose.JWK.asKey(input, format));
    };
    CryptoUtils.generateKey = function (keyType, keyLength, properties) {
        var keystore = jose.JWK.createKeyStore();
        return Observable_1.Observable.fromPromise(keystore.generate(keyType, keyLength, properties));
    };
    CryptoUtils.encrypt = function (input, key) {
        return Observable_1.Observable.fromPromise(jose.JWE.createEncrypt({ format: 'compact' }, key).
            update(input).
            final());
    };
    CryptoUtils.decryptFromKeyStore = function (input, keyStore) {
        return Observable_1.Observable.fromPromise(jose.JWE.createDecrypt(keyStore).
            decrypt(input));
    };
    CryptoUtils.toBufferFromBase64 = function (input) {
        return jose.util.base64url.decode(input);
    };
    CryptoUtils.toBase64 = function (input) {
        return jose.util.base64url.encode(input, "utf8");
    };
    CryptoUtils.toBase64FromBuffer = function (input) {
        return jose.util.base64url.encode(input);
    };
    CryptoUtils.randomKeyBuffer = function (size) {
        return jose.util.randomBytes(size);
    };
    CryptoUtils.AesGcmDecrypt = function (key, cipherText) {
        return Observable_1.Observable.fromPromise(jose.JWA.decrypt("A256GCMKW", key, cipherText));
    };
    CryptoUtils.AesGcmEncrypt = function (key, plainText) {
        return Observable_1.Observable.fromPromise(jose.JWA.encrypt("A256GCMKW", key, plainText));
    };
    return CryptoUtils;
}());
exports.CryptoUtils = CryptoUtils;
//# sourceMappingURL=cryptoUtils.js.map