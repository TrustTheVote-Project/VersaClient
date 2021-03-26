import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Contest } from './contest';

@Injectable({
  providedIn: 'root'
})

export class ContestService {
  private contestsUrl = '/contests';

  constructor(
    private http: HttpClient
  ) { }

}
