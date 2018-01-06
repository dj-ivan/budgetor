import { Injectable } from '@angular/core';
import { User } from '../types/user-model';

@Injectable()
export class MemoryService {
  public user: User;
  constructor() {

  }
}