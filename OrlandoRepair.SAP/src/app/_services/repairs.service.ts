import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RepairsService {

constructor(private http: Http) { }

  getAllRepairs() {
    return this.http.get('data/repairs.json').map(res => res.json());
  }

}
