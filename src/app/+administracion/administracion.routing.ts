import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AdministracionComponent } from './administracion.component';
import { RolComponent } from './rol/rol.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolFormComponent } from './rol/rol-form/rol-form.component';
import { RolDetailsComponent } from './rol/rol-details/rol-details.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

export const administracionRoutes: Routes = [
    {
        path: 'rol',
        component: RolComponent,
        data: {
            pageTitle: 'Roles'
        }
    }, {
        path: 'usuario',
        component: UsuarioComponent,
        data: {
            pageTitle: 'Gestion de usuarios'
        }
    },{
        path: 'rol/:rolId',
        component: RolDetailsComponent,
        data: {
            pageTitle: 'Detalle del rol'
        }
    },{
        path: 'config',
        component: ConfiguracionComponent,
        data: {
            pageTitle: 'Configuraciones'
        }
    }
];

export const administracionRouting: ModuleWithProviders = RouterModule.forChild(administracionRoutes);
