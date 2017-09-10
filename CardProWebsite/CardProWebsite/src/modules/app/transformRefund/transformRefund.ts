import { Component, NgZone } from "@angular/core";
import { PointTransformService } from "../services/pointTransform.service";
import { Input, HostListener } from "@angular/core";

@Component({
    selector: 'transform-refund',
    templateUrl: './transformRefund.html',
    styleUrls: ['./transformRefund.css'],
})
export class TransformRefund {
    public amount: number = 0;
    public readonly maxAmount = 500000000;
    public readonly minAmount = 0;
    public readonly step = 1000;

    public firstCardPoints: number;
    public secondCardPoints: number;

    @Input() transformTypeId: number;
    @Input() isOnlineExpenses: boolean;
    @Input() firstCardId: number;
    @Input() secondCardId: number;

    constructor(
        private pointTransformService: PointTransformService,
        private zone: NgZone
    ) { }

    public transform(amount: number): void {
        this.firstCardPoints = PointTransformService.
            Transform(this.transformTypeId, this.firstCardId, amount, this.isOnlineExpenses);
        this.secondCardPoints = PointTransformService.
            Transform(this.transformTypeId, this.secondCardId, amount, this.isOnlineExpenses);
    }
}