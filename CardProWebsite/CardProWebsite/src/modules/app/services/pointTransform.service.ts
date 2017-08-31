import { Injectable } from "@angular/core";

@Injectable()
export class PointTransform {

    constructor() { }
    private static factor: number = 33000;
    private static monthsInYear = 12;

    public static AwardedPoints(cardId: number, amount: number): number {
        switch (cardId) {
            case 1:
            case 2:
            case 3:
                return Math.floor((amount / this.factor)) * this.monthsInYear;
            default:
                return 0;
        }
    }

    private static Refund(cardId: number, amount: number, isOnlineExpenses = false): number {
        let coEfficient = 0;
        let minAmount = 0;
        const constAmount = 100000;

        switch (cardId) {
            case 1:
            case 2:
                coEfficient = 1;
                minAmount = 1170;
                break;
            case 3:
            case 4:
                coEfficient = 0.85;
                minAmount = 1170;
                break;
            case 5:
            case 6:
                coEfficient = 0.95;
                minAmount = 1170;
                break;
            case 7:
                return Math.floor((amount / 20000)) * this.monthsInYear;
            case 8:
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

        let total = amount / (this.factor * coEfficient);

        return total >= minAmount
            ? Math.floor(total) * constAmount
            : 0;
    }

    private static FlightMiles(cardId: number, amount: number): number {
        let coEfficient = 0;
        let minAmount = 0;
        const constAmount = 100000;

        switch (cardId) {
            case 1:
            case 2:
                coEfficient = 1;
                minAmount = 1170;
                break;
            case 3:
            case 4:
                coEfficient = 0.85;
                minAmount = 1170;
                break;
            case 5:
            case 6:
                coEfficient = 0.95;
                minAmount = 1170;
                break;
            case 7:
                return Math.floor((amount / 20000)) * this.monthsInYear;
            case 8:
                let total = amount * 0.003;
                return total >= 300000
                    ? 300000 * this.monthsInYear
                    : Math.floor(total) * this.monthsInYear
                    ;

            default:
                return 0;
        }

        let total = amount / (this.factor * coEfficient);

        return total >= minAmount
            ? Math.floor(total) * constAmount
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