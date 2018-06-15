import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ContactoService } from '../../core/rest/contacto/contacto.service';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactoFormComponent implements OnInit {
  @Input('detalleContacto') naturalForm: FormGroup;
  contactoForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  }

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<ContactoFormComponent>,
    private _cliente_service: ContactoService,
  ) {

  }
  iniciarForm() {const id_contactoControl = new FormControl({value: '', disabled: false}, []);
  const webControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const linea_aereaControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  const nombreControl = new FormControl({value: '', disabled: false}, [Validators.required, ]);
  this.contactoForm = this.fb.group({
    hideRequired: false,  // configuracion
    floatLabel: 'auto',   // configuracion
    // inputs
    id_contacto: id_contactoControl,
    direccion_web: webControl,
    linea_aerea_codigo: linea_aereaControl,
    nombre: nombreControl,

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
