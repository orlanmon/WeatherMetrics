//  Dependency Injection

builder.Services.AddControllers();

builder.Services.AddScoped<IWeatherMetricsDataService, WeatherMetricsDataService>(); // Register your service


