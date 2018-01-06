import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public income: number;
  public newUser: AngularFireObject<any>;

  constructor(public db: AngularFireDatabase) {

  }

  ngOnInit() {
  }

  public addIncome(amount) {
    // this.db.database.ref('users/' + 1).set({
    //   username: 'ivan',
    //   email: 'test',
    //   income : amount
    // });

    //this.router.navigate['/budget-setup'];
  }
}
