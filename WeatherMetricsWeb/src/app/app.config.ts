import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Provide HttpClient
import { APP_BASE_HREF } from '@angular/common';

// Attempt to resolved Application Name Issue in URI in Routing
// { provide: APP_BASE_HREF, useValue: '/WeatherMetricsDataApplication/' }

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};
