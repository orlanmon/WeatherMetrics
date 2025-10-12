using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper.Configuration;
using AutoMapper;
using WeatherMetricsModel;



namespace WeatherMetricsDTO
{
    static public class AutoMapperConfiguration
    {

        public static MapperConfiguration AutoMapperConfig;

        public static void Configure()
        {

            AutoMapperConfig = new MapperConfiguration(cfg => {
                cfg.CreateMap<WeatherMetricsModel.Models.WeatherMetricsLog, WeatherMetricsDTO.DTO.WeatherMetricsLogDTO>();
                cfg.CreateMap<WeatherMetricsDTO.DTO.WeatherMetricsLogDTO, WeatherMetricsModel.Models.WeatherMetricsLog>();

            });

        }
    }
}
