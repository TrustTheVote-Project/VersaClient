import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { ElectionService } from './election.service';
import { Election } from './election';

@Injectable({
  providedIn: 'root'
})
export class ElectionResolverService implements Resolve<Election>{

  constructor(private es: ElectionService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Election> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.es.getElection(id).pipe(
      take(1),
      mergeMap(election => {
        if (election) {
          return of(election);
        } else {
          // TODO route to 404
          return EMPTY;
        }
      })
    );
  }
}
