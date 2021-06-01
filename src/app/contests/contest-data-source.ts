import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Contest } from './contest';
import { ElectionService } from '../elections/election.service';

export class ContestDataSource implements DataSource<Contest> {
    private contestsSubject = new BehaviorSubject<Contest[]>([]);

    constructor(private electionsService: ElectionService) { }

    connect(collectionViewer: CollectionViewer): Observable<Contest[]> {
        return this.contestsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.contestsSubject.complete();
    }

    loadElectionContests(id) {
        this.electionsService.getElectionContests(id)
            .pipe(catchError(() => of([])))
            .subscribe(contests => this.contestsSubject.next(contests));
    }

}
