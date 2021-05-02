import { Component, OnInit } from '@angular/core';
import { FighterIconComponent } from "../fighter-icon/fighter-icon.component";
import { FIGHTER_CAST } from "../fighter_cast";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
	
	fighter_cast = FIGHTER_CAST;

  constructor() { }

  ngOnInit(): void {
  }

  onHover(fighter): void
  {
	  console.log(fighter.id);
  }
  
  onClick(fighter): void
  {
	  console.log(fighter.name);
  }
}
