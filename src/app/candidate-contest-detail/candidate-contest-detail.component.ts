import { Component, OnInit, Input } from '@angular/core';

import { Contest } from '../contest'; 

@Component({
  selector: 'app-contest-detail',
  templateUrl: './candidate-contest-detail.component.html',
  styleUrls: ['./candidate-contest-detail.component.css']
})
export class CandidateContestDetailComponent {
  @Input() contest: Contest;

  constructor() {}

}
