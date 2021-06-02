// This component displays info about and contests associated with an election

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

import { map } from 'rxjs/operators';
import { Election } from '../election';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})

export class ElectionComponent {
  election: Election;
  id: string;

  constructor(
    private route: ActivatedRoute  
  ) {}

  ngOnInit(): void {  
    this.route.data.subscribe((data: {election: Election }) => {
      console.log('show election');
      this.election = data.election;
    });
  }

}
