import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  token: string;
  errorMsg: string;

  private url: string = "http://localhost:60757/api/Auth";

  constructor(private router: Router, private http: Http) {}

  signupUser(email: string, password: string) {
    
  }

  signinUser(email: string, password: string) {

    let usr = new User();
    usr.Login = email;
    usr.Password = password;
   
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
   
    return this.http.post(this.url, 
              JSON.stringify(usr), {headers: headers} )
            .map((res:any) => res.json());
  }
  
  logout() {
    localStorage.setItem('token', '');
    
    this.router.navigate(['/signin']);
  }

  getToken() {
    localStorage.getItem("token");
  }

  isAuthenticated() {
    return localStorage.getItem("token") != '';
  }
}

class User {
  Login:    string;
  Password: string;
}
