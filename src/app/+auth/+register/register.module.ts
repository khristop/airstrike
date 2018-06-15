import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AirStrikeModule } from '../../shared/airstrike.module';
import { ClienteModule } from '../../+cliente/cliente.module';



@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AirStrikeModule,
    ReactiveFormsModule,
    ClienteModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
