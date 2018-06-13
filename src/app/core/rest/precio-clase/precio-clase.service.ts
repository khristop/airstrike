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
    this.resourceUrl = config.API_URL + 'precio_clase/';
  }

  fetchPrecioClase(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      precio_clase => this.precio_clasesSource.next([]),
      err => console.log(err) );
  }
    //importante!!!!
    obtener(id: number, filtro?: String ) {
      const url = filtro ? this.resourceUrl + id + filtro : this.resourceUrl + id ;
      return this.http.get( url ).pipe(
        map(prec => {
          return prec;
        })
      );
    }

  obtenerTodos(filtro?: String) {
    return this.http.get(filtro ? this.resourceUrl + filtro : this.resourceUrl );
  }
  actualizar(data: Object) {
    const dataSerial = JSON.stringify(data);
    return this.http.put(this.resourceUrl, dataSerial);
  }
  guardar(data: Object) {
    const dataSerial = JSON.stringify(data);
    return this.http.post(this.resourceUrl, dataSerial);
  }

}
