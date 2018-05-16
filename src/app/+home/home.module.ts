import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';

import {HomeComponent} from './home.component';
import {AirStrikeModule} from '../shared/airstrike.module';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    AirStrikeModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
