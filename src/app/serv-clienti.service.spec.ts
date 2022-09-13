import { TestBed } from '@angular/core/testing';

import { ServClientiService } from './serv-clienti.service';

describe('ServClientiService', () => {
  let service: ServClientiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServClientiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
