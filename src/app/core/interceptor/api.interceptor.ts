import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    token:  string;
    constructor(){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req.clone({
            setHeaders:{
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json',
            }
        })
        
        if (!req.headers.has('Content-Type')) { //solo dejara el contenido por defecto si no se envian archivos
            if ( !(req.body && req.body.has && req.body.has('file') )){
                req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
            }
        }

        return next.handle(req);
    }
}