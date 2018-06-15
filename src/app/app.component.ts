import {Component, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>' //  <router-outlet></router-outlet>
})
export class AppComponent {
  title = 'airstrike';
  public constructor(private viewContainerRef: ViewContainerRef) {}
}
