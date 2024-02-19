import { Injectable } from '@angular/core';
import {BaseServiceService} from "./base-service.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseServiceService {

  endpoint = ""
  constructor(
    private http: HttpClient
  ) {
    super(http, environment.urlApi);
  }

  search(page: number, size: number, winner: any, year: any): Observable<any> {
    let url = this.composeURL(page, size, winner, year);
    return this.http.get<any>(
      `${environment.urlApi}${url}`
    ).pipe(
      tap(r => this.extractData(r)),
      catchError(this.handleError<any>('Erro buscar'))
    );
  }

  winnerByYear(year: number): Observable<any> {
    return this.http.get<any>(
      `${environment.urlApi}?winner=true&year=${year}`
    ).pipe(
      tap(r => this.extractData(r)),
      catchError(this.handleError<any>('Erro buscar'))
    );
  }

  private composeURL(page: number, size: number, winner: any, year: any) {
    let url = `?page=${page}`;

    if (size) {
      url += `&size=${size}`;
    }

    if (winner && winner != "null") {
      url += `&winner=${winner}`;
    }

    if (year) {
      url += `&year=${year}`;
    }

    return url;
  }
}
