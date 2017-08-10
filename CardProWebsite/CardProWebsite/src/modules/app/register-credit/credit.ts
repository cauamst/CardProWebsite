import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms/forms";
import { Validators } from "@angular/forms/src/validators";
import { FormGroup } from "@angular/forms/src/forms";

@Component({
    selector: 'credit',
    templateUrl: './credit.html',
    styleUrls: ['./credit.css']
})
export class CreditComponent implements OnInit {

    button = [
        { director: 'Button1' },
        { director: 'Button2' },
        { director: 'Button3' },
        { director: 'Button4' },
    ];

    constructor() {
    }
    ngOnInit(): void {
    }
}