import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatacomponentComponent } from './datacomponent/datacomponent.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    DatacomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
