import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {Aeropuerto} from '../../models/aeropuerto/aeropuerto.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {
  private aeropuertosSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private aeropuertoSource: BehaviorSubject<any> = new BehaviorSubject(null);
  // listado de aeropuertos

  private resourceUrl: string;
  public aeropuertos = this.aeropuertosSource.asObservable();
  public aeropuerto = this.aeropuertoSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.API_URL + 'aeropuerto/';
  }

  fetchAeropuerto(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      aeropuerto => this.aeropuertosSource.next([]),
      err => console.log(err) );
  }

  //importante!!!!
  obtener(id: number, filtro?: String ) {
    const url = filtro ? this.resourceUrl + id + filtro : this.resourceUrl + id ;
    return this.http.get( url ).pipe(
      map(aero => {
        return aero;
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
