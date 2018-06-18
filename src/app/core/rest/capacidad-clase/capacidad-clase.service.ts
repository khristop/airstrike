import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {CapacidadClase} from '../../models/capacidad-clase/capacidad-clase.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CapacidadClaseService {
  private capacidad_clasesSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private capacidad_claseSource: BehaviorSubject<any> = new BehaviorSubject(null);
  // listado de capacidad clase

  private resourceUrl: string;
  public capacidad_clases = this.capacidad_clasesSource.asObservable();
  public capacidad_clase = this.capacidad_claseSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.API_URL + 'capacidad-clase/';
  }

  fetchCapacidadClase(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      capacidad_clase => this.capacidad_clasesSource.next([]),
      err => console.log(err) );
  }
//importante!!!!
obtener(id: number, filtro?: String ) {
  const url = filtro ? this.resourceUrl + id + filtro+"?_token="+localStorage.getItem('token') : this.resourceUrl + id+"?_token="+localStorage.getItem('token') ;
  return this.http.get( url ).pipe(
    map(capclas => {
      return capclas;
    })
  );
}
  obtenerTodos(filtro?: String) {
    return this.http.get(filtro ? this.resourceUrl + filtro+"?_token="+localStorage.getItem('token') : this.resourceUrl +"?_token="+localStorage.getItem('token'));
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
