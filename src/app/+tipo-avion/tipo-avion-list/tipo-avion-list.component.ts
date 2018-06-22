import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { TipoAvionFormComponent } from '../tipo-avion-form/tipo-avion-form.component';
import { TipoAvionService } from '../../core/rest/tipo-avion/tipo-avion.service';

@Component({
  selector: 'airstrike-tipo-avion-list',
  templateUrl: './tipo-avion-list.component.html',
  styleUrls: ['./tipo-avion-list.component.css']
})
export class TipoAvionListComponent implements OnInit {
  columnas = ['id', 'nombre','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //cosas del form
  @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
  dialogRef;

  dialogUpdateCliRef;
  constructor(private _dialog: MatDialog,
    private _gat_servide: TipoAvionService
  ){

  }
  
//mas cosas del form
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( TipoAvionFormComponent , {
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
    this._gat_servide.obtenerTodos().subscribe(tiposaviones => {
      this.dataSource = new MatTableDataSource(tiposaviones);
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
    this.dialogUpdateCliRef = this._dialog.open(TipoAvionFormComponent, {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

}
