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
	{ "title": "We are covered", "url": "/assets/img/sliders/1.jpg" },
	{ "title": "Generation Gap", "url": "/assets/img/sliders/2.jpg" },
	{ "title": "Potter Me", "url": "/assets/img/sliders/3.jpg" },
	{ "title": "Pre-School Kids", "url": "/assets/img/sliders/4.jpg" },
	{ "title": "Young Peter Cech", "url": "/assets/img/sliders/10.jpg" }	
];