import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommentPayload} from "./comment-payload";
import {AddCommentService} from "../add-comment.service";
import {Router} from "@angular/router";
import { Subscription } from 'rxjs';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  addCommentForm: FormGroup;
  commentPayload: CommentPayload;
  body = new FormControl('');
  postId = '';
  private routeSub: Subscription;

  constructor(private addcommentService: AddCommentService, private router: Router, private route: ActivatedRoute) {
    this.addCommentForm = new FormGroup({
      body: this.body
    
    });
    this.commentPayload = {
      postId: '',
      username: '',
      content: ''
        };
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
     this.postId = params['postId']
    });
  }

  //scope.saveComment=function(){
   // var postID=scope.postInstance._id,

   

  addComment() {
    this.commentPayload.postId = this.postId;
    this.commentPayload.content = this.addCommentForm.get('body').value;
    this.addcommentService.addComment(this.commentPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
  }
}

