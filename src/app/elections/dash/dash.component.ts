import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  jurisdiction = {
    id: '1',
    name: 'Gadget County'
  };

  constructor() { }

  ngOnInit(): void {
    this.getJurisdiction();

  }

  getJurisdiction(): void {
    // TODO: Get main dashboard info 
    console.log('get initial district info');
  }

  // constructor(private breakpointObserver: BreakpointObserver) {}
}
