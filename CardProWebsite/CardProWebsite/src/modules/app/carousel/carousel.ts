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
    { "title": "We are covered", "url": require("../../../assets/img/ChungChiTienGui1600x530px_1.jpg") },
    { "title": "Generation Gap", "url": require("../../../assets/img/DonThuSangNganQuaTang1600x530.jpg") },
    { "title": "Potter Me", "url": require("../../../assets/img/Top40ThuongHIeu2017_1600x530.jpg") },
    { "title": "Pre-School Kids", "url": require("../../../assets/img/DichVuKieuHoi1600x530px.jpg") },
    { "title": "Young Peter Cech", "url": require("../../../assets/img/CTKM-Contactless1600x530.jpg") }
];