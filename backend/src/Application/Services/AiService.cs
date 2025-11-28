using Application.DTOs;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Services;

public class AiService
{
    private readonly AppDbContext _db;

    public AiService(AppDbContext db)
    {
        _db = db;
    }

    public Task<SuggestMessageResponse> SuggestMessageAsync(SuggestMessageRequest request)
    {
        var suggestions = new List<string>
        {
            $"Sevgili {request.Recipient}, {request.Occasion} için içten dileklerimi iletiyorum!",
            $"{request.Relationship} olarak seninle gurur duyuyorum, {request.Occasion} günün kutlu olsun!",
            $"Bu kart {request.Tone} bir not taşıyor: Mutluluklar {request.Recipient}!"
        };
        return Task.FromResult(new SuggestMessageResponse(suggestions));
    }

    public async Task<CardSummaryResponse?> SummarizeCardAsync(CardSummaryRequest request)
    {
        var messages = await _db.CardMessages.Where(m => m.CardId == request.CardId).Select(m => m.MessageText).ToListAsync();
        if (!messages.Any()) return null;
        var summary = string.Join(" ", messages.Take(3));
        var themes = new[] { "destek", "liderlik", "pozitif enerji" };
        return new CardSummaryResponse(summary, themes);
    }
}
