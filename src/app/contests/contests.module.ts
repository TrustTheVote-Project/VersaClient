import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestSwitchComponent } from './contest-switch/contest-switch.component';
import { CandidateContestComponent } from './contest-candidate/contest-candidate.component';
import { ContestCandidateInfoComponent } from './contest-candidate-info/contest-candidate-info.component';
import { BallotMeasureComponent } from './contest-ballot-measure/contest-ballot-measure.component';
import { CandidatesListComponent } from '../candidates/candidates-list/candidates-list.component';

import { ContestsRoutingModule } from './contests-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ContestSwitchComponent,
    CandidateContestComponent,
    ContestCandidateInfoComponent,
    CandidatesListComponent,
    BallotMeasureComponent
  ],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    MatCardModule,
    MatGridListModule, 
    MatIconModule,
    MatMenuModule,
    MatTableModule
  ]
})
export class ContestsModule { }
