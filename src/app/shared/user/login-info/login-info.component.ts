import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../layout/layout.service';
import { UserService } from '../../../core/rest/auth/user.service';

@Component({

  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
  providers:[UserService]
})
export class LoginInfoComponent implements OnInit {

  public user: any;
  private usuario: string;

  constructor(
    private userService: UserService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
    if(this.userService.existeUsuario()){
      this.usuario = this.userService.getUsuario().valueOf();
    }else{
      
    }
  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle();
  }

}
