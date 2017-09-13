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

    addGroup(group: AccordionGroup): void {
        this.groups.push(group);
    }

    closeOthers(openGroup): void {
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
                  <div class="panel-heading" (click)="toggleOpen($event);ChangeArrow()">
                    <h4 class="panel-title">
                        <i class="material-icons accordion-icon">{{changeArrow}}</i> 
                      <p href tabindex="0" class="accordion-margin">{{heading}}</p>
                    </h4>
                  </div>
                  <div class="panel-collapse" [hidden]="!isOpen">
                        <ng-content></ng-content>
                  </div>
                </div>
          `,
    styles: [`
a {
    color: rgba(0,0,0,.87) !important;
    font-size: 20px;
}
.accordion-margin{
    padding-left: 30px;
    padding-bottom: 5px;
    padding-top: 5px;
}
.accordion-icon {
    margin-top: 5px;
}
.panel-title{
    text-transform: uppercase;
    font-weight: 600;
    line-height: 49px;
    cursor: pointer;
    background: #0066b3;
    color: #fff;
    padding-left: 15px;
    margin-top: 0;
}
i {
    position: absolute;
}
`]


})
export class AccordionGroup {

    changeArrow = "keyboard_arrow_down";

    private _isOpen: boolean = false;
    @Input() isGroupOpen: boolean;
    public get isOpen(): boolean {
        return this._isOpen;
    }
    @Input()
    public set isOpen(value: boolean) {
        this._isOpen = value;
    }

    @Input() heading: string;

    constructor(private accordion: Accordion) {
       
        this.accordion.addGroup(this);
    }

    ngOnInit(): void{
        this.isOpen = this.isGroupOpen
    }
    toggleOpen(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.accordion.closeOthers(this);
        }
    }
    ChangeArrow(): void
    {
        if (this.changeArrow == 'keyboard_arrow_right')
        {
            this.changeArrow = 'keyboard_arrow_down';
        }
        else
        {
            this.changeArrow = 'keyboard_arrow_right';
        }
    }
}