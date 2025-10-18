import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { WeathermetricsdataService } from '../../services/weathermetricsdata/weathermetricsdata.service';
import { WeatherMetricsLog } from '../../../../models/weathermetricslog.model';


@Component({
  selector: 'app-weathermetrics',
  standalone: false,
  templateUrl: './weathermetrics.component.html',
  styleUrl: './weathermetrics.component.css'
})
export class WeathermetricsComponent {

  displayedColumns: string[] = ['WeatherMetricsLogId', 'BarometricPressure', 'Humidity', 'TemperatureCelsius', 'WindSpeed', 'WindDirection', 'EntryDate'];

  private weathermetricsdataServ: WeathermetricsdataService;

  weathermetricsData: WeatherMetricsLog[];


  constructor(private weathermetricsdataService: WeathermetricsdataService) {

    this.weathermetricsdataServ = weathermetricsdataService;


    this.weathermetricsdataServ.getWeatherMetricLogs().subscribe(result => this.weathermetricsData = result)


  }


}
