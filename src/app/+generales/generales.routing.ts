import { Routes, RouterModule } from '@angular/router';
import {GeneralesComponent} from './generales.component';
import {ModuleWithProviders} from '@angular/core';

export const generalesRoutes: Routes = [
    {
        path: '',
        component: GeneralesComponent,
        data: {
            pageTitle: 'Generales'
        }
    }
];

export const generalesRouting: ModuleWithProviders = RouterModule.forChild(generalesRoutes);
