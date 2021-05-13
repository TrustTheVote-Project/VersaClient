import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

import { map } from 'rxjs/operators';

import { Election } from '../election';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-election-detail',
  templateUrl: './election-detail.component.html',
  styleUrls: ['./election-detail.component.css']
})

export class ElectionDetailComponent implements OnInit {
  election: Election;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {  
    this.route.data.subscribe((data: { election: Election}) => {
      console.log('show election');
      this.election = data.election;
    });
  }
}
