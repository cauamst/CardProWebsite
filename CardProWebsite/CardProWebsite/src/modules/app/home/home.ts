import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloComponent } from './hello';
import { Slide } from './slide';

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
    cardhome = [
        { id: 1, url: require("../../../assets/img/card1.jpg"), Name: 'Thẻ tín dụng', content: 'Tận hưởng cuộc sống thú vị và ngập tràn ưu đãi với thẻ tín dụng Sacombank - nguồn tài chính dự phòng thiết yếu cho mọi nhu cầu chi tiêu, mua sắm', linkRoute : 'Đăng ký' },
        { id: 2, url: require("../../../assets/img/card2.jpg"), Name: 'Thẻ thanh toán', content: 'Hơn cả tiền mặt, thẻ thanh toán Sacombank là phương tiện tài chính hiện đại được liên kết với tài khoản tiền gửi thanh toán của bạn để thực hiện nhiều chức năng: rút tiền, thanh toán, giao dịch trực tuyến...', linkRoute: 'Đăng ký' },
        { id: 3, url: require("../../../assets/img/card3.jpg"), Name: 'Thẻ in hình', content: 'Thỏa sức sáng tạo chiếc thẻ độc đáo của riêng bạn và lưu giữ mọi khoảnh khắc tuyệt vời', linkRoute: 'Đăng ký' },
        { id: 4, url: require("../../../assets/img/card_credit.jpg"), Name: 'Giới thiệu bạn bè', content: 'Thêm bạn - Thêm vui', linkRoute: 'Xem chi tiết' },
    ];


    
}
