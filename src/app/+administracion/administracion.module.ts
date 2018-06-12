import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolComponent } from './rol/rol.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AdministracionComponent } from './administracion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ UsuarioComponent, RolComponent, ConfiguracionComponent, AdministracionComponent]
})
export class AdministracionModule { }
