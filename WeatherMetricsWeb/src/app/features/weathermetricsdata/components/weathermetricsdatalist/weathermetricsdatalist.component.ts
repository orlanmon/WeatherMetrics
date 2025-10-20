import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { WeatherMetricsLog } from '../../../../models/weathermetricslog.model';
import { WeathermetricsdataService } from '../../services/weathermetricsdata/weathermetricsdata.service';


@Component({
  selector: 'app-weathermetricsdatalist',
  imports: [MatTableModule],
  templateUrl: './weathermetricsdatalist.component.html',
  styleUrl: './weathermetricsdatalist.component.css',
  providers: [WeathermetricsdataService],
})
export class WeathermetricsdatalistComponent {

  displayedColumns: string[] = ['WeatherMetricsLogId', 'BarometricPressure', 'Humidity', 'TemperatureCelsius', 'WindSpeed', 'WindDirection', 'EntryDate'];

  private weathermetricsdataServ: WeathermetricsdataService;

  public weathermetricsData!: WeatherMetricsLog[];

   constructor(private weathermetricsdataService: WeathermetricsdataService) {

   this.weathermetricsdataServ = weathermetricsdataService;

   this.weathermetricsdataServ.getWeatherMetricLogs().subscribe(result => this.weathermetricsData = result)


 }  

  ngOnInit() {

    ;//this.weathermetricsdataServ.getWeatherMetricLogs().subscribe(result => this.weathermetricsData = result)

  }

}
