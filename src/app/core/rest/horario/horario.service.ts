import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {Horario} from '../../models/horario/horario.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private horariosSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private horarioSource: BehaviorSubject<any> = new BehaviorSubject(null);
  // listado de aviones

  private resourceUrl: string;
  public horarios = this.horariosSource.asObservable();
  public horario = this.horarioSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.API_URL + 'horario/';
  }

  fetchHorario(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      horario => this.horariosSource.next([]),
      err => console.log(err) );
  }
  //importante!!!!
obtener(id: number, filtro?: String ) {
  const url = filtro ? this.resourceUrl + id + filtro +"?_token="+localStorage.getItem('token'): this.resourceUrl + id+"?_token="+localStorage.getItem('token') ;
  return this.http.get( url ).pipe(
    map(hora => {
      return hora;
    })
  );
}

  obtenerTodos(filtro?: String) {
    return this.http.get(filtro ? this.resourceUrl + filtro+"?_token="+localStorage.getItem('token') : this.resourceUrl+"?_token="+localStorage.getItem('token') );
  }
  actualizar(data: Object) {
    const dataSerial = JSON.stringify(data);
    return this.http.put(this.resourceUrl +"?_token="+localStorage.getItem('token'), dataSerial);
  }
  guardar(data: Object) {
    const dataSerial = JSON.stringify(data);
    return this.http.post(this.resourceUrl +"?_token="+localStorage.getItem('token'), dataSerial);
  }

}
