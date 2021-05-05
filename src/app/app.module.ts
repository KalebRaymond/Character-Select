import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTaskbarComponent } from './app-taskbar/app-taskbar.component';
import { FighterIconComponent } from './fighter-icon/fighter-icon.component';
import { FighterPreviewComponent } from './fighter-preview/fighter-preview.component';
import { IconsComponent } from './icons/icons.component';
import { SelectAreaComponent } from './select-area/select-area.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTaskbarComponent,
    FighterIconComponent,
    FighterPreviewComponent,
    IconsComponent,
    SelectAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
