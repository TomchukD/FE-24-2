import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/page/home/home.component';
import { LoginComponent } from 'src/app/page/login/login.component';
import { RegistrationComponent } from 'src/app/page/reg/registration.component';
import { ShopComponent } from 'src/app/page/shop/shop.component';
import { WrapRouterComponent } from 'src/app/page/wrap-router/wrap-router.component';
import { CreateItemComponent } from 'src/app/page/create-item/create-item.component';
import { AppWrapComponent } from 'src/app/page/app-wrap/app-wrap.component';
import { authGuard } from 'src/app/page/guard/auth.guard';


export enum AppRoutes {
    WRAP = '',
    HOME = 'home',
    APP = 'app',
    LOGIN = 'login',
    REGISTRATION = 'registration',
    SHOP = 'shop',
    EDIT_ITEM = 'edit',
    EDIT_ITEM_ID = 'edit/:id',

}

export const routes: Routes = [
    {
      path: AppRoutes.WRAP,
      redirectTo: AppRoutes.LOGIN,
      pathMatch: 'full'
    },
    {
        path: AppRoutes.LOGIN,
        title: 'Login',
        data: {breadcrumb: 'Login'},
        component: LoginComponent
    },
    {
        path: AppRoutes.REGISTRATION,
        title: 'REGISTRATION',
        data: {breadcrumb: 'Registration'},
        component: RegistrationComponent
    },
    {
        path: AppRoutes.APP,
        component: AppWrapComponent,
        canActivate: [authGuard],
        children: [
            {
                path: AppRoutes.SHOP,
                title: 'SHOP',
                component: WrapRouterComponent,
                children: [
                    {
                        path: AppRoutes.WRAP,
                        component: ShopComponent,
                        data: {breadcrumb: 'Shop List'}
                    },
                    {
                        path: AppRoutes.EDIT_ITEM_ID,
                        title: 'EDIT_ITEM_ID',
                        data: {breadcrumb: 'Edit Item'},
                        component: CreateItemComponent
                    }
                ]
            },
            {
                path: AppRoutes.HOME,
                title: 'Home',
                component: HomeComponent
            },
        ]
    },

    {
        path: '**',
        redirectTo: AppRoutes.HOME
    }
];
