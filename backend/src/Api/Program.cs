using Application.Services;
using Infrastructure.Persistence;
using Infrastructure.Seed;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;
var configuration = builder.Configuration;

services.AddControllers();
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

var connectionString = configuration.GetConnectionString("Default") ?? configuration["DATABASE_URL"];
if (string.IsNullOrEmpty(connectionString))
{
    services.AddDbContext<AppDbContext>(opt => opt.UseInMemoryDatabase("smiile-demo"));
}
else
{
    services.AddDbContext<AppDbContext>(opt => opt.UseNpgsql(connectionString));
}

services.AddScoped<AuthService>();
services.AddScoped<CardService>();
services.AddScoped<CollectionService>();
services.AddScoped<WorkspaceService>();
services.AddScoped<ThemeService>();
services.AddScoped<AiService>();
services.AddScoped<SeedData>();

var jwtKey = configuration["JWT_KEY"] ?? "demo-key-please-change";
var key = Encoding.UTF8.GetBytes(jwtKey);
services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false,
        ClockSkew = TimeSpan.FromMinutes(5)
    };
});

services.AddAuthorization();

var app = builder.Build();
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
    var seeder = scope.ServiceProvider.GetRequiredService<SeedData>();
    await seeder.SeedAsync();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
