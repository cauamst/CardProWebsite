import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HandShake } from '../models/HandShake';
import { appConfig, HandShakeConfig } from '../../../app.config';
import CryptoJS = require('crypto-js');
import NodeRSA = require('node-rsa');

@Injectable()
export class HandShakeService {
    constructor(private http: Http) { }

    private doHandShake() {
       
        let aesKey = CryptoJS.AES.encrypt("Message", "Key").toString();
        let key = new NodeRSA(HandShakeConfig.publicKey);
        var encryptedKey = key.encrypt(aesKey, 'base64');
        console.log('encryptedKey: ', encryptedKey);

        let handShakeDto = new HandShake();
        handShakeDto.Key = encryptedKey;

        return this.http.post(HandShakeConfig.handshakeUrl, handShakeDto)
            .map((response: Response) => response.json())
            .map((dto: HandShake) =>
                this.doChallenge(dto.Challenge, aesKey)
                    ? { "key": dto.Key, "aesKey": aesKey }
                    : { "key": dto.Key, "aesKey": aesKey });
    }

    private doChallenge(challenge, secret): boolean{
        console.log("challenge: " + challenge);
        console.log("secret: " + secret);
        let decrypted = CryptoJS.AES.decrypt(challenge, secret.toString());
        console.log("doChallenge - decrypted: " + decrypted);
        console.log("challenge is: " + decrypted == secret);
        return decrypted == secret;
    }

    handShake(data: object) {
        return this.doHandShake().map((obj) => {
            if (obj) {
                var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), obj.aesKey, { padding: CryptoJS.pad.Pkcs7 }).toString();
                var wordArray = CryptoJS.enc.Utf8.parse(encryptedData);
                var base64Data = CryptoJS.enc.Base64.stringify(wordArray);
                console.log("base64Data: " + base64Data);
                return { "ssId": obj.key, "data": base64Data };
            }
            return null
        }
            
        );
    }
}