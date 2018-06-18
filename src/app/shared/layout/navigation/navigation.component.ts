import {Component, OnInit} from '@angular/core';
import { UserService } from '../../../core/rest/auth/user.service';
import { AirstrikeService } from '../../../core/rest/airstrike.service';

@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  constructor(
    private _user_service: UserService, 
    private _facto_service: AirstrikeService) {
  }

  permisos = null;
  secciones : any[];

  ngOnInit() {

    // this._facto_service.secciones.subscribe(data => {
    //   if(data.length > 0){
    //     this.menu = data;
    //     this.permisos = this._user_service.obtenerPermisos();
    //     if (this.permisos.length > 0) {
    //       this.permisos.forEach((sec_p1) => {
    //         for (let i in this.menu) {
    //           if (this.menu[i].llave == sec_p1.llave) {
    //             this.menu[i].active = true;
    //           } else {
    //             if (this.menu[i].menu_inferior && this.menu[i].menu_inferior.length > 0) {
    //               for (let j in this.menu[i].menu_inferior) {
    //                 if (this.menu[i].menu_inferior[j].llave == sec_p1.llave) {
    //                   this.menu[i].menu_inferior[j].active = true;
    //                   this.menu[i].active = true;
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       })
    //     }
    //   }
    // });
  }

   menu = [];

}
