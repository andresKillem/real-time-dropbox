import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CustomMaterialModule } from '../custom-material.module';
import { FormsModule }    from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    FileUploadModule,
    CustomMaterialModule,
    PdfViewerModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
