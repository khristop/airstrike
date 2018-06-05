import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ViajarComponent} from './viajar.component';
import {ClienteComponent} from './cliente.component';
import {GestionClienteComponent} from './gestion-cliente/gestion-cliente.component';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteFormComponent} from './cliente-form/cliente-form.component';

export const clienteRoutes: Routes = [
    {
        path: '',
        component: ClienteComponent,
        data: {
            pageTitle: 'Clientes'
        }
    }, {
        path: 'gestion',
        component: ClienteFormComponent,
        data: {
            pageTitle: 'gestion'
        }
    }, {
        path: 'lista',
        component: ClienteListComponent,
        data: {
            pageTitle: 'Lista de clientes'
        }
    },
];

export const clienteRounting: ModuleWithProviders = RouterModule.forChild(clienteRoutes);
