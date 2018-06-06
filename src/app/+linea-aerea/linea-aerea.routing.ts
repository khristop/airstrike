import { Routes, RouterModule } from '@angular/router';
import {LineaAereaComponent} from './linea-aerea.component';
import {ModuleWithProviders} from '@angular/core';
import {LineaAereaListComponent} from './linea-aerea-list/linea-aerea-list.component';

export const LineaAereaRoutes: Routes = [
    {
        path: '',
        component: LineaAereaComponent,
        data: {
            pageTitle: 'Linea Aerea'
        }
        },
        {
            path: 'lista',
            component: LineaAereaListComponent,
            data: {
                pageTitle: 'Lista de Linea Aereas'
            }
        },
    
];

export const LineaAereaRouting: ModuleWithProviders = RouterModule.forChild(LineaAereaRoutes);
