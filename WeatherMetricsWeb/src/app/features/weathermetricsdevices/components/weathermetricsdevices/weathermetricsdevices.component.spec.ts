import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathermetricsdevicesComponent } from './weathermetricsdevices.component';

describe('WeathermetricsdevicesComponent', () => {
  let component: WeathermetricsdevicesComponent;
  let fixture: ComponentFixture<WeathermetricsdevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeathermetricsdevicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathermetricsdevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
