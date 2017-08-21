import { Component, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'accordion',
    template: `
  <ng-content></ng-content>
          `,
    host: {
        'class': 'panel-group'
    }
})
export class Accordion {
    groups: Array<AccordionGroup> = [];

    closeOthers(openGroup: AccordionGroup): void {
        this.groups.forEach((group: AccordionGroup) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
}

@Component({
    selector: 'accordion-group',
    template: `
                <div class="panel panel-default" [ngClass]="{'panel-open': isOpen}">
                  <div class="panel-heading" (click)="toggleOpen($event)">
                    <h4 class="panel-title">
                      <a href tabindex="0"><span>{{heading}}</span></a>
                    </h4>
                  </div>
                  <div class="panel-collapse" [hidden]="!isOpen">
                    <div class="panel-body">
                        <ng-content></ng-content>
                    </div>
                  </div>
                </div>
          `,
    styles: [`
.panel-heading{
    text-transform: uppercase;
    font-weight: 600;
    background: #ececec;
    line-height: 49px;
    padding-left: 15px;
    cursor: pointer;
}
`] 
    

})
export class AccordionGroup implements OnDestroy {
    private _isOpen: boolean = false;

    @Input() heading: string;

    @Input()
    set isOpen(value: boolean) {
        this._isOpen = value;
        if (value) {
            this.accordion.closeOthers(this);
        }
    }

    get isOpen() {
        return this._isOpen;
    }

    constructor(private accordion: Accordion) { }

    ngOnDestroy() {
    }

    toggleOpen(event: MouseEvent): void {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
}