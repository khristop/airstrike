import { Injectable } from '@angular/core';
import { config } from '../../../shared/airstrike.config';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class UserService {

    public usuario;

    private _api_url: string;

    constructor(private http: HttpClient) {
        this._api_url = config.REST_URL + 'usuario';
        const usuario_save = JSON.parse(localStorage.getItem("usuario"));
        if(usuario_save){
            this.usuario = usuario_save;
        }
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
        return this.usuario.username;
    }

    getIdUsuario(): Number {
        return this.usuario.id_usuario;
    }

    removerUsuario() {
        this.usuario = null;
        return !this.usuario;
    }

    existeUsuario() {
        return this.usuario ? true : false;
    }

    obtenerPermisos() {
        return this.usuario.perfil.permisos;
    }

    obtenerPerfil() {
        return this.usuario.getPerfil();
    }

}
