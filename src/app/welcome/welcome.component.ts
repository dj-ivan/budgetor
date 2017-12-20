import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public income: number;

  constructor(auth: AngularFireAuth) { }

  ngOnInit() {
  }

  public logIn() {
    
  }
}
