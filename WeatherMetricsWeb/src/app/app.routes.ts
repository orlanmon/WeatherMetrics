import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/components/home/home.component';
import { WeathermetricsdatalistComponent } from './features/weathermetricsdata/components/weathermetricsdatalist/weathermetricsdatalist.component';
import { WeathermetricsdevicesComponent  } from './features/weathermetricsdevices/components/weathermetricsdevices/weathermetricsdevices.component';
import { WeathermetricsdatadetailComponent } from './features/weathermetricsdata/components/weathermetricsdatadetail/weathermetricsdatadetail.component';

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
    path: 'weathermetricsdata',
    component: WeathermetricsdatalistComponent
  },
  {
    path: 'weathermetricslog/:id',
    component: WeathermetricsdatadetailComponent
  },
  {
    path: 'weathermetricsdevices',
    component: WeathermetricsdevicesComponent
  }

];