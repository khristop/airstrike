import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
