import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';

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
    this.dialogRef = this._dialog.open( this.dialogCreate, {
      width: '700px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
