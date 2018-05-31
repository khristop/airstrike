import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeropuertosComponent } from './aeropuertos.component';
import {aeropuertosRounting} from './aeropuertos.routing';
import {AirStrikeModule} from '../shared/airstrike.module';

@NgModule({
  imports: [
    CommonModule,
    aeropuertosRounting,
    AirStrikeModule
  ],
  declarations: [AeropuertosComponent]
})
export class AeropuertosModule { }
