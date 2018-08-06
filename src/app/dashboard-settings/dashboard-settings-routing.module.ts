import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardSettingsComponent } from './dashboard-settings.component';

const ROUTES: Routes = [
  {
    path: '',
    component: DashboardSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DashboardSettingsRoutingModule { }
