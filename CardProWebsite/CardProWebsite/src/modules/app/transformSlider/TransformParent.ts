import { Component, NgZone, OnInit, EventEmitter } from "@angular/core";
import { Input, OnDestroy } from "@angular/core";
import { TransformSlider } from "./TransformSlider";

@Component({
    selector: 'transform-parent',
    templateUrl: './transformParent.html',
    styleUrls: ['./transformSlider.scss']
})
export class TransformParent implements OnDestroy {
    public sliders: Array<TransformSlider> = [];
    private totalAmount = 0;
    private firstCardPoints = 0;
    private secondCardPoints = 0;
    constructor(

    ) {

    }
    ngOnInit(): void {

    }

    ngOnDestroy(): void {
    }
    update(updated: boolean) {
        if (updated) {
            this.totalAmount = 0;
            this.firstCardPoints = 0;
            this.secondCardPoints = 0;
            for (let i = 0; i < this.sliders.length; i++) {
                this.totalAmount += this.sliders[i].amount;
                this.firstCardPoints += this.sliders[i].firstCardPoints;
                this.secondCardPoints += this.sliders[i].secondCardPoints;
            }
        }
    }

}