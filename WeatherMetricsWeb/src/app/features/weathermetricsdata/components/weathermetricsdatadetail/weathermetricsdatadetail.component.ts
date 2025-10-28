import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeathermetricsdataService } from '../../services/weathermetricsdata/weathermetricsdata.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherMetricsLog} from '../../../../models/weathermetricslog.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weathermetricsdatadetail',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './weathermetricsdatadetail.component.html',
  styleUrl: './weathermetricsdatadetail.component.css',
  providers: [WeathermetricsdataService],
})
export class WeathermetricsdatadetailComponent {

   isAddMode? : boolean
   webForm!: FormGroup;
   weatherMetricsLog! : WeatherMetricsLog;


   constructor(private route: ActivatedRoute, private weathermetricsdataServ: WeathermetricsdataService) {


   }

    onSubmit(): void {





    }




   ngOnInit() {
    
    const id = this.route.snapshot.params['id']; // Get ID from route for edit mode
    
    if( id == null ) {
      this.isAddMode = true;
    } else {
      this.isAddMode = false;
    }


    this.webForm = new FormGroup(
      { barometricPressure: new FormControl(Number, Validators.required),
        humidity: new FormControl(Number, Validators.required),
        temperatureCelsius: new FormControl(Number,Validators.required),
        windSpeed: new FormControl(Number,Validators.required),
        windDirection: new FormControl('', Validators.required),
      }
    );
        
    if( this.isAddMode == false ) {

      // Populate Form Here

      this.weathermetricsdataServ.getWeatherMetricLog(id).subscribe(result => {

        if (result.statusCode == 200) {
          

          if( result.data ) {
              this.weatherMetricsLog = result.data;

              const formData = {

                barometricPressure: this.weatherMetricsLog.barometricPressure,                
                humidity: this.weatherMetricsLog.humidity,
                temperatureCelsius: this.weatherMetricsLog.temperatureCelsius,
                windSpeed: this.weatherMetricsLog.windSpeed,
                windDirection: this.weatherMetricsLog.windDirection,

              }

              this.webForm.setValue(formData);

          }
          
          console.log("WeatherMetricsLog Data Loaded");

        } else {

            console.log("Error Occured with HTTTP Status Code: #%d", result.statusCode);
            
        }

    });

    }

  }
}

