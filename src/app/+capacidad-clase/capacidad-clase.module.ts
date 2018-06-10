import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapacidadClaseListComponent } from './capacidad-clase-list/capacidad-clase-list.component';
import { CapacidadClaseComponent } from './capacidad-clase.component';
import {AirStrikeModule} from '../shared/airstrike.module';
import {capacidadClaseRounting} from './capacidad-clase.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';

@NgModule({
  imports: [
    capacidadClaseRounting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [CapacidadClaseListComponent, CapacidadClaseComponent]
})
export class CapacidadClaseModule { }
