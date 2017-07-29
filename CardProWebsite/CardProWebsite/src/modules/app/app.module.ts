import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { HomeComponent } from './home/home';
import { HelloComponent } from './home/hello';
import { ProductsComponent } from './products/products';
import { TechnologyComponent } from './technology/technology';
import { AuthGuard } from './guard/auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { CardService } from './services/card.service';
import { LoginComponent } from './login/login.component';
import { CardProHttpProvider } from './helpers/cardProHttp';

@NgModule({
    declarations: [
        HomeComponent,
        HelloComponent,
        ProductsComponent,
        TechnologyComponent,
        LoginComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        CardService,
        CardProHttpProvider
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ]
})
export class AppModule { }
