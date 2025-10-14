import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { WeathermetricsComponent } from './features/weathermetrics/components/weathermetrics/weathermetrics.component';
import { WeathermetricsdevicesComponent  } from './features/weathermetricsdevices/components/weathermetricsdevices/weathermetricsdevices.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'weathermetrics',
    component: WeathermetricsComponent
  },
  {
    path: 'weathermetricsdevices',
    component: WeathermetricsdevicesComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
