import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) { //solo dejara el contenido por defecto si no se envian archivos
            if ( !(req.body && req.body.has && req.body.has('file') )){
                req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
            }
        }
        if(!req.headers.has('X-API-KEY')){
            req = req.clone({ headers: req.headers.set('X-API-KEY', 'facto')});
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}