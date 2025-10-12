// MS Entity Framework

 Install-Package Microsoft.EntityFrameworkCore.SqlServer 
 Install-Package Microsoft.EntityFrameworkCore.Design 
 Install-Package Microsoft.EntityFrameworkCore.Tools 


 Command Line On Project

 dotnet add package Microsoft.EntityFrameworkCore.SqlServer 
 dotnet add package Microsoft.EntityFrameworkCore.Design 
 dotnet add package Microsoft.EntityFrameworkCore.Tools
 dotnet tool update --global dotnet-ef


 // Scaffolding

 https://learn.microsoft.com/en-us/ef/core/managing-schemas/scaffolding/?tabs=dotnet-core-cli

 dotnet ef dbcontext scaffold "Server=HAL9000\ORLANMON;Database=WeatherMetrics;Trusted_Connection=False; User ID=sa;Password=GoWestYoungMan_1973; TrustServerCertificate=True" Microsoft.EntityFrameworkCore.SqlServer -o Models -c WeatherMetricsDbContext -Force

 // DB Context Revise

  private readonly string _connectionString;

  public WeatherMetricsDbContext(string connectionString)
    {

        _connectionString = connectionString;

    }