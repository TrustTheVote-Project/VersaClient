import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Election } from './election';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const elections = [
      {
        id: 101,
        name: 'Special Election',
        type: 'special',
        district: {
          id: 1001, 
          name: 'Space City'
        },
        start_date: '10/2/2003',
        end_date: '11/9/2003'
      }
    ]
    return { elections }; 
  }
}
