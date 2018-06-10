import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvionListComponent } from './avion-list/avion-list.component';
import { AvionComponent } from './avion.component';
import {AirStrikeModule} from '../shared/airstrike.module';
import {avionRounting} from './avion.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import { AvionFormComponent } from './avion-form/avion-form.component';

@NgModule({
  imports: [
    avionRounting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [AvionListComponent, AvionComponent, AvionFormComponent]
})
export class AvionModule { }
