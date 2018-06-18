import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RolService } from '../../../core/rest/auth/rol.service';
import { EstadoUserService } from '../../../core/rest/auth/estado-user.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  @Input('usuarioForm') usuarioForm: FormGroup;
  @Input('localizacion') locate: string;
  public roles: any[];
  public estados: any[];

  constructor(private fb: FormBuilder,
    private _rol_Service: RolService,
    private _estado_service: EstadoUserService
  ) { }

  ngOnInit() {
    this._rol_Service.obtenerTodos().subscribe(roles=>{
      this.roles = roles;
      this._estado_service.obtenerTodos().subscribe(estados=>{
        this.estados = estados;
      })
    })
    
    this.iniciarForm();
  }
  iniciarForm() {
    //this.usuarioForm.addControl('id_usuario', this.fb.control('', [Validators.required]));
    this.usuarioForm.addControl('id_rol', this.fb.control(this.locate ? 1 : '', [Validators.required]));
    this.usuarioForm.addControl('id_estado', this.fb.control(this.locate ? 1: '', [Validators.required]));
    //this.usuarioForm.addControl('millas', this.fb.control('', [Validators.required]));
    this.usuarioForm.addControl('username', this.fb.control('', [Validators.required]));
    this.usuarioForm.addControl('password', this.fb.control('', [Validators.required]));
  }
}
