import { Component } from '@angular/core';
import { WeathermetricsdevicesService } from '../../services/weathermetricsdevices/weathermetricsdevices.service';

@Component({
  selector: 'app-weathermetricsdevices',
  imports: [],
  templateUrl: './weathermetricsdevices.component.html',
  styleUrl: './weathermetricsdevices.component.css',
  providers: [WeathermetricsdevicesService],
})
export class WeathermetricsdevicesComponent {

private weathermetricsdevicesServ : WeathermetricsdevicesService;
isEnabled? : boolean;
strIoTDevice? : string;
strIoTDeviceUptime? : string;


constructor(private weathermetricsdevicesService : WeathermetricsdevicesService ) {

  this.weathermetricsdevicesServ = weathermetricsdevicesService;

}


 ngOnInit() {

    if ( this.isEnabled == undefined ) {

    } else {

    }
    
  }

  onEnable() {

    // this.weathermetricsdevicesServ


    console.log("Weather Metrics Device Enable")

    this.isEnabled = true;

  }

  onDisable() {

    // this.weathermetricsdevicesServ

    console.log("Weather Metrics Device Disable")

    this.isEnabled = false;

  }

  onDeviceSelectionChange(event: Event) {

    console.log("Weather Metrics Device Change")

    // Query Device Status

    // Update UI For Device Status

  }

}
