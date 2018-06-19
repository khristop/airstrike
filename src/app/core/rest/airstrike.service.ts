import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserService } from "./auth/user.service";
import { config } from "../../shared/airstrike.config";

@Injectable()
export class AirstrikeService {

  public api_url: string;

  private secciones_menu = new BehaviorSubject<any>( [] );;
  secciones = this.secciones_menu.asObservable();

  constructor(private http: HttpClient, private _user_service: UserService) { 
    this.api_url = config.REST_URL + 'app/';
    //this.obtenerSecciones();
  }

  private buildTree(secciones, id_superior, nivel){
    let ret = null;
    let hijos = [];
    secciones.forEach(element => {
      if(element.seccion_superior == id_superior && element.nivel == nivel){  
        element['ruta'] = '/'+element.llave;
        element['active']= false;
        element['menu_inferior'] = this.buildTree(secciones, element.id, nivel + 1); 
        hijos.push(element);
      }
    });
    ret = hijos.length > 0 ? hijos:  null;
    return ret;
  }

  private obtenerSecciones<T>(){
    return this.http.get<T>(this.api_url+'menu'+"?_token="+localStorage.getItem('token'))
    .map(res =>{
      return res['response'] ;
    }).subscribe(data=>{
      let arbolmenu =  this.buildTree(data, 0, 1); 
      this.secciones_menu.next(arbolmenu);
    });
  }

  

  comprobarPermisoMenu(llave_seccion, accion){
    const permisos  = this._user_service.obtenerPermisos();
    return !permisos.every(permiso => {
      if ( permiso.llave == llave_seccion && permiso.accion == accion ){
        return false;
      }else{
        return true;
      }
    });

  }

}