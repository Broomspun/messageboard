import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BASE_URL = 'http://localhost:5000/auth';
  BASE_URL = 'https://still-refuge-91726.herokuapp.com/auth';
  constructor(private http: HttpClient,
              private router: Router) { }


  get name() {
    return localStorage.getItem('name');
  }

  get isAuthenticated() {
    return !!localStorage.getItem('mytoken');

  }

  registerUser(user): Observable<any> {
    delete user.password1;
    return this.http.post(`${this.BASE_URL}/register`, user);
  }

  loginUser(user): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`, user);
  }

  getUser(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('mytoken')}`
      })
    };
    return this.http.get(`${this.BASE_URL}/users/me`, httpOptions);
  }

  updateUser(userData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('mytoken')}`
      })
    };
    return this.http.put(`${this.BASE_URL}/users/me`, userData, httpOptions);
  }
}
