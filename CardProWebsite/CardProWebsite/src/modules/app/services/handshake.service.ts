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
        console.log('aesKey: ', aesKey);
        
        let key = new NodeRSA(HandShakeConfig.publicKey);
        var encryptedKey = key.encrypt(aesKey, 'base64');
        console.log('encryptedKey: ', encryptedKey);

        let handShakeDto = new HandShake();
        handShakeDto.Key = encryptedKey;

        return this.http.post(HandShakeConfig.handshakeUrl, handShakeDto)
            .map((response: Response) => response.json())
            .map((dto: HandShake) =>
                this.doChallenge(dto.Challenge, aesKey)
                    ? aesKey
                    : null);
    }

    private doChallenge(challenge, secret): boolean{
        let decrypted = CryptoJS.AES.decrypt(challenge, secret);
        console.log("doChallenge - decrypted: " + decrypted);
        console.log("challenge is: " + decrypted == secret);
        return decrypted == secret;
    }

    handShake(data: object) {
        return this.doHandShake().map((aesKey) => 
            aesKey
            ? CryptoJS.AES.encrypt(JSON.stringify(data), aesKey)
            : null
        );
    }
}