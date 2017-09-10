import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { appConfig } from '../../../app.config';
declare const gapi: any;

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private zone: NgZone,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
		var currentUser = localStorage.getItem("currentUser");
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

		if(currentUser){
			 this.authenticationService.logout().subscribe((response) => {
				console.log(response);
				localStorage.removeItem("currentUser");
			});
		} else {
			this.router.navigate([this.returnUrl]);
		}
		
    }

    login() {
        this.zone.run(() => {
            this.loading = true;
        });
		this.authenticationService.login(this.model.username, this.model.password) 
            .subscribe(
				data => {
					console.log(data);
					this.router.navigate([this.returnUrl]);
				},
				error => {
					this.alertService.error(error);
					this.loading = false;
				});
    }
}