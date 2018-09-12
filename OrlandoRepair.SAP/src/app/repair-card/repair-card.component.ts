import { Component, OnInit, Input } from '@angular/core';
import { Repair } from './../repair';

@Component({
  selector: 'app-repair-card',
  templateUrl: './repair-card.component.html',
  styleUrls: ['./repair-card.component.css']
})
export class RepairCardComponent implements OnInit {

  @Input('repair') repair: Repair;

  constructor() { }

  ngOnInit() {
     let type = this.repair.type;

  }

}
