import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms/forms";
import { Validators } from "@angular/forms/src/validators";
import { FormGroup } from "@angular/forms/src/forms";

@Component({
    selector: 'credit',
    templateUrl: './credit.html',
    styleUrls : ['./credit.css']
})
export class CreditComponent implements OnInit {

    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

    hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
    constructor() {
    }
    ngOnInit(): void {
    }
}