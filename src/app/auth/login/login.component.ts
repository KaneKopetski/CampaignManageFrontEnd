// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { LoginPayload} from '../login-payload';
// import { AuthService } from 'src/app/auth.service';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//
// loginForm: FormGroup;
// loginPayload: LoginPayload;
//
// constructor(private authService: AuthService, private router: Router) {
//   this.loginForm = new FormGroup({
//     username: new FormControl(),
//     password: new FormControl()
//   });
//   this.loginPayload = {
//     username: '',
//     password: ''
//   };
// }
//
//   ngOnInit() {
//   }
//   onSubmit() {
//     this.loginPayload.username = this.loginForm.get('username').value;
//     this.loginPayload.password = this.loginForm.get('password').value;
//
//     this.authService.login(this.loginPayload).subscribe(data => {
//       if (data) {
//         console.log('login success');
//         this.router.navigateByUrl('/campaigns');
//
//       } else {
//         console.log('Login failed');
//       }
//     });
//   }
// }

import {Component, NgZone} from '@angular/core';
import { AuthService} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email: string;
  password: string;

  constructor(public authenticationService: AuthService) {

  }

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }

  googleLogin() {
    this.authenticationService.GoogleAuth();
  }

}
