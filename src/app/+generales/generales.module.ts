import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralesComponent } from './generales.component';
import {generalesRouting} from './generales.routing';
import {AirStrikeModule} from '../shared/airstrike.module';

@NgModule({
  imports: [
    CommonModule,
    generalesRouting,
    AirStrikeModule
  ],
  declarations: [GeneralesComponent]
})
export class GeneralesModule { }
