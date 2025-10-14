import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherMetricsWebUI';
}
