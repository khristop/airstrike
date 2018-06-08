import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
import {ClienteEmpresa, ClienteNatural} from '../../models/cliente/cliente.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientesSource: BehaviorSubject<ClienteNatural[]> = new BehaviorSubject<ClienteNatural[]>([]);
  private clienteSource: BehaviorSubject<ClienteNatural> = new BehaviorSubject<ClienteNatural>(null);
  // listado de clientes

  private resourceUrl: string;
  public clientes = this.clientesSource.asObservable();
  public cliente = this.clienteSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.API_URL + 'cliente/';
  }

  fetchClientes(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      cliente => this.clientesSource.next([]),
      err => console.log(err) );
  }
  cambiarCliente(id: number) {
    this.obtener(id).subscribe(
      cliente => this.clienteSource.next(cliente),
      err => console.log(err) );
  }
  obtener(id: number, filtro?: String ) {
    const url = filtro ? this.resourceUrl + id + filtro : this.resourceUrl + id ;
    return this.http.get( url ).pipe(
      map(cli => new ClienteNatural(cli))
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
