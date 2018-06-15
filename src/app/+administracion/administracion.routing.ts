import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AdministracionComponent } from './administracion.component';
import { RolComponent } from './rol/rol.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolFormComponent } from './rol/rol-form/rol-form.component';
import { RolDetailsComponent } from './rol/rol-details/rol-details.component';

export const administracionRoutes: Routes = [
    {
        path: '',
        component: AdministracionComponent,
        data: {
            pageTitle: 'Administracion'
        }
    }, {
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
    }
];

export const administracionRouting: ModuleWithProviders = RouterModule.forChild(administracionRoutes);
