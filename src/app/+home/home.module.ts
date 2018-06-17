import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';

import {HomeComponent} from './home.component';
import {AirStrikeModule} from '../shared/airstrike.module';
import { AlertModule } from 'ngx-bootstrap';
import { SmartadminWizardsModule } from '../shared/forms/wizards/smartadmin-wizards.module';
import { ViajarModule } from '../+viajar/viajar.module';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    AirStrikeModule,
    AlertModule,
    SmartadminWizardsModule,
    ViajarModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
