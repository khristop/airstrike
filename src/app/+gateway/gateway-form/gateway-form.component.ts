import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { GatewayService } from '../../core/rest/gateway/gateway.service';
import { HorarioService } from '../../core/rest/horario/horario.service';
import { AeropuertoService } from '../../core/rest/aeropuerto/aeropuerto.service';
import { NotificationService } from '../../shared/utils/notification.service';

@Component({
  selector: 'app-gateway-form',
  templateUrl: './gateway-form.component.html',
  styleUrls: ['./gateway-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GatewayFormComponent implements OnInit {
  @Input('detalleGateway') naturalForm: FormGroup;
  gatewayForm: FormGroup;

  horarios;
  aeropuertos;

  filtro=  new FormControl('',[]);

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<GatewayFormComponent>,
    private _gateway_service: GatewayService,
    private _horarios_service: HorarioService,
    private _aeropuerto_service: AeropuertoService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this._horarios_service.obtenerTodos().subscribe(horarios=>{
      this.horarios = horarios;
      this._aeropuerto_service.obtenerTodos().subscribe(aeros=>{
        this.aeropuertos = aeros;
        console.log(aeros);
      })
    })
    this.iniciarForm();
  }
  iniciarForm() {
    const aeropuerto_codigoControl = new FormControl({ value: '', disabled: false }, [Validators.required,]);
    const id_horarioControl = new FormControl({ value: '', disabled: false }, [Validators.required,]);
    this.gatewayForm = this.fb.group({
      hideRequired: false,  // configuracion
      floatLabel: 'auto',   // configuracion
      aeropuerto_codigo: aeropuerto_codigoControl,
      id_horario: id_horarioControl,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarGateway() {
    this._gateway_service.guardar(this.gatewayForm.value).subscribe((res) => {
      if (res) {
        console.log("registrado con exito");
        this.dialogRef.close();
        this.notificationService.bigBox({
          title: "Registrado con exito",
          content: "Se registro el gateway con exito",
          color: "#C79121",
          timeout: 8000,
          icon: "fa fa-check",
        
        });
      }
    })
  }


}
