import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {PopoverModule} from 'ngx-popover';

import {AirstrikeLayoutModule} from './layout';
import {I18nModule} from './i18n/i18n.module';

// import {SmartadminWidgetsModule} from "./widgets/smartadmin-widgets.module";
// import {UtilsModule} from "./utils/utils.module";



@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
  ],
  declarations: [

  ],
  exports: [
    CommonModule, FormsModule, RouterModule,

    PopoverModule,

    AirstrikeLayoutModule,

    I18nModule,
    //
    // UtilsModule,
    //
    // SmartadminWidgetsModule,

  ]
})
export class AirStrikeModule {}
