import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Election } from '../election';
import { ElectionService } from '../election.service';

@Component({
  selector: 'app-election-info',
  templateUrl: './election-info.component.html',
  styleUrls: ['./election-info.component.css']
})
export class ElectionInfoComponent {
  // election: Election;
  // id: string;
  @Input() election: Election;

  constructor(
    // private route: ActivatedRoute,
    // private electionService: ElectionService,
  ) { }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.getElection();
  // }

  // getElection(): void {
  //   this.electionService.getElection(this.id)
  //     .subscribe(election => this.election = election);
  // }


}
