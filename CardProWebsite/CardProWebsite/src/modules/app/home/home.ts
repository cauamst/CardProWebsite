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
            { image: require("../../../assets/img/ChungChiTienGui1600x530px_1.jpg") },
            { image: require("../../../assets/img/ComboDoanhNGhiep-1600x530px.jpg") },
            { image: require("../../../assets/img/CTKM-Contactless1600x530.jpg") },
            { image: require("../../../assets/img/DichVuKieuHoi1600x530px.jpg") },
            { image: require("../../../assets/img/DonThuSangNganQuaTang1600x530.jpg") },
            { image: require("../../../assets/img/Top40ThuongHIeu2017_1600x530.jpg") }
        );
    }
    private removeLastSlide() {
        this.slides.pop();
    }
    cardhome = [
        { id: 1, url: require("../../../assets/img/FamilyCard.jpg"), Name: 'Thẻ tín dụng', content: 'Tận hưởng cuộc sống thú vị và ngập tràn ưu đãi với thẻ tín dụng Sacombank - nguồn tài chính dự phòng thiết yếu cho mọi nhu cầu chi tiêu, mua sắm', linkRoute : 'Đăng ký' },
        { id: 2, url: require("../../../assets/img/MCworld.jpg"), Name: 'Thẻ thanh toán', content: 'Hơn cả tiền mặt, thẻ thanh toán Sacombank là phương tiện tài chính hiện đại được liên kết với tài khoản tiền gửi thanh toán của bạn để thực hiện nhiều chức năng: rút tiền, thanh toán, giao dịch trực tuyến...', linkRoute: 'Đăng ký' },
        { id: 3, url: require("../../../assets/img/Motorcard.jpg"), Name: 'Thẻ in hình', content: 'Thỏa sức sáng tạo chiếc thẻ độc đáo của riêng bạn và lưu giữ mọi khoảnh khắc tuyệt vời', linkRoute: 'Đăng ký' },
        { id: 4, url: require("../../../assets/img/UnionPaycard.jpg"), Name: 'Giới thiệu bạn bè', content: 'Thêm bạn - Thêm vui', linkRoute: 'Xem chi tiết' },
    ];


    
}
