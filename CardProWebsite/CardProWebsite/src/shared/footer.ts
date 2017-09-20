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
ul {
    padding-left: 0 !important;
    list-style: none;
    margin-bottom: 10px;
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
.content-ul-inline li {
    margin : 15px;
}
.span-footer-address {
    margin-left: 30px !important;
}   
.sacombank-footer{
    text-align: center !important;
    background-color : rgba(109, 189, 246, 0.2) !important;
    margin-top: 15px;
    padding-bottom: 1px;
    padding-top: 18px;
}
@media (min-width: 840px) {
    .mdl-cell--4-col .mdl-cell--4-col-desktop. mdl-cell--4-col-desktop {
        width: calc(33.3333333333% - 1px) !important;
    }
}
@media screen and (max-width: 839px )
    .headline{
        width : 100%;
    }
    .content-ul-inline li {
        margin : 10px;
    }
}

`]
})
export class FooterComponent { }