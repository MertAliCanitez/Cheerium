using Application.DTOs;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Services;

public class ThemeService
{
    private readonly AppDbContext _db;

    public ThemeService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<ThemeResponse>> ListAsync()
    {
        var themes = await _db.CardThemes.ToListAsync();
        return themes.Select(t => new ThemeResponse(t.Id, t.Name, t.PreviewImageUrl, t.ConfigJson));
    }
}
