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
];

export const viajarRounting: ModuleWithProviders = RouterModule.forChild(viajarRoutes);
