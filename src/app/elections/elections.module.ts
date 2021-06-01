import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashComponent } from './dash/dash.component';
import { ElectionsListComponent } from './elections-list/elections-list.component'
import { ElectionComponent } from './election/election.component'
import { ElectionInfoComponent } from './election-info/election-info.component';
import { ContestsListComponent } from '../contests/contests-list/contests-list.component'

import { ElectionsRoutingModule } from './elections-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DashComponent,
    ElectionsListComponent,
    ElectionComponent, 
    ElectionInfoComponent,
    ContestsListComponent,
  ],
  imports: [
    CommonModule,
    ElectionsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
  ]
})

export class ElectionsModule { }
