import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { Election } from './election';
import { ElectionService } from './election.service';

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
          // TODO route to 404, also make 404 PAGE 
        }
      })
    );
  }
}
