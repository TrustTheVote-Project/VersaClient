import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import{ Election } from './election';
import { ElectionService } from './election.service';
 

export class ElectionDataSource implements DataSource<Election>{  
    
    private electionsSubject = new BehaviorSubject<Election[]>([]);
    
    constructor(private electionsService: ElectionService) {}

    connect(collectionViewer: CollectionViewer): Observable<Election[]> {
        return this.electionsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.electionsSubject.complete();
    }

    loadElections() {
        this.electionsService.getElections()
            .pipe(catchError(() => of([])))
            .subscribe(elections => this.electionsSubject.next(elections));
    }
}
