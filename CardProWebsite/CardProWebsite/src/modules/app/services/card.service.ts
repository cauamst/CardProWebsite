import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { Card } from '../models/card';
import { DtoWrapper } from '../models/DtoWrapper';
import { appConfig } from '../../../app.config';

@Injectable()
export class CardService {
    constructor(private http: Http) { }

    getCards(index: number, numberOfResults: number) {
        let dtoWrapper: DtoWrapper<Card> = new DtoWrapper<Card>();
        dtoWrapper.Index = index;
        dtoWrapper.NumberOfResults = numberOfResults;
        console.log(dtoWrapper);
        return this.http.post(appConfig.getCardsUrl, dtoWrapper)
            .map((response: Response) => response.json())
            .map((dto: DtoWrapper<Card>) => dto);
    }

    registerCard(ssId: string, data: object) {
        let headers = new Headers();
        headers.append('X-ss-id', ssId);
        let opts: RequestOptionsArgs = { headers: headers };
        return this.http.post(appConfig.registerCard, { Data: data }, opts)
            .map((response: Response) => response.json());
    }

}