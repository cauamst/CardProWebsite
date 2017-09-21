import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductsComponent } from './products/products';
import { CardRegistrationComponent } from './cardRegistration/cardRegistration.component';
import { LoginComponent } from './login/login';
import { AuthGuard } from './guard/auth.guard';
import { CreditComponent } from './register-credit/credit';
import { LoginLayoutComponent } from './_login/login';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent, data: { title: 'Trang chủ', name: 'CardProWebsite',icon: "home" } },
    { path: 'products', component: ProductsComponent, data: { title: 'Products', icon: ""  }, canActivate: [AuthGuard] },
    { path: 'cardRegistration', component: CardRegistrationComponent, data: { title: 'Card Registration' }, canActivate: [AuthGuard] },
    {
        path: 'register', component: CreditComponent, data: { title: 'Dịch vụ thẻ', icon: "credit_card",submenu: ["Thẻ tín dụng","Thẻ thanh toán","Thẻ in hình","Giới thiệu bạn bè"] }, 

    },
    {
        path: 'Login', component: LoginLayoutComponent, data: { title: 'Đăng nhập',icon:"vpn_key" }
    },
    { path: 'login', component: LoginComponent,data: { title: 'Đăng nhập',icon:"" } },
    
    { path: '**', redirectTo: 'home' },
];

export const routing = RouterModule.forRoot(routes);