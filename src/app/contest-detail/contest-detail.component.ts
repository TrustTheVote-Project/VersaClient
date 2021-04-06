import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contest } from '../contest'; 

@Component({
  selector: 'app-contest-detail',
  templateUrl: './contest-detail.component.html',
  styleUrls: ['./contest-detail.component.css']
})
export class ContestDetailComponent implements OnInit {
  contest: Contest;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { contest: Contest }) => {
      console.log('show contest');
      this.contest = data.contest;
    });
  }

  isCandidateContest(): boolean {
    return this.contest.type === 'candidate';
  }

  isBallotMeasure(): boolean {
    return this.contest.type === 'ballot_measure';
  }

}
