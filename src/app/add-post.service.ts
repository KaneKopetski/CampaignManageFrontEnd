import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostPayload } from './add-post/post-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient) {

   }

   addPost(postPayload: PostPayload) {
    return this.httpClient.post('https://zcw-group3blogproject.cfapps.io/api/posts/', postPayload);
  }
  getAllPosts(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>('https://zcw-group3blogproject.cfapps.io/api/posts');
  }
  getPost(permaLink: number): Observable<PostPayload> {
    return this.httpClient.get<PostPayload>('https://zcw-group3blogproject.cfapps.io/api/posts/get/' + permaLink);
  }
}
