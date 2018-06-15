import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'rol-form',
  templateUrl: './rol-form.component.html',
  styleUrls: ['./rol-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RolFormComponent implements OnInit {
  
  rolForm: FormGroup;

  ngOnInit() {
    this.iniciarForm();
  } 

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<RolFormComponent>,
    //private _rol_service: RolService,
  ) {

  }

  iniciarForm() {
    const idRol = new FormControl({value: '', disabled: false}, []);
    const nombre = new FormControl({value: '', disabled: false}, [Validators.required, ]);
    const tipo = new FormControl({value: '', disabled: false}, [Validators.required, ]);
    const permisos = new FormControl({value: '', disabled: false}, [ ]);
    
    this.rolForm = this.fb.group({
      hideRequired: false,  // configuracion
      floatLabel: 'auto',   // configuracion
      // inputs
      id: idRol,
      nombre: nombre,
      tipo: tipo,
      permisos: permisos
    });
  }

  onCerrar(): void {
    this.dialogRef.close();
  }

  registrarRol(){
    console.log("registrar");
    // this._cliente_service.guardar(this.rolForm.value).subscribe((res)=>{
    //   if(res){
    //     console.log("registrado con exito");
    //   }
    // })
  }
}
