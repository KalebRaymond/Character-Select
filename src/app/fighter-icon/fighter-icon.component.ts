import { Component, OnInit, Input} from '@angular/core';
import { Fighter } from '../fighter';

@Component({
  selector: 'app-fighter-icon',
  templateUrl: './fighter-icon.component.html',
  styleUrls: ['./fighter-icon.component.css']
})
export class FighterIconComponent implements OnInit {

	@Input() fighter: Fighter;

	constructor() { }

	ngOnInit(): void {
	}
}
