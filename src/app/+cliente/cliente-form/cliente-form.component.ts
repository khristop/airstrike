import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ClienteService } from '../../core/rest/cliente/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  } 

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<ClienteFormComponent>,
    private _cliente_service: ClienteService,
  ) {

  }

  iniciarForm() {
    const idClienteControl = new FormControl({value: '', disabled: false}, []);
    const telFijoControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
    const telMovilControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
    const direccionControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
    const numViajeroControl = new FormControl({value: '', disabled: false}, [ ]);
    const idUsuarioControl = new FormControl({value: '', disabled: false}, [ ]);
    const tipoClienteControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
    this.clienteForm = this.fb.group({
      hideRequired: false,  // configuracion
      floatLabel: 'auto',   // configuracion
      // inputs
      id_cliente: idClienteControl,
      tel_fijo: telFijoControl,
      tel_movil: telMovilControl,
      direccion: direccionControl,
      num_viajero: numViajeroControl,
      id_usuario: idUsuarioControl,
      tipo_cliente: tipoClienteControl,
      detalle_natural: this.fb.group({}),
      detalle_empresa: this.fb.group({}),
      usuario: this.fb.group({}),
    });
  }

  onCerrar(): void {
    this.dialogRef.close();
  }

  registrarCliente(){
    console.log("registrar");
    this._cliente_service.guardar(this.clienteForm.value).subscribe((res)=>{
      if(res){
        console.log("registrado con exito");
      }
    })
  }

  cambioTipoCliente(){
    if(this.clienteForm.get('tipo_cliente').value == 'natural'){
      this.clienteForm.get('detalle_empresa').disable();
      this.clienteForm.get('detalle_natural').enable();
    }else{
      this.clienteForm.get('detalle_natural').disable();
      this.clienteForm.get('detalle_empresa').enable();
    }
  }
}
