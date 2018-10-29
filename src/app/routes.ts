import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../pages/auth/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomePage,canActivate:[AuthGuard] },
    { path: 'register', component: RegisterPage,canActivate:[AuthGuard] },
    { path: 'login', component: LoginPage,canActivate:[AuthGuard] },

    // { path: 'home', component: HomePage },
    // { path: 'register', component: RegisterPage },
    // { path: 'login', component: LoginPage },

    // { path : '', redirectTo:'register', pathMatch : 'full'}
    
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);