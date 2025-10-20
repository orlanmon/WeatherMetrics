import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './layout/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatMenuModule,MatToolbarModule, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'WeatherMetricsWeb';
}
