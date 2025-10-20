import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { WeathermetricsComponent } from './features/weathermetrics/components/weathermetrics/weathermetrics.component';
import { WeathermetricsdevicesComponent } from './features/weathermetricsdevices/components/weathermetricsdevices/weathermetricsdevices.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './layout/components/footer/footer.component';
import { MatTableModule } from '@angular/material/table'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeathermetricsComponent,
    WeathermetricsdevicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,  // Add MatToolbarModule to the imports array
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
