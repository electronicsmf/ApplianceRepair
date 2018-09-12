import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repairs: Array<any>;
  error: string;

  constructor(private http: Http) { }

  ngOnInit() {
      this.http.get('data/repairs.json')
          .map(res => res.json())
          .subscribe(
             data => this.repairs = data,
             error => this.error = error.statusText
          );
  }
}
