import { Injectable } from '@angular/core';
import { User } from '../types/user-model';
import { Expense, ExpenseCategory, ExpenseType } from '../types/expense-model';

@Injectable()
export class CacheService {

  public user: User = new User();
  public expenses: Expense[] = [];

  constructor() {}
}