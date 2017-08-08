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
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = ["text", "text1", "image", require("../../../assets/img/1.jpg")];

    constructor(private route: ActivatedRoute) {
        this.heading = "Home";
    }

    ngOnInit() {
        this.route.data.subscribe(x => this.name = x.name);
    }


    
}
