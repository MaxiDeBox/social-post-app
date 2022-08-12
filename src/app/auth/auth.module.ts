import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './container/sign-in/sign-in.component';
import { RegistrationUserComponent } from './container/registration-user/registration-user.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './container/verify-email/verify-email.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SignInComponent,
    RegistrationUserComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
