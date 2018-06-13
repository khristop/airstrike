import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { GatewayService } from '../../core/rest/gateway/gateway.service';

@Component({
  selector: 'app-gateway-form',
  templateUrl: './gateway-form.component.html',
  styleUrls: ['./gateway-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GatewayFormComponent implements OnInit {
  @Input('detalleGateway') naturalForm: FormGroup;
  gatewayForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<GatewayFormComponent>,
  private _gateway_service: GatewayService,
  ) {

  }
  iniciarForm() {
  const aeropuerto_codigoControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const id_horarioControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  this.gatewayForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    aeropuerto_codigo: aeropuerto_codigoControl,
    id_horario: id_horarioControl,
  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarGateway(){
    console.log("registrar");
    this._gateway_service.guardar(this.gatewayForm.value).subscribe((res)=>{
      if(res){
        console.log("registrado con exito");
      }
    })
  }


}
