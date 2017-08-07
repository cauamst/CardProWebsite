﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { HomeComponent } from './home/home';

import { HelloComponent } from './home/hello';
import { CardRegistrationComponent } from './cardRegistration/cardRegistration.component';
import { ProductsComponent } from './products/products';
import { TechnologyComponent } from './technology/technology';
import { AuthGuard } from './guard/auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { CardService } from './services/card.service';
import { HandShakeService } from './services/handshake.service';
import { LoginComponent } from './login/login.component';
import { CardProHttpProvider } from './helpers/cardProHttp';
import { CryptoUtils } from './helpers/cryptoUtils';
import { Carousel } from './home/carousel';
import { Slide } from './home/slide';
@NgModule({
    declarations: [
        HomeComponent,
        HelloComponent,
        ProductsComponent,
        TechnologyComponent,
        LoginComponent,
        CardRegistrationComponent,
        Carousel,
        Slide
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        HandShakeService,
        CardService,
        CardProHttpProvider,
        CryptoUtils,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ]
})
export class AppModule { }
