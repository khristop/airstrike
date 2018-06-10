import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AeropuertosComponent} from './aeropuertos.component';
import {AeropuertoListComponent} from './aeropuerto-list/aeropuerto-list.component';
import {AeropuertoFormComponent} from './aeropuerto-form/aeropuerto-form.component';

export const aeropuertosRountes: Routes = [
    {
        path: '',
        component: AeropuertosComponent,
        data: {
            pageTitle: 'Aeropuertos'
        }
    },
    {
        path: 'lista',
        component: AeropuertoListComponent,
        data: {
            pageTitle: 'Lista de Aeropuertos'
        }
    },
    {
        path: 'gestion',
        component: AeropuertoFormComponent,
        data: {
            pageTitle: 'gestion'
        }
    },
];

export const aeropuertosRounting: ModuleWithProviders = RouterModule.forChild(aeropuertosRountes);
