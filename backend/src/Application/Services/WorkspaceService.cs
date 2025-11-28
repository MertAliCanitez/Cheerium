using Application.DTOs;
using Application.Entities;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Services;

public class WorkspaceService
{
    private readonly AppDbContext _db;

    public WorkspaceService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<WorkspaceResponse> CreateWorkspaceAsync(Guid creatorId, CreateWorkspaceRequest request)
    {
        var workspace = new Workspace { Name = request.Name, Domain = request.Domain };
        _db.Workspaces.Add(workspace);
        _db.WorkspaceUsers.Add(new WorkspaceUser { WorkspaceId = workspace.Id, UserId = creatorId, Role = "Admin" });
        await _db.SaveChangesAsync();
        return new WorkspaceResponse(workspace.Id, workspace.Name, workspace.Domain);
    }

    public async Task<IEnumerable<CardResponse>> ListCardsAsync(Guid workspaceId)
    {
        var cards = await _db.Cards.Where(c => c.WorkspaceId == workspaceId).ToListAsync();
        return cards.Select(CardServiceHelpers.MapCard);
    }

    public async Task<bool> InviteUserAsync(Guid workspaceId, InviteWorkspaceUserRequest request)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
        if (user == null)
        {
            user = new User { Email = request.Email, Name = request.Email.Split('@')[0], PasswordHash = Convert.ToBase64String(Guid.NewGuid().ToByteArray()) };
            _db.Users.Add(user);
        }
        if (!await _db.WorkspaceUsers.AnyAsync(wu => wu.WorkspaceId == workspaceId && wu.UserId == user.Id))
        {
            _db.WorkspaceUsers.Add(new WorkspaceUser { WorkspaceId = workspaceId, UserId = user.Id, Role = request.Role });
        }
        await _db.SaveChangesAsync();
        return true;
    }
}
