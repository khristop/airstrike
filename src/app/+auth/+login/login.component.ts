import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from '../../core/rest/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, AfterContentInit {

  public error: number = 0;
  public loginForm: FormGroup;


  constructor(private router: Router, private _auth_service: AuthService ) {
  }
  ngAfterContentInit() {
    if(localStorage.getItem('token')){
      this.router.navigate(['/app/home']);
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        'usuario': new FormControl('', [Validators.required]),
        'password': new FormControl('', [Validators.required]),
      });
  }
  login(form: NgForm) {
    this._auth_service.login(this.loginForm.get('usuario').value, this.loginForm.get('password').value, (res)=>{
      if(res == 'ok'){
        this.router.navigate(['/app/home']);
      }else{
        this.error +=1;
      }
    });
  }

}
