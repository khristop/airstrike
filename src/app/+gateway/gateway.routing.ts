import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {GatewayComponent} from './gateway.component';
import {GatewayListComponent} from './gateway-list/gateway-list.component';
import {GatewayFormComponent} from './gateway-form/gateway-form.component';

export const gatewayRoutes: Routes = [
    {
        path: '',
        component: GatewayComponent,
        data: {
            pageTitle: 'Gateway'
        }
    }, 
     {
        path: 'lista',
        component: GatewayListComponent,
        data: {
            pageTitle: 'Lista de gateway'
        }
    },
    {
        path: 'gestion',
        component: GatewayFormComponent,
        data: {
            pageTitle: 'Formulario de gateway'
        }
    },
];

export const gatewayRounting: ModuleWithProviders = RouterModule.forChild(gatewayRoutes);
