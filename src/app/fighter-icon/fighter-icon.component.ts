import { Component, OnInit } from '@angular/core';
import { Fighter } from '../fighter';

@Component({
  selector: 'app-fighter-icon',
  templateUrl: './fighter-icon.component.html',
  styleUrls: ['./fighter-icon.component.css']
})
export class FighterIconComponent implements OnInit {

	fighter: Fighter = {
		id: 0,
		name: "Chun-Li",
		image: "",
	};
	
  constructor() { }

  ngOnInit(): void {
  }

}
