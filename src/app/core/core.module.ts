
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {throwIfAlreadyLoaded} from './guards/module-import-guard';
import {JsonApiService} from './rest/json-api.service';
import {LayoutService} from '../shared/layout/layout.service';
import {AlertModule, BsDropdownModule, ProgressbarModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import {MAT_DATE_LOCALE} from '@angular/material';
import {ClienteService} from './rest/cliente/cliente.service';
import { AuthService } from './rest/auth/auth.service';
import { UserService } from './rest/auth/user.service';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { AuthGuard } from './guards/auth-guard.service';
import { AirstrikeService } from './rest/airstrike.service';
import { RolService } from './rest/auth/rol.service';
import { EstadoUserService } from './rest/auth/estado-user.service';
import { HorarioService } from './rest/horario/horario.service';
import { AeropuertoService } from './rest/aeropuerto/aeropuerto.service';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    HttpClientModule,
  ],
  declarations: [],
  providers: [ // aqui van todos los servicios que deben ser usados como singleton
    JsonApiService,
    LayoutService,
    ClienteService,
    AuthService,
    UserService,
    AuthGuard,
    AirstrikeService,
    RolService,
    EstadoUserService,
    HorarioService,
    AeropuertoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
