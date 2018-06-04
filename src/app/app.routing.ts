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
      },
    ]
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
