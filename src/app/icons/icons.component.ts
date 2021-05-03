import { Component, OnInit } from '@angular/core';
import { FighterIconComponent } from "../fighter-icon/fighter-icon.component";
import { Fighter } from "../fighter";
import { FIGHTER_CAST } from "../fighter_cast";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
	
	fighter_cast = FIGHTER_CAST;
	selected_fighter = FIGHTER_CAST[0];

	constructor() { }

	ngOnInit(): void
	{
		/*  
		  this.selected_fighter = {
			  id: -1,
			  name: "test,
		  }
		*/
	}

	onHover(fighter): void
	{
		console.log(fighter.id);
	}

	onClick(fighter): void
	{
		this.selected_fighter = fighter;
		console.log(fighter.name);
	}
}
