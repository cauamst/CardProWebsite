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
    { "title": "Chương trình khuyến mãi ContactLess", "url": require("../../../assets/img/1600x660-ctkm-contactless.jpg") },
    { "title": "Khuyến mãi GrabBike/ GrabCar", "url": require("../../../assets/img/grab1660x660.jpg") },
    { "title": "Chạm là thanh toán - Thanh toán thời thượng", "url": require("../../../assets/img/banner-1600-x-600-px.jpg") },
    { "title": "Ưu đãi thẻ sacombank", "url": require("../../../assets/img/banner-web-km-sacombank_1600x660px.jpg") },
    { "title": "Chương trình thẻ quà tặng khi dùng MOMO", "url": require("../../../assets/img/momo.jpg") }
];