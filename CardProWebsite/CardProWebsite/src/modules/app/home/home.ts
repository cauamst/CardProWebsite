import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';                    
import { Slide } from './slide';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls : ['./home.css'],
})
export class HomeComponent {
    name: string;
    heading: string;
    private NextPhotoInterval: number = 4000;
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
            { image: require("../../../assets/img/grab1660x660.jpg") },
            { image: require("../../../assets/img/banner-1600-x-600-px.jpg") },
            { image: require("../../../assets/img/CTKM-Contactless1600x530.jpg") },
            { image: require("../../../assets/img/Banner-1200x350px.jpg") },
            { image: require("../../../assets/img/banner-web-km-sacombank_1600x660px.jpg") },
            { image: require("../../../assets/img/Top40ThuongHIeu2017_1600x530.jpg") }
        );
    }
    private removeLastSlide() {
        this.slides.pop();
    }
    cardhome = [
        { id: 1, url: require("../../../assets/img/Infinitecard_Front.jpg"), Name: 'Thẻ tín dụng', content: 'Mua trước trả sau miễn đến lãi 55 ngày', linkRoute : 'Đăng ký',linkactive:'register'},
        { id: 2, url: require("../../../assets/img/MCworld.jpg"), Name: 'Thẻ thanh toán', content: 'Phá bỏ giới hạn không gian và thỏa sức chi tiêu trên toàn thế giới', linkRoute: 'Đăng ký', linkactive:'register' },
        { id: 3, url: require("../../../assets/img/VisaCreditGold.jpg"), Name: 'Thẻ in hình', content: 'Thỏa sức sáng tạo theo phong cách của riêng bạn', linkRoute: 'Đăng ký', linkactive: 'register' },
        { id: 4, url: require("../../../assets/img/STB.jpg"), Name: 'Giới thiệu bạn bè', content: 'Thêm bạn - Thêm vui', linkRoute: 'Xem chi tiết', linkactive: 'register' },
    ];
}
