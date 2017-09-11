import { appConfig } from '../../../app.config';
import { Observable } from "rxjs/Observable";
import jose = require('node-jose');

const characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export class CryptoUtils {
    
    constructor() { }
    
    public static importKey(input: any, format: string): Observable<any>  {
        return Observable.fromPromise(jose.JWK.asKey(input, format));
    }

    public static generateKey(keyType: string, keyLength: any, properties: any): Observable<any> {
        let keystore = jose.JWK.createKeyStore();
        return Observable.fromPromise(keystore.generate(keyType, keyLength, properties));
    }

    public static encrypt(input, key): Observable<any> {
        return Observable.fromPromise(jose.JWE.createEncrypt({ format: 'compact' }, key).
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

    public static toBase64FromBuffer(input: any) {
        return jose.util.base64url.encode(input);
    }

    public static randomKeyBuffer(size: number)   {
        return jose.util.randomBytes(size);
    }

    public static randomKeyString(size: number) {
        return Array(size).join().split(',').map(function () {
            return characters.charAt(Math.floor(Math.random() * characters.length));
        }).join('');
    }

    public static AesGcmDecrypt(key, cipherText): Observable<any>   {
        return Observable.fromPromise(jose.JWA.decrypt("A256GCMKW", key, cipherText));
    }

    public static AesGcmEncrypt(key, plainText): Observable<any>  {
        return Observable.fromPromise(jose.JWA.encrypt("A256GCMKW", key, plainText));
    }
}
