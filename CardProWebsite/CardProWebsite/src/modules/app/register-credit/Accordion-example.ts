import { Component,OnDestroy} from '@angular/core'


@Component({
    selector: 'ngb-accordion, [ngb-accordion]',
    template: `<ng-content></ng-content>`
})
export class NgbAccordion {
    private onlyOneOpen: boolean;
    private groups: Array<NgbAccordionGroup> = [];

    addGroup(group: NgbAccordionGroup): void { this.groups.push(group); }

    closeOthers(openGroup): void {
        if (!this.onlyOneOpen) {
            return;
        }

        this.groups.forEach((group: NgbAccordionGroup) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }

    removeGroup(group: NgbAccordionGroup): void {
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}

@Component({
    selector: 'ngb-accordion-group, [ngb-accordion-group]',
    template: `
<div class="card">
      <div class="card-header">
        <a href tabindex="0"><span [class.text-muted]="isDisabled" (click)="toggleOpen($event)">{{heading}}</span></a>
      </div>
      <div class="card-block" [hidden]="!isOpen">
        <div class="card-text">
    	    <ng-content></ng-content>
  	    </div>
      </div>
    </div>
`
})
export class NgbAccordionGroup implements OnDestroy {

    private isDisabled: boolean;
    private _isOpen: boolean = false;

    constructor(private accordion: NgbAccordion) { this.accordion.addGroup(this); }

    toggleOpen(event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }

    ngOnDestroy(): void { this.accordion.removeGroup(this); }

    public get isOpen(): boolean { return this._isOpen; }

    public set isOpen(value: boolean) {
        this._isOpen = value;
        if (value) {
            this.accordion.closeOthers(this);
        }
    }
}