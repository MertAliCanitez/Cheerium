using Application.Entities;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Seed;

public class SeedData
{
    private readonly AppDbContext _db;

    public SeedData(AppDbContext db)
    {
        _db = db;
    }

    public async Task SeedAsync()
    {
        if (await _db.Users.AnyAsync()) return;

        var demoUser = new User { Email = "demo@smiile.local", Name = "Demo User", PasswordHash = Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes("demo123")) };
        var otherUser = new User { Email = "ayse@example.com", Name = "Ayse", PasswordHash = Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes("demo123")) };
        _db.Users.AddRange(demoUser, otherUser);

        var birthdayTheme = new CardTheme { Name = "Doğum Günü", PreviewImageUrl = "/themes/birthday.png", ConfigJson = "{\"color\":\"#fce4ec\"}" };
        var farewellTheme = new CardTheme { Name = "Veda", PreviewImageUrl = "/themes/farewell.png", ConfigJson = "{\"color\":\"#e3f2fd\"}" };
        _db.CardThemes.AddRange(birthdayTheme, farewellTheme);

        var card = new Card
        {
            OwnerUserId = demoUser.Id,
            RecipientName = "Ece",
            OccasionType = "Birthday",
            ThemeId = birthdayTheme.Id,
            DeadlineAt = DateTime.UtcNow.AddDays(3)
        };
        _db.Cards.Add(card);

        _db.CardMessages.AddRange(
            new CardMessage { CardId = card.Id, AuthorName = "Ayşe", MessageText = "Mutlu yıllar!" },
            new CardMessage { CardId = card.Id, AuthorName = "Demo", MessageText = "Nice yaşlara" }
        );

        var collection = new Collection { UserId = demoUser.Id, Name = "Arkadaşlar" };
        _db.Collections.Add(collection);
        _db.CollectionCards.Add(new CollectionCard { CollectionId = collection.Id, CardId = card.Id });

        await _db.SaveChangesAsync();
    }
}
