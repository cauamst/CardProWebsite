import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductsComponent } from './products/products';
import { TechnologyComponent } from './technology/technology';
import { CardRegistrationComponent } from './cardRegistration/cardRegistration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent, data: { title: 'Home', name: 'Angular4' } },
    { path: 'products', component: ProductsComponent, data: { title: 'Products' }, canActivate: [AuthGuard] },
    { path: 'cardRegistration', component: CardRegistrationComponent, data: { title: 'Card Registration' }, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'home' },
];

export const routing = RouterModule.forRoot(routes);