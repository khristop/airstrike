import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeropuertosComponent } from './aeropuertos.component';
import {aeropuertosRounting} from './aeropuertos.routing';
import {AirStrikeModule} from '../shared/airstrike.module';
import {AeropuertoListComponent } from './aeropuerto-list/aeropuerto-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import { AeropuertoFormComponent } from './aeropuerto-form/aeropuerto-form.component';

@NgModule({
  imports: [
    aeropuertosRounting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [AeropuertosComponent, AeropuertoListComponent, AeropuertoFormComponent]
})
export class AeropuertosModule { }
