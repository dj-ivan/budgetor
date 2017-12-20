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

  constructor(db: AngularFireDatabase) {
    this.newUser = db.object('item');
  }

  ngOnInit() {
  }

  public addIncome(amount) {
    console.log(amount)
    this.newUser.set({ income: amount });
  }
}
