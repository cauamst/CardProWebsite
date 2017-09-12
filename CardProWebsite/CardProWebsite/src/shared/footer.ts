import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="android-footer mdl-mega-footer">
            <div class="mdl-mega-footer--top-section">
            <div class="mdl-mega-footer--left-section">
              <button class="mdl-mega-footer--social-btn"></button>
              &nbsp;
              <button class="mdl-mega-footer--social-btn"></button>
              &nbsp;
              <button class="mdl-mega-footer--social-btn"></button>
            </div>
          </div>
            <div class="mdl-mega-footer--bottom-section">
                <a class="android-link mdl-typography--font-light" href="__">Trang chủ</a>
                <a class="android-link mdl-typography--font-light" href="__">Liên hệ</a>
                <a class="android-link android-link-menu mdl-typography--font-light" id="version-dropdown">
                   Trợ giúp
                    <i class="material-icons">arrow_drop_up</i>
                </a>
               
                <ul class="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="version-dropdown">
                    <li class="mdl-menu__item">Trang chủ</li>
                    <li class="mdl-menu__item">Đăng ký nhanh</li>
                    <li class="mdl-menu__item">Khuyến mãi</li>
                    <li class="mdl-menu__item">Sản phẩm</li>
                </ul>
                <a class="android-link android-link-menu mdl-typography--font-light" id="developers-dropdown">
                    Điều hướng nhanh
                    <i class="material-icons">arrow_drop_up</i>
                </a>
                <ul class="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="developers-dropdown">
                    <li class="mdl-menu__item">Trang chủ</li>
                    <li class="mdl-menu__item">Đăng ký thẻ</li>
                    <li class="mdl-menu__item">Trợ giúp</li>
                    <li class="mdl-menu__item">Liên hệ</li>
                </ul>
               
            </div>
            <div class="mdl-mega-footer--middle-section">
                <p class="mdl-typography--font-light">Địa chỉ hội sở: 266-268, Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, Hồ Chí Minh: Ngân hàng Sacombank, Trung tâm thẻ Sacombank.</p>
            </div>
        </footer>
    `,
})
export class FooterComponent { }