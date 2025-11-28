namespace Application.Entities;

public class Workspace
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public string? Domain { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<WorkspaceUser> Members { get; set; } = new List<WorkspaceUser>();
    public ICollection<Card> Cards { get; set; } = new List<Card>();
}
