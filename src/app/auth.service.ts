import { Injectable } from '@angular/core';
import { RegisterPayload } from './auth/register-payload';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginPayload} from './auth/login-payload';
import {JwtAuthResponse} from './jwt-auth-response';
import {map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/';

  constructor(private httpClient : HttpClient, private localStorageService: LocalStorageService) { }

  register(registerPayload: RegisterPayload) : Observable<any> {
    return this.httpClient.post(this.url + 'api/auth/register', registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAuthResponse>(this.url + 'api/auth/login', loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }
  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }

  logout(){
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
  }

}
