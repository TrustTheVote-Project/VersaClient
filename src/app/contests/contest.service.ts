import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Contest } from './contest';
import { Candidate } from '../candidates/candidate';

import { CANDIDATES } from '../candidates/mock-candidates';

@Injectable({
  providedIn: 'root'
})

export class ContestService {
  private contestsUrl = 'api/contests';

  constructor(
    private http: HttpClient
  ) { }

  getContest(id: string): Observable<Contest> {
    console.log(`get contest ${id}`);
    const url = `${this.contestsUrl}/${id}`;
    return this.http.get<Contest>(url)
      .pipe(
        tap(_ => console.log(`fetched contest ${id}`)),
        catchError(this.handleError<Contest>(`getContest id=${id}`))
      );
  }

  getContestCandidates(id: string): Observable<Candidate[]> {
    console.log(`get contest ${id}'s candidates`);
    const candidates = of(CANDIDATES);
    return candidates;


    // WHEN REAL SERVER ATTACHED
    // const url = `${this.contestsUrl}/${id}/candidates`;
    // return this.http.get<Candidate[]>(url)
    //   .pipe(
    //     tap(_ => console.log(`fetched contest ${id}'s candidates`)),
    //     catchError(this.handleError<Candidate[]>('getContestCandidates, []'))
    //   );
  }

  private handleError<T>(operator = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
