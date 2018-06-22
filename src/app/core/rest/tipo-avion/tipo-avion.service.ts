import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
//import {Gateway} from '../../models/gateway/gateway.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoAvionService {
  private gatewaysSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private gatewaySource: BehaviorSubject<any> = new BehaviorSubject(null);
  // listado de aviones

  private resourceUrl: string;
  public gateways = this.gatewaysSource.asObservable();
  public gateway = this.gatewaySource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.REST_URL + 'gateway';
  }

  fetchGateway(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      gateway => this.gatewaysSource.next([]),
      err => console.log(err) );
  }
  //importante!!!!
obtener(id: number, filtro?: String ) {
  const url = filtro ? this.resourceUrl +'/'+ id + filtro+"?_token="+localStorage.getItem('token') : this.resourceUrl + '/'+id+"?_token="+localStorage.getItem('token') ;
  return this.http.get( url ).pipe(
    map(gate => {
      return gate;
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
