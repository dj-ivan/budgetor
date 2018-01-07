import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CacheService } from '../../services/cache.service';
import { User } from '../../types/user-model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public user: User;
  public income: number;

  constructor(public cache: CacheService) {

  }

  ngOnInit() {
  }

  public addIncome(amount) {
    // add income to memory
    // this.db.database.ref('users/' + 1).set({
    //   username: 'ivan',
    //   email: 'test',
    //   income : amount
    // });

    // navigate to step 2 of the budgeting processz
    //this.router.navigate['/budget-setup'];
  }
}
