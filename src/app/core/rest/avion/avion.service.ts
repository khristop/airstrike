import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {Avion} from '../../models/avion/avion.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  private avionesSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private avionSource: BehaviorSubject<any> = new BehaviorSubject(null);
  // listado de aviones

  private resourceUrl: string;
  public aeropuertos = this.avionesSource.asObservable();
  public aeropuerto = this.avionSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.API_URL + 'avion/';
  }

  fetchAvion(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      avion => this.avionesSource.next([]),
      err => console.log(err) );
  }
  //importante!!!!
  obtener(id: number, filtro?: String ) {
    const url = filtro ? this.resourceUrl + id + filtro+"?_token="+localStorage.getItem('token') : this.resourceUrl + id+"?_token="+localStorage.getItem('token') ;
    return this.http.get( url ).pipe(
      map(avi => {
        return avi;
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
