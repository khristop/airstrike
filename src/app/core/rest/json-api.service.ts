import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, delay, map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {config} from '../../shared/airstrike.config';


@Injectable()
export class JsonApiService {

  constructor(private http: HttpClient) {}

  public fetch(url): Observable<any> {
    return this.http.get(this.getBaseUrl() + config.API_URL + url)
      .pipe(
        delay(100),
        map((data: any) => (data.data || data)),
        catchError(this.handleError)
      );
  }

  private getBaseUrl(){
    return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
  }



  private handleError(error: any ) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}


