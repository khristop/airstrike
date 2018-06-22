import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { AvionFormComponent } from '../avion-form/avion-form.component';
import { AvionService } from '../../core/rest/avion/avion.service';


@Component({
  selector: 'airstrike-avion-list',
  templateUrl: './avion-list.component.html',
  styleUrls: ['./avion-list.component.css']
})
export class AvionListComponent implements OnInit {


  columnas = ['placa', 'tipo_avion_id', 'linea_aerea_codigo','modelo_avion_id','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //cosas del form
  @ViewChild('dialogCreate') dialogCreate: TemplateRef<any>;
  dialogRef;
  dialogUpdateCliRef;
  constructor(private _dialog: MatDialog,
    private _gat_servide: AvionService
  ){
  }
//mas cosas del form
  openCreateDialog(): void {
    this.dialogRef = this._dialog.open( AvionFormComponent , {
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
    this._gat_servide.obtenerTodos().subscribe(aviones => {
      this.dataSource = new MatTableDataSource(aviones);
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


  openUpdateDialog(placa: String) {
    //ejecutar peticion hacia el servicio primero
    this.dialogUpdateCliRef = this._dialog.open(AvionFormComponent, {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }

}
