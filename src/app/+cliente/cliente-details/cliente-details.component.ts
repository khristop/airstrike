import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ClienteService } from '../../core/rest/cliente/cliente.service';

@Component({
  selector: 'cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  private selectedId: any;

  public cliente: any;

  constructor(private route: ActivatedRoute, private _cliente_service: ClienteService){}

  ngOnInit(){
    this.selectedId = this.route.snapshot.paramMap.get('id');

    this._cliente_service.obtener(this.selectedId).subscribe(cliente=>{
      this.cliente = cliente[0];
      console.log(this.cliente);
    });

  }
}

//Lic. Dennise