import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FighterIconComponent } from "../fighter-icon/fighter-icon.component";
import { Fighter } from "../fighter";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
	@Input() fighter_cast: Fighter[];
	@Input() franchise: string;
	@Output() selection_event = new EventEmitter<Fighter>();

	
	constructor() { }

	ngOnInit(): void { }

	onHover(fighter): void
	{
		console.log(fighter.id);
	}

	onClick(fighter): void
	{
		//Send the selected fighter to the select-area component to update the fighter-preview
		this.selection_event.emit(fighter);
		console.log(fighter.name);
	}
}
