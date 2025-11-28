namespace Application.DTOs;

public record SuggestMessageRequest(string Recipient, string Occasion, string Relationship, string Tone);
public record SuggestMessageResponse(IEnumerable<string> Suggestions);
public record CardSummaryRequest(Guid CardId);
public record CardSummaryResponse(string Summary, IEnumerable<string> KeyThemes);
