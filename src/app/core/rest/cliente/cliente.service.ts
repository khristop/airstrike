import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteSource = new BehaviorSubject()
  constructor() { }
}
