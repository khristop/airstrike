import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HorarioListComponent} from './horario-list/horario-list.component';
import {AirStrikeModule} from '../shared/airstrike.module';
import {horarioRounting} from './horario.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import { HorariosComponent } from './horario.component';
import { HorarioFormComponent } from './horario-form/horario-form.component';
import {MatInputModule} from '@angular/material';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';



@NgModule({
  imports: [
    horarioRounting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    TimepickerModule.forRoot(), 
  ],
  declarations: [HorariosComponent, HorarioListComponent, HorarioFormComponent]
})
export class HorarioModule { }
