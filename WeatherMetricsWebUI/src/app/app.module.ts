import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { WeathermetricsComponent } from './features/weathermetrics/components/weathermetrics/weathermetrics.component';
import { WeathermetricsdevicesComponent } from './features/weathermetricsdevices/components/weathermetricsdevices/weathermetricsdevices.component';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeathermetricsComponent,
    WeathermetricsdevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule // Add MatToolbarModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
