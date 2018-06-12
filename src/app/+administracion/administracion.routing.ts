import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AdministracionComponent } from './administracion.component';
import { RolComponent } from './rol/rol.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const clienteRoutes: Routes = [
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
    }
];

export const clienteRounting: ModuleWithProviders = RouterModule.forChild(clienteRoutes);
