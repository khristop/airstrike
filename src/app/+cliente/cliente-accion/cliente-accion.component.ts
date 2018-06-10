import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';

@Component({
  selector: 'app-cliente-accion',
  templateUrl: './cliente-accion.component.html',
  styleUrls: ['./cliente-accion.component.css']
})
export class ClienteAccionComponent implements OnInit {

  @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
  dialogRef;

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( ClienteFormComponent , {
      width: '850px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
