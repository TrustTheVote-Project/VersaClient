import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Election } from './election';
import { Contest } from './contest';

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
        start_date: '10/2/2003',
        end_date: '11/9/2003',
        contests: [
          {
            id: 1001,
            name: 'Gadget City Mayor',
            district: {
              id: 2,
              name: 'Orbit City'
            },
            type: 'candidate'
          },
          {
            id: 1002,
            name: 'County Sales Tax Measure',
            district: {
              id: 1,
              name: 'Gadget County'
            },
            type: 'ballot measure'
          }
        ]
      }
    ];

    const contests = [
      {
        id: 1001,
        name: 'Gadget City Mayor',
        district: {
          id: 2,
          name: 'Orbit City'
        },
        type: 'candidate'
      },
      {
        id: 1002,
        name: 'County Sales Tax Measure',
        district: {
          id: 1,
          name: 'Gadget County'
        },
        type: 'ballot measure'
      }
    ];
    return { elections, contests }; 
  }
}
