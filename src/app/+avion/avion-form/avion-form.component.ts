import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AvionService } from '../../core/rest/avion/avion.service';

@Component({
  selector: 'app-avion-form',
  templateUrl: './avion-form.component.html',
  styleUrls: ['./avion-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AvionFormComponent implements OnInit {
  @Input('detalleAvion') naturalForm: FormGroup;
  avionForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AvionFormComponent>,
    private _avion_service: AvionService,
  ) {

  }
  iniciarForm() {const placaControl = new FormControl({value: '', disabled: false}, []);
  const tipo_avionControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const linea_aereaControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const bahiasControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const modelo_avionControl = new FormControl({value: '', disabled: false}, [ ]);
  this.avionForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    placa: placaControl,
    tipo_avion_id: tipo_avionControl,
    linea_aerea_codigo: linea_aereaControl,
    modelo_avion_id: modelo_avionControl,

  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarAeropuerto(){
    console.log("registrar");
    this._avion_service.guardar(this.avionForm.value).subscribe((res)=>{
      if(res){
        console.log("registrado con exito");
      }
    })
  }


}
