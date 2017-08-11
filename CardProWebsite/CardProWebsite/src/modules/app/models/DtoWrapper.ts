import { CardType } from './CardType';

export class DtoWrapper<T> {
    Total: number;
    Index: number;
    NumberOfResults: number;
    Results: T[];
}