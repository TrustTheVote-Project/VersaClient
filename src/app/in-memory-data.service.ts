import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Election } from './election';
import { Contest } from './contest';
import { Candidate } from './candidate';

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
        type: 'ballot measure',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis massa sed. Amet nisl purus in mollis.',
        pro_statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        con_statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa enim nec dui nunc mattis enim ut.'
      }
    ];

    const candidates = [
      {
        id: '10001',
        name: 'Cosmo Spacely',
        party: 'Lepton',
        is_incumbent: false,
      },
      {
        id: '10002',
        name: 'Spencer Cogswell',
        party: 'Hadron',
        is_incumbent: false
      }
    ]

    return { elections, contests, candidates }; 
  }
}
