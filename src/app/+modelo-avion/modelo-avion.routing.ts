import { Routes, RouterModule } from '@angular/router';
import {ModeloAvionComponent} from './modelo-avion.component';
import {ModuleWithProviders} from '@angular/core';
import {ModeloAvionListComponent} from './modelo-avion-list/modelo-avion-list.component';

export const ModeloAvionRoutes: Routes = [
    {
        path: '',
        component: ModeloAvionComponent,
        data: {
            pageTitle: 'Modelo de Aviones'
        }
        },
        {
            path: 'lista',
            component: ModeloAvionListComponent, 
            data: {
                pageTitle: 'Lista de Modelos de Aviones'
            }
        },
    
];

export const ModeloAvionRouting: ModuleWithProviders = RouterModule.forChild(ModeloAvionRoutes);
