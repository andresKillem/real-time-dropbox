import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './/login-routing.module';
import { LoginComponent } from './login.component';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    CustomMaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
