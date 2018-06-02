import { Routes, RouterModule } from '@angular/router';
import {LineaAereaComponent} from './linea-aerea.component';
import {ModuleWithProviders} from '@angular/core';

export const LineaAereaRoutes: Routes = [
    {
        path: '',
        component: LineaAereaComponent,
        data: {
            pageTitle: 'Linea Aerea'
        }
    }
];

export const LineaAereaRouting: ModuleWithProviders = RouterModule.forChild(LineaAereaRoutes);
