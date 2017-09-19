import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    styles: [`

.headline{
    width: 85%;
    border: 0 !important;
    display: block;
    margin: -10px 0;
    box-sizing: border-box;
}
ul {
    padding-left: 0 !important;
    list-style: none;
    margin-bottom: 10px;
}
.sacombank-width-li{
    width: 85%;
}
address{
    line-height: 23px;
    color: #eee;
    margin-bottom: 10px;
    font-style: normal;
}
h2 {
    border-bottom: 2px solid #faddd5 !important;
    color: #eee;
    font-weight: 200;
    font-size: 1.4em !important;
    padding-bottom: 0 !important;
}
a{
    color : #fff !important;
    cursor: pointer;
}
.position-arrow {
    position: absolute !important;
}
li i {
    float : right;
}
.image-li{
    height : 40px;
    width : 80px;
    vertical-align: middle;
    border: 0;
}
.content-ul-inline{
    display : -webkit-box;
}
.span-footer-address {
    margin-left: 30px !important;
}   
.sacombank-footer{
    text-align: center !important;
    background-color : rgba(109, 207, 246, 0.48) !important !important;
    margin-top: 15px;
    padding-bottom: 10px;
    padding-top: 10px;
}
`]
})
export class FooterComponent { }