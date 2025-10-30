import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { FooterComponent } from './layout/components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, FooterComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherMetricsWeb';
}
