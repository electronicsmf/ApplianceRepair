import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

constructor(private http: Http) { }

   getAllComments() {
       return this.http.get('data/comments.json').map(res => res.json());
   }
}
