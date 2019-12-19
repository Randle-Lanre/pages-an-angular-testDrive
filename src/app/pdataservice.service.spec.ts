import { TestBed } from '@angular/core/testing';

import { PdataserviceService } from './pdataservice.service';

describe('PdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdataserviceService = TestBed.get(PdataserviceService);
    expect(service).toBeTruthy();
  });
});
