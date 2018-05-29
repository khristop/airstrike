import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PerfilComponent} from './perfil/perfil.component';

export const homeRoutes: Routes = [
    {
        path: '',
        component: PerfilComponent,
        data: {
            pageTitle: 'Perfil de usuario'
        },
    }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
