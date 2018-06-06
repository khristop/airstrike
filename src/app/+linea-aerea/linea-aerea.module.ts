import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineaAereaComponent } from './linea-aerea.component';
import {LineaAereaRouting} from './linea-aerea.routing';
import {AirStrikeModule} from '../shared/airstrike.module';
import { LineaAereaListComponent } from './linea-aerea-list/linea-aerea-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';

@NgModule({
  imports: [
    LineaAereaRouting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [LineaAereaComponent, LineaAereaListComponent]
})
export class LineaAereaModule { }
