import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

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
    console.log(this.value);
  }


}
