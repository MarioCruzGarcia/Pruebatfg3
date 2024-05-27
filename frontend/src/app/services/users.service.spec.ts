import { TestBed } from '@angular/core/testing';

import { UsersServiceTsService } from './users.service';

describe('UsersServiceTsService', () => {
  let service: UsersServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
