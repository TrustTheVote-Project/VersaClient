import { TestBed } from '@angular/core/testing';

import { ContestResolverService } from './contest-resolver.service';

describe('ContestResolverService', () => {
  let service: ContestResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContestResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
