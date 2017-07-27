import { Component } from '@angular/core';

@Component({
    selector: 'products', 
    templateUrl:'products.html',
    styleUrls: ['products.scss']
})
export class ProductsComponent {
    heading: string;

    constructor() {
        this.heading = "Products";
    }
}