namespace Application.Entities;

public class User
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? AvatarUrl { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public bool IsWorkspaceAdmin { get; set; }

    public ICollection<WorkspaceUser> WorkspaceUsers { get; set; } = new List<WorkspaceUser>();
    public ICollection<Card> CardsOwned { get; set; } = new List<Card>();
    public ICollection<CardMessage> Messages { get; set; } = new List<CardMessage>();
    public ICollection<Collection> Collections { get; set; } = new List<Collection>();
}
