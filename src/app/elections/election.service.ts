import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Election } from './election';
import { Contest } from '../contests/contest';

import { CONTESTS } from '../contests/mock-contests';

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
      .pipe(
        tap(_ => console.log('fetched elecitons')),
        catchError(this.handleError<Election[]>('getElections', []))
      );
  }

  getElection(id: string): Observable<Election> {
    console.log(`get eleciton ${id}`);
    const url = `${this.electionsUrl}/${id}`;
    return this.http.get<Election>(url)
      .pipe(
        tap(_ => console.log(`fetched election ${id}`)),
        catchError(this.handleError<Election>(`getElection id=${id}`))
      );
  }

  getElectionContests(id: string): Observable<Contest[]> {
    console.log(`get election ${id}'s contests`);
    const contests = of(CONTESTS);
    return contests;


    // WHEN REAL SERVER ATTACHED
    // const url = `${this.electionsUrl}/${id}/contests`;
    // return this.http.get<Contest[]>(url)
    //   .pipe(
    //     tap(_ => console.log(`fetched election ${id}'s constests`)),
    //     catchError(this.handleError<Contest[]>('getElectionContests, []'))
    //   );
  }

  private handleError<T>(operator = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

}
