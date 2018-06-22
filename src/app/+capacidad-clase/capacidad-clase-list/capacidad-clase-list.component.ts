import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { CapacidadClaseFormComponent } from '../capacidad-clase-form/capacidad-clase-form.component';
import { CapacidadClaseService } from '../../core/rest/capacidad-clase/capacidad-clase.service';

@Component({
  selector: 'airstrike-capacidad-clase-list',
  templateUrl: './capacidad-clase-list.component.html',
  styleUrls: ['./capacidad-clase-list.component.css']
})
export class CapacidadClaseListComponent implements OnInit {
  columnas = ['id', 'id_horario', 'aeropuerto_codigo','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //cosas del form
  @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
  dialogRef;

  dialogUpdateCliRef;
  constructor(private _dialog: MatDialog,
    private _gat_servide: CapacidadClaseService
  ){

  }
  
//mas cosas del form
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( CapacidadClaseFormComponent , {
      width: '850px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this._gat_servide.obtenerTodos().subscribe(capacidadclases => {
      this.dataSource = new MatTableDataSource(capacidadclases);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUpdateDialog(idCliente: number) {
    //ejecutar peticion hacia el servicio primero
    this.dialogUpdateCliRef = this._dialog.open(CapacidadClaseFormComponent, {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

}
