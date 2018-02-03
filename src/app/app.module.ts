import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {ShowparameterService} from './../services/showparameter.service';

import { AppComponent } from './app.component';
import { SatBarComponent } from './sat-bar/sat-bar.component';
import { SatDisplayComponent } from './sat-display/sat-display.component';
import { DisplayComponent } from './display/display.component';
import { DisplayBynameComponent } from './display-byname/display-byname.component';
import { DisplaySatComponent } from './display-sat/display-sat.component';
import { DisplayOperatorOwnerComponent } from './display-operator-owner/display-operator-owner.component';


@NgModule({
  declarations: [
    AppComponent,
    SatBarComponent,
    SatDisplayComponent,
    DisplayComponent,
    DisplayBynameComponent,
    DisplaySatComponent,
    DisplayOperatorOwnerComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [ShowparameterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
