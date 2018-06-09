import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisComponent } from './pais.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import {PaisRouting} from './pais.routing';
import {AirStrikeModule} from '../shared/airstrike.module';

@NgModule({
  imports: [
    PaisRouting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [PaisListComponent, PaisComponent]
})
export class PaisModule { }
