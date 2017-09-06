import { Injectable } from "@angular/core";

@Injectable()
export class PointTransformService {
   
    constructor() { }
    private static factor: number = 33000;
    private static monthsInYear = 12;

    private static AwardedPoints(cardId: number, amount: number): number {
        switch (cardId) {
            case 2:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 3:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 4:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 5:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 6:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 7:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 8:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 9:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 10:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 11:
            case 12:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 13:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            case 14:
            default:
                return 0;
        }
    }

    private static Refund(cardId: number, amount: number, isOnlineExpenses = false): number {
        let coEfficient = 0;
        let minAmount = 0;
        const constAmount = 100000;

        switch (cardId) {
            case 2:
                coEfficient = 1;
                minAmount = 1170;
                break;
            case 3:
                coEfficient = 1;
                minAmount = 1170;
                break;
            case 4:
                coEfficient = 1;
                minAmount = 1170;
                break;
            case 5:
                coEfficient = 1;
                minAmount = 1170;
                break;
            case 6:
                coEfficient = 1;
                minAmount = 1170;
                break;
            case 7:
                coEfficient = 0.95;
                minAmount = 1170;
                break;
            case 8:
                coEfficient = 0.95;
                minAmount = 1170;
                break;
            case 9:
                coEfficient = 0.95;
                minAmount = 1170;
                break;
            case 9:
                coEfficient = 0.85;
                minAmount = 1170;
                break;
            case 10:
                coEfficient = 0.95;
                minAmount = 1170;
                break;
            case 11:
                return Math.floor(((amount * 100) / 20000)) * this.monthsInYear;
            case 12:
                coEfficient = 0.85;
                minAmount = 1170;
                break;
            case 13:
                coEfficient = 0.85;
                minAmount = 1170;
                break;
            case 14:
                if (isOnlineExpenses) {
                    if (amount > 2000000) {
                        let total = amount * 0.05;
                        return total >= 300000
                            ? 300000 * this.monthsInYear
                            : Math.floor(total)
                            ;
                    } else {
                        return Math.floor(amount * 0.003) * this.monthsInYear;
                    }
                } else {
                    let total = amount * 0.003;
                    return total >= 300000
                        ? 300000 * this.monthsInYear
                        : Math.floor(total) * this.monthsInYear
                        ;
                }
            default:
                return 0;
        }

        let total = amount / (this.factor * coEfficient * minAmount);

        return (amount / (this.factor * coEfficient)) >= minAmount
            ? Math.floor(total) * constAmount * this.monthsInYear
            : 0;
    }

    private static FlightMiles(cardId: number, amount: number): number {
        let coEfficient = 0;
        let minAmount = 0;
        const constAmount = 10;

        switch (cardId) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                coEfficient = 1;
                minAmount = 12;
                break;
            case 7:
                coEfficient = 0.95;
                minAmount = 12;
                break;
            case 8:
                return Math.floor((amount / 20000)) * this.monthsInYear;
            case 9:
                let total = amount * 0.003;
                return total >= 300000
                    ? 300000 * this.monthsInYear
                    : Math.floor(total) * this.monthsInYear
                    ;

            default:
                return 0;
        }

        let total = amount / (this.factor * coEfficient * minAmount);

        return (amount / (this.factor * coEfficient)) >= minAmount
            ? Math.floor(total) * constAmount * this.monthsInYear
            : 0;
    }

    public static Transform(type: number, cardId: number, amount: number, isOnlineExpenses = false): number {
        switch (type) {
            case 1:
                return this.AwardedPoints(cardId, amount);
            case 2:
                return this.Refund(cardId, amount, isOnlineExpenses);
            case 3:
                return this.FlightMiles(cardId, amount);
            default:
                return 0;
        }
    }
}