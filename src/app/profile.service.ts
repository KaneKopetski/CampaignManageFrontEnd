import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfilePayload} from './display-profile/profile-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) {

  }

  getProfile(username: string): Observable<ProfilePayload> {
    console.log('Profile service pulling: ' + username);
    return this.httpClient.get<ProfilePayload>('http://localhost:8080/api/users/get/' + username);
  }
}
