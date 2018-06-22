import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {Contacto} from '../../models/contacto/contacto.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private contactosSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private contactoSource: BehaviorSubject<any> = new BehaviorSubject(null);
  // listado de contactos

  private resourceUrl: string;
  public contactos = this.contactosSource.asObservable();
  public contacto = this.contactoSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.API_URL + 'contacto/';
  }

  fetchContacto(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      contacto => this.contactosSource.next([]),
      err => console.log(err) );
  }
  //importante!!!!
obtener(id: number, filtro?: String ) {
  const url = filtro ? this.resourceUrl + id + filtro+"?_token="+localStorage.getItem('token') : this.resourceUrl + id+"?_token="+localStorage.getItem('token') ;
  return this.http.get( url ).pipe(
    map(contact => {
      return contact;
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
