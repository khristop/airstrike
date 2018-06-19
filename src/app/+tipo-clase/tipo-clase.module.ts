import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoClaseListComponent } from './tipo-clase-list/tipo-clase-list.component';
import { TipoClaseComponent } from './tipo-clase.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import {TipoClaseRouting} from './tipo-clase.routing';
import {AirStrikeModule} from '../shared/airstrike.module';
import { TipoClaseFormComponent } from './tipo-clase-form/tipo-clase-form.component';

@NgModule({
  imports: [
    TipoClaseRouting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [TipoClaseListComponent, TipoClaseComponent, TipoClaseFormComponent]
})
export class TipoClaseModule { }
