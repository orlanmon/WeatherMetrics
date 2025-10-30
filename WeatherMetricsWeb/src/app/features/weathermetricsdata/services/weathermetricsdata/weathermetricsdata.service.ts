import { Injectable } from '@angular/core';
import { HttpService } from '../../../../shared/services/httpservice/httpservice.service';
import { WeatherMetricsLog } from '../../../../models/weathermetricslog.model';
import { Observable } from 'rxjs';
import { HttpResponse } from "@angular/common/http";
import { ResponseResult } from '../../../../shared/services/httpservice/responseresult';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeathermetricsdataService {

 constructor(private httpService: HttpService) { }

  
 getWeatherMetricLog(weatherMetricsLogId : bigint): Observable<ResponseResult<WeatherMetricsLog>> {

   
   this.httpService.baseApiUrl = environment.apiUrl;


   const result = this.httpService.get_response<WeatherMetricsLog>(`/api/WeatherMetrics/Get/${weatherMetricsLogId}`);
   return result;

 }

  // Date Format: 2025-10-01
  getWeatherMetricLogs(startDate : string, endDate : string ): Observable<ResponseResult<WeatherMetricsLog[]>> {


   this.httpService.baseApiUrl = environment.apiUrl;
   const result = this.httpService.get_response<WeatherMetricsLog[]>(`/api/WeatherMetrics/Get/${startDate}/${endDate}`);
   return result;
 }

  getWeatherMetricLogsAll(): Observable<ResponseResult<WeatherMetricsLog[]>> {
   this.httpService.baseApiUrl = environment.apiUrl;
   const result = this.httpService.get_response<WeatherMetricsLog[]>("/api/WeatherMetrics/Get");
   return result;
 }

 updateWeatherMetricLog(weatherMetricLog: WeatherMetricsLog): Observable<ResponseResult<any>> {
   this.httpService.baseApiUrl = environment.apiUrl;
   const result = this.httpService.post_response<any>("/api/WeatherMetrics/Update", weatherMetricLog );
   return result;
 }

insertWeatherMetricLog(weatherMetricLog: WeatherMetricsLog): Observable<ResponseResult<number>> {
   this.httpService.baseApiUrl = environment.apiUrl;
   const result = this.httpService.post_response<number>("/api/WeatherMetrics/Insert", weatherMetricLog );
   return result;
 }


deleteWeatherMetricLog(weatherMetricsLogId : number): Observable<ResponseResult<any>> {

   this.httpService.baseApiUrl = environment.apiUrl;

   const result =  this.httpService.delete_response<any>(`/api/WeatherMetrics/Delete/${weatherMetricsLogId}`);

   return result;

 }

  




}


