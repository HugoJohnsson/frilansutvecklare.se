import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  registerUser(user){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.post('/users/register', user, {headers:headers});
  }

  loginUser(user){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('/users/auth', user, {headers:headers});
  }

  updateUser(updateUserObj){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('/users/update', updateUserObj, {headers:headers});
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    this.loadToken();
    return !this.jwtHelper.isTokenExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
