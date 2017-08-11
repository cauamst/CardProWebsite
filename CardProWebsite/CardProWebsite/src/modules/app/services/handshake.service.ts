import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HandShake } from '../models/HandShake';
import { appConfig, HandShakeConfig } from '../../../app.config';
import { CryptoUtils } from '../helpers/cryptoUtils';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HandShakeService {
    constructor(private http: Http, private crypto: CryptoUtils) { }

    handShake(data: object) {
        let ssId;
        let base64Data = CryptoUtils.toBase64(JSON.stringify(data));
        console.log("data: " + JSON.stringify(data));

        let jwk = {
            kty: 'oct',
            alg: 'A256GCM',
            kid: '4cA7CcxinDmcgiCHokULDrN1ktyTo2wl',
            use: 'enc',
            k: CryptoUtils.toBase64("4cA7CcxinDmcgiCHokULDrN1ktyTo2wl"),
            length: 256
        };

        return this.doHandShake()
            .flatMap((obj) => {
                ssId = obj.key;
                return CryptoUtils
                    .importKey(JSON.stringify(jwk), "json");
            })
            .flatMap((jwk) => {
                return CryptoUtils
                    .encrypt(JSON.stringify(data), jwk)
            })
            .map((result) => {
                console.log("encryptedData: " + JSON.stringify(result));
                return { "ssId": ssId, "data": result };
            });
    }

    private doHandShake() {
        let sharedSecret = "4cA7CcxinDmcgiCHokULDrN1ktyTo2wl";
        let sharedSecretBase64 = CryptoUtils.toBase64(sharedSecret);
        let jwk = {
            kty: 'oct',
            alg: 'dir',
            kid: '4cA7CcxinDmcgiCHokULDrN1ktyTo2wl',
            k: sharedSecretBase64,
            length: 256
        };
        let pageJWK: any;

        return CryptoUtils
            .importKey(JSON.stringify(jwk), "json")
            .flatMap((jwk) => {
                pageJWK = jwk;
                return CryptoUtils.importKey(HandShakeConfig.publicKey, "pem");
            })
            .flatMap((rsaKey) => {
                let sharedSecretBuffer = CryptoUtils.toBufferFromBase64(sharedSecretBase64);
                return CryptoUtils.encrypt(sharedSecretBuffer, rsaKey);
            })
            .flatMap((encryptedContent) => {
                let handShakeDto = new HandShake();
                handShakeDto.Key = encryptedContent;

                return this.http.post(HandShakeConfig.handshakeUrl, handShakeDto)
                    .map((response: Response) => response.json())
                    .flatMap((dto: HandShake) => {
                        return this.doChallenge(dto, pageJWK, sharedSecret)
                    })
            });
    }

    private doChallenge(dto: HandShake, secretKey, pageKey) {
        return CryptoUtils
            .decryptFromKeyStore(dto.Challenge, secretKey)
            .map((result) => {
                let decryptedKey = result.plaintext.toString();
                if (decryptedKey !== pageKey) {
                    throw new Error("Handshake failed");
                }
                return { "key": dto.Key, "pageJWK": secretKey }
            });
    }
}