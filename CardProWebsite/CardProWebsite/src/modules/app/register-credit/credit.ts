import { Component, OnInit, Input, Output  } from '@angular/core';
import { FormControl } from "@angular/forms/forms";
import { Validators } from "@angular/forms/src/validators";
import { FormGroup } from "@angular/forms/src/forms";

@Component({
    selector: 'credit',
    templateUrl: './credit.html',
    styleUrls: ['./credit.css'],
    
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
    card = [
        { url: require("../../../assets/img/card1.jpg") },
        { url: require("../../../assets/img/card2.jpg") },
        { url: require("../../../assets/img/card3.jpg") }
    ];

    constructor() {
        this.addNewSlide();
    }
    ngOnInit(): void {
    }

    private addNewSlide() {
        this.slides.push(
            { image: require("../../../assets/img/slide1.jpg"), text: 'BMW 1' },
            { image: require("../../../assets/img/slide2.jpg"), text: 'BMW 2' },
            { image: require("../../../assets/img/slide3.jpg"), text: 'BMW 3' },
            { image: require("../../../assets/img/slide4.jpg"), text: 'BMW 4' },
            { image: require("../../../assets/img/slide5.jpg"), text: 'BMW 5' },
            { image: require("../../../assets/img/slide1.jpg"), text: 'BMW 6' }
        );
    }
    private removeLastSlide() {
        this.slides.pop();
       
    }
    title = "accordion";

    
}