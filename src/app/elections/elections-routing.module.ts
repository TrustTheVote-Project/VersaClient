import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { ElectionsListComponent } from './elections-list/elections-list.component';
import { ElectionComponent } from './election/election.component';

import { ContestSwitchComponent } from '../contests/contest-switch/contest-switch.component';
import { ContestResolverService } from '../contests/contest-resolver.service';
import { CandidateDetailComponent } from '../candidates/candidate-detail/candidate-detail.component';


const electionRoutes: Routes = [
  { path: 'elections', component: DashComponent },
  {
    path: 'elections/:id',
    children: [      
      { path: '', component: ElectionComponent },
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
            component: CandidateDetailComponent
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
