import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { SignInComponent } from './container/sign-in/sign-in.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';
import { VerifyEmailComponent } from './container/verify-email/verify-email.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  // {
  //   path: 'sign-in',
  //   component: SignInComponent,
  // },
  {
    path: 'registration',
    component: SignUpComponent,
  },
  { 
    path: 'forgot-password', 
    component: ForgotPasswordComponent 
  },
  { 
    path: 'verify', 
    component: VerifyEmailComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
