import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { LineaAereaService } from '../../core/rest/linea-aerea/linea-aerea.service';

@Component({
  selector: 'app-linea-aerea-form',
  templateUrl: './linea-aerea-form.component.html',
  styleUrls: ['./linea-aerea-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LineaAereaFormComponent implements OnInit {
  @Input('detalleLineaAerea') naturalForm: FormGroup;
  linea_aereaForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<LineaAereaFormComponent>,
    //private _cliente_service: ClienteService,
  ) {

  }
  iniciarForm() {const codigoControl = new FormControl({value: '', disabled: false}, []);
  const nombre_oficialControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const nombre_cortoControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const representanteControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const fundacionControl = new FormControl({value: '', disabled: false}, [ ]);
  const codigo_paisControl = new FormControl({value: '', disabled: false}, [ ]);
  const correoControl = new FormControl({value: '', disabled: false}, [ ]);
  const webControl = new FormControl({value: '', disabled: false}, [ ]);
  this.linea_aereaForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    codigo: codigoControl,
    nombre_oficial: nombre_oficialControl,
    nombre_corto: nombre_cortoControl,
    representante: representanteControl,
    fundacion: fundacionControl,
    codigo_pais: codigo_paisControl,
    correo: correoControl,
    web: webControl,
  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
/*
  registrarAeropuerto(){
    console.log("registrar");
    this._aeropuerto_service.guardar(this.aeropuertoForm.value).subscribe((res)=>{
      if(res){
        console.log("registrado con exito");
      }
    })
  }
*/

}
