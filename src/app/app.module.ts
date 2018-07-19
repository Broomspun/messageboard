import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import {
MatButtonModule,
MatCardModule,
MatInputModule,
MatSnackBarModule,
MatToolbarModule,
MatIconModule,
} from '@angular/material';

import {WebService} from './shared/web.service';
import { MessagesComponent } from './compnents/messages/messages.component';
import { NewMessageComponent } from './compnents/new-message/new-message.component';
import { NabvarComponent } from './compnents/nabvar/nabvar.component';
import { HomeComponent } from './compnents/home/home.component';
import { RegisterComponent } from './compnents/register/register.component';
import {PasswordStrengthBarModule} from 'ng2-password-strength-bar';
import { LoginComponent } from './compnents/login/login.component';
import { UserComponent } from './compnents/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NabvarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PasswordStrengthBarModule,
    MatButtonModule, MatCardModule, MatSnackBarModule, MatToolbarModule, MatInputModule, MatIconModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
