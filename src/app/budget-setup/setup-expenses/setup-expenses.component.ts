import { Component, OnInit } from '@angular/core';
import { Expense } from 'types/expense-model';
import { CacheService } from '../../../services/cache.service';
import { ExpenseCategory } from '../../../types/expense-model';

@Component({
  selector: 'app-setup-expenses',
  templateUrl: './setup-expenses.component.html',
  styleUrls: ['./setup-expenses.component.scss']
})
export class SetupExpensesComponent implements OnInit {

  public expenses: Expense[] = [
    {
      category: this.cache.expenseCategories[1],
      type: this.cache.expenseTypes[1],
      expenseId: 1,
      name: 'Rent',
      amount: 2344
    }
  ];
  public uniqueId = 0;
  public keys: string[];

  constructor(public cache: CacheService) { }

  ngOnInit() {
    this.keys = Object.keys(this.expenses);
  }

  public createNewExpense(amount, category, type, name) {
    let expense = new Expense();
    const expenseId = this.uniqueId++;
    expense = { amount, category, type, name, expenseId };

    this.expenses.push(expense);
  }

}
