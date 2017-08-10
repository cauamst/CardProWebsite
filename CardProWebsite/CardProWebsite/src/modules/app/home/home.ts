import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloComponent } from './hello';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls : ['./home.css'],
})
export class HomeComponent {
    name: string;
    heading: string;
    private NextPhotoInterval: number = 3000;
    //Looping or not
    private noLoopSlides: boolean = true;
    //Photos
    private slides: Array<any> = [];

    constructor(private route: ActivatedRoute) {
        this.heading = "Home";
        this.addNewSlide();
    }

    ngOnInit() {
        this.route.data.subscribe(x => this.name = x.name);
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
