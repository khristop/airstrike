import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioFormComponent } from './registro-usuario-form/registro-usuario-form.component';
import { ActualizarUsuarioFormComponent } from './actualizar-usuario-form/actualizar-usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RegistroUsuarioFormComponent, ActualizarUsuarioFormComponent, UsuarioListComponent, PerfilComponent]
})
export class UsuarioModule { }
