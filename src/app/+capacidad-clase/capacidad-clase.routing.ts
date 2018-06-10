import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CapacidadClaseComponent} from './capacidad-clase.component';
import {CapacidadClaseListComponent} from './capacidad-clase-list/capacidad-clase-list.component';

export const capacidadClaseRoutes: Routes = [
    {
        path: '',
        component: CapacidadClaseComponent,
        data: {
            pageTitle: 'Capacidad de las clases'
        }
    }, 
     {
        path: 'lista', 
        component: CapacidadClaseListComponent,
        data: {
            pageTitle: 'Lista de Capacidades para las Clases'
        }
        
    },
];

export const capacidadClaseRounting: ModuleWithProviders = RouterModule.forChild(capacidadClaseRoutes);
