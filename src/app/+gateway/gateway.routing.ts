import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
//import {ViajClienteComponentarComponent} from './viajar.component';
import {GatewayComponent} from './gateway.component';
//import {GestionClienteComponent} from './gestion-cliente/gestion-cliente.component';
import {GatewayListComponent} from './gateway-list/gateway-list.component';

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
];

export const gatewayRounting: ModuleWithProviders = RouterModule.forChild(gatewayRoutes);
