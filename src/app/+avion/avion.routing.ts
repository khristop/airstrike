import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AvionComponent} from './avion.component';
import {AvionListComponent} from './avion-list/avion-list.component';
import {AvionFormComponent} from './avion-form/avion-form.component';

export const avionRoutes: Routes = [
    {
        path: '',
        component: AvionComponent,
        data: {
            pageTitle: 'Aviones'
        }
    }, 
     {
        path: 'lista',
        component: AvionListComponent,
        data: {
            pageTitle: 'Lista de Aviones'
        }
    },
    {
        path: 'gestion',
        component: AvionFormComponent,
        data: {
            pageTitle: 'gestion'
        }
    },
];

export const avionRounting: ModuleWithProviders = RouterModule.forChild(avionRoutes);
