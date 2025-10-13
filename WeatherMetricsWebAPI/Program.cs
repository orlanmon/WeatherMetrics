
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WeatherMetricsDTO;
using WeatherMetricsWebAPI.ServicesImplementation;

namespace WeatherMetricsWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // IConfiguration is accessible through the builder.Configuration property
            IConfiguration configuration = builder.Configuration;



            // Add services to the container.

            builder.Services.AddControllers();

            // Add Swagger Support
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();



            //builder.Services.AddScoped<IWeatherMetricsDataService, WeatherMetricsDataService>(); // Register your service

            builder.Services.AddScoped<IWeatherMetricsDataService>(provider =>
            {
                
                string? dBConnectionString = configuration.GetConnectionString("DBConnection");
                //string? dBConnectionString = _configuration["ConnectionStrings:DBConnection"];


                return new WeatherMetricsDataService(dBConnectionString);
            });




            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();

                // Add Swagger Support
                app.UseSwagger();
                app.UseSwaggerUI();


            }

            app.UseHttpsRedirection();
            app.UseAuthorization();


            app.MapControllers(); // Maps attribute-routed controllers


            // Configure AutoMapper For Model to DTOs 
            AutoMapperConfiguration.Configure();


            app.Run();
        }
    }
}
