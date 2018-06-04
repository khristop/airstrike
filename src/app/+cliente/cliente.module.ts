import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClienteComponent} from './cliente.component';
import {AirStrikeModule} from '../shared/airstrike.module';
import {clienteRounting} from './cliente.routing';
import { GestionClienteComponent } from './gestion-cliente/gestion-cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';

@NgModule({
  imports: [
    clienteRounting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [ ClienteComponent, GestionClienteComponent, ClienteListComponent]
})
export class ClienteModule { }
