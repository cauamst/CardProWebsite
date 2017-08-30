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
    { "title": "Chứng chỉ tiền gửi, An tâm đầu tư sinh lợi cao nhất", "url": require("../../../assets/img/ChungChiTienGui1600x530px_1.jpg") },
    { "title": "Đón thu sang, Ngàn quà tặng", "url": require("../../../assets/img/DonThuSangNganQuaTang1600x530.jpg") },
    { "title": "Top 40", "url": require("../../../assets/img/Top40ThuongHIeu2017_1600x530.jpg") },
    { "title": "Dịch vụ kiều hối Sacombank", "url": require("../../../assets/img/DichVuKieuHoi1600x530px.jpg") },
    { "title": "Đơn giản chỉ là chạm", "url": require("../../../assets/img/CTKM-Contactless1600x530.jpg") }
];