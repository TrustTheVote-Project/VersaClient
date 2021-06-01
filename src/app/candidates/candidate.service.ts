import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private candidatesUrl = 'api/candidates';

  constructor(
    private http: HttpClient
  ) { }

  getCandidate(id: string): Observable<Candidate> {
    console.log(`get candidate ${id}`);
    const url = `${this.candidatesUrl}/${id}`;
    return this.http.get<Candidate>(url)
      .pipe(
        tap(_ => console.log(`fetched candidate ${id}`)),
        catchError(this.handleError<Candidate>(`getCandidate id=${id}`))
      );
  }

  private handleError<T>(operator = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

}
