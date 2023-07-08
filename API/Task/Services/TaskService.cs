using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;
namespace PMS.Services;


public class TaskServices : ITaskServices
{

     private readonly ITaskRepository _repo ;
   
    public TaskServices(ITaskRepository repo){
        _repo=repo;
    }
    public async Task<IEnumerable<Tasks>> GetAll() =>await _repo.GetAll();
    public async Task<Tasks>Get(int id)=>await _repo.Get(id);
    public async Task<bool> Insert(Tasks tasks)=>await _repo.Insert(tasks);
    public async Task<bool> Update(Tasks task)=>await _repo.Update(task);
    public async Task<bool> Delete(int id)=>await _repo.Delete(id);


}