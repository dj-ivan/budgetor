import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CacheService } from '../../../services/cache.service';
import { User } from '../../../types/user-model';

@Component({
  selector: 'app-setup-user',
  templateUrl: './setup-user.component.html',
  styleUrls: ['./setup-user.component.scss']
})
export class SetupUserComponent implements OnInit {
  public user: User;
  public income: number;

  constructor(public cache: CacheService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  public completeUserSetUp(firstName: string, lastName: string, emailAddress: string, userName: string, amount: Number) {
    // add income to memory 
    // this.db.database.ref('users/' + 1).set({
    //   username: 'ivan',
    //   email: 'test',
    //   income : amount
    // });

    // navigate to step 2 of the budgeting processz
    //this.router.navigate['/budget-setup'];

    this.user.firstName = firstName;
    this.user.lastName = lastName;    
    this.user.email = emailAddress;
    this.user.userName = userName;
    this.user.monthlyIncome = +amount;
    this.cache.user = this.user;
  }

}