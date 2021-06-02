import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { ElectionComponent } from './election/election.component';
import { ContestSwitchComponent } from '../contests/contest-switch/contest-switch.component';
import { CandidateDetailComponent } from '../candidates/candidate-detail/candidate-detail.component';

import { ElectionResolverService } from './election-resolver.service';
import { ContestResolverService } from '../contests/contest-resolver.service';
import { CandidateResolverService } from '../candidates/candidate-resolver.service';


const electionRoutes: Routes = [
  { path: 'elections', component: DashComponent },
  {
    path: 'elections/:id',
    children: [      
      { path: '', 
        component: ElectionComponent,
        resolve: {
          election: ElectionResolverService
        }
      },
      {
        path: 'contests/:c_id',
        children: [
          {
            path: '',
            component: ContestSwitchComponent,
            resolve: {
              contest: ContestResolverService
            }
          },
          {
            path: 'candidates/:cd_id',
            component: CandidateDetailComponent,
            resolve: {
              candidate: CandidateResolverService
            }
          }
        ],
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(electionRoutes)],
  exports: [RouterModule]
})
export class ElectionsRoutingModule { }
