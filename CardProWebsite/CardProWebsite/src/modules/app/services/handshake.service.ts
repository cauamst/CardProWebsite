import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HandShake } from '../models/HandShake';
import { appConfig, HandShakeConfig } from '../../../app.config';
import { CryptoUtils } from '../helpers/cryptoUtils';
import { Observable } from "rxjs/Observable";

interface PageSession {
    ssId: string;
    pageKey: string;
}
let cardProPageSession: PageSession = { ssId: null, pageKey: null };


@Injectable()
export class HandShakeService {
    private sharedSecret: string;
    private sharedSecretBase64: string;
    private ssId: string;

    constructor(private http: Http) { }

    handShake(data: object) {
        return this.doHandShake()
            .flatMap((ssId) => {
                this.ssId = ssId;

                return CryptoUtils
                    .importKey(JSON.stringify({
                        kty: 'oct',
                        alg: 'A256GCM',
                        kid: this.sharedSecret,
                        use: 'enc',
                        k: this.sharedSecretBase64,
                        length: 256
                    }), "json");
            })
            .flatMap((pageJWK) => {
                return CryptoUtils.encrypt(JSON.stringify(data), pageJWK)
            })
            .map((result) => {
                cardProPageSession.ssId = this.ssId;
                cardProPageSession.pageKey = this.sharedSecret;

                return { "ssId": this.ssId, "data": result };
            });
    }

    private doHandShake() {
        if (cardProPageSession.ssId != null && cardProPageSession.pageKey != null) {

            this.sharedSecret = cardProPageSession.pageKey;
            this.sharedSecretBase64 = CryptoUtils.toBase64(this.sharedSecret);

            return Observable.of(cardProPageSession.ssId);

        } else {

            this.sharedSecret = CryptoUtils.randomKeyString(32);
            this.sharedSecretBase64 = CryptoUtils.toBase64(this.sharedSecret);
            let pageJWK: any;

            return CryptoUtils
                .importKey(JSON.stringify({
                    kty: 'oct',
                    alg: 'dir',
                    kid: this.sharedSecret,
                    k: this.sharedSecretBase64,
                    length: 256
                }), "json")
                .flatMap((jwk) => {
                    pageJWK = jwk;
                    return CryptoUtils.importKey(HandShakeConfig.publicKey, "pem");
                })
                .flatMap((rsaKey) => {
                    let sharedSecretBuffer = CryptoUtils.toBufferFromBase64(this.sharedSecretBase64);
                    return CryptoUtils.encrypt(sharedSecretBuffer, rsaKey);
                })
                .flatMap((encryptedContent) => {
                    let handShakeDto = new HandShake();
                    handShakeDto.Key = encryptedContent;

                    return this.http.post(HandShakeConfig.handshakeUrl, handShakeDto)
                        .map((response: Response) => response.json())
                        .flatMap((dto: HandShake) => {
                            return this.doChallenge(dto, pageJWK)
                        })
                });
        }
    }

    private doChallenge(dto: HandShake, pageJWK) {
        return CryptoUtils
            .decryptFromKeyStore(dto.Challenge, pageJWK)
            .map((result) => {
                let decryptedKey = result.plaintext.toString();
                if (decryptedKey !== this.sharedSecret) {
                    throw new Error("Handshake failed");
                }
                return dto.Key
            });
    }
}