import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskbar',
  templateUrl: './app-taskbar.component.html',
  styleUrls: ['./app-taskbar.component.css']
})
export class AppTaskbarComponent implements OnInit {
	inputA = 0;
	inputB = 0;
	result = "";

  constructor() { }

  ngOnInit(): void {
	  
  }
  
  getResult(): void
  {
	  var sum = this.inputA + this.inputB;
	  this.result = "" + this.inputA + " + " + this.inputB + " = " + sum;
  }
}
