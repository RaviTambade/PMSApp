using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.BIService.Services.Interfaces;
using Transflower.PMSApp.BIService.Repositories.Interfaces;
using Transflower.PMSApp.BIService.Models;
namespace Transflower.PMSApp.BIService.Services
{
    public class TeamMemberService:ITeamMemberService
    {
    public readonly ITeamMemberRepository _repository;
    public TeamMemberService(ITeamMemberRepository repository)
    {
        _repository = repository;
    }

        public Task<List<TotalProjectWork>> GetTotalProjectWorkHours(int teamMemberId, string fromtime, string totime)
        {
            throw new NotImplementedException();
        }
        // public async Task<List<TotalProjectWork>> GetTotalProjectWorkHours(int teamManagerId)=>
        // await _repository.GetTotalProjectWorkHours(teamManagerId);

    }
}