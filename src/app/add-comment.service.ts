import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentPayload} from './add-comment/comment-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCommentService {

  constructor(private httpClient: HttpClient){

  }

  addComment(commentPayLoad: CommentPayload){
    return this.httpClient.post('https://zcw-group3blogproject.cfapps.io/api/comments', commentPayLoad);
  }

  getAllComments(postId: Number): Observable<Array<CommentPayload>>{
    return this.httpClient.get<Array<CommentPayload>>('https://zcw-group3blogproject.cfapps.io/api/comments/post/' + postId);
  }

  getComment(permaLink: Number):Observable<CommentPayload>{
    return this.httpClient.get<CommentPayload>('https://zcw-group3blogproject.cfapps.io/api/comments/get/' + permaLink);
  }
}
