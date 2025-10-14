//  Dependency Injection

builder.Services.AddControllers();

builder.Services.AddScoped<IWeatherMetricsDataService, WeatherMetricsDataService>(); // Register your service


// Add Swagger Support

Install-Package Swashbuckle.AspNetCore -Version 6.6.2


