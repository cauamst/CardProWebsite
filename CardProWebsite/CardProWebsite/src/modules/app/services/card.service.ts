import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Card } from '../models/card';
import { appConfig } from '../../../app.config';

@Injectable()
export class CardService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get(appConfig.getCardsUrl).map((response: Response) => response.json());
    }

}