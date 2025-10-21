import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { WeatherMetricsLog } from '../../../../models/weathermetricslog.model';
import { WeathermetricsdataService } from '../../services/weathermetricsdata/weathermetricsdata.service';
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'app-weathermetricsdatalist',
  imports: [MatTableModule,MatIconModule],
  templateUrl: './weathermetricsdatalist.component.html',
  styleUrl: './weathermetricsdatalist.component.css',
  providers: [WeathermetricsdataService],
})
export class WeathermetricsdatalistComponent {

  displayedColumns: string[] = ['WeatherMetricsLogId', 'BarometricPressure', 'Humidity', 'TemperatureCelsius', 'WindSpeed', 'WindDirection', 'EntryDate', 'Actions'];

  private weathermetricsdataServ: WeathermetricsdataService;

  public weathermetricsData: WeatherMetricsLog[] = [];

   constructor(private weathermetricsdataService: WeathermetricsdataService) {

   this.weathermetricsdataServ = weathermetricsdataService;

 }  

  ngOnInit() {

    this.weathermetricsdataServ.getWeatherMetricLogs().subscribe(result => { this.weathermetricsData = result; console.log(this.weathermetricsData); });

  }

  deleteRow(row: WeatherMetricsLog): void {   

    this.weathermetricsdataServ.deleteWeatherMetricLog(row.weatherMetricsLogId).subscribe(

    (response: HttpResponse<any>) => {
    // This code runs when the response is successfully received
    console.log('Response Status:', response.status);

    console.log('Response Status:', response.body);

    }

    );

  }

}
