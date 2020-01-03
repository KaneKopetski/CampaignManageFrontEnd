import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {RegisterPayload} from '../register-payload';
import {AuthService} from 'src/app/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload: RegisterPayload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router ) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      aboutMe: ''

    });
    this.registerPayload = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      aboutMe: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
   this.registerPayload.username = this.registerForm.get('username').value;
   this.registerPayload.email = this.registerForm.get('email').value;
   this.registerPayload.password =  this.registerForm.get('password').value;
   this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
   this.registerPayload.firstName = this.registerForm.get('firstName').value;
   this.registerPayload.lastName = this.registerForm.get('lastName').value;
   this.registerPayload.aboutMe = this.registerForm.get('aboutMe').value;

   this.authService.register(this.registerPayload).subscribe(data => {
      console.log('register success!');
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('register failed...');
    });
  }
}
