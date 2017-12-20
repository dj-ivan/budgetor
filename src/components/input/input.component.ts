import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label = 'Enter Moneys!';
  public value: number;
  constructor() { }

  ngOnInit() {
  }

  public getValue(value: number) {
    this.value = value;
  }
}
