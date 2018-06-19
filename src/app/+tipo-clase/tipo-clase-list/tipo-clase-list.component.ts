import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { TipoClaseFormComponent } from '../tipo-clase-form/tipo-clase-form.component';
import { TipoClaseService } from '../../core/rest/tipo-clase/tipo-clase.service';

@Component({
  selector: 'airstrike-tipo-clase-list',
  templateUrl: './tipo-clase-list.component.html',
  styleUrls: ['./tipo-clase-list.component.css']
})
export class TipoClaseListComponent implements OnInit {
  columnas = ['Id', 'Nombre', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //cosas del form
  @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
  dialogRef;

  dialogUpdateCliRef;
  constructor(private _dialog: MatDialog,
    private _gat_servide: TipoClaseService
  ){

  }
  
//mas cosas del form
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( TipoClaseFormComponent , {
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
    this._gat_servide.obtenerTodos().subscribe(tipoclases => {
      this.dataSource = new MatTableDataSource(tipoclases);
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

  openUpdateDialog(id: number) {
    //ejecutar peticion hacia el servicio primero
    this.dialogUpdateCliRef = this._dialog.open(TipoClaseFormComponent, {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

}
