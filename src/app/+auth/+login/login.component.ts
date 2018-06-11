import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from 'app/core/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, AfterContentInit {

  public error : String;

  public state: any = {
    carousel: {
      demo1: {
        interval: 2000,
        noWrap: false,
        slides: [
          {
            title: 'Title 1',
            text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/demo/m3.jpg',
          },
          {
            title: 'Title 2',
            text: 'Dolores justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/demo/m2.jpg',
          },
          {
            title: 'Title 3',
            text: 'Lorem justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/demo/m1.jpg',
          },
        ]
      },
    }
  };

  constructor(private router: Router) { 

  }
  ngAfterContentInit(){
  }

  ngOnInit() {
    
  }

  // login(event){
  //   event.preventDefault();
  //   this.router.navigate(['/dashboard/analytics'])
  // }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // this.authService.login(email, password, (res)=> {
    //   if(res.error){
    //     this.error = res.error;
    //   }else if(res == 'ok'){
    //     this.error = null;
    //     this.router.navigate(['/dashboard/profile']);
    //   }
    // });
  }

}
