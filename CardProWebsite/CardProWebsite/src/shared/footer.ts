import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="mdl-mega-footer">
            <div class="mdl-mega-footer--middle-section">
                  
            </div>
            <div class="mdl-mega-footer--bottom-section">
                <div class="mdl-logo">
                    More Information
                </div>
                <ul class="mdl-mega-footer--link-list">
                    <li><a href="https://github.com/ServiceStack/ServiceStackVS">ServiceStack VS.NET Templates</a></li>
                </ul>
            </div>
        </footer>
    `
})
export class FooterComponent {}