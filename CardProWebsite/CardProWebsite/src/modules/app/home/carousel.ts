import { Component, OnDestroy, Input, NgZone } from '@angular/core';
import { NgFor } from '@angular/common';
import { Slide } from './slide';
export enum Direction { UNKNOWN, NEXT, PREV }

@Component({
    selector: 'carousel',
    template: `
    <div (mouseenter)="pause()" (mouseleave)="play()" class="carousel slide">
      <ol class="carousel-indicators" [hidden]="slides.length <= 1">
         <li *ngFor="let slidez of slides" [class.active]="slidez.active === true" (click)="select(slidez)"></li>
      </ol>
      <div class="carousel-inner"><ng-content></ng-content></div>
                  <a class="left carousel-control" (click)="prev()" [hidden]="!slides.length">
                         <i class = "mdl-icon-toggle__label material-icons size-icons left-icon">chevron_left</i>
                  </a>
                  <a class="right carousel-control" (click)="next()" [hidden]="!slides.length">
                 <i class = "mdl-icon-toggle__label material-icons size-icons media-icon-right">chevron_right</i>
                 </a>
    </div>
  `,
    styles: [`
/*carousel*/
.carousel {
    position: relative;
    margin-bottom: 10px;
}

.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 15;
    width: 60%;
    padding-left: 0;
    margin-left: -30%;
    text-align: center;
    list-style: none;
}

.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
    border: 1px solid rgba(27, 177, 219, 0.2);
}


.carousel-control {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 10%;
    font-size: 20px;
    color: #fff;
    text-shadow: rgba(25, 23, 23, 0.8);;
    background-color: rgba(0,0,0,0);
    filter: alpha(opacity=50);
    opacity: .5;
}

    .carousel-control.right {
        right: 0;
        left: auto;
        background-image: -webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
        background-image: -o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
        background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));
        background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
        background-repeat: repeat-x;
    }

    .carousel-control.left {
        background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
        background-image: -o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
        background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));
        background-image: linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
        background-repeat: repeat-x;
    }

a {
    color: #337ab7;
    text-decoration: none;
},
.carousel-inner > .active, .carousel-inner > .next, .carousel-inner > .prev {
        display: block;
        left: 0;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }

.left-icon, .media-icon-right {
     position: absolute;
}

.carousel-control .mdl-icon-toggle__label{
    font-size: 44px !important;
    top : 43%;
    color: #e0e0e0;
}
@media (min-width:600px) {
    .left-icon {
        left: 5px;    
     }
    .media-icon-right {
        right: 15px;    
     }
    
}
@media screen and (max-width: 599px) {
    .media-icon-right {
        right: 15%;    
    }
    .left-icon {
        left: -5px;    
     }
}

`]
})
export class Carousel implements OnDestroy {
    @Input() public noWrap: boolean;
    @Input() public noPause: boolean;
    @Input() public noTransition: boolean;

    get interval(): number {
        return this._interval;
    }

    @Input() set interval(value: number) {
        this._interval = value;
        this.restartTimer();
    }

    private slides: Array<Slide> = [];
    private currentInterval: any;
    private isPlaying: boolean;
    private destroyed: boolean = false;
    private currentSlide: Slide;
    private _interval: number;

    constructor(private zone: NgZone) {

    }
    public ngOnDestroy() {
        this.zone.run(() => {
            this.destroyed = true;
        });

    }

    public select(nextSlide: Slide, direction: Direction = Direction.UNKNOWN) {
        this.zone.run(() => {
            let nextIndex = nextSlide.index;
            if (direction === Direction.UNKNOWN) {
                direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
            }

            // Prevent this user-triggered transition from occurring if there is already one in progress
            if (nextSlide && nextSlide !== this.currentSlide) {
                this.goNext(nextSlide, direction);
            }
        });
    }

    private goNext(slide: Slide, direction: Direction) {
        this.zone.run(() => {
            if (this.destroyed) {
                return;
            }

            slide.direction = direction;
            slide.active = true;

            if (this.currentSlide) {
                this.currentSlide.direction = direction;
                this.currentSlide.active = false;
            }

            this.currentSlide = slide;

            // every time you change slides, reset the timer
            this.restartTimer();
        });
    }

    private getSlideByIndex(index: number) {
        let len = this.slides.length;
        for (let i = 0; i < len; ++i) {
            if (this.slides[i].index === index) {
                return this.slides[i];
            }
        }
    }

    private getCurrentIndex() {
        return !this.currentSlide ? 0 : this.currentSlide.index;
    }

    private next() {
        let newIndex = (this.getCurrentIndex() + 1) % this.slides.length;

        if (newIndex === 0 && this.noWrap) {
            this.pause();
            return;
        }

        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    }

    private prev() {
        let newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;

        if (this.noWrap && newIndex === this.slides.length - 1) {
            this.pause();
            return;
        }

        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
    }

    private restartTimer() {
        this.zone.run(() => {
            this.resetTimer();
            let interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
                this.currentInterval = setInterval(() => {
                    let nInterval = +this.interval;
                    if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
                        this.next();
                    } else {
                        this.pause();
                    }
                }, interval);
            }
        });
    }

    private resetTimer() {
        this.zone.run(() => {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
                this.currentInterval = null;
            }
        });
    }

    public play() {
        this.zone.run(() => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                this.restartTimer();
            }
        });
    }

    public pause() {
        this.zone.run(() => {
            if (!this.noPause) {
                this.isPlaying = false;
                this.resetTimer();
            }
        });
    }

    public addSlide(slide: Slide) {
        this.zone.run(() => {
            slide.index = this.slides.length;

            this.slides.push(slide);
            if (this.slides.length === 1 || slide.active) {
                this.select(this.slides[this.slides.length - 1]);
                if (this.slides.length === 1) {
                    this.play();
                }
            } else {
                slide.active = false;
            }
        })

    }

    public removeSlide(slide: Slide) {
        this.zone.run(() => {
            this.slides.splice(slide.index, 1);

            if (this.slides.length === 0) {
                this.currentSlide = null;
                return;
            }

            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].index = i;
            }
        });
    }
}

