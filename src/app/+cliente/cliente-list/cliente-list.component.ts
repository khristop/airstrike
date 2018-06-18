import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { ClienteService } from '../../core/rest/cliente/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  columnas = ['id_usuario','username', 'primer_nombre', 'nombre_empresa' , 'num_viajero', 'millas','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dialogUpdateCliRef;

  constructor(private _dialog: MatDialog,
    private _cliente_service: ClienteService
  ) {

  }

  ngOnInit() {
    this._cliente_service.obtenerTodos().subscribe(clientes => {
      this.dataSource = new MatTableDataSource(clientes);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      
    })

    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUpdateDialog(idCliente: number){
    //ejecutar peticion hacia el servicio primero
    this.dialogUpdateCliRef = this._dialog.open( ClienteFormComponent , {
      width: '850px',
    });

    this.dialogUpdateCliRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
    });
  }
}
