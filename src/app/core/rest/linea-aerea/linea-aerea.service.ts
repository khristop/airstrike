import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {LineaAerea} from '../../models/linea-aerea/linea-aerea.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LineaAereaService {
  private linea_aereasSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private linea_aereaSource: BehaviorSubject<any> = new BehaviorSubject(null);
  // listado de lineas aereas

  private resourceUrl: string;
  public linea_aereas = this.linea_aereasSource.asObservable();
  public linea_aerea = this.linea_aereaSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.API_URL + 'linea-aerea/';
  }

  fetchLineaAereas(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      linea_aerea => this.linea_aereasSource.next([]),
      err => console.log(err) );
  }
    //importante!!!!
    obtener(id: number, filtro?: String ) {
      const url = filtro ? this.resourceUrl + id + filtro+"?_token="+localStorage.getItem('token') : this.resourceUrl + id+"?_token="+localStorage.getItem('token') ;
      return this.http.get( url ).pipe(
        map(line => {
          return line;
        })
      );
    }

  obtenerTodos(filtro?: String) {
    return this.http.get(filtro ? this.resourceUrl + filtro+"?_token="+localStorage.getItem('token') : this.resourceUrl+"?_token="+localStorage.getItem('token') );
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
