import { Component, OnInit, Input } from '@angular/core';
import { Contest } from '../contest';

@Component({
  selector: 'app-contest-info',
  templateUrl: './contest-info.component.html',
  styleUrls: ['./contest-info.component.css']
})
export class ContestInfoComponent {
  @Input() contest: Contest;

  constructor() { }
}

