import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contest } from '../contest';
import { ContestService } from '../contest.service';


@Component({
  selector: 'app-common-contest',
  templateUrl: './common-contest.component.html',
  styleUrls: ['./common-contest.component.css']
})
export class CommonContestComponent implements OnInit {
  contest: Contest;
  id: string;

  constructor(
    private route: ActivatedRoute,
    // private contestService: ContestService
  ) { }

  ngOnInit(): void {
    
    // this.id = this.route.snapshot.paramMap.get('c_id');
    // this.getContest();
    this.route.data.subscribe((data: { contest: Contest }) => {
      console.log('show contest');
      this.contest = data.contest;
    });
  }

  // getContest(): void {
  //   this.contestService.getContest(this.id)
  //     .subscribe(contest => this.contest = contest);
  // }

  isCandidateContest(): boolean {
    return this.contest.type === 'candidate';
  }

}
