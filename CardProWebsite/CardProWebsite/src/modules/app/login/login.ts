import { Component, OnInit, NgZone, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { appConfig } from '../../../app.config';
declare const gapi: any;

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit, AfterViewInit {
    @ViewChild("googleBtn") googleBtn: ElementRef;

    model: any = {};
    loading = false;
    returnUrl: string;
    auth2: any;
    private clientId: string = '916226986619-3l67d53pvpu0rrk9c80ea5t8rspg0mfe.apps.googleusercontent.com';
    private scope = [
        'profile'
    ].join(' ');

    constructor(
        private zone: NgZone,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    public attachSignin(element) {
        let that = this;
        console.log(this.auth2);
        console.log(element);
        this.auth2.attachClickHandler(element, {},
            (googleUser) => {

                let profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                //YOUR CODE HERE
            }, (error) => {
                console.log(JSON.stringify(error, undefined, 2));
            });
    }

    public googleInit() {
        let that = this;
        gapi.load('auth2', () => {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                scope: 'profile'
            });

            gapi.signin2.render('googleBtn', {
                'scope': 'profile',
                'width': 240,
                'height': 50,
                'longtitle': true,
                'theme': 'light',
                'onsuccess': (googleUser) => {
                        this.login(googleUser.getAuthResponse().access_token)
                }
            });
            //that.attachSignin(that.googleBtn);
        });
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout().subscribe((response) => {
            console.log(response);
            localStorage.removeItem("currentUser");

        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngAfterViewInit(): void {

        this.googleInit();
    }

    login(accessToken:string = null) {
        this.zone.run(() => {
            this.loading = true;
        });

        let service = !accessToken
            ? this.authenticationService.login(this.model.username, this.model.password)
            : this.authenticationService.oAuthLogin(appConfig.googleOAuth2AuthenticateUrl, accessToken);

        service
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