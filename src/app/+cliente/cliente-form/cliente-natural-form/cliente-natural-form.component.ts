import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cliente-natural-form',
  templateUrl: './cliente-natural-form.component.html',
  styleUrls: ['./cliente-natural-form.component.css']
})
export class ClienteNaturalFormComponent implements OnInit {
  @Input('detalleCliente') naturalForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.iniciarForm();
  }
  iniciarForm() {
    this.naturalForm.addControl('estado_civil', this.fb.control('', [ Validators.required]));
    this.naturalForm.addControl('genero', this.fb.control('', [ Validators.required]));
    this.naturalForm.addControl('fecha_nacimiento', this.fb.control({value:'', disabled: false}, [ Validators.required]));
    this.naturalForm.addControl('tipo_doc', this.fb.control('', [ Validators.required]));
    this.naturalForm.addControl('num_doc', this.fb.control('', [ Validators.required]));
    this.naturalForm.addControl('id_cliente', this.fb.control('', [ ]));
  }
}
