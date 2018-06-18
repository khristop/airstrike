import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.iniciarForm();
  }
  iniciarForm() {

  }
}
