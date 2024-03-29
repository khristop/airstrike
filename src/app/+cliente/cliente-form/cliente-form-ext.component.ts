import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ClienteService } from '../../core/rest/cliente/cliente.service';
import { NotificationService } from '../../shared/utils/notification.service';

@Component({
  selector: 'app-cliente-form-ext',
  templateUrl: './cliente-form-ext.component.html',
  styleUrls: ['./cliente-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ClienteFormExtComponent implements OnInit {

  clienteForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  } 

  constructor(private fb: FormBuilder, 
    private _cliente_service: ClienteService,
    private notificationService: NotificationService
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
    this.clienteForm.addControl('primer_nombre', this.fb.control('', [Validators.required]));
    this.clienteForm.addControl('segundo_nombre', this.fb.control('', [ Validators.required]));
    this.clienteForm.addControl('primer_apellido', this.fb.control('', [ Validators.required]));
    this.clienteForm.addControl('segundo_apellido', this.fb.control('', [ Validators.required]));
 
  }

  registrarCliente(){
    this._cliente_service.guardar(this.clienteForm.value).subscribe((res)=>{
      if(res){
        this.clienteForm.reset();
        this.notificationService.bigBox({
          title: "Registrado con exito",
          content: "Se registro con exito, ya puede ingresar a la aplicacion",
          color: "#C79121",
          timeout: 8000,
          icon: "fa fa-check",
        });

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
