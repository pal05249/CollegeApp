import { TestBed } from '@angular/core/testing';

import { ApiConService } from './api-con.service';

describe('ApiConService', () => {
  let service: ApiConService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
