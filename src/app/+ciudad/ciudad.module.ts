import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadComponent } from './ciudad.component';
import { CiudadListComponent } from './ciudad-list/ciudad-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import {CiudadRouting} from './ciudad.routing';
import {AirStrikeModule} from '../shared/airstrike.module';

@NgModule({
  imports: [
    CiudadRouting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [CiudadComponent, CiudadListComponent]
})
export class CiudadModule { }
