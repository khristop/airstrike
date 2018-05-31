import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AeropuertosComponent} from './aeropuertos.component';

export const aeropuertosRountes: Routes = [
    {
        path: '',
        component: AeropuertosComponent,
        data: {
            pageTitle: 'Aeropuertos'
        }
    }
];

export const aeropuertosRounting: ModuleWithProviders = RouterModule.forChild(aeropuertosRountes);
