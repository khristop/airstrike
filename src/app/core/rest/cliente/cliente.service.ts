import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
import {ClienteEmpresa, ClienteNatural} from '../../models/cliente/cliente.model';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../shared/airstrike.config';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientesSource: BehaviorSubject<ClienteNatural[], ClienteEmpresa[]> = new BehaviorSubject([]);
  private clienteSource: BehaviorSubject<ClienteNatural, ClienteEmpresa> = new BehaviorSubject(null);
  // listado de clientes

  private resourceUrl: String;
  public clientes = this.clienteSource.asObservable();
  public cliente = this.clienteSource.asObservable();

  constructor(private http: HttpClient) {
    this.resourceUrl = config.API_URL + 'cliente/';
  }

  fetchClientes(filtro?: String) {
    this.obtenerTodos(filtro || null).subscribe(
      cliente => this.clienteSource.next(cliente),
      err => console.log(err) );
  }
  cambiarCliente(id: Number) {
    this.obtener(id).subscribe(
      cliente => this.clienteSource.next(cliente),
      err => console.log(err) );
  }
  obtener(id: Number, filtro?: String) {
    return this.http.get(filtro ? this.resourceUrl + id + filtro : this.resourceUrl + id );
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
