import { Component, OnInit } from '@angular/core';
import {CommentPayload} from "../add-comment/comment-payload";
import {ActivatedRoute} from "@angular/router";
import {AddCommentService} from "../add-comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: CommentPayload;
  permaLink: number;

  constructor(private router: ActivatedRoute, private commentService: AddCommentService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['commentId'];
    });
    this.commentService.getComment(this.permaLink).subscribe((data: CommentPayload) => {
      this.comment = data;
      console.log('data');
    }, (err: any) => {
      console.log('Failure Response');
    });
  }

}
