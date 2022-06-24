import { TestBed } from '@angular/core/testing';

import { OneallService } from './oneall.service';

describe('OneallService', () => {
  let service: OneallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
