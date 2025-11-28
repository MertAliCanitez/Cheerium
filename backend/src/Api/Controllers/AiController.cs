using Application.DTOs;
using Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/ai")]
public class AiController : ControllerBase
{
    private readonly AiService _aiService;

    public AiController(AiService aiService)
    {
        _aiService = aiService;
    }

    [HttpPost("suggest-message")]
    public async Task<ActionResult<SuggestMessageResponse>> SuggestMessage(SuggestMessageRequest request)
    {
        var result = await _aiService.SuggestMessageAsync(request);
        return Ok(result);
    }

    [HttpPost("card-summary")]
    public async Task<ActionResult<CardSummaryResponse>> CardSummary(CardSummaryRequest request)
    {
        var result = await _aiService.SummarizeCardAsync(request);
        return result == null ? NotFound() : Ok(result);
    }
}
