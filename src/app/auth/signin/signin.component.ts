import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { AlertService } from '../../services/index';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    
    if (email == '' || password == '')
      this.alertService.error('Please type login and password before trying authentication.');
    else
    {
      this.authService.signinUser(email, password).subscribe(
            data => this.saveJwt(data),
            err => this.logError(err) ,
            () => console.log('done')
      );
    }
  }

  saveJwt(jwt: string) {
    
    console.log('saveJwt:' + jwt);
    
    if(jwt) 
      localStorage.setItem('token', jwt)

    this.router.navigate(['/products']);
  }

  logError(err: any) {
      console.log('erro: ' + err);
      
      localStorage.setItem('token', '');

      if (err.status == 401)
        this.alertService.error('Your user don\'t have permission to access this system.');
      else
        this.alertService.error('Authentication error. Repeat the operation. If the problem persists, contact support.');
  }
}
