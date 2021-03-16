import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';

import { Election } from './election';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private electionsUrl = 'api/elections'; // should this include precinct? 

  constructor(
    private http: HttpClient
  ) { }

  getElections(): Observable<Election[]> {
    console.log('get elections');
    return this.http.get<Election[]>(this.electionsUrl)
      .pipe(catchError(this.handleError<Election[]>('getElections', [])));
  }

  private handleError<T>(operator = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

}
