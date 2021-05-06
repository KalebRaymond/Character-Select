import { Component, OnInit } from '@angular/core';
import { MARVEL_CAST } from "../marvel_cast";
import { CAPCOM_CAST } from "../capcom_cast";
import { Fighter } from "../fighter";

@Component({
  selector: 'app-select-area',
  templateUrl: './select-area.component.html',
  styleUrls: ['./select-area.component.css']
})
export class SelectAreaComponent implements OnInit {
	marvel_cast = MARVEL_CAST;
	marvel = "marvel";
	capcom_cast = CAPCOM_CAST;
	capcom = "capcom";
	
	cpu_fighter = CAPCOM_CAST[18]; //Morrigan
	
	random_icon = {
		id: -1,
		name: "",
	};
	
	constructor() { }

	ngOnInit(): void {
	}
}
