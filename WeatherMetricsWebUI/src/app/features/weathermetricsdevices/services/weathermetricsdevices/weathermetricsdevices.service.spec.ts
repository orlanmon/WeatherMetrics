import { TestBed } from '@angular/core/testing';

import { WeathermetricsdevicesService } from './weathermetricsdevices.service';

describe('WeathermetricsdevicesService', () => {
  let service: WeathermetricsdevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathermetricsdevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
