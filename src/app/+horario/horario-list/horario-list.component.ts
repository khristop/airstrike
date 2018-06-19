import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { HorarioFormComponent } from '../horario-form/horario-form.component';
import { HorarioService } from '../../core/rest/horario/horario.service';

@Component({
  selector: 'airstrike-horario-list',
  templateUrl: './horario-list.component.html',
  styleUrls: ['./horario-list.component.css']
})
export class HorarioListComponent implements OnInit {
  columnas = ['id', 'hora', 'tiempo_abordaje', 'tiempo_desabordaje', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //cosas del form
  @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
  dialogRef;
  hoararios;
  dialogUpdateCliRef;

  constructor(private _dialog: MatDialog,
    private _horario_service: HorarioService
  ) {

  }

  //mas cosas del form
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open(HorarioFormComponent, {
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
    this._horario_service.obtenerTodos().subscribe(horarios => {
      this.dataSource = new MatTableDataSource(horarios);
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
    this.dialogUpdateCliRef = this._dialog.open(HorarioFormComponent, {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }
}

