import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { AeropuertoFormComponent } from '../aeropuerto-form/aeropuerto-form.component';
import { AeropuertoService } from '../../core/rest/aeropuerto/aeropuerto.service';

@Component({
  selector: 'airstrike-aeropuerto-list',
  templateUrl: './aeropuerto-list.component.html',
  styleUrls: ['./aeropuerto-list.component.css']
})
export class AeropuertoListComponent implements OnInit {

  @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
  dialogRef;
  columnas = ['codigo', 'nombre','telefono','bahias', 'ciudad_codigo','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dialogUpdateCliRef;
  constructor(private _dialog: MatDialog,
    private _aero_service: AeropuertoService) {
  }

  ngOnInit() {
    this._aero_service.obtenerTodos().subscribe(aeros => {
      this.dataSource = new MatTableDataSource(aeros);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( AeropuertoFormComponent , {
      width: '850px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openUpdateDialog(codigo: String) {
    //ejecutar peticion hacia el servicio primero
    this.dialogUpdateCliRef = this._dialog.open(AeropuertoFormComponent, {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

}


