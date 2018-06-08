import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder) {
  }

  iniciarForm() {
    const idClienteControl = new FormControl({value: '', disabled: false}, []);
    const telFijoControl = new FormControl({value: '', disabled: false}, []);
    const telMovilControl = new FormControl({value: '', disabled: false}, []);
    const direccionControl = new FormControl({value: '', disabled: false}, []);
    const numViajeroControl = new FormControl({value: '', disabled: false}, []);
    const idUsuarioControl = new FormControl({value: '', disabled: false}, []);
    const tipoClienteControl = new FormControl({value: '', disabled: false}, []);
    this.clienteForm = this.fb.group({
      hideRequired: false,  // configuracion
      floatLabel: 'auto',   // configuracion
      // inputs
      id_cliente: idClienteControl,
      tel_fijo: telFijoControl,
      tel_movil: telMovilControl,
      direccionControl: direccionControl,
      num_viajero: numViajeroControl,
      id_usuario: idUsuarioControl,
      tipo_cliente: tipoClienteControl,
    });
  }

}
