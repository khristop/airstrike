import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolComponent } from './rol/rol.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AdministracionComponent } from './administracion.component';
import { AirStrikeModule } from '../shared/airstrike.module';
import { administracionRouting } from './administracion.routing';
import { RolesListComponent } from './rol/roles-list/roles-list.component';
import { PermisosFormComponent } from './rol/permisos-form/permisos-form.component';
import { RolFormComponent } from './rol/rol-form/rol-form.component';
import { MaterialModule } from '../shared/layout/material/material.module';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioDetailsComponent } from './usuario/usuario-details/usuario-details.component';
import { MenuComponent } from './configuracion/menu/menu.component';
import { RolDetailsComponent } from './rol/rol-details/rol-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AirStrikeModule,
    administracionRouting,
    MaterialModule,
  ],
  exports:[RolFormComponent,],
  entryComponents: [RolFormComponent],
  declarations: [ UsuarioComponent, RolComponent, ConfiguracionComponent, AdministracionComponent, 
    RolesListComponent, PermisosFormComponent, RolFormComponent, UsuarioListComponent, 
    UsuarioFormComponent, UsuarioDetailsComponent, MenuComponent, RolDetailsComponent,],
})
export class AdministracionModule { }
