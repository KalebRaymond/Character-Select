import { Component, OnInit, Input } from '@angular/core';
import { Fighter } from "../fighter";

@Component({
  selector: 'app-fighter-preview',
  templateUrl: './fighter-preview.component.html',
  styleUrls: ['./fighter-preview.component.css']
})
export class FighterPreviewComponent implements OnInit {
	@Input() cur_fighter: Fighter;
	@Input() side: string; 	//The right side preview needs to draw the sprites flipped horizontally so that the characters
							//face the left. This string is used as the id for the sprite img
	
	constructor() { }

	ngOnInit(): void {
	}

}
