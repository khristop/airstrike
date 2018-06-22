import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {PrecioClase} from '../../models/precio-clase/precio-clase.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrecioClaseService {
  private precio_clasesSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private precio_claseSource: BehaviorSubject<any> = new BehaviorSubject(null);
  // listado de precios clase

  private resourceUrl: string;
  public precio_clases = this.precio_clasesSource.asObservable();
  public precio_clase = this.precio_claseSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.REST_URL + 'precioclase/';
  }

  fetchPrecioClase(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      precio_clase => this.precio_clasesSource.next([]),
      err => console.log(err) );
  }
    //importante!!!!
    obtener(id: number, filtro?: String ) {
      const url = filtro ? this.resourceUrl + id + filtro+"?_token="+localStorage.getItem('token') : this.resourceUrl + id +"?_token="+localStorage.getItem('token');
      return this.http.get( url ).pipe(
        map(prec => {
          return prec;
        })
      );
    }

    obtenerTodos(filtro?: String) {
      return this.http.get<any>(filtro ? this.resourceUrl + filtro : this.resourceUrl+"?_token="+localStorage.getItem('token')).pipe(
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
    return this.http.put(this.resourceUrl+"?_token="+localStorage.getItem('token'), dataSerial);
  }
  guardar(data: Object) {
    const dataSerial = JSON.stringify(data);
    return this.http.post(this.resourceUrl+"?_token="+localStorage.getItem('token'), dataSerial);
  }

}
