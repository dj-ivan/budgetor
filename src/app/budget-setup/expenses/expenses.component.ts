import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
public fixedExpenses = [];
public variableExpenses = [];
  constructor() { }

  ngOnInit() {
  }

}
