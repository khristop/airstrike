import { NgModule } from '@angular/core';
import {ClienteComponent} from './cliente.component';
import {AirStrikeModule} from '../shared/airstrike.module';
import {clienteRounting} from './cliente.routing';
import { GestionClienteComponent } from './gestion-cliente/gestion-cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../shared/layout/material/material.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteAccionComponent } from './cliente-accion/cliente-accion.component';
import { ClienteNaturalFormComponent } from './cliente-form/cliente-natural-form/cliente-natural-form.component';
import { ClienteJuridicoFormComponent } from './cliente-form/cliente-juridico-form/cliente-juridico-form.component';
import { ClienteFormExtComponent } from './cliente-form/cliente-form-ext.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { AdministracionModule } from '../+administracion/administracion.module';

@NgModule({
  imports: [
    clienteRounting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AdministracionModule
  ],
  exports:[ClienteFormComponent, ClienteFormExtComponent],
  declarations: [ ClienteComponent, GestionClienteComponent, ClienteListComponent, ClienteFormComponent,
    ClienteDetailComponent, ClienteAccionComponent, ClienteNaturalFormComponent, ClienteJuridicoFormComponent,
  ClienteFormExtComponent,
  ClienteDetailsComponent],
})
export class ClienteModule { }
