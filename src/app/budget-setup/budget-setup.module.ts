import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses/expenses.component';
import { DebtsComponent } from './debts/debts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExpensesComponent, DebtsComponent]
})
export class BudgetSetupModule { }
