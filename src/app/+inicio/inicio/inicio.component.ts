import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../core/rest/auth/auth.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InicioComponent implements OnInit {

  constructor(private _auth_service: AuthService) { }

  ngOnInit() {
  }

}
