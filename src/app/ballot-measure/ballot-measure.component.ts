import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Contest } from '../contest';

@Component({
  selector: 'app-ballot-measure',
  templateUrl: './ballot-measure.component.html',
  styleUrls: ['./ballot-measure.component.css']
})
export class BallotMeasureComponent {
  @Input() contest: Contest;

  constructor() {}
}
