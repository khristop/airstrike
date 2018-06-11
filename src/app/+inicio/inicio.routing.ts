import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';


export const InicioRoutes: Routes = [
    {
        path: '',
        component: InicioComponent,
        data: {
            pageTitle: 'Airstrike - Servicio de vuelos'
        },
        
    },    
];

export const InicioRouting: ModuleWithProviders = RouterModule.forChild(InicioRoutes);
