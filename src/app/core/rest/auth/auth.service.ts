import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { config } from "../../../shared/airstrike.config";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";

@Injectable()
export class AuthService implements OnInit {

    tokenSource = new BehaviorSubject<any>( null );
    token = this.tokenSource.asObservable();
    isLoggedIn: boolean = false;
    public service_url: string;
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    ngOnInit() {
    }

    constructor(private router: Router,
        private http: HttpClient,
        private _user_service: UserService,
        private location: Location
    ) {
        this.service_url = config.REST_URL;
        if(localStorage.getItem("token")){
            this.tokenSource.next(localStorage.getItem("token"));
            this.isLoggedIn = this._user_service.existeUsuario();
        }
    }
    /*
    Funcion que verifica las credenciales y retorna un objeto 
    */

    private verificarCredencial(usuario: String, contrasena: String) {
        let credencial = { "username": usuario, "password": contrasena };
        return this.http.post<any>(this.service_url + 'login', credencial).pipe(
            map(res => {
                console.log(res);
                if (res.res == 'not found') {
                    return false;
                } else {
                    if (res.res == "success") {
                        return this.setToken(res);
                    }
                }
            })
        )
    }

    private setToken(respuesta){
        localStorage.setItem("token", respuesta.token);
        localStorage.setItem("usuario", JSON.stringify(respuesta.usuario));
        this.tokenSource.next(respuesta);
    }

    login(usuario: string, password: string, callback) {
        //llamada al web service del login, retornar usuario, token y permisos
        //this.router.navigate(['/']); al perfil o lugar por defecto 
        this.verificarCredencial(usuario, password).subscribe(
            (data: any) => {
                //this._user_service.setUsuario(data);
                callback('ok');
            },
            error => {
                callback(error.error);
            },
            () => {
                this.isLoggedIn = true;
            })
    }

    verifyUsername(usuario: string) {
        const user = { "usuario": usuario };
        return this.http.post(this.service_url + 'verificar_usuario', user)
            .map(res => {
                const respuesta = res['response'];
                return respuesta;
            });
    }

    logoutOnly(): void {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        this.tokenSource.next(null);
        this.isLoggedIn = false;
    }

    logout(): void {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        this.tokenSource.next(null);
        this.isLoggedIn = false;
        if (this._user_service.removerUsuario()) {
            location.reload();
        }
        //quita el token y le dice al server que se va
    }


    isAuthenticated() {
        return this.tokenSource.getValue();
    }
}
