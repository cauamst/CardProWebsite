import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HandShake } from '../models/HandShake';
import { appConfig, HandShakeConfig } from '../../../app.config';
import { CryptoUtils } from '../helpers/cryptoUtils';

@Injectable()
export class HandShakeService {
    constructor(private http: Http, private crypto: CryptoUtils) { }

    private doHandShake() {
        let pageKey: string;
        let base64PageKey: string;
        let encryptedPageKey: string;
        let superKey: string;

        let props = {
            alg: 'A256GCM',
            use: 'enc'
        };
        CryptoUtils
            .generateKey("EC", 256, props)
            .subscribe((aesKey) => {
                var serializedKey = JSON.stringify(aesKey);
                var base64Key : string = CryptoUtils.toBase64(serializedKey);

                console.log("aesKey: " + aesKey);
                console.log("serializedAesKey: " + serializedKey);
                console.log("base64AesKey: " + base64Key);

                pageKey = aesKey;
                base64PageKey = base64Key;
            });

        CryptoUtils
            .importKey(HandShakeConfig.publicKey)
            .subscribe((rsaKey) => {
                console.log("superKey: " + rsaKey);
                superKey = rsaKey
            });

        CryptoUtils
            .encrypt(base64PageKey, superKey)
            .subscribe((encryptedContent) => {
                console.log("jwe encrypted key:" + encryptedContent);
                encryptedPageKey = encryptedContent;
            });

        let handShakeDto = new HandShake();
        handShakeDto.Key = encryptedPageKey;

        return this.http.post(HandShakeConfig.handshakeUrl, handShakeDto)
            .map((response: Response) => response.json())
            .map((dto: HandShake) =>
                this.doChallenge(dto.Challenge, pageKey, base64PageKey)
                    ? { "key": dto.Key, "aesKey": pageKey }
                    : null);
    }

    private doChallenge(challenge, secretKey, base64PageKey): boolean {
        console.log("challenge: " + challenge);
        console.log("secret: " + secretKey);
        let key = CryptoUtils.decryptFromKeyStore(challenge, secretKey);
        let base64Key: string = CryptoUtils.toBase64(JSON.stringify(key));
        console.log("base64PageKey : " + base64PageKey);
        console.log("base64Key: " + base64Key);
        return base64PageKey == base64Key;
    }

    handShake(data: object) {
        return this.doHandShake().map((obj) => {
            if (obj) {
                var encryptedData = CryptoUtils.encrypt(JSON.stringify(data), obj.aesKey);
                return { "ssId": obj.key, "data": encryptedData };
            }
            return null
        });
    }
}