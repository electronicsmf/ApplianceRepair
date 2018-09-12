import { Component, OnInit } from '@angular/core';
import { RepairsService } from './../_services/repairs.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repairs: Array<any>;
  error: string;

  constructor(private repairsService: RepairsService) { }

  ngOnInit() {
      this.repairsService.getAllRepairs()
          .subscribe(
             data => this.repairs = data,
             error => this.error = error.statusText
          );
  }
}
