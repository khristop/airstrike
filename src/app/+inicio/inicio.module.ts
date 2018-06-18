import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { InicioRouting } from './inicio.routing';
import { AirStrikeModule } from '../shared/airstrike.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/layout/material/material.module';
import { ViajarModule } from '../+viajar/viajar.module';

@NgModule({
  imports: [
    CommonModule,
    InicioRouting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ViajarModule
  ],
  declarations: [InicioComponent]
})
export class InicioModule { }
