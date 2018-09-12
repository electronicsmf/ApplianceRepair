import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImagesService {

constructor(private http: Http) { }

    getAllImages() {
      return this.http.get('data/images.json').map(res => res.json());
    }
}
