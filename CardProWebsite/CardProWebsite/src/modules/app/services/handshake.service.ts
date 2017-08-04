import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HandShake } from '../models/HandShake';
import { appConfig, HandShakeConfig } from '../../../app.config';
import { CryptoUtils } from '../helpers/cryptoUtils';

@Injectable()
export class HandShakeService {
    constructor(private http: Http, private crypto: CryptoUtils) { }

    handShake(data: object) {
        return this.doHandShake().map((obj) => {
            if (obj) {
                let base64Data = CryptoUtils.toBase64(JSON.stringify(data));
                let encryptedData = CryptoUtils.encrypt(CryptoUtils.toBufferFromBase64(base64Data), obj.aesKey);
                return { "ssId": obj.key, "data": encryptedData };
            }
            return null
        });
    }

    private doHandShake() {
        let pageKey: string;
        let base64PageKey: string;
        let encryptedPageKey: string;
        let superKey: string;

        let props = {
            alg: 'A256GCM',
            use: 'enc'
        };

        return CryptoUtils
            .generateKey("EC", "P-256", props)
            .flatMap((aesKey) => {
                var serializedKey = JSON.stringify(aesKey);
                var base64Key : string = CryptoUtils.toBase64(serializedKey);

                console.log("aesKey: " + aesKey);
                console.log("serializedAesKey: " + serializedKey);
                console.log("base64AesKey: " + base64Key);

                pageKey = aesKey;
                base64PageKey = base64Key;
                return CryptoUtils
                    .importKey(HandShakeConfig.publicKey);
            })
            .flatMap((rsaKey) => {
                console.log("superKey: " + rsaKey);
                superKey = rsaKey;
                return CryptoUtils
                    .encrypt(CryptoUtils.toBufferFromBase64(base64PageKey), superKey);
            })
            .flatMap((encryptedContent) => {
                console.log("jwe encrypted key:" + encryptedContent);
                encryptedPageKey = encryptedContent;
                let handShakeDto = new HandShake();
                handShakeDto.Key = CryptoUtils.toBase64(encryptedPageKey);

                return this.http.post(HandShakeConfig.handshakeUrl, handShakeDto)
                    .map((response: Response) => response.json())
                    .map((dto: HandShake) =>
                        this.doChallenge(dto.Challenge, pageKey, base64PageKey)
                            ? { "key": dto.Key, "aesKey": pageKey }
                            : null);
            });
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
}