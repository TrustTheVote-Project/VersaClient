import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

// SIMULATE DATA SERVER
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ElectionsComponent } from './elections/elections.component';
import { DashComponent } from './dash/dash.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ElectionDetailComponent } from './election-detail/election-detail.component';
import { ContestsComponent } from './contests/contests.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ElectionInfoComponent } from './election-info/election-info.component';
import { ContestDetailComponent } from './contest-detail/contest-detail.component';
import { ContestInfoComponent } from './contest-info/contest-info.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { BallotMeasureStatementsComponent } from './ballot-measure-statements/ballot-measure-statements.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ElectionsComponent,
    DashComponent,
    ElectionDetailComponent,
    ContestsComponent,
    ElectionInfoComponent,
    ContestDetailComponent,
    ContestInfoComponent,
    CandidatesComponent,
    BallotMeasureStatementsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // MOCK SERVER REMOVE WHEN HOOKED UP TO REAL ONE  
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
