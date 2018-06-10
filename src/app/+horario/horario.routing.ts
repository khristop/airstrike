import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HorariosComponent} from './horario.component';
import {HorarioListComponent} from './horario-list/horario-list.component';

export const horarioRoutes: Routes = [
    {
        path: '',
        component: HorariosComponent,
        data: {
            pageTitle: 'Horarios'
        }
    }, 
     {
        path: 'lista',
        component: HorarioListComponent,
        data: {
            pageTitle: 'Lista de Horarios'
        }
    },
];

export const horarioRounting: ModuleWithProviders = RouterModule.forChild(horarioRoutes);
