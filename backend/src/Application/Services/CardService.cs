using Application.DTOs;
using Application.Entities;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Services;

public class CardService
{
    private readonly AppDbContext _db;

    public CardService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<CardResponse> CreateCardAsync(CreateCardRequest request, Guid ownerId)
    {
        var card = new Card
        {
            OwnerUserId = ownerId,
            RecipientName = request.RecipientName,
            OccasionType = request.OccasionType,
            ThemeId = request.ThemeId,
            DeadlineAt = request.DeadlineAt,
            WorkspaceId = request.WorkspaceId
        };
        _db.Cards.Add(card);
        await _db.SaveChangesAsync();
        return Map(card);
    }

    public async Task<CardResponse?> GetCardAsync(Guid id)
    {
        var card = await _db.Cards.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
        return card == null ? null : Map(card);
    }

    public async Task<CardResponse?> GetCardByTokenAsync(string token)
    {
        var card = await _db.Cards.AsNoTracking().FirstOrDefaultAsync(c => c.SecretLinkToken == token);
        return card == null ? null : Map(card);
    }

    public async Task<CardResponse?> CloseCardAsync(Guid id, Guid ownerId)
    {
        var card = await _db.Cards.FirstOrDefaultAsync(c => c.Id == id && c.OwnerUserId == ownerId);
        if (card == null) return null;
        card.Status = "Closed";
        await _db.SaveChangesAsync();
        return Map(card);
    }

    public async Task<IEnumerable<CardMessageResponse>> ListMessagesAsync(Guid cardId)
    {
        var messages = await _db.CardMessages.Where(m => m.CardId == cardId).OrderBy(m => m.CreatedAt).ToListAsync();
        return messages.Select(m => new CardMessageResponse(m.Id, m.CardId, m.AuthorName, m.MessageText, m.EmojiList, m.MediaUrl, m.CreatedAt));
    }

    public async Task<CardMessageResponse> AddMessageAsync(Guid cardId, AddMessageRequest request)
    {
        var message = new CardMessage
        {
            CardId = cardId,
            AuthorName = string.IsNullOrWhiteSpace(request.AuthorName) ? "Anon" : request.AuthorName,
            AuthorUserId = request.AuthorUserId,
            MessageText = request.MessageText,
            EmojiList = request.EmojiList,
            MediaUrl = request.MediaUrl
        };
        _db.CardMessages.Add(message);
        await _db.SaveChangesAsync();
        return new CardMessageResponse(message.Id, message.CardId, message.AuthorName, message.MessageText, message.EmojiList, message.MediaUrl, message.CreatedAt);
    }

    private static CardResponse Map(Card card) => new(card.Id, card.RecipientName, card.OccasionType, card.ThemeId, card.SecretLinkToken, card.DeadlineAt, card.Status, card.OwnerUserId, card.WorkspaceId);
}
