import { Component, OnInit } from '@angular/core';
import { CommentsService } from './../_services/comments.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  comments: Array<any>;
  error: string;

  constructor(private commentsService: CommentsService ) { }

  ngOnInit() {
     this.commentsService.getAllComments()
         .subscribe(
           data => this.comments = data,
           error => this.error = error.statusText
         );
  }

}
