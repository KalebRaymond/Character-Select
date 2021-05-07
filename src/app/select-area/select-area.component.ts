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
	
	player_fighter = MARVEL_CAST[0];
	cpu_fighter = CAPCOM_CAST[18]; //Morrigan
	
	random_icon = {
		id: -1,
		name: "",
	};
	
	constructor() { }

	ngOnInit(): void {
	}
	
	changePlayerFighter(fighter: Fighter)
	{
		this.player_fighter = fighter;
	}
	
	//Return a random integer between 0 and max inclusive
	getRandomIndex(max: number): number
	{
		max = Math.floor(max);
		return Math.floor(Math.random() * (max + 1));
	}
	
	setPlayerRandom()
	{
		var franchise;
		var n = Math.random();
		
		if(n <= .5)
		{
			franchise = this.marvel_cast;
		}
		else
		{
			franchise = this.capcom_cast;
		}
		
		var fighter_index = this.getRandomIndex(franchise.length);
		
		this.player_fighter = franchise[fighter_index];
	}
}
