import { Component, OnInit, OnDestroy, Input, HostBinding, NgZone } from '@angular/core';

import { Carousel, Direction } from './carousel';

@Component({
    selector: 'slide',
    template: `
    <div [class.active]="active" class="item text-center">
      <ng-content></ng-content>
    </div>
  `,
    styles: [`
        .item {
        -webkit-transition: -webkit-transform .6s ease-in-out;
        -o-transition: -o-transform .6s ease-in-out;
        transition: transform .6s ease-in-out;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000px;
        perspective: 1000px;
    }

    .item {
        position: relative;
        display: none;
        -webkit-transition: .6s ease-in-out left;
        -o-transition: .6s ease-in-out left;
        transition: .6s ease-in-out left;
    }
    .item.active {
            display: block;
            left: 0;
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
        }
`]
})
export class Slide implements OnInit, OnDestroy {
    @Input() public index: number;
    @Input() public direction: Direction;

    @HostBinding('class.active')
    @Input() public active: boolean;

    @HostBinding('class.item')
    @HostBinding('class.carousel-item')
    private addClass: boolean = true;

    constructor(private carousel: Carousel, private zone: NgZone) {
    }

    public ngOnInit() {
        this.zone.run(() => {
            this.carousel.addSlide(this);
        });
        
    }

    public ngOnDestroy() {
        this.zone.run(() => {
            this.carousel.removeSlide(this);
        });
    }
}
