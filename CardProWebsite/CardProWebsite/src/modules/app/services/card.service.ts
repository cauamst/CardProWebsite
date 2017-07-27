import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Card } from '../models/card';
import { CardProHttp } from '../helpers/cardProHttp';

@Injectable()
export class CardService {
    constructor(private http: CardProHttp) { }

    getAll() {
        return this.http.get('/cards').map((response: Response) => response.json());
    }

}