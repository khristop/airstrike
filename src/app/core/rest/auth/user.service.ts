import { Injectable } from '@angular/core';
import { config } from '../../../shared/airstrike.config';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

    public usuario: any;
    private token: any;

    private _api_url: string;

    constructor(private http: HttpClient) {
        this._api_url = config.REST_URL + 'usuario';

        const usuario_save = JSON.parse(localStorage.getItem("user"));
        // if (usuario_save != null) {
        //     this.usuario = new any(usuario_save);
        // }
        console.log(this.usuario);
    }

    obtener(id: number, filtro?: String) {
        const url = filtro ? this._api_url + id + filtro : this._api_url + id;
        return this.http.get<any>(url).pipe(
            map(res => {
                if (res.status == 'OK') {
                    return res['data'];
                } else {
                    return [];
                }
            })
        );
    }

    getUsuario(): String {
        return this.usuario.getUsuario();
    }

    getIdUsuario(): Number {
        return this.usuario.getId();
    }

    getIdEmpleado(): Number {

        return this.usuario.getIdEmpleado();

    }

    // setUsuario(token: any) {
    //     this.usuario = usuarioAut;
    //     this.token
    //     localStorage.setItem("user", JSON.stringify(this.usuario));
    // }

    removerUsuario() {
        this.usuario = null;
        localStorage.removeItem("user");
        return !this.usuario;
    }

    existeUsuario() {
        return this.usuario ? true : false;
    }

    verificarPermisoMenu(llave: string) {
        //console.log(this.usuario);
    }

    obtenerPermisos() {
        return this.usuario.perfil.permisos;
    }

    obtenerFotografia() {
        return this.usuario.getFotografia();
    }

    obtenerPerfil() {
        return this.usuario.getPerfil();
    }

}
