import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404RoutingModule } from './error404-routing.module';
import { Error404Component } from './error404.component';
import { AirstrikeLayoutModule } from "../../shared/layout/layout.module";


@NgModule({
  imports: [
    CommonModule,
    Error404RoutingModule,
    AirstrikeLayoutModule,
  ],
  declarations: [Error404Component]
})
export class Error404Module { }
