import { Routes, RouterModule } from '@angular/router';
import {PrecioClaseComponent} from './precio-clase.component';
import {ModuleWithProviders} from '@angular/core';
import {PrecioClaseListComponent} from './precio-clase-list/precio-clase-list.component';

export const PrecioClasesRoutes: Routes = [
    {
        path: '',
        component: PrecioClaseComponent,
        data: {
            pageTitle: 'Precios de clases de vuelo'
        }
        },
        {
            path: 'lista',
            component: PrecioClaseListComponent, 
            data: {
                pageTitle: 'Lista de Precios para vuelos'
            }
        },
    
];

export const PrecioClaseRouting: ModuleWithProviders = RouterModule.forChild(PrecioClasesRoutes);
