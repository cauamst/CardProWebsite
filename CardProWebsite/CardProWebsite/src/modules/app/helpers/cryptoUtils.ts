import { appConfig } from '../../../app.config';
import { Observable } from "rxjs/Observable";
import jose = require('node-jose');

export class CryptoUtils {
    constructor() { }

    public static importKey(input: string): Observable<any>  {
        return jose.JWK.asKey(input, "pem");
    }

    public static generateKey(keyType: string, keyLength: number, properties: any): Observable<any> {
        let keystore = jose.JWK.createKeyStore();
        return Observable.fromPromise(keystore.generate(keyType, keyLength, properties));
    }

    public static encrypt(input, key): Observable<any> {
        return Observable.fromPromise(jose.JWE.createEncrypt(key).
            update(input).
            final());
    }

    public static decryptFromKeyStore(input, keyStore): Observable<any> {
        return Observable.fromPromise(jose.JWE.createDecrypt(keyStore).
            decrypt(input));
    }

    public static toBufferFromBase64(input: string): string {
        return jose.util.base64url.decode(input);
    }

    public static toBase64(input: string) {
        return jose.util.base64url.encode(input, "utf8");
    }

    public static randomKeyBuffer(size: number)   {
        return jose.util.randomBytes(size);
    }
}
