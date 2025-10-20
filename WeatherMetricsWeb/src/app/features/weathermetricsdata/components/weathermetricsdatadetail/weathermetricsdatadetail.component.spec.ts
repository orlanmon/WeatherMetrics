import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathermetricsdatadetailComponent } from './weathermetricsdatadetail.component';

describe('WeathermetricsdatadetailComponent', () => {
  let component: WeathermetricsdatadetailComponent;
  let fixture: ComponentFixture<WeathermetricsdatadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeathermetricsdatadetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathermetricsdatadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
