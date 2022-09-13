import { TestBed } from '@angular/core/testing';

import { ReturnInfoClientiFurnizoriService } from './return-info-clienti-furnizori.service';

describe('ReturnInfoClientiFurnizoriService', () => {
  let service: ReturnInfoClientiFurnizoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnInfoClientiFurnizoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
