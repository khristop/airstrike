import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajarComponent } from './viajar.component';
import {viajarRounting} from './viajar.routing';
import {AirStrikeModule} from '../shared/airstrike.module';

@NgModule({
  imports: [
    CommonModule,
    viajarRounting,
    AirStrikeModule
  ],
  declarations: [ViajarComponent]
})
export class ViajarModule { }
