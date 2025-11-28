using Application.DTOs;
using Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class CollectionsController : ControllerBase
{
    private readonly CollectionService _service;

    public CollectionsController(CollectionService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<ActionResult<CollectionResponse>> CreateCollection(CreateCollectionRequest request)
    {
        var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue(ClaimTypes.Name) ?? throw new InvalidOperationException("No user"));
        var result = await _service.CreateCollectionAsync(userId, request);
        return Ok(result);
    }

    [HttpPost("{collectionId:guid}/cards")]
    public async Task<ActionResult<CollectionResponse>> AddCard(Guid collectionId, AddCardToCollectionRequest request)
    {
        var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue(ClaimTypes.Name) ?? throw new InvalidOperationException("No user"));
        var result = await _service.AddCardAsync(userId, collectionId, request.CardId);
        return result == null ? NotFound() : Ok(result);
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CollectionResponse>>> List()
    {
        var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue(ClaimTypes.Name) ?? throw new InvalidOperationException("No user"));
        var result = await _service.ListAsync(userId);
        return Ok(result);
    }
}
