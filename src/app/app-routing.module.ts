import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessagesComponent} from './compnents/messages/messages.component';
import {HomeComponent} from './compnents/home/home.component';
import {RegisterComponent} from './compnents/register/register.component';
import {LoginComponent} from './compnents/login/login.component';
import {UserComponent} from './compnents/user/user.component';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'messages/:user',
    component: MessagesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'messages',
    component: MessagesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: UserComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
