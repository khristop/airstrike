import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoListComponent } from './contacto-list/contacto-list.component';
import {AirStrikeModule} from '../shared/airstrike.module';
import {contactoRounting} from './contacto.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import { ContactoComponent } from './contacto.component';

@NgModule({
  imports: [
    contactoRounting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [ContactoListComponent, ContactoComponent]
})
export class ContactoModule { }
