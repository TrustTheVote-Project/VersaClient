import { TestBed } from '@angular/core/testing';

import { ElectionResolverService } from './election-resolver.service';

describe('ElectionResolverService', () => {
  let service: ElectionResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
