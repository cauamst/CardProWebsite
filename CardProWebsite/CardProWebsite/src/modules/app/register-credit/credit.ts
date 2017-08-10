import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms/forms";
import { Validators } from "@angular/forms/src/validators";
import { FormGroup } from "@angular/forms/src/forms";

@Component({
    selector: 'credit',
    templateUrl: './credit.html',
    styleUrls: ['./credit.css']
})
export class CreditComponent implements OnInit {
    private NextPhotoInterval: number = 3000;
    //Looping or not
    private noLoopSlides: boolean = true;
    //Photos
    private slides: Array<any> = [];
    button = [
        { director: 'Button1' },
        { director: 'Button2' },
        { director: 'Button3' },
        { director: 'Button4' },
    ];

    constructor() {
        this.addNewSlide();
    }
    ngOnInit(): void {
    }

    private addNewSlide() {
        this.slides.push(
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' }
        );
    }
    private removeLastSlide() {
        this.slides.pop();
    }
}