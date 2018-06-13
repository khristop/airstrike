import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ModeloAvionService } from '../../core/rest/modelo-avion/modelo-avion.service';

@Component({
  selector: 'app-modelo-avion-form',
  templateUrl: './modelo-avion-form.component.html',
  styleUrls: ['./modelo-avion-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModeloAvionFormComponent implements OnInit {
  @Input('detalleModeloAvion') naturalForm: FormGroup;
  modelo_avionForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<ModeloAvionFormComponent>,
    private _modelo_avion_service: ModeloAvionService,
  ) {

  }
  getFontSize() {
   // return Math.max(10, this.options.value.fontSize);
  }
  iniciarForm() {
  const nombre_modeloControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const marcaControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const maletasControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const asientosControl = new FormControl({value: '', disabled: false}, [ ]);
  this.modelo_avionForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    nombre_modelo: nombre_modeloControl,
    marca: marcaControl,
    cantidad_maletas: maletasControl,
    cantidad_asientos: asientosControl,

  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarModeloAvion(){
    console.log("registrar");
    this._modelo_avion_service.guardar(this.modelo_avionForm.value).subscribe((res)=>{
      if(res){
        console.log("registrado con exito");
      }
    })
  }


}
