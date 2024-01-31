using TFLPortal.Models;
namespace TFLPortal.Services.Interfaces;

public interface IProjectMemberService {
    Task<bool> Assign(Member member);
    Task<bool> Release(Member member);
    Task<List<Member>> GetProjectMembers(int projectId);

}