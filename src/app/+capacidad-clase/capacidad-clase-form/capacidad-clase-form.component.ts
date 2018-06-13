import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CapacidadClaseService } from '../../core/rest/capacidad-clase/capacidad-clase.service';

@Component({
  selector: 'app-capacidad-clase-form',
  templateUrl: './capacidad-clase-form.component.html',
  styleUrls: ['./capacidad-clase-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CapacidadClaseFormComponent implements OnInit {
  @Input('detalleCapacidadClase') naturalForm: FormGroup;
  capacidad_claseForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<CapacidadClaseFormComponent>,
    private _capacidad_clase_service: CapacidadClaseService,
  ) {

  }
  iniciarForm() {
  const cantidadControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const clasesControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const modelo_avionControl = new FormControl({value: '', disabled: false}, [ ]);
  this.capacidad_claseForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    cantidad: cantidadControl,
    id_clases: clasesControl,
    modelo_avion_id: modelo_avionControl,

  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarAeropuerto(){
    console.log("registrar");
    this._capacidad_clase_service.guardar(this.capacidad_claseForm.value).subscribe((res)=>{
      if(res){
        console.log("registrado con exito");
      }
    })
  }


}
