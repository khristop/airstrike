import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'airstrike-vuelo-consulta',
    templateUrl: './vuelos-consulta.component.html',
    styles: [`table {
        width: 100%;
      }
      
      .mat-form-field {
        font-size: 14px;
        width: 100%;
      }
      `,]
})
export class VuelosConsultaComponent implements OnInit {
    columnas = ['codigo_vuelo', 'fecha', 'aeropuerto_nombre', 'linea_aerea_nombre_oficial', 'horario_hora', 'nombre_clase', 'precio_clase', 'action'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    vueloSelected;

    @Input('vuelos') 
    set vuelos( dataVuelos : any){
        this.dataSource  = new MatTableDataSource(dataVuelos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    constructor() {

    }

    ngOnInit() {
        
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
