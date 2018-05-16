
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {throwIfAlreadyLoaded} from './guards/module-import-guard';
import {JsonApiService} from './rest/json-api.service';
import {LayoutService} from '../shared/layout/layout.service';
import {UserService} from '../shared/user/user.service';
import {AlertModule, BsDropdownModule, ProgressbarModule, TabsModule, TooltipModule} from 'ngx-bootstrap';

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
    HttpClientModule
  ],
  declarations: [],
  providers: [ // aqui van todos los servicios que deben ser usados como singleton
    JsonApiService,
    LayoutService,
    UserService,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
