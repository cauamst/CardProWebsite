import { Injectable } from "@angular/core";

@Injectable()
export class PointTransformService {

    constructor() { }
    private static factor: number = 33000;
    private static monthsInYear = 12;

    private static AwardedPoints(cardId: number, amount: number): number {
        switch (cardId) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 12:
            case 13:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            default:
                return 0;
        }
    }

    private static Refund(cardId: number, amount: number, isOnlineExpenses : number): number {
        let coEfficient = 0;
        let minAmount = 0;
        const constAmount = 100000;

        switch (cardId) {
            case 6:
            case 8:
            case 10:
            case 12:
            case 13:
                coEfficient = 1;
                minAmount = 1170;
                break;
            case 7:
            case 8:
            case 5:
            case 9:
                coEfficient = 0.95;
                minAmount = 1170;
                break;
            case 2:
            case 3:
            case 4:
                coEfficient = 0.85;
                minAmount = 1170;
                break;
            case 11:
                return Math.floor(((amount * 100) / 20000)) * this.monthsInYear;
            case 14:
                if (isOnlineExpenses) {
                    if (amount >= 2000000) {
                        let total = amount * 0.05;
                        return total >= 300000
                            ? 300000 * this.monthsInYear
                            : Math.floor(total) * this.monthsInYear
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
            case 6:
            case 13:
            case 12:
            case 10:
            case 8:
                coEfficient = 1;
                minAmount = 12;
                break;
            case 5:
            case 7:
            case 8:
            case 9:
                coEfficient = 0.95;
                minAmount = 12;
                break;
            case 10:
            case 12:
            case 13:
            case 4:
            case 3:
            case 2:
                coEfficient = 0.85;
                minAmount = 12;
            case 11:
                return Math.floor((amount / 20000)) * this.monthsInYear;
            default:
                return 0;
        }
        let total = amount / (this.factor * coEfficient * minAmount);

        return (amount / (this.factor * coEfficient)) >= minAmount
            ? Math.floor(total) * constAmount * this.monthsInYear
            : 0;
    }

    public static Transform(type: number, cardId: number, amount: number, isOnlineExpenses : number): number {
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