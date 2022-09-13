import { TestBed } from '@angular/core/testing';

import { ProduseServiciiService } from './produse-servicii.service';

describe('ProduseServiciiService', () => {
  let service: ProduseServiciiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduseServiciiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
