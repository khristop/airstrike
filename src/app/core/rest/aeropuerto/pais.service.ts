import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {Aeropuerto} from '../../models/aeropuerto/aeropuerto.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private resourceUrl: string;

  constructor(private http: HttpClient) {
    this.resourceUrl = config.REST_URL  + 'pais';
  }

  //importante!!!!
  obtener(id: number, filtro?: String) {
    const url = filtro ? this.resourceUrl +'/' + id + filtro : this.resourceUrl +'/'+ id ;
    return this.http.get<any>( url+"?_token="+localStorage.getItem('token') ).pipe(
      map(res => {
        if(res.status == 'OK'){
          return res['data'];
        }else{
          return [];
        }
      })
    );
  }

  obtenerTodos(filtro?: String) {
    let url;
    if(localStorage.getItem('token')){
      url = filtro ? this.resourceUrl + filtro : this.resourceUrl+"?_token="+localStorage.getItem('token');
    }else{
      url = filtro ? this.resourceUrl + filtro : this.resourceUrl;
    }
    return this.http.get<any>(url).pipe(
      map(res=> {
        if(res.status == 'OK'){
          return res['data'];
        }else{
          return [];
        }
      })
    );
  }
  actualizar(data: Object) {
    const dataSerial = JSON.stringify(data);
    let url;
    if(localStorage.getItem('token')){
      url = this.resourceUrl+"?_token="+localStorage.getItem('token');
    }else{
      url =  this.resourceUrl;
    }
    return this.http.put<any>(url, dataSerial).pipe(
      map(res=> {
        if(res.status == 'OK'){
          return res['data'];
        }else{
          return [];
        }
      })
    );
  }
  guardar(data: Object) {
    const dataSerial = JSON.stringify(data);
    return this.http.post<any>(this.resourceUrl +"?_token="+localStorage.getItem('token'), dataSerial).pipe(
      map(res=> {
        if(res.status == 'OK'){
          return true;
        }else{
          return false;
        }
      })
    );
  }

}
