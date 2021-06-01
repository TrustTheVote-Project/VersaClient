import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ElectionsModule } from './elections/elections.module';
import { ContestsModule } from './contests/contests.module';
import { CandidatesModule } from './candidates/candidates.module';

import { NavigationComponent } from './navigation/navigation.component';

// SIMULATE DATA SERVER
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,

    CandidatesModule,
    ContestsModule,
    ElectionsModule,
    AppRoutingModule,
    HttpClientModule,

    // MOCK SERVER REMOVE WHEN HOOKED UP TO REAL ONE  
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ContestsModule,
    CandidatesModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
