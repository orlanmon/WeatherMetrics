import { TestBed } from '@angular/core/testing';

import { WeathermetricsdataService } from './weathermetricsdata.service';

describe('WeathermetricsdataService', () => {
  let service: WeathermetricsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathermetricsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
