import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AeropuertoService } from '../../core/rest/aeropuerto/aeropuerto.service';

@Component({
  selector: 'app-aeropuerto-form',
  templateUrl: './aeropuerto-form.component.html',
  styleUrls: ['./aeropuerto-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AeropuertoFormComponent implements OnInit {
  @Input('detalleAeropuerto') naturalForm: FormGroup;
  aeropuertoForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AeropuertoFormComponent>,
    private _aeropuerto_service: AeropuertoService,
  ) {

  }
  iniciarForm() {const codigoControl = new FormControl({value: '', disabled: false}, []);
  const nombreControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const telefonoControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const bahiasControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const codigo_ciudadControl = new FormControl({value: '', disabled: false}, [ ]);
  const idUsuarioControl = new FormControl({value: '', disabled: false}, [ ]);
  const tipoClienteControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  this.aeropuertoForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    codigo: codigoControl,
    nombre: nombreControl,
    telefono: telefonoControl,
    bahias: bahiasControl,
    codigo_ciudad: codigo_ciudadControl,
  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarAeropuerto(){
    console.log("registrar");
    this._aeropuerto_service.guardar(this.aeropuertoForm.value).subscribe((res)=>{
      if(res){
        console.log("registrado con exito");
      }
    })
  }


}
