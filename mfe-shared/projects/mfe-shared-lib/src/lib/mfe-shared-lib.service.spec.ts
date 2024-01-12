import { TestBed } from '@angular/core/testing';

import { MfeSharedLibService } from './mfe-shared-lib.service';

describe('MfeSharedLibService', () => {
  let service: MfeSharedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeSharedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
