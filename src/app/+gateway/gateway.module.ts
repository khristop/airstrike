import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewayListComponent } from './gateway-list/gateway-list.component';
import {AirStrikeModule} from '../shared/airstrike.module';
import {gatewayRounting} from './gateway.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../shared/layout/material/material.module';
import { GatewayComponent } from './gateway.component';
import { GatewayFormComponent } from './gateway-form/gateway-form.component';

@NgModule({
  imports: [
    gatewayRounting,
    AirStrikeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [GatewayListComponent, GatewayComponent, GatewayFormComponent]
})
export class GatewayModule { }
