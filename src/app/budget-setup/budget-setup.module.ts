import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses/expenses.component';
import { DebtsComponent } from './debts/debts.component';
import { SetupUserComponent } from './setup-user/setup-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExpensesComponent, DebtsComponent, SetupUserComponent]
})
export class BudgetSetupModule { }
