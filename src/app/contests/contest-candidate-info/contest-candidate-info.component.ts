import { Component, OnInit, Input } from '@angular/core';
import { Contest } from '../contest';

@Component({
  selector: 'app-contest-candidate-info',
  templateUrl: './contest-candidate-info.component.html',
  styleUrls: ['./contest-candidate-info.component.css']
})
export class ContestCandidateInfoComponent {
  @Input() contest: Contest;

  constructor() { }
}

