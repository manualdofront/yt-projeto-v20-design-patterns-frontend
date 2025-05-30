import { TestBed } from '@angular/core/testing';

import { FeaturesMockService } from './features-mock.service';

describe('FeaturesMockService', () => {
  let service: FeaturesMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
