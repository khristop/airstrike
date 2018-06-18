import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivateChild } from '@angular/router';
import { AuthService } from '../rest/auth/auth.service';



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(localStorage.getItem("token")){
      return true;
    }else{
      this.router.navigate(['/acceso/login']);
      return false;
    }
  }
 
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.canActivate(route, state)){
      // console.log(route);
      // console.log('activacion de hijo');
      //se debe implementar seguridad extra desde la ruta para evitar que entren a ciertas secciones de la aplicacion
      //por motivos de tiempo se maneja directamente con la renderizacion del menu

      return true;
    }

    return false ;
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }
 
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
 
    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
