import { Component, OnInit, Input } from '@angular/core';
import { Fighter } from "../fighter";

@Component({
  selector: 'app-fighter-preview',
  templateUrl: './fighter-preview.component.html',
  styleUrls: ['./fighter-preview.component.css']
})
export class FighterPreviewComponent implements OnInit {
	@Input("cur_fighter") cur_fighter: Fighter;
	
  constructor() { }

  ngOnInit(): void {
  }

}
