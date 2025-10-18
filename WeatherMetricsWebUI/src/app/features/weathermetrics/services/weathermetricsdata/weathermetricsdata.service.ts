import { Injectable } from '@angular/core';
import { HttpService } from '../../../../shared/services/httpservice/httpservice.service';


@Injectable({
  providedIn: 'root' // Or specify a module if you want to limit its scope
})

export class WeathermetricsdataService {

  constructor(private httpService: HttpService) { }
}
