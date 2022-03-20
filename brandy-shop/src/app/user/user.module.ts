import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoginComponent, RegisterComponent, ProfileComponent, CartComponent ]
})
export class UserModule { }
