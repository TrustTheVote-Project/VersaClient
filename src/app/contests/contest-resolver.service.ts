import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { ContestService } from './contest.service';
import { Contest } from './contest';

@Injectable({
  providedIn: 'root'
})
export class ContestResolverService implements Resolve<Contest>{

  constructor(private cs: ContestService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contest> | Observable<never> {
    const id= route.paramMap.get('c_id');

    return this.cs.getContest(id).pipe(
        take(1), 
        mergeMap(contest => { 
          if (contest) { 
            return of(contest);
          } else { 
            // TODO route to 404, also make 404 PAGE 
            return EMPTY;
          }
        })
    );
  }
}
