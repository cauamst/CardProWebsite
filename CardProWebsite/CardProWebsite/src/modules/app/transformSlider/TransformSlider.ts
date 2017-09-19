import { Component, NgZone, OnInit, Pipe, PipeTransform, EventEmitter, Directive } from "@angular/core";
import { PointTransformService } from "../services/pointTransform.service";
import { Input, HostListener, ViewChild, ElementRef, Output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'transform-slider',
    templateUrl: './transformSlider.html',
    styleUrls: ['./transformSlider.scss']
})
@Directive({
    host: {
        '(ngModelChange)': 'onInputChange($event)',
        '(keydown.backspace)': 'onInputChange($event.target.value, true)'
    }
})

export class TransformSlider implements OnInit {
    @ViewChild("sliderInput") sliderInput: ElementRef;
    @ViewChild("textInput") textInput: ElementRef;
    public amount: number = 0;
    public readonly maxAmount = 100000000;
    public readonly minAmount = 0;
    public readonly step = 1000;

    public firstCardPoints: number = 0;
    public secondCardPoints: number = 0;
    public transformLabel: string;
    public transformTitle: string;
    public formattedAmount: string = "0";

    @Input() transformTypeId: number;
    @Input() isOnlineExpenses: boolean;
    @Input() firstCardId: number;
    @Input() secondCardId: number;
    constructor(
        private pointTransformService: PointTransformService,
        private zone: NgZone
    ) { }
    ngOnInit(): void {
        switch (this.transformTypeId) {
            case 1:
                this.transformLabel = "Đổi điểm thưởng (Điểm)";
                this.transformTitle = "Số tiền chi tiêu/ tháng (VNĐ)";
                break;
            case 2:
                if (this.isOnlineExpenses == true) {
                    this.transformLabel = "Số tiền được hoàn khi chi tiêu online (VNĐ)";
                    this.transformTitle = "Số tiền chi tiêu oniline hoặc chi tiêu ở nước ngoài/ tháng (VNĐ)";
                } else {
                    this.transformLabel = "Số tiền được hoàn khi chi tiêu trong nước (VNĐ)";
                    this.transformTitle = "Số tiền chi tiêu khác/ tháng (VNĐ)";
                }
                break;
            case 3:
                this.transformLabel = "Dặm bay (Dặm)";
                this.transformTitle = "Số tiền chi tiếu/ tháng (VNĐ)";
                break;

        }
    }
    public transform(amount: number): void {
        this.onInputChange(String(amount), true);
        this.sliderInput.nativeElement.value = amount;

        this.firstCardPoints = PointTransformService.
            Transform(this.transformTypeId, this.firstCardId, amount, this.isOnlineExpenses);
        this.secondCardPoints = PointTransformService.
            Transform(this.transformTypeId, this.secondCardId, amount, this.isOnlineExpenses);
    }

    onInputChange(event, updateFromSlider = false) {
        var newVal = event.replace(/\D/g, '');
        if (newVal.length >= 9) {
            newVal = String(this.maxAmount);
        }   
        var rawValue = newVal;

        if (newVal.length == 0) {
            newVal = '';
        }

        let L = newVal.length;
        if (L > 3) {
            let firstColonPosition = L % 3;

            let matchingPattern = "";
            let replacePattern = "";

            let nbOfGroups = Math.floor(L / 3) + (firstColonPosition != 0 ? 1 : 0);

            for (let i = 1; i <= nbOfGroups; i++) {
                let nbOfDigits = (i == 1 && firstColonPosition != 0)
                    ? firstColonPosition
                    : 3
                    ;
                let colon = i != nbOfGroups
                    ? ","
                    : ""
                    ;
                matchingPattern += `(\\d{0,${nbOfDigits}})`;
                replacePattern += `$${i}${colon}`;
            }
            newVal = newVal.replace(new RegExp(`^${matchingPattern}`), replacePattern);
        }

        // set the new value
        this.formattedAmount = newVal;
        this.textInput.nativeElement.value = newVal;

        this.amount = Number(rawValue); 
        if (!updateFromSlider) {
            this.transform(this.amount);
        }
    }

}

