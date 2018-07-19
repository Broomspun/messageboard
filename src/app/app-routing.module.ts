import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessagesComponent} from './compnents/messages/messages.component';
import {NewMessageComponent} from './compnents/new-message/new-message.component';
import {HomeComponent} from './compnents/home/home.component';
import {RegisterComponent} from './compnents/register/register.component';
import {LoginComponent} from './compnents/login/login.component';
import {UserComponent} from './compnents/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages/:user',
    component: MessagesComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
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
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
