import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';

// import { CandidatesRoutingModule } from './candidates-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    CandidateDetailComponent
  ],
  imports: [
    CommonModule,
    // CandidatesRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class CandidatesModule { }
