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
    { "url_blank": "https://khuyenmai.sacombank.com/chuong-trinh-khuyen-mai/the/plus-day/global-health-travel-giam-15-cac-goi-cham-soc-suc-khoe-cho-chu-the-sacombank-mastercard#page01", "url": require("../../../assets/img/1600x660-ctkm-contactless.jpg") },
    { "url_blank": "https://khuyenmai.sacombank.com/chuong-trinh-khuyen-mai/the/plus-day/giam-50000-vnd-cho-3-chuyen-grabbike-va-grabcar-voi-ma-grabsacom-danh-cho-chu-the-sacombank#page03 ", "url": require("../../../assets/img/grab1660x660.jpg") },
    { "url_blank": "https://khuyenmai.sacombank.com/chuong-trinh-khuyen-mai/the/plus-day/giam-den-50000000-vnd-khi-dat-tiec-ca-nhan-giam-15-tai-gem-cafe-cho-chu-the-sacombank-visamastercard-tai-gem-center ", "url": require("../../../assets/img/banner-1600-x-600-px.jpg") },
    { "url_blank": "https://khuyenmai.sacombank.com/chuong-trinh-khuyen-mai/the/plus-day/giam-den-50000000-vnd-khi-dat-tiec-ca-nhan-giam-15-tai-gem-cafe-cho-chu-the-sacombank-visamastercard-tai-gem-center ", "url": require("../../../assets/img/banner-web-km-sacombank_1600x660px.jpg") },
    { "url_blank": "https://khuyenmai.sacombank.com/chuong-trinh-khuyen-mai/the/plus-day/nao-minh-cung-momo-nhe-voi-the-sacombank#page02 ", "url": require("../../../assets/img/momo.jpg") }
];