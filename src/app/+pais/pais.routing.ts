import { Routes, RouterModule } from '@angular/router';
import {PaisComponent} from './pais.component';
import {ModuleWithProviders} from '@angular/core';
import {PaisListComponent} from './pais-list/pais-list.component';

export const PaisRoutes: Routes = [
    {
        path: '',
        component: PaisComponent,
        data: {
            pageTitle: 'Paices'
        }
        },
        {
            path: 'lista',
            component: PaisListComponent, 
            data: {
                pageTitle: 'Lista de Paices'
            }
        },
    
];

export const PaisRouting: ModuleWithProviders = RouterModule.forChild(PaisRoutes);

