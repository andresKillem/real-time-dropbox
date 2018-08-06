import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloader } from './utils/custom-preloader';

const ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    data: { preload: true }
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true }
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    data: { preload: true }
  },
  {
    path: 'dashboard-settings',
    loadChildren: './dashboard-settings/dashboard-settings.module#DashboardSettingsModule',
    data: { preload: true }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { 
    path: '**', 
    redirectTo: 'login'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreloader })],
  exports: [RouterModule],
  providers: [CustomPreloader]
})
export class AppRoutingModule { }
