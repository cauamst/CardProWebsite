"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(route) {
        this.route = route;
        this.NextPhotoInterval = 3000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
        this.cardhome = [
            { id: 1, url: require("../../../assets/img/card1.jpg"), Name: 'Thẻ tín dụng', content: 'Tận hưởng cuộc sống thú vị và ngập tràn ưu đãi với thẻ tín dụng Sacombank - nguồn tài chính dự phòng thiết yếu cho mọi nhu cầu chi tiêu, mua sắm', linkRoute: 'Đăng ký' },
            { id: 2, url: require("../../../assets/img/card2.jpg"), Name: 'Thẻ thanh toán', content: 'Hơn cả tiền mặt, thẻ thanh toán Sacombank là phương tiện tài chính hiện đại được liên kết với tài khoản tiền gửi thanh toán của bạn để thực hiện nhiều chức năng: rút tiền, thanh toán, giao dịch trực tuyến...', linkRoute: 'Đăng ký' },
            { id: 3, url: require("../../../assets/img/card3.jpg"), Name: 'Thẻ in hình', content: 'Thỏa sức sáng tạo chiếc thẻ độc đáo của riêng bạn và lưu giữ mọi khoảnh khắc tuyệt vời', linkRoute: 'Đăng ký' },
            { id: 4, url: require("../../../assets/img/card_credit.jpg"), Name: 'Giới thiệu bạn bè', content: 'Thêm bạn - Thêm vui', linkRoute: 'Xem chi tiết' },
        ];
        this.heading = "Home";
        this.addNewSlide();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (x) { return _this.name = x.name; });
    };
    HomeComponent.prototype.addNewSlide = function () {
        this.slides.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
    };
    HomeComponent.prototype.removeLastSlide = function () {
        this.slides.pop();
    };
    return HomeComponent;
}());
HomeComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.html',
        styleUrls: ['./home.css'],
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map