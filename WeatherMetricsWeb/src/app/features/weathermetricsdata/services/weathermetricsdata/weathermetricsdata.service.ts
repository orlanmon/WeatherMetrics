import { Injectable } from '@angular/core';
import { HttpService } from '../../../../shared/services/httpservice/httpservice.service';
import { WeatherMetricsLog } from '../../../../models/weathermetricslog.model';
import { Observable } from 'rxjs';
import { HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeathermetricsdataService {

 constructor(private httpService: HttpService) { }

 getWeatherMetricLog(weatherMetricsLogId : bigint): Observable<WeatherMetricsLog> {

   
   this.httpService.baseApiUrl = "https://weathermetricswebapi-dev-b8g6a2ecfbewhxcu.canadaeast-01.azurewebsites.net";

   const result = this.httpService.get<WeatherMetricsLog>("/api/WeatherMetrics/Get/${weatherMetricsLogId}");
   return result;

 }

 getWeatherMetricLogs(): Observable<WeatherMetricsLog[]> {

   this.httpService.baseApiUrl = "https://weathermetricswebapi-dev-b8g6a2ecfbewhxcu.canadaeast-01.azurewebsites.net";

   const result = this.httpService.get<WeatherMetricsLog[]>("/api/WeatherMetrics/Get/2025-10-01/2025-10-18");
   return result;

 }

deleteWeatherMetricLog(weatherMetricsLogId : bigint): Observable<HttpResponse<any>> {

   this.httpService.baseApiUrl = "https://weathermetricswebapi-dev-b8g6a2ecfbewhxcu.canadaeast-01.azurewebsites.net";

   const result =  this.httpService.delete("/api/WeatherMetrics/Delete/${weatherMetricsLogId}");

   return result;

 }



}



