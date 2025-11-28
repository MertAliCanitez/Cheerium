namespace Application.DTOs;

public record CreateWorkspaceRequest(string Name, string? Domain);
public record InviteWorkspaceUserRequest(string Email, string Role);
public record WorkspaceResponse(Guid Id, string Name, string? Domain);
