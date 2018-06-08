import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cliente-juridico-form',
  templateUrl: './cliente-juridico-form.component.html',
  styleUrls: ['./cliente-juridico-form.component.css']
})
export class ClienteJuridicoFormComponent implements OnInit {
  @Input() empresaForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.iniciarForm();
  }
  iniciarForm() {
    this.empresaForm.addControl('nombre_empresa', this.fb.control('', []));
    this.empresaForm.addControl('nit', this.fb.control('', []));
    this.empresaForm.addControl('nic', this.fb.control('', []));
    this.empresaForm.addControl('nombre_contacto', this.fb.control('', []));
    this.empresaForm.addControl('id_cliente', this.fb.control('', []));
  }

}
