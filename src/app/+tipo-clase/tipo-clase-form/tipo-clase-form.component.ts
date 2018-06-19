import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { TipoClaseService } from '../../core/rest/tipo-clase/tipo-clase.service';

@Component({
  selector: 'app-tipo-clase-form',
  templateUrl: './tipo-clase-form.component.html',
  styleUrls: ['./tipo-clase-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TipoClaseFormComponent implements OnInit {
  @Input('detalleTipoClase') naturalForm: FormGroup;
  tipo_claseForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<TipoClaseService>,
    private _tipo_clase_service: TipoClaseService,
  ) {

  }
  iniciarForm() {
  const nombreControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  this.tipo_claseForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    nombre: nombreControl,

  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarTipoClase(){
    console.log("registrar");
    this._tipo_clase_service.guardar(this.tipo_claseForm.value).subscribe((res)=>{
      if(res){
        console.log("registrado con exito");
      }
    })
  }


}
