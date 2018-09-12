import { Component, OnInit } from '@angular/core';
import { repairs } from './../Data/repairs';
import { areas } from './../Data/areas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  repairs: Array<any> = repairs;
  areas: Array<any> = areas;

  constructor() { }

  ngOnInit() {
  }
}
