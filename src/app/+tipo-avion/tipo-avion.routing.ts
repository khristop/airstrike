import { Routes, RouterModule } from '@angular/router';
import {TipoAvionComponent} from './tipo-avion.component';
import {ModuleWithProviders} from '@angular/core';
import {TipoAvionListComponent} from './tipo-avion-list/tipo-avion-list.component';

export const TipoAvionRoutes: Routes = [
    {
        path: '',
        component: TipoAvionComponent,
        data: {
            pageTitle: 'Tipos de avión'
        }
        },
        {
            path: 'lista',
            component: TipoAvionListComponent, 
            data: {
                pageTitle: 'Lista de tipos de aviones'
            }
        },
    
];

export const TipoAvionRouting: ModuleWithProviders = RouterModule.forChild(TipoAvionRoutes);
