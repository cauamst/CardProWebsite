import { Component, NgZone,OnInit } from "@angular/core";
import { PointTransformService } from "../services/pointTransform.service";
import { Input, HostListener, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'transform-slider',
    templateUrl: './transformSlider.html',
    styleUrls: ['./transformSlider.scss'],
})

export class TransformSlider implements OnInit  {
    @ViewChild("sliderInput") sliderInput: ElementRef;
    public amount: number = 0;
    public readonly maxAmount = 500000000;
    public readonly minAmount = 0;
    public readonly step = 1000;

    public firstCardPoints: number;
    public secondCardPoints: number;
    public transformLabel: string;
    public transformTitle: string;
    public formattedAmount: string;

    @Input() transformTypeId: number;
    @Input() isOnlineExpenses: boolean;
    @Input() firstCardId: number;
    @Input() secondCardId: number;
    
    
    constructor(
        private pointTransformService: PointTransformService,
        private zone: NgZone
    ) {}
    ngOnInit(): void {
        switch (this.transformTypeId){
            case 1:
                this.transformLabel = "Đổi điểm thưởng (Điểm)";
                this.transformTitle = "Số tiền chi tiêu/tháng (VNĐ)";
                break;
            case 2:
                if (this.isOnlineExpenses == true) {
                    this.transformLabel = "Số tiền được hoàn khi chi tiêu online (VNĐ)";
                    this.transformTitle = "Số tiền chi tiêu oniline, Chi tiêu ở nước ngoài/ tháng (VNĐ)";
                } else {
                    this.transformLabel = "Số tiền được hoàn khi chi tiêu trong nước (VNĐ)";
                    this.transformTitle = "Số tiền chi tiêu/tháng (VNĐ)";
                }
                break;
            case 3:
                this.transformLabel = "Dặm bay (Dặm)";
                this.transformTitle = "Số tiền chi tiếu/tháng (VNĐ)";
                break;

        }
    }
    public transform(amount: number): void {
        this.formattedAmount = String(amount);
        this.sliderInput.nativeElement.value = amount;
        this.firstCardPoints = PointTransformService.
            Transform(this.transformTypeId, this.firstCardId, amount, this.isOnlineExpenses);
        this.secondCardPoints = PointTransformService.
            Transform(this.transformTypeId, this.secondCardId, amount, this.isOnlineExpenses);
    }
}