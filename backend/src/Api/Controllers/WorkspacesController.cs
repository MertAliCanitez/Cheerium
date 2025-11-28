using Application.DTOs;
using Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class WorkspacesController : ControllerBase
{
    private readonly WorkspaceService _service;

    public WorkspacesController(WorkspaceService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<ActionResult<WorkspaceResponse>> CreateWorkspace(CreateWorkspaceRequest request)
    {
        var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue(ClaimTypes.Name) ?? throw new InvalidOperationException("No user"));
        var result = await _service.CreateWorkspaceAsync(userId, request);
        return Ok(result);
    }

    [HttpPost("{workspaceId:guid}/invite")]
    public async Task<ActionResult> Invite(Guid workspaceId, InviteWorkspaceUserRequest request)
    {
        var success = await _service.InviteUserAsync(workspaceId, request);
        return success ? Ok() : BadRequest();
    }

    [HttpGet("{workspaceId:guid}/cards")]
    public async Task<ActionResult<IEnumerable<CardResponse>>> ListCards(Guid workspaceId)
    {
        var result = await _service.ListCardsAsync(workspaceId);
        return Ok(result);
    }
}
