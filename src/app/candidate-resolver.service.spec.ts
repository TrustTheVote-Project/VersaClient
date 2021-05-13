import { TestBed } from '@angular/core/testing';

import { CandidateResolverService } from './candidate-resolver.service';

describe('CandidateResolverService', () => {
  let service: CandidateResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
