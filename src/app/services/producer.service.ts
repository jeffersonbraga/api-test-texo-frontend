import { Injectable } from '@angular/core';
import {BaseServiceService} from "./base-service.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProducerService extends BaseServiceService {

  endpoint = "?projection=max-min-win-interval-for-producers"

  constructor(
    private http: HttpClient
  ) {
    super(http, environment.urlApi);
  }

  maxminInterval(): Observable<any> {
    return this.http.get<any>(
      `${environment.urlApi}${this.endpoint}`
    ).pipe(
      tap(r => this.extractData(r)),
      catchError(this.handleError<any>('Erro buscar'))
    );
  }
}
