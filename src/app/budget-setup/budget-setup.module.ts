import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupExpensesComponent } from './setup-expenses/setup-expenses.component';
import { SetupUserComponent } from './setup-user/setup-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SetupExpensesComponent, SetupUserComponent]
})
export class BudgetSetupModule { }
