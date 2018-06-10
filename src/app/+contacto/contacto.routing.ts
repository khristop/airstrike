import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ContactoComponent} from './contacto.component';
import {ContactoListComponent} from './contacto-list/contacto-list.component';
import {ContactoFormComponent} from './contacto-form/contacto-form.component';

export const contactoRoutes: Routes = [
    {
        path: '',
        component: ContactoComponent,
        data: {
            pageTitle: 'Contactos'
        }
    }, 
     {
        path: 'lista',
        component: ContactoListComponent,
        data: {
            pageTitle: 'Lista de Información de Contacto'
        }
    },
    {
        path: 'gestion',
        component: ContactoFormComponent,
        data: {
            pageTitle: 'Formulario de Información de Contacto'
        }
    },
];

export const contactoRounting: ModuleWithProviders = RouterModule.forChild(contactoRoutes);
