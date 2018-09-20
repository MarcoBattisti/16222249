import { TestBed, inject } from '@angular/core/testing';

import { RequestListService } from './request-list.service';

describe('RequestListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestListService]
    });
  });

  it('should be created', inject([RequestListService], (service: RequestListService) => {
    expect(service).toBeTruthy();
  }));
});
