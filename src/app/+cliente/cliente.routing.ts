import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ClienteComponent} from './cliente.component';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteFormComponent} from './cliente-form/cliente-form.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';

export const clienteRoutes: Routes = [
    {
        path: '',
        component: ClienteComponent,
        data: {
            pageTitle: 'Clientes'
        }
    }, {
        path: 'registro',
        component: ClienteFormComponent,
        data: {
            pageTitle: 'Registro de cliente'
        }
    }, {
        path: 'lista',
        component: ClienteListComponent,
        data: {
            pageTitle: 'Lista de clientes'
        }
    },{
        path: ":id",
        component: ClienteDetailsComponent,
        data:{
            pageTitle: 'Detalle de cliente'
        }
    }
];

export const clienteRounting: ModuleWithProviders = RouterModule.forChild(clienteRoutes);
