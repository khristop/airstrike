import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { HorarioService } from '../../core/rest/horario/horario.service';
import { TimepickerModule, WavesModule } from 'ng-uikit-pro-standard'
import { NgbdTimepickerBasic } from './timepicker-basic';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-horario-form',
  templateUrl: './horario-form.component.html',
  styleUrls: ['./horario-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HorarioFormComponent implements OnInit {

  //cosas del timer
  defaultTime = {hour: 13, minute: 30};
  meridianTime = {hour: 13, minute: 30};
  meridian = true;

  //SecondsTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  //customTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  toggleSeconds() {
      this.seconds = !this.seconds;
  }

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  @Input('detalleHorario') naturalForm: FormGroup;
  horarioForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<HorarioFormComponent>,
    //private _cliente_service: ClienteService,
  ) {

  }
  iniciarForm() {
  const horaControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const abordajeControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const desabordajeControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const modelo_avionControl = new FormControl({value: '', disabled: false}, [ ]);
  this.horarioForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    hora: horaControl,
    abordaje: abordajeControl,
    desabordaje: desabordajeControl,

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
