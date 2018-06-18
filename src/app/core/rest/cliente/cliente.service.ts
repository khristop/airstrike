import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private resourceUrl: string;

  constructor(private http: HttpClient) {
    this.resourceUrl = config.REST_URL + 'cliente';
  }

  //importante!!!!
  obtener(id: number, filtro?: String ) {
    const url = filtro ? this.resourceUrl + id + filtro : this.resourceUrl + id ;
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
    return this.http.put<any>(this.resourceUrl, dataSerial).pipe(
      map(res=> {
        if(res.status == 'OK'){
          return res['data'];
        }else{
          return [];
        }
      })
    );;
  }
  guardar(data: Object) {
    const dataSerial = JSON.stringify(data);
    return this.http.post<any>(this.resourceUrl, dataSerial).pipe(
      map(res=> {
        if(res.status == 'OK'){
          return res['data'];
        }else{
          return [];
        }
      })
    );;
  }

}
