import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathermetricsComponent } from './weathermetrics.component';

describe('WeathermetricsComponent', () => {
  let component: WeathermetricsComponent;
  let fixture: ComponentFixture<WeathermetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeathermetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathermetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
