import { Component, OnInit, Directive, Input, OnChanges, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[loader]',
})

export class Loader implements OnChanges{
    @Input()
    isLoading: boolean;

    constructor(private el: ElementRef, private renderer: Renderer) {
       
    }

    ngOnChanges(changes) {
        if (!changes.isLoading.firstChange) {
            if (changes.isLoading.currentValue){
                this.renderer.setElementClass(this.el.nativeElement, 'is-loading-state', true);
            } else {
                this.renderer.setElementClass(this.el.nativeElement, 'is-loading-state', false);
            }
        }
    }
}