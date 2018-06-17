import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajarComponent } from './viajar.component';
import {viajarRounting} from './viajar.routing';
import {AirStrikeModule} from '../shared/airstrike.module';
import { viajarFormComponent } from './viajar-form/viajar-form.component';
import { AlertModule } from 'ngx-bootstrap';
import { SmartadminWizardsModule } from '../shared/forms/wizards/smartadmin-wizards.module';

@NgModule({
  imports: [
    CommonModule,
    viajarRounting,
    AirStrikeModule,
    AlertModule,
    SmartadminWizardsModule
  ],
  declarations: [ViajarComponent, viajarFormComponent],
  exports: [ViajarComponent],
})
export class ViajarModule { }
