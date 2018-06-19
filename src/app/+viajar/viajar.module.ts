import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajarComponent } from './viajar.component';
import {viajarRounting} from './viajar.routing';
import {AirStrikeModule} from '../shared/airstrike.module';
import { viajarFormComponent } from './viajar-form/viajar-form.component';
import { AlertModule } from 'ngx-bootstrap';
import { SmartadminWizardsModule } from '../shared/forms/wizards/smartadmin-wizards.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/layout/material/material.module';
import { VuelosConsultaComponent } from './vuelos-consulta/vuelos-consulta.component';

@NgModule({
  imports: [
    CommonModule,
    viajarRounting,
    AirStrikeModule,
    AlertModule,
    SmartadminWizardsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [ViajarComponent, viajarFormComponent, VuelosConsultaComponent],
  exports: [ViajarComponent, ],
})
export class ViajarModule { }
