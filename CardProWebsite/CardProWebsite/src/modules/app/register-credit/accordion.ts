import { Component, Input } from '@angular/core';

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
    private onlyOneOpen: boolean;
    groups: Array<AccordionGroup> = [];

    closeOthers(openGroup): void {
        if (!this.onlyOneOpen) {
            return;
        }
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
                      <p href tabindex="0">{{heading}}</p>
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
a {
    color: rgba(0,0,0,.87) !important;
    font-size: 20px;
}
.panel-default
{
    border-bottom: solid 1px #ececec;
    margin-bottom: 5px
}
.panel-title{
    text-transform: uppercase;
    font-weight: 600;
    background: #ececec;
    line-height: 49px;
    padding-left: 15px;
    cursor: pointer;
}

`]


})
export class AccordionGroup {
    private _isOpen: boolean = false;

    @Input() heading: string;
    constructor(private accordion: Accordion) {
    }

    public get isOpen(): boolean {
        return this._isOpen;
    }
    @Input()
    public set isOpen(value: boolean) {
        this._isOpen = value;
        if (value) {
            this.accordion.closeOthers(this);
        }
    }

    toggleOpen(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
}