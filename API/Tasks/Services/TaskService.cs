using Transflower.PMSApp.Tasks.Services.Interfaces;
using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Repositories.Interfaces;
namespace Transflower.PMSApp.Tasks.Services;
public class TaskService:ITaskService
{
    private readonly ITaskRepository _taskRepository;
    public TaskService(ITaskRepository taskRepository){
        _taskRepository=taskRepository;
    }
    public async Task<ProjectTaskCount> GetProjectTaskCount(int projectId)=>await _taskRepository.GetProjectTaskCount(projectId);
    public async Task<List<MyTaskList>> GetMyTasksList(int teamMemberId,string timePeriod)=>await _taskRepository.GetMyTasksList(teamMemberId,timePeriod);
    public async Task<TaskDetail> GetTaskDetail(int taskId)=>await _taskRepository.GetTaskDetail(taskId );
    public async Task<MoreTaskDetail> GetMoreTaskDetail(int taskId)=>await _taskRepository.GetMoreTaskDetail(taskId);


}