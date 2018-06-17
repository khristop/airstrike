import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  @Input('usuarioForm') usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.iniciarForm();
  }
  iniciarForm() {
    //this.usuarioForm.addControl('id_usuario', this.fb.control('', [Validators.required]));
    this.usuarioForm.addControl('id_rol', this.fb.control('', [Validators.required]));
    this.usuarioForm.addControl('id_estado', this.fb.control('', [Validators.required]));
    //this.usuarioForm.addControl('millas', this.fb.control('', [Validators.required]));
    this.usuarioForm.addControl('username', this.fb.control('', [Validators.required]));
    this.usuarioForm.addControl('password', this.fb.control('', [Validators.required]));
  }
}
