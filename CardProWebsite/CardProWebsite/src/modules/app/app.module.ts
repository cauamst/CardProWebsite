import { NgModule } from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HomeComponent } from './home/home';
import { CardRegistrationComponent } from './cardRegistration/cardRegistration.component';
import { ProductsComponent } from './products/products';
import { AuthGuard } from './guard/auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { CardService } from './services/card.service';
import { HandShakeService } from './services/handshake.service';
import { LoginComponent } from './login/login';
import { CardProHttpProvider } from './helpers/cardProHttp';
import { CryptoUtils } from './helpers/cryptoUtils';
import { Carousel } from './home/carousel';
import { Slide } from './home/slide';
import { CreditComponent } from './register-credit/credit';
import { CarouselComponent } from './carousel/carousel';
import { LoginLayoutComponent } from './_login/login';
import { BrowserModule } from '@angular/platform-browser';

import { DialogComponent } from './register-credit/dialog';

import { CompareComponent } from './register-credit/compare';
import { Accordion, AccordionGroup } from './register-credit/accordion';

import { PointTransformService } from './services/pointTransform.service';
import { TransformSlider } from './transformSlider/TransformSlider';

import { Loader } from './directives/loader.directive';
@NgModule({
    declarations: [
        Loader,
        HomeComponent,
        ProductsComponent,
        LoginComponent,
        CardRegistrationComponent,
        Carousel,
        CreditComponent,
        CarouselComponent,
        LoginLayoutComponent,
        DialogComponent,
        CompareComponent,
        Slide,
        Accordion,
        AccordionGroup,
        TransformSlider
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        HandShakeService,
        CardService,
        CardProHttpProvider,
        CryptoUtils,
        PointTransformService
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule
    ]
})
export class AppModule { }
