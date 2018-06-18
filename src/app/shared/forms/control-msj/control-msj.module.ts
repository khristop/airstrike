import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Control} from "./dropzone.directive";
import { ControlMsjComponent } from './control-msj.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ControlMsjComponent],
  exports: [ControlMsjComponent],
})
export class ControlMsjModule { }
