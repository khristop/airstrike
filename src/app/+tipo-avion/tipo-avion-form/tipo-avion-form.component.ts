import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { TipoAvionService } from '../../core/rest/tipo-avion/tipo-avion.service';

@Component({
  selector: 'app-tipo-avion-form',
  templateUrl: './tipo-avion-form.component.html',
  styleUrls: ['./tipo-avion-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TipoAvionFormComponent implements OnInit {
  @Input('detalleTipoAvion') naturalForm: FormGroup;
  tipo_avionForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<TipoAvionFormComponent>,
    private _tipo_avion_service: TipoAvionService,
  ) {

  }
  iniciarForm() {
  const nombreControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  this.tipo_avionForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    nombre: nombreControl,

  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarTipoAvion(){
    console.log("registrar");
    this._tipo_avion_service.guardar(this.tipo_avionForm.value).subscribe((res)=>{
      if(res){
        console.log("registrado con exito");
      }
    })
  }


}
