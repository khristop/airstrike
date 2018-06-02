import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineaAereaComponent } from './linea-aerea.component';
import {LineaAereaRouting} from './linea-aerea.routing';
import {AirStrikeModule} from '../shared/airstrike.module';

@NgModule({
  imports: [
    CommonModule,
    LineaAereaRouting,
    AirStrikeModule
  ],
  declarations: [LineaAereaComponent]
})
export class LineaAereaModule { }
