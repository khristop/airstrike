import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cliente-natural-form',
  templateUrl: './cliente-natural-form.component.html',
  styleUrls: ['./cliente-natural-form.component.css']
})
export class ClienteNaturalFormComponent implements OnInit {
  @Input() naturalForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.iniciarForm();
  }
  iniciarForm() {
    this.naturalForm.addControl('primer_nombre', this.fb.control('', []));
    this.naturalForm.addControl('segundo_nombre', this.fb.control('', []));
    this.naturalForm.addControl('primer_apellido', this.fb.control('', []));
    this.naturalForm.addControl('segundo_apellido', this.fb.control('', []));
    this.naturalForm.addControl('estado_civil', this.fb.control('', []));
    this.naturalForm.addControl('genero', this.fb.control('', []));
    this.naturalForm.addControl('fecha_nacimiento', this.fb.control('', []));
    this.naturalForm.addControl('tipo_doc', this.fb.control('', []));
    this.naturalForm.addControl('num_doc', this.fb.control('', []));
    this.naturalForm.addControl('id_cliente', this.fb.control('', []));
  }
}
