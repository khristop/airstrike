import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoAvionComponent } from './tipo-avion.component';
import { TipoAvionListComponent } from './tipo-avion-list/tipo-avion-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import {TipoAvionRouting} from './tipo-avion.routing';
import {AirStrikeModule} from '../shared/airstrike.module';

@NgModule({
  imports: [
    TipoAvionRouting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [TipoAvionComponent, TipoAvionListComponent]
})
export class TipoAvionModule { }
