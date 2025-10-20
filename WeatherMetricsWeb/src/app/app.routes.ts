import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { WeathermetricsdatalistComponent } from './features/weathermetricsdata/components/weathermetricsdatalist/weathermetricsdatalist.component';
import { WeathermetricsdevicesComponent  } from './features/weathermetricsdevices/components/weathermetricsdevices/weathermetricsdevices.component';


export const routes: Routes = [

{
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'weathermetricsdatalist',
    component: WeathermetricsdatalistComponent
  },
  {
    path: 'weathermetricsdevices',
    component: WeathermetricsdevicesComponent
  }


];
