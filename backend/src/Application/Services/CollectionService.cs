using Application.DTOs;
using Application.Entities;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Services;

public class CollectionService
{
    private readonly AppDbContext _db;

    public CollectionService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<CollectionResponse> CreateCollectionAsync(Guid userId, CreateCollectionRequest request)
    {
        var collection = new Collection { UserId = userId, Name = request.Name };
        _db.Collections.Add(collection);
        await _db.SaveChangesAsync();
        return await MapAsync(collection.Id);
    }

    public async Task<CollectionResponse?> AddCardAsync(Guid userId, Guid collectionId, Guid cardId)
    {
        var collection = await _db.Collections.FirstOrDefaultAsync(c => c.Id == collectionId && c.UserId == userId);
        if (collection == null) return null;
        if (!await _db.Cards.AnyAsync(c => c.Id == cardId)) return null;
        if (!await _db.CollectionCards.AnyAsync(cc => cc.CollectionId == collectionId && cc.CardId == cardId))
        {
            _db.CollectionCards.Add(new CollectionCard { CollectionId = collectionId, CardId = cardId });
            await _db.SaveChangesAsync();
        }
        return await MapAsync(collectionId);
    }

    public async Task<IEnumerable<CollectionResponse>> ListAsync(Guid userId)
    {
        var collections = await _db.Collections.Where(c => c.UserId == userId).ToListAsync();
        var responses = new List<CollectionResponse>();
        foreach (var collection in collections)
        {
            responses.Add(await MapAsync(collection.Id));
        }
        return responses;
    }

    private async Task<CollectionResponse> MapAsync(Guid collectionId)
    {
        var collection = await _db.Collections.Include(c => c.CollectionCards).FirstAsync(c => c.Id == collectionId);
        var cards = await _db.Cards.Where(c => collection.CollectionCards.Select(cc => cc.CardId).Contains(c.Id)).ToListAsync();
        return new CollectionResponse(collection.Id, collection.Name, cards.Select(CardServiceHelpers.MapCard));
    }
}

public static class CardServiceHelpers
{
    public static CardResponse MapCard(Card card) => new(card.Id, card.RecipientName, card.OccasionType, card.ThemeId, card.SecretLinkToken, card.DeadlineAt, card.Status, card.OwnerUserId, card.WorkspaceId);
}
