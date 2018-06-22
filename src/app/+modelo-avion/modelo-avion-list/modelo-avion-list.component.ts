import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { ModeloAvionFormComponent } from '../modelo-avion-form/modelo-avion-form.component';
import { ModeloAvionService } from '../../core/rest/modelo-avion/modelo-avion.service';

@Component({
  selector: 'airstrike-modelo-avion-list',
  templateUrl: './modelo-avion-list.component.html',
  styleUrls: ['./modelo-avion-list.component.css']
})
export class ModeloAvionListComponent implements OnInit {
  columnas = ['Id', 'Nombre Modelo', 'Marca', 'Cantidad de Maletas', 'Cantidad de Asientos', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dialogRef;
  dialogUpdateCliRef;
 //cosas del form
 @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
 

 constructor(private _dialog: MatDialog,
  private _modelo_avion_service: ModeloAvionService
) {

  }

  //mas cosas del form
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( ModeloAvionFormComponent , {
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
    this._modelo_avion_service.obtenerTodos().subscribe(modeloaviones => {
      this.dataSource = new MatTableDataSource(modeloaviones);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

  //cosas de la lista
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUpdateDialog(id:number){
    //ejecutar peticion hacia el servicio primero
    this.dialogUpdateCliRef = this._dialog.open( ModeloAvionFormComponent , {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }
}

