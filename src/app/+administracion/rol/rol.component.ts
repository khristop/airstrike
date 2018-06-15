import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  perfilSeleccionado : any;

  bsModalRef: BsModalRef;

  perfilNuevo: any;

  @ViewChild("perfilNuevoForm") perfilForm: ElementRef;

  constructor(
    private modalService: BsModalService,
  ) { }
  

  ngOnInit() {
  }

  perfilSelected($event){
    this.perfilSeleccionado = $event;
  }

  regresarLista(){
    this.perfilSeleccionado = null;
  }

  onCrearPerfil(){
    let config = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true,
      class: 'modal-lg'
    }
    this.bsModalRef = this.modalService.show(this.perfilForm, config);
  }  

  onClose(){
    this.bsModalRef.hide();
  }

  onPerfil($event){
    this.perfilNuevo = $event;
    this.onClose();
  }

}
