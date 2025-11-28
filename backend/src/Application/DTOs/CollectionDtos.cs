namespace Application.DTOs;

public record CreateCollectionRequest(string Name);
public record AddCardToCollectionRequest(Guid CardId);
public record CollectionResponse(Guid Id, string Name, IEnumerable<CardResponse> Cards);
