using Transflower.PMSApp.Projects.Entities;
using Transflower.PMSApp.Projects.Models;
using Transflower.PMSApp.Projects.Repositories.Interfaces;
using Transflower.PMSApp.Projects.Services.Interfaces;

namespace Transflower.PMSApp.Projects.Services;
public class ProjectService : IProjectService
{
    private readonly IProjectRepository _repository;

    public ProjectService(IProjectRepository repository)
    {
        _repository = repository;
    }
    public async Task<List<Project>> GetAll()
    {
        return await _repository.GetAll();
    }

    public async Task<Project> GetById(int projectId)
    {
        return await _repository.GetById(projectId);
    }
    public async Task<List<ProjectList>> GetProjectsList(int teamMemberId){
        return await _repository.GetProjectsList(teamMemberId);
    }

    public  async Task<bool> Insert(Project project)
    {
        return await _repository.Insert(project);
    }

    public async Task<bool> Update(Project project)
    {
        return await _repository.Update(project);
    }
        public async Task<bool> Delete(int projectId)
    {
        return await _repository.Delete(projectId);
    }

}
