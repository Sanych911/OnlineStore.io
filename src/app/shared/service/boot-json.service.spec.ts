import { TestBed } from '@angular/core/testing';

import { BootJsonService } from './boot-json.service';

describe('BootJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BootJsonService = TestBed.get(BootJsonService);
    expect(service).toBeTruthy();
  });
});
