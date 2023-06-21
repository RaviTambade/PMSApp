using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace TimeRecord.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TimerecordsController : ControllerBase
{
    private readonly ITimeRecordService _service;

    public TimerecordsController(ITimeRecordService service)
    {
        _service=service;
    }

    // http://localhost:5121/api/Timerecords/getall
    [HttpGet]
    [Route ("getall")]
    public IEnumerable<Timerecord> GetAll()
    {
        List<Timerecord>timerecords=_service.GetAll();
        Console.WriteLine(timerecords);
        return timerecords;
    }




}