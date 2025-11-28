namespace Application.Entities;

public class Collection
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public User? User { get; set; }
    public ICollection<CollectionCard> CollectionCards { get; set; } = new List<CollectionCard>();
}
