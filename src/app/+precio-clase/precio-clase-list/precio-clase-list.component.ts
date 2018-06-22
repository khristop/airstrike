import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { PrecioClaseFormComponent } from '../precio-clase-form/precio-clase-form.component';
import { PrecioClaseService } from '../../core/rest/precio-clase/precio-clase.service';

@Component({
  selector: 'airstrike-precio-clase-list',
  templateUrl: './precio-clase-list.component.html',
  styleUrls: ['./precio-clase-list.component.css']
})
export class PrecioClaseListComponent implements OnInit {
  columnas = ['Id', 'Id Programación de vuelo', 'Precio', 'Precio de Maletas', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

//cosas del form
@ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
dialogRef;
dialogUpdateCliRef;

constructor(private _dialog: MatDialog,
  private _precio_clase_service: PrecioClaseService)  {

  }

  //mas cosas del form
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( PrecioClaseFormComponent , {
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
    this._precio_clase_service.obtenerTodos().subscribe(precioclases => {
      this.dataSource = new MatTableDataSource(precioclases);
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
  this.dialogUpdateCliRef = this._dialog.open(PrecioClaseFormComponent, {
    width: '850px',
  });

  this.dialogUpdateCliRef.afterClosed().subscribe(result => {
    console.log('Dialogo cerrado');
  });
}

}
