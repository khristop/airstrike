import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ViajarComponent} from './viajar.component';

export const viajarRoutes: Routes = [
    {
        path: 'registro',
        component: ViajarComponent,
        data: {
            pageTitle: 'Viajar'
        }
    },
    {
        path: 'mis_viajes',
        component: ViajarComponent,
        data: {
            pageTitle: 'Mis viajes'
        }
    },
    {
        path: 'historico_viajes',
        component: ViajarComponent,
        data: {
            pageTitle: 'Historial de viajes'
        }
    },
    
];

export const viajarRounting: ModuleWithProviders = RouterModule.forChild(viajarRoutes);
