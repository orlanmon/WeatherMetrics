﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WeatherMetricsModel.Models;

public partial class WeatherMetricsDbContext : DbContext
{
    
    private readonly string _connectionString;

    public WeatherMetricsDbContext(string connectionString)
    {

        _connectionString = connectionString;

    }

    public WeatherMetricsDbContext(DbContextOptions<WeatherMetricsDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<WeatherMetricsLog> WeatherMetricsLogs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlServer(_connectionString);

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<WeatherMetricsLog>(entity =>
        {
            entity.ToTable("WeatherMetricsLog");

            entity.Property(e => e.WeatherMetricsLogId).HasColumnName("WeatherMetricsLog_ID");
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.WindDirection).HasMaxLength(2);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
