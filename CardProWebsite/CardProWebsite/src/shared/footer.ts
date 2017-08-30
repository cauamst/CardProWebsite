import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="android-footer mdl-mega-footer">
            <div class="mdl-mega-footer--middle-section">
                <p class="mdl-typography--font-light"> 266-268, Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, Hồ Chí Minh: Ngân hàng Sacombank, Trung tâm thẻ Sacombank.</p>
            </div>
            <div class="mdl-mega-footer--bottom-section">
 <a class="android-link mdl-typography--font-light" href="">Trang chủ</a>
                <a class="android-link mdl-typography--font-light" href="">Privacy Policy</a>
                <a class="android-link android-link-menu mdl-typography--font-light" id="version-dropdown">
                    Versions
                    <i class="material-icons">arrow_drop_up</i>
                </a>
               
                <ul class="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="version-dropdown">
                    <li class="mdl-menu__item">5.0 Lollipop</li>
                    <li class="mdl-menu__item">4.4 KitKat</li>
                    <li class="mdl-menu__item">4.3 Jelly Bean</li>
                    <li class="mdl-menu__item">Android History</li>
                </ul>
                <a class="android-link android-link-menu mdl-typography--font-light" id="developers-dropdown">
                    For Developers
                    <i class="material-icons">arrow_drop_up</i>
                </a>
                <ul class="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="developers-dropdown">
                    <li class="mdl-menu__item">App developer resources</li>
                    <li class="mdl-menu__item">Android Open Source Project</li>
                    <li class="mdl-menu__item">Android SDK</li>
                    <li class="mdl-menu__item">Android for Work</li>
                </ul>
               
            </div>
        </footer>
    `,
})
export class FooterComponent { }