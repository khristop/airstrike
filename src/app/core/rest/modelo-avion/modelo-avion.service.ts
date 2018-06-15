import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {ModeloAvion} from '../../models/modelo-avion/modelo-avion.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModeloAvionService {
  private modeloavionesSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private modeloavionSource: BehaviorSubject<any> = new BehaviorSubject(null);
  // listado de aviones

  private resourceUrl: string;
  public modeloaviones = this.modeloavionesSource.asObservable();
  public modeloavione = this.modeloavionSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.API_URL + 'modelo-avion/';
  }

  fetchModeloAvion(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      modeloavion => this.modeloavionesSource.next([]),
      err => console.log(err) );
  }
    //importante!!!!
    obtener(id: number, filtro?: String ) {
      const url = filtro ? this.resourceUrl + id + filtro : this.resourceUrl + id ;
      return this.http.get( url ).pipe(
        map(modavi => {
          return modavi;
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
