import { Injectable } from '@angular/core';
import { HttpService } from '../../../../shared/services/httpservice/httpservice.service';
import { WeatherMetricsLog } from '../../../../models/weathermetricslog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeathermetricsdataService {

 constructor(private httpService: HttpService) { }

 getWeatherMetricLog(): Observable<WeatherMetricsLog> {

   
   this.httpService.baseApiUrl = "https://weathermetricswebapi-dev-b8g6a2ecfbewhxcu.canadaeast-01.azurewebsites.net";

   const result = this.httpService.get<WeatherMetricsLog>("/api/WeatherMetrics/Get/1");
   return result;

 }

 getWeatherMetricLogs(): Observable<WeatherMetricsLog[]> {

   this.httpService.baseApiUrl = "https://weathermetricswebapi-dev-b8g6a2ecfbewhxcu.canadaeast-01.azurewebsites.net";

   const result = this.httpService.get<WeatherMetricsLog[]>("/api/WeatherMetrics/Get/2025-10-01/2025-10-18");
   return result;

 }

}



