import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';

// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import { catchError } from 'rxjs/operators';

import { ContestService } from '../contests/contest.service';
import { Candidate } from './candidate';

export class CandidatesDataSource implements DataSource<Candidate> {
  // paginator: MatPaginator;
  // sort: MatSort;
  private candidateSubject = new BehaviorSubject<Candidate[]>([]);

  constructor(private contestService: ContestService) {}
 
  connect(collectionViewer: CollectionViewer): Observable<Candidate[]> {
    return this.candidateSubject.asObservable();

    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    // const dataMutations = [
    //   observableOf(this.data),
    //   this.paginator.page,
    //   this.sort.sortChange
    // ];

    // return merge(...dataMutations).pipe(map(() => {
    //   return this.getPagedData(this.getSortedData([...this.data]));
    // }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(collectionViewer: CollectionViewer): void {
    this.candidateSubject.complete();
  }

  loadContestCandidates(id) {
    this.contestService.getContestCandidates(id)
      .pipe(catchError(() => of([])))
      .subscribe(candidates => this.candidateSubject.next(candidates));
  }
}
  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getPagedData(data: CandidatesItem[]) {
  //   const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //   return data.splice(startIndex, this.paginator.pageSize);
  // }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
//   private getSortedData(data: CandidatesItem[]) {
//     if (!this.sort.active || this.sort.direction === '') {
//       return data;
//     }

//     return data.sort((a, b) => {
//       const isAsc = this.sort.direction === 'asc';
//       switch (this.sort.active) {
//         case 'name': return compare(a.name, b.name, isAsc);
//         case 'id': return compare(+a.id, +b.id, isAsc);
//         default: return 0;
//       }
//     });
//   }
// }

// /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// function compare(a: string | number, b: string | number, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
