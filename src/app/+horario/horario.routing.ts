import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HorariosComponent} from './horario.component';
import {HorarioListComponent} from './horario-list/horario-list.component';
import {HorarioFormComponent} from './horario-form/horario-form.component';


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
    {
        path: 'gestion',
        component: HorarioFormComponent,
        data: {
            pageTitle: 'Formulario de Horarios'
        }
    },
];

export const horarioRounting: ModuleWithProviders = RouterModule.forChild(horarioRoutes);
