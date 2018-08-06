import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './/home-routing.module';
import { HomeComponent } from './home.component';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
