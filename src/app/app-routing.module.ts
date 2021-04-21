import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ElectionDetailComponent } from './election-detail/election-detail.component';
import { CandidateDetailComponent} from './candidate-detail/candidate-detail.component';
import { CommonContestComponent } from './common-contest/common-contest.component';
import { ContestResolverService } from './contest-resolver.service';

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
            component: CommonContestComponent,
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
