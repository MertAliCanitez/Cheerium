using Application.Entities;

namespace Application.DTOs;

public record CreateCardRequest(string RecipientName, string OccasionType, Guid ThemeId, DateTime? DeadlineAt, Guid? WorkspaceId);
public record CardResponse(Guid Id, string RecipientName, string OccasionType, Guid ThemeId, string SecretLinkToken, DateTime? DeadlineAt, string Status, Guid OwnerUserId, Guid? WorkspaceId);
public record AddMessageRequest(string AuthorName, string MessageText, string? EmojiList, string? MediaUrl, Guid? AuthorUserId);
public record CardMessageResponse(Guid Id, Guid CardId, string AuthorName, string MessageText, string? EmojiList, string? MediaUrl, DateTime CreatedAt);
public record ThemeResponse(Guid Id, string Name, string PreviewImageUrl, string ConfigJson);
