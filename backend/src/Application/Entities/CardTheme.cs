namespace Application.Entities;

public class CardTheme
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public string PreviewImageUrl { get; set; } = string.Empty;
    public string ConfigJson { get; set; } = "{}";

    public ICollection<Card> Cards { get; set; } = new List<Card>();
}
