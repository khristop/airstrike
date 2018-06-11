import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClienteComponent} from './cliente.component';
import {AirStrikeModule} from '../shared/airstrike.module';
import {clienteRounting} from './cliente.routing';
import { GestionClienteComponent } from './gestion-cliente/gestion-cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteAccionComponent } from './cliente-accion/cliente-accion.component';
import { ClienteNaturalFormComponent } from './cliente-form/cliente-natural-form/cliente-natural-form.component';
import { ClienteJuridicoFormComponent } from './cliente-form/cliente-juridico-form/cliente-juridico-form.component';
import { ClienteFormExtComponent } from './cliente-form/cliente-form-ext.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';

@NgModule({
  imports: [
    clienteRounting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports:[ClienteFormComponent, ClienteFormExtComponent],
  declarations: [ ClienteComponent, GestionClienteComponent, ClienteListComponent, ClienteFormComponent,
    ClienteDetailComponent, ClienteAccionComponent, ClienteNaturalFormComponent, ClienteJuridicoFormComponent,
  ClienteFormExtComponent,
  ClienteDetailsComponent],
})
export class ClienteModule { }
