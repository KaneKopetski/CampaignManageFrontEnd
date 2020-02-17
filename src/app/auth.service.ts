// import { Injectable } from '@angular/core';
// import { RegisterPayload } from './auth/register-payload';
// import {HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {LoginPayload} from './auth/login-payload';
// import {JwtAuthResponse} from './jwt-auth-response';
// import {map} from 'rxjs/operators';
// import {LocalStorageService} from 'ngx-webstorage';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//
//   private url = 'http://localhost:8080/';
//
//   constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }
//
//   register(registerPayload: RegisterPayload): Observable<any> {
//     return this.httpClient.post(this.url + 'api/auth/register', registerPayload);
//   }
//
//   login(loginPayload: LoginPayload): Observable<boolean> {
//     return this.httpClient.post<JwtAuthResponse>(this.url + 'api/auth/login', loginPayload).pipe(map(data => {
//       this.localStorageService.store('authenticationToken', data.authenticationToken);
//       this.localStorageService.store('username', data.username);
//       return true;
//     }));
//   }
//   isAuthenticated(): boolean {
//     return this.localStorageService.retrieve('username') != null;
//   }
//
//   logout(){
//     this.localStorageService.clear('authenticationToken');
//     this.localStorageService.clear('username');
//   }
//
// }

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.afAuth
      .auth
      .signOut();
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      }).catch((error) => {
        console.log(error);
      });
  }


}
