import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { HorarioService } from '../../core/rest/horario/horario.service';
import { NotificationService } from '../../shared/utils/notification.service';

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
    private _horario_service: HorarioService,
    private notificationService: NotificationService
  ) {

  }
  iniciarForm() {
  const horaControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const abordajeControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const desabordajeControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  this.horarioForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    hora: horaControl,
    tiempo_abordaje: abordajeControl,
    tiempo_desabordaje: desabordajeControl,

  });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarHorario(){
    this._horario_service.guardar(this.horarioForm.value).subscribe((res)=>{
      if(res){
        this.dialogRef.close();
        this.notificationService.bigBox({
          title: "Registrado con exito",
          content: "Se registro el cliente con exito, ya puede ingresar a la aplicacion",
          color: "#C79121",
          timeout: 8000,
          icon: "fa fa-check",
        
        });

      }
    })
  }

  
  onCerrar(): void {
    this.dialogRef.close();
  }


}
