import { Injectable } from '@angular/core';
import { HttpService } from '../../../../shared/services/httpservice/httpservice.service';
import { WeatherMetricsLog } from '../../../../models/weathermetricslog.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root' // Or specify a module if you want to limit its scope
})

export class WeathermetricsdataService {

  constructor(private httpService: HttpService) { }


  getWeatherMetricLog(): Observable<WeatherMetricsLog> {

    
    this.httpService.baseApiUrl = "https://weathermetricswebapi-dev-b8g6a2ecfbewhxcu.canadaeast-01.azurewebsites.net";

    const result = this.httpService.get<WeatherMetricsLog>("/api/WeatherMetrics/Get/1", { token: undefined });
    return result;

  }

  getWeatherMetricLogs(): Observable<WeatherMetricsLog[]> {

   
    this.httpService.baseApiUrl = "https://weathermetricswebapi-dev-b8g6a2ecfbewhxcu.canadaeast-01.azurewebsites.net";

    const result = this.httpService.get<WeatherMetricsLog[]>("/api/WeatherMetrics/Get/2025-10-01/2025-10-18", { token: undefined });
    return result;

  }



}
