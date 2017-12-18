import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {
public debts = {};
  constructor() { }

  ngOnInit() {
  }

}
