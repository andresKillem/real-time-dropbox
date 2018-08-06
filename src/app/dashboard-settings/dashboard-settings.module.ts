import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSettingsRoutingModule } from './/dashboard-settings-routing.module';
import { DashboardSettingsComponent } from './dashboard-settings.component';
import { FormsModule }    from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardSettingsRoutingModule,
    FormsModule,
    FileUploadModule,
    CustomMaterialModule,
  ],
  declarations: [DashboardSettingsComponent]
})
export class DashboardSettingsModule { }
