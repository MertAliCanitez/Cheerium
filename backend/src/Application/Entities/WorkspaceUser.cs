namespace Application.Entities;

public class WorkspaceUser
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid WorkspaceId { get; set; }
    public Guid UserId { get; set; }
    public string Role { get; set; } = "Member";

    public Workspace? Workspace { get; set; }
    public User? User { get; set; }
}
