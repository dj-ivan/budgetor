import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
public income: number;

  constructor() { }

  ngOnInit() {
  }

   public addIncome(value: number) {
     this.income = value;
     console.log(this.income);
   }

}
