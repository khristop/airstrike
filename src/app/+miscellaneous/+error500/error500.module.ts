import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error500RoutingModule } from './error500-routing.module';
import { Error500Component } from './error500.component';
import {AirstrikeLayoutModule} from "../../shared/layout/layout.module";


@NgModule({
  imports: [
    CommonModule,
    Error500RoutingModule,
    AirstrikeLayoutModule,
  ],
  declarations: [Error500Component]
})
export class Error500Module { }
