import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FighterIconComponent } from './fighter-icon/fighter-icon.component';
import { FighterPreviewComponent } from './fighter-preview/fighter-preview.component';
import { IconsComponent } from './icons/icons.component';
import { SelectAreaComponent } from './select-area/select-area.component';

@NgModule({
  declarations: [
    AppComponent,
    FighterIconComponent,
    FighterPreviewComponent,
    IconsComponent,
    SelectAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
