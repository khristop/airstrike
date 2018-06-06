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
      path: 'horarios', 
      loadChildren: 'app/+horario/horario.module#HorarioModule' 
    }, 
      { 
        path: 'generales', 
        loadChildren: 'app/+generales/generales.module#GeneralesModule' 
      }, 
      { 
        path: 'modelo-avion', 
        loadChildren: 'app/+modelo-avion/modelo-avion.module#ModeloAvionModule' 
      },
      { 
        path: 'precio-clase', 
        loadChildren: 'app/+precio-clase/precio-clase.module#PrecioClaseModule' 
      },
      { 
        path: 'capacidad-clase', 
        loadChildren: 'app/+capacidad-clase/capacidad-clase.module#CapacidadClaseModule' 
      },
      { 
        path: 'tipo-avion', 
        loadChildren: 'app/+tipo-avion/tipo-avion.module#TipoAvionModule' 
      },
      { 
        path: 'tipo-clase', 
        loadChildren: 'app/+tipo-clase/tipo-clase.module#TipoClaseModule' 
      },
      { 
        
        path: 'linea-aerea', 
        loadChildren: 'app/+linea-aerea/linea-aerea.module#LineaAereaModule' 
      }, 
      { 
        path: 'contacto', 
        loadChildren: 'app/+contacto/contacto.module#ContactoModule' 
      }, 
      { 
        path: 'avion', 
        loadChildren: 'app/+avion/avion.module#AvionModule' 
      }, 
    ]
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
