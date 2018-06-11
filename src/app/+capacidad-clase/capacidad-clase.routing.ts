import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CapacidadClaseComponent} from './capacidad-clase.component';
import {CapacidadClaseListComponent} from './capacidad-clase-list/capacidad-clase-list.component';
import {CapacidadClaseFormComponent} from './capacidad-clase-form/capacidad-clase-form.component';

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
    {
        path: 'gestion', 
        component: CapacidadClaseFormComponent,
        data: {
            pageTitle: 'Formulario de Capacidades para las Clases'
        }
        
    },
];

export const capacidadClaseRounting: ModuleWithProviders = RouterModule.forChild(capacidadClaseRoutes);
