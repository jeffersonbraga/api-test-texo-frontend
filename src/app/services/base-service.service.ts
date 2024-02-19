import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(
    public httpClient: HttpClient,
    public url: String) { }


  extractData(res: any) {
    if (res.status == 200) {
      return res.json();
    }
    return false;
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      throw of(error.status as T);
    };
  }

}
