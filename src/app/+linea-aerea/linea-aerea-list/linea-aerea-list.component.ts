import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { LineaAereaFormComponent } from '../linea-aerea-form/linea-aerea-form.component';
import { LineaAereaService } from '../../core/rest/linea-aerea/linea-aerea.service';

@Component({
  selector: 'airstrike-linea-aerea-list',
  templateUrl: './linea-aerea-list.component.html',
  styleUrls: ['./linea-aerea-list.component.css']
})
export class LineaAereaListComponent implements OnInit {
  columnas = ['codigo', 'nombre_oficial', 'nombre_corto', 'reresentante', 'fecha_fundación', 'pais_codigo', 'correo_electronico', 'página_web','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //cosas del form
  @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
  dialogRef;

  
  dialogUpdateCliRef;
  constructor(private _dialog: MatDialog,
    private _gat_servide: LineaAereaService
  ){

  }
  
  //mas cosas del form
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( LineaAereaFormComponent , {
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
    this._gat_servide.obtenerTodos().subscribe(lineas => {
      this.dataSource = new MatTableDataSource(lineas);
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
    this.dialogUpdateCliRef = this._dialog.open(LineaAereaFormComponent, {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

}
