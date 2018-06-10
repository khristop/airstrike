import { Routes, RouterModule } from '@angular/router';
import {TipoClaseComponent} from './tipo-clase.component';
import {ModuleWithProviders} from '@angular/core';
import {TipoClaseListComponent} from './tipo-clase-list/tipo-clase-list.component';

export const TipoClaseRoutes: Routes = [
    {
        path: '',
        component: TipoClaseComponent,
        data: {
            pageTitle: 'Tipos de Clases de Avion'
        }
        },
        {
            path: 'lista',
            component: TipoClaseListComponent, 
            data: {
                pageTitle: 'Lista de Clases de aviones'
            }
        },
    
];

export const TipoClaseRouting: ModuleWithProviders = RouterModule.forChild(TipoClaseRoutes);
