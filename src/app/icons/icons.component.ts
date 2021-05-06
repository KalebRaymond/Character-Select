import { Component, OnInit, Input } from '@angular/core';
import { FighterIconComponent } from "../fighter-icon/fighter-icon.component";
import { Fighter } from "../fighter";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
	
	@Input("fighter_cast") fighter_cast: Fighter[];
	@Input("franchise") franchise: string;
	@Input("selected_fighter") selected_fighter: Fighter;

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
