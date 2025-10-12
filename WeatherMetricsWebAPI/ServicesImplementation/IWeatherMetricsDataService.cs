using System.Collections.Generic;
using WeatherMetricsDTO.DTO;

namespace WeatherMetricsWebAPI.ServicesImplementation
{
    public interface IWeatherMetricsDataService
    {

        public Int64 InsertWeatherMetricsData(WeatherMetricsLogDTO weatherMetricsLogDTO);
        public void UpdateWeatherMetricsData(WeatherMetricsLogDTO weatherMetricsLogDTO);
        public void DeleteWeatherMetricsData(Int64 weatherMetricsLogID);
        public WeatherMetricsLogDTO GetWeatherMetricsData(Int64 weatherMetricsLogID);
        public IEnumerable<WeatherMetricsLogDTO> GetWeatherMetricsData(DateTime startDate, DateTime endDate );

    }
}
