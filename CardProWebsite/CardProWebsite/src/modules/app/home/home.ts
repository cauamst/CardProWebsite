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
            { image: require("../../../assets/img/grab1660x660.jpg"), linkpromotion: "https://khuyenmai.sacombank.com/chuong-trinh-khuyen-mai/the/plus-day/giam-50000-vnd-cho-3-chuyen-grabbike-va-grabcar-voi-ma-grabsacom-danh-cho-chu-the-sacombank" },
            { image: require("../../../assets/img/banner-1600-x-600-px.jpg"), linkpromotion: "https://khuyenmai.sacombank.com/chuong-trinh-khuyen-mai/the/chuong-trinh-khuyen-mai-the/thanh-toan-qua-samsung-pay-nhan-ve-cgv-sac-power-bank" },
            { image: require("../../../assets/img/CTKM-Contactless1600x530.jpg"), linkpromotion: "https://khuyenmai.sacombank.com/chuong-trinh-khuyen-mai/the/chuong-trinh-khuyen-mai-the/cham-the-sacombank-de-thanh-toan-nhan-uu-dai" },
            { image: require("../../../assets/img/Banner-1200x350px.jpg"), linkpromotion:"https://card.sacombank.com.vn/RecommenderInfo.aspx" },
            { image: require("../../../assets/img/banner-web-km-sacombank_1600x660px.jpg"), linkpromotion: "https://khuyenmai.sacombank.com/chuong-trinh-khuyen-mai/the/chuong-trinh-khuyen-mai-the/uu-dai-danh-rieng-cho-chu-the-sacombank-jcb" },
        );
    }
    private removeLastSlide() {
        this.slides.pop();
    }
    cardhome = [
        { id: 1, url: require("../../../assets/img/Infinitecard_Front.jpg"), Name: 'Thẻ tín dụng', content: 'Mua trước trả sau miễn đến lãi 55 ngày', linkRoute : 'Đăng ký',linkactive:'register'},
        { id: 2, url: require("../../../assets/img/MCworld.jpg"), Name: 'Thẻ thanh toán', content: 'Phá bỏ giới hạn không gian và thỏa sức chi tiêu trên toàn thế giới', linkRoute: 'Đăng ký', linkactive:'https://vn.search.yahoo.com/yhs/search?hspart=blp&hsimp=yhs-default&type=hmp_060_695_0&p=sass-lang&rnd=654066875&param1=sid%3D695%3Aaid%3D060%3Aver%3D0%3Atm%3D-1%3Asrc%3Dhmp%3Alng%3Den%3Aitype%3De%3Auip%3D1732208930%3Aup%3Dc2Fzcy1sYW5n' },
        { id: 3, url: require("../../../assets/img/VisaCreditGold.jpg"), Name: 'Thẻ in hình', content: 'Thỏa sức sáng tạo theo phong cách của riêng bạn', linkRoute: 'Đăng ký', linkactive: 'register' },
        { id: 4, url: require("../../../assets/img/STB.jpg"), Name: 'Giới thiệu bạn bè', content: 'Thêm bạn - Thêm vui', linkRoute: 'Xem chi tiết', linkactive: 'register' },
    ];
}
