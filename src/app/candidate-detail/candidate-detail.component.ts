import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})

export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;
  id: string;

  constructor(
    private route: ActivatedRoute,
    // private candidateService: CandidateService,
  ) { }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('cd_id');
    // this.getCandidate();
    this.route.data.subscribe((data: { candidate: Candidate }) => { 
      console.log('show candidate');
      this.candidate = data.candidate;
    });
  }

  // getCandidate(): void {
  //   this.candidateService.getCandidate(this.id).subscribe(candidate => this.candidate = candidate)
  // }


}
