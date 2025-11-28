namespace Application.Entities;

public class CardMessage
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid CardId { get; set; }
    public string AuthorName { get; set; } = string.Empty;
    public Guid? AuthorUserId { get; set; }
    public string MessageText { get; set; } = string.Empty;
    public string? EmojiList { get; set; }
    public string? MediaUrl { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public Card? Card { get; set; }
    public User? AuthorUser { get; set; }
}
