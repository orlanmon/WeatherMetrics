export class WeatherMetricsLog {

  constructor(WeatherMetricsLogId: bigint, BarometricPressure: number, Humidity: number, TemperatureCelsius: number, WindSpeed: number, WindDirection: string, EntryDate: Date) {
    this.WeatherMetricsLogId = WeatherMetricsLogId;
    this.BarometricPressure = BarometricPressure;
    this.Humidity = Humidity;
    this.TemperatureCelsius = TemperatureCelsius;
    this.WindSpeed = WindSpeed;
    this.WindDirection = WindDirection;
    this.EntryDate = EntryDate;

  }

  WeatherMetricsLogId : bigint;

  BarometricPressure: number;

  Humidity: number;

  TemperatureCelsius: number;

  WindSpeed: number;

  WindDirection: string;

  EntryDate: Date;

}

