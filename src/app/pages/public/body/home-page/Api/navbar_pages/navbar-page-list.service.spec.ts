import { TestBed, inject } from '@angular/core/testing';

import { NavbarPageListService } from './navbar-page-list.service';

describe('NavbarPageListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarPageListService]
    });
  });

  it('should be created', inject([NavbarPageListService], (service: NavbarPageListService) => {
    expect(service).toBeTruthy();
  }));
});
