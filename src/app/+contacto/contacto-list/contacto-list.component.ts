import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { ContactoFormComponent } from '../contacto-form/contacto-form.component';
import { ContactoService } from '../../core/rest/contacto/contacto.service';

@Component({
  selector: 'airstrike-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})
export class ContactoListComponent implements OnInit {
  columnas = ['id', 'direccion_web', 'linea_area_codigo','nombre','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
  dialogRef;
  dialogUpdateCliRef;
  constructor(private _dialog: MatDialog,
    private _gat_servide: ContactoService
  ){

  }
   

  //mas cosas del form
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( ContactoFormComponent , {
      width: '850px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

  ngOnInit() {
    this._gat_servide.obtenerTodos().subscribe(contactos => {
      this.dataSource = new MatTableDataSource(contactos);
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
    this.dialogUpdateCliRef = this._dialog.open(ContactoFormComponent, {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

}
