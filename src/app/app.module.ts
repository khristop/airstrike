import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {routing} from './app.routing';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AirstrikeLayoutModule} from './shared/layout/layout.module';


const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    ModalModule.forRoot(),
    AirstrikeLayoutModule,
    routing,
  ],
  exports: [
  ],
  providers: [
    APP_PROVIDERS,]
})

export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
}
