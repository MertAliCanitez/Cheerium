using Application.DTOs;
using Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CardsController : ControllerBase
{
    private readonly CardService _cardService;

    public CardsController(CardService cardService)
    {
        _cardService = cardService;
    }

    [Authorize]
    [HttpPost]
    public async Task<ActionResult<CardResponse>> CreateCard(CreateCardRequest request)
    {
        var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue(ClaimTypes.Name) ?? throw new InvalidOperationException("No user"));
        var card = await _cardService.CreateCardAsync(request, userId);
        return Ok(card);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<CardResponse>> GetCard(Guid id)
    {
        var card = await _cardService.GetCardAsync(id);
        return card == null ? NotFound() : Ok(card);
    }

    [HttpGet("token/{token}")]
    public async Task<ActionResult<CardResponse>> GetCardByToken(string token)
    {
        var card = await _cardService.GetCardByTokenAsync(token);
        return card == null ? NotFound() : Ok(card);
    }

    [Authorize]
    [HttpPost("{id:guid}/close")]
    public async Task<ActionResult<CardResponse>> CloseCard(Guid id)
    {
        var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue(ClaimTypes.Name) ?? throw new InvalidOperationException("No user"));
        var card = await _cardService.CloseCardAsync(id, userId);
        return card == null ? NotFound() : Ok(card);
    }

    [HttpGet("{cardId:guid}/messages")]
    public async Task<ActionResult<IEnumerable<CardMessageResponse>>> ListMessages(Guid cardId)
    {
        var messages = await _cardService.ListMessagesAsync(cardId);
        return Ok(messages);
    }

    [HttpPost("{cardId:guid}/messages")]
    public async Task<ActionResult<CardMessageResponse>> AddMessage(Guid cardId, AddMessageRequest request)
    {
        var message = await _cardService.AddMessageAsync(cardId, request);
        return Ok(message);
    }
}
