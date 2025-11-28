namespace Application.Entities;

public class CollectionCard
{
    public Guid CollectionId { get; set; }
    public Guid CardId { get; set; }

    public Collection? Collection { get; set; }
    public Card? Card { get; set; }
}
