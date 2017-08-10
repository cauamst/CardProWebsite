import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="mdl-mega-footer card_pro_footer">
            <div class="mdl-mega-footer--middle-section">
                  
            </div>
            <div class="mdl-mega-footer--bottom-section">
                <div class="mdl-logo">
                   Sacombank
                </div>
                <ul class="mdl-mega-footer--link-list">
                    <li>Ngân hàng Sacombank Hội Sở - Địa chỉ 266-268 Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, Thành phố Hồ Chí Minh.</li>
                </ul>
            </div>
        </footer>
    `,
    styles: [`
        .card_pro_footer {
            margin-top: 80px;
         }

    `]
})
export class FooterComponent {}