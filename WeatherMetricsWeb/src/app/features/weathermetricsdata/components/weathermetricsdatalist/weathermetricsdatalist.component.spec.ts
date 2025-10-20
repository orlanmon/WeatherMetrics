import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathermetricsdatalistComponent } from './weathermetricsdatalist.component';

describe('WeathermetricsdatalistComponent', () => {
  let component: WeathermetricsdatalistComponent;
  let fixture: ComponentFixture<WeathermetricsdatalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeathermetricsdatalistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathermetricsdatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
