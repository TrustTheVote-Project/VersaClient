import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ElectionDetailComponent } from './election-detail/election-detail.component';
import { CandidateDetailComponent} from './candidate-detail/candidate-detail.component';
import { CommonContestComponent } from './common-contest/common-contest.component';
import { ContestResolverService } from './contest-resolver.service';
import { ElectionResolverService } from './election-resolver.service';
import { CandidateResolverService } from './candidate-resolver.service';

const routes: Routes = [
  { path: '', component: DashComponent }, 
  { path: 'dahboard', redirectTo: '', pathMatch: 'full'}, // change name to elections?
  { path: 'elections/:id', 
    children: [
      { path: '', 
      component: ElectionDetailComponent,
      resolve: {
        election: ElectionResolverService
      }
    },
      { 
        path: 'contests/:c_id',
        children: [
          {
            path: '',
            component: CommonContestComponent,
            resolve: {
              contest: ContestResolverService
            }
          },
          {
            path:'candidates/:cd_id',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
