import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { HelloComponent } from './home/hello';
import { ProductsComponent } from './products/products';
import { TechnologyComponent } from './technology/technology';
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
    { path: 'technology', component: TechnologyComponent, data: { title: 'Technology' } },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'home' },
];

export const routing = RouterModule.forRoot(routes);