import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloAvionListComponent } from './modelo-avion-list/modelo-avion-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import { ModeloAvionComponent } from './modelo-avion.component';
import {ModeloAvionRouting} from './modelo-avion.routing';
import {AirStrikeModule} from '../shared/airstrike.module';

@NgModule({
  imports: [
    ModeloAvionRouting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [ModeloAvionListComponent, ModeloAvionComponent ]
})
export class ModeloAvionModule { }
