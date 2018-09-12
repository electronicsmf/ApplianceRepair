import { Component, OnInit } from '@angular/core';
import { users } from './../data/user';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
   users: Array<any> = users;

  constructor() { }

  ngOnInit() {
  }

}
