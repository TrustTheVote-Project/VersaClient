import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable, of, EMPTY, Observer } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { CandidateService } from './candidate.service';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateResolverService {

  constructor(private cs: CandidateService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Candidate> | Observable<never> {
    const id = route.paramMap.get('cd_id');

    return this.cs.getCandidate(id).pipe(
      take(1),
      mergeMap(candidate => {
        if (candidate) {
          return of(candidate);
        } else {
          // TODO reroute to 404, also make 404 PAGE
          return EMPTY;
        }
      })
    );
  }
}
