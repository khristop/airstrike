/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainLayoutComponent} from './shared/layout/app-layouts/main-layout.component';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: 'app/+home/home.module#HomeModule'
      },
      {
        path: 'viajar', 
        loadChildren: 'app/+viajar/viajar.module#ViajarModule' 
      }, 
      {
                path: 'cliente',
               loadChildren: 'app/+cliente/cliente.module#ClienteModule'
             },
       { 
         path: 'aeropuertos', 
         loadChildren: 'app/+aeropuertos/aeropuertos.module#AeropuertosModule' 
       }, 
      {
        path: 'gateway',
       loadChildren: 'app/+gateway/gateway.module#GatewayModule'
     },
      { 
        path: 'generales', 
        loadChildren: 'app/+generales/generales.module#GeneralesModule' 
      }, 
      { 
        path: 'linea-aerea', 
        loadChildren: 'app/+linea-aerea/linea-aerea.module#LineaAereaModule' 
      }, 
    ]
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
