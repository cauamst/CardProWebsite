import { Component, OnInit } from '@angular/core';
import {Image} from '../models/image.interface';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})

export class CarouselComponent implements OnInit {
  public images = IMAGES;
  constructor() { }

  ngOnInit() {
  }

}
// add image -> binding to view 
var IMAGES: Image[] = [
    { "title": "We are covered", "url": require("../../../assets/img/1.jpg") },
    { "title": "Generation Gap", "url": require("../../../assets/img/2.jpg") },
    { "title": "Potter Me", "url": require("../../../assets/img/3.jpg") },
    { "title": "Pre-School Kids", "url": require("../../../assets/img/3.jpg") },
    { "title": "Young Peter Cech", "url": require("../../../assets/img/10.jpg") }	
];