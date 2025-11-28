using Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ThemesController : ControllerBase
{
    private readonly ThemeService _service;

    public ThemesController(ThemeService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> List()
    {
        var themes = await _service.ListAsync();
        return Ok(themes);
    }
}
