import { Routes, RouterModule } from '@angular/router';
import {CiudadComponent} from './ciudad.component';
import {ModuleWithProviders} from '@angular/core';
import {CiudadListComponent} from './ciudad-list/ciudad-list.component';

export const CiudadRoutes: Routes = [
    {
        path: '',
        component: CiudadComponent,
        data: {
            pageTitle: 'Ciudades'
        }
        },
        {
            path: 'lista',
            component: CiudadListComponent, 
            data: {
                pageTitle: 'Lista de Ciudades'
            }
        },
    
];

export const CiudadRouting: ModuleWithProviders = RouterModule.forChild(CiudadRoutes);

