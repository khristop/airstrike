import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AeropuertoService } from '../../core/rest/aeropuerto/aeropuerto.service';
import { NotificationService } from '../../shared/utils/notification.service';
import { CiudadService } from '../../core/rest/aeropuerto/ciudad.service';

@Component({
  selector: 'app-aeropuerto-form',
  templateUrl: './aeropuerto-form.component.html',
  styleUrls: ['./aeropuerto-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AeropuertoFormComponent implements OnInit {
  @Input('detalleAeropuerto') naturalForm: FormGroup;
  aeropuertoForm: FormGroup;
  ciudades;

  ngOnInit() {
    this._ciudad_service.obtenerTodos().subscribe(ciudades => {
      this.ciudades = ciudades;
    })
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AeropuertoFormComponent>,
    private _aeropuerto_service: AeropuertoService,
    private _ciudad_service: CiudadService,
    private notificationService: NotificationService
  ) {

  }
  iniciarForm() {
    const codigoControl = new FormControl({ value: '', disabled: false }, []);
    const nombreControl = new FormControl({ value: '', disabled: false }, [Validators.required,]);
    const telefonoControl = new FormControl({ value: '', disabled: false }, [Validators.required,]);
    const bahiasControl = new FormControl({ value: '', disabled: false }, [Validators.required,]);
    const codigo_ciudadControl = new FormControl({ value: '', disabled: false }, []);
    this.aeropuertoForm = this.fb.group({
      hideRequired: false,  // configuracion
      floatLabel: 'auto',   // configuracion
      // inputs
      codigo: codigoControl,
      nombre: nombreControl,
      telefono: telefonoControl,
      bahias: bahiasControl,
      ciudad_codigo: codigo_ciudadControl,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registrarAeropuerto() {
    this._aeropuerto_service.guardar(this.aeropuertoForm.value).subscribe((res) => {
      if (res) {
        this.dialogRef.close();
        this.notificationService.bigBox({
          title: "Registrado con exito",
          content: "Se registro el aeropuerto con exito",
          color: "#C79121",
          timeout: 8000,
          icon: "fa fa-check",
        });
      }
    }
    )
  }


}
