using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace TeamService.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TeamMembersController : ControllerBase
{

    private readonly ITeamMemberService _service;

    public TeamMembersController(ITeamMemberService service)
    {
        _service = service;
    }

    [HttpGet]
    [Route("getall")]
    public IEnumerable<TeamMember> GetAllTeamMembers()
    {
        List<TeamMember> teammembers = _service.GetAll();
        return teammembers;
    }

    [HttpGet]
    [Route("getbyid/{id}")]
    public TeamMember GetById(int id)
    {
        TeamMember teammember = _service.GetById(id);
        return teammember;
    }

    [HttpPost]
    [Route("Insert")]
    public bool Insert(TeamMember teamMember)
    {
        bool status = _service.Insert(teamMember);
        return status;
    }

    [HttpPut]
    [Route("update/{id}")]
    public bool UpdateTeam(TeamMember teamMember)
    {
        bool status = _service.Update(teamMember);
        return status;
    }


    [HttpDelete]
    [Route("Delete/{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);
        return status;
    }


   
}



