import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    styles: [`

.headline{
    width: 100%;
    border: 0 !important;
    display: block;
    margin: -10px 0;
    box-sizing: border-box;
}
address{
    line-height: 23px;
    color: #eee;
    margin-top: 20px;
    margin-bottom: 20px;
    font-style: normal;
}
h2 {
    border-bottom: 2px solid #3498db !important;
    color: #eee;
    font-weight: 200;
    font-size: 1.4em !important;
    padding-bottom: 0 !important;
}
    
`]
})
export class FooterComponent { }