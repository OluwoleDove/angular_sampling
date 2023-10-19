import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
})
export class MathComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  stringres: string = '';

  add() {
    this.result = this.num1 + this.num2;
  }

  subtract() {
    this.result = this.num1 - this.num2;
  }

  multiply() {
    this.result = this.num1 * this.num2;
  }

  divide() {
    if (this.num2 !== 0) {
      this.result = this.num1 / this.num2;
    } else {
      this.stringres = 'Cannot divide by zero';
    }
  }
}
