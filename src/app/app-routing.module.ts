import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ElectionDetailComponent } from './election-detail/election-detail.component';
import { ContestDetailComponent } from './contest-detail/contest-detail.component';

import { ContestResolverService } from './contest-resolver.service';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';

const routes: Routes = [
  { path: '', component: DashComponent }, // TODO: Add redirect link for '/district/:id' (For ELECTORAL DISTRICTS)
  { path: 'dahboard', redirectTo: '', pathMatch: 'full'},
  { path: 'elections/:id', 
    children: [
      { path: '', component: ElectionDetailComponent },
      { 
        path: 'contests/:c_id',
        children: [
          {
            path: '',
            component: ContestDetailComponent,
            resolve: {
              contest: ContestResolverService
            }
          },
          {
            path:'candidates/:cd_id',
            component: CandidateDetailComponent
          }
        ],
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
