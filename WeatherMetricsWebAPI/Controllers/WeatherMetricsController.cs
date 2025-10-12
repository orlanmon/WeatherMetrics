using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using WeatherMetricsDTO.DTO;
using WeatherMetricsModel.Models;
using WeatherMetricsWebAPI.ServicesImplementation;


namespace WeatherMetricsWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherMetricsController : ControllerBase
    {
       
        private readonly ILogger<WeatherMetricsController> _logger;
        private readonly IWeatherMetricsDataService _WeatherMetricsDataService;
        private readonly IConfiguration _configuration;


        public WeatherMetricsController(ILogger<WeatherMetricsController> logger, IWeatherMetricsDataService weatherMetricsDataService, IConfiguration configuration)
        {
            _logger = logger;
            _WeatherMetricsDataService = weatherMetricsDataService;
            _configuration = configuration;

        }

        [HttpPost(Name = "InsertWeatherMetricsData")]
        public IActionResult InsertWeatherMetricsData(WeatherMetricsLogDTO weatherMetricsLogDTO) {



            string? dBConnectionString = _configuration.GetConnectionString("DBConnection");
            //string? dBConnectionString = _configuration["ConnectionStrings:DBConnection"];
            WeatherMetricsDataService? weatherMetricsDataService = new WeatherMetricsDataService(dBConnectionString);

            Int64? weatherMetricsLogID = null;


            try
            {

                weatherMetricsLogID = weatherMetricsDataService.InsertWeatherMetricsData(weatherMetricsLogDTO);

                return Ok(weatherMetricsLogID);

            }
            catch (Exception ex) {

                return StatusCode(500, "An unexpected server error occurred. " + ex.Message);

            }
            finally
            {
                weatherMetricsDataService = null;

            }
        }

        [HttpPost(Name = "UpdateWeatherMetricsData")]
        public IActionResult UpdateWeatherMetricsData(WeatherMetricsLogDTO weatherMetricsLogDTO) {

            string? dBConnectionString = _configuration.GetConnectionString("DBConnection");

            WeatherMetricsDataService? weatherMetricsDataService = new WeatherMetricsDataService(dBConnectionString);

            try
            {

                weatherMetricsDataService.UpdateWeatherMetricsData(weatherMetricsLogDTO);


                return Ok();

            }
            catch (Exception ex)
            {

                return StatusCode(500, "An unexpected server error occurred. " + ex.Message);

            }
            finally
            {

                weatherMetricsDataService = null;

            }


        }

        [HttpDelete(Name = "DeleteWeatherMetricsData")]
        public IActionResult Delete(Int64 weatherMetricsLogID) {

            string? dBConnectionString = _configuration.GetConnectionString("DBConnection");

            WeatherMetricsDataService? weatherMetricsDataService = new WeatherMetricsDataService(dBConnectionString);

            try
            {

                weatherMetricsDataService.DeleteWeatherMetricsData(weatherMetricsLogID);    


                return Ok();

            }
            catch (Exception ex)
            {

                return StatusCode(500, "An unexpected server error occurred. " + ex.Message);

            }
            finally
            {
                weatherMetricsDataService = null;

            }


        }

        [HttpGet(Name = "GetWeatherMetricsData")]
        public IActionResult GetWeatherMetricsData(Int64 weatherMetricsLogID) {

            WeatherMetricsLogDTO? weatherMetricsLogDTO = null;
            string? dBConnectionString = _configuration.GetConnectionString("DBConnection");
            WeatherMetricsDataService? weatherMetricsDataService = new WeatherMetricsDataService(dBConnectionString);

            try
            {
               

                weatherMetricsLogDTO = weatherMetricsDataService.GetWeatherMetricsData(weatherMetricsLogID);


                return Ok(weatherMetricsLogDTO);

            }
            catch (Exception ex)
            {

                return StatusCode(500, "An unexpected server error occurred. " + ex.Message);

            }
            finally
            {

                weatherMetricsDataService = null;


            }


            
 
        }

        [HttpGet(Name = "GetWeatherMetricsData")]
        public IActionResult GetWeatherMetricsData(DateTime startDate, DateTime endDate) {

            IEnumerable<WeatherMetricsLogDTO>? weatherMetricsLogDTOs = null;

            string? dBConnectionString = _configuration.GetConnectionString("DBConnection");

            WeatherMetricsDataService? weatherMetricsDataService = new WeatherMetricsDataService(dBConnectionString);

            try
            {
                


                weatherMetricsLogDTOs = weatherMetricsDataService.GetWeatherMetricsData(startDate, endDate);    


                return Ok(weatherMetricsLogDTOs);

            }
            catch (Exception ex)
            {

                return StatusCode(500, "An unexpected server error occurred. " + ex.Message);

            }
            finally
            {
                weatherMetricsDataService = null;

            }
       
        }

    }
}
