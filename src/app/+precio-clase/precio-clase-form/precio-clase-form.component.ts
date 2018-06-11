import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { PrecioClaseService } from '../../core/rest/precio-clase/precio-clase.service';

@Component({
  selector: 'app-precio-clase-form',
  templateUrl: './precio-clase-form.component.html',
  styleUrls: ['./precio-clase-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PrecioClaseFormComponent implements OnInit {
  @Input('detallePrecioClase') naturalForm: FormGroup;
  precio_claseForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<PrecioClaseFormComponent>,
    //private _cliente_service: ClienteService,
  ) {

  }
  iniciarForm() {
  const claseControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const programacionControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const precioControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const maletaControl = new FormControl({value: '', disabled: false}, [ ]);
  this.precio_claseForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    clase: claseControl,
    programacion: programacionControl,
    precio: precioControl,
    maleta: maletaControl,

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
