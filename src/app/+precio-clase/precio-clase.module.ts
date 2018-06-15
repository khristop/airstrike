import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecioClaseListComponent } from './precio-clase-list/precio-clase-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import { PrecioClaseComponent } from './precio-clase.component';
import {PrecioClaseRouting} from './precio-clase.routing';
import {AirStrikeModule} from '../shared/airstrike.module';
import { PrecioClaseFormComponent } from './precio-clase-form/precio-clase-form.component';

@NgModule({
  imports: [
    PrecioClaseRouting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [PrecioClaseListComponent,PrecioClaseComponent, PrecioClaseFormComponent]
})
export class PrecioClaseModule { }
