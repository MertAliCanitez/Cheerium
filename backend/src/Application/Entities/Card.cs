namespace Application.Entities;

public class Card
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid? WorkspaceId { get; set; }
    public Guid OwnerUserId { get; set; }
    public string RecipientName { get; set; } = string.Empty;
    public string OccasionType { get; set; } = string.Empty;
    public Guid ThemeId { get; set; }
    public string SecretLinkToken { get; set; } = Guid.NewGuid().ToString("N");
    public DateTime? DeadlineAt { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string Status { get; set; } = "Open";

    public Workspace? Workspace { get; set; }
    public User? OwnerUser { get; set; }
    public CardTheme? Theme { get; set; }
    public ICollection<CardMessage> Messages { get; set; } = new List<CardMessage>();
}
