import { Routes, RouterModule } from '@angular/router';
import {ModeloAvionComponent} from './modelo-avion.component';
import {ModuleWithProviders} from '@angular/core';
import {ModeloAvionListComponent} from './modelo-avion-list/modelo-avion-list.component';
import {ModeloAvionFormComponent} from './modelo-avion-form/modelo-avion-form.component';

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
        {
            path: 'gestion',
            component: ModeloAvionFormComponent, 
            data: {
                pageTitle: 'Formulario de Modelos de Aviones'
            }
        },
];

export const ModeloAvionRouting: ModuleWithProviders = RouterModule.forChild(ModeloAvionRoutes);
