import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Contest } from '../contest';

@Component({
  selector: 'app-contest-ballot-measure',
  templateUrl: './contest-ballot-measure.component.html',
  styleUrls: ['./contest-ballot-measure.component.css']
})
export class BallotMeasureComponent {
  @Input() contest: Contest;

  constructor() {}
}
