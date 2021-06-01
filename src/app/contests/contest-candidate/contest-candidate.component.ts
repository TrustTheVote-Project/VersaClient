import { Component, OnInit, Input } from '@angular/core';

import { Contest } from '../contest'; 

@Component({
  selector: 'app-contest-candidate',
  templateUrl: './contest-candidate.component.html',
  styleUrls: ['./contest-candidate.component.css']
})
export class CandidateContestComponent {
  @Input() contest: Contest;

  constructor() {}

}
