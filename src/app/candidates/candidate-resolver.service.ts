import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';


@Injectable({
  providedIn: 'root'
})
export class CandidateResolverService implements Resolve<Candidate> {

  constructor(private cds: CandidateService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Candidate> | Observable<never> {
    const id = route.paramMap.get('cd_id');

    return this.cds.getCandidate(id).pipe(
      take(1),
      mergeMap(candidate => {
        if (candidate) {
          return of(candidate);
        } else {
          // TODO route to 404
          return EMPTY;
        }
      })
    );
  }
}
