import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { WeathermetricsdataService } from '../../services/weathermetricsdata/weathermetricsdata.service';


@Component({
  selector: 'app-weathermetrics',
  standalone: false,
  templateUrl: './weathermetrics.component.html',
  styleUrl: './weathermetrics.component.css',
  providers: [WeathermetricsdataService]   // Provide the service at the component level
})
export class WeathermetricsComponent {

  displayedColumns: string[] = ['WeatherMetricsLogId', 'BarometricPressure', 'Humidity', 'TemperatureCelsius', 'WindSpeed', 'WindDirection', 'EntryDate'];


}
