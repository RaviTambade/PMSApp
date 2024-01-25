using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using TFLPortal.Services.Interfaces;
using TFLPortal.Models;
using ProjectTask= TFLPortal.Models.Task;
using System.Data;
using Transflower.TFLPortal.Intranet.Controllers;
using TFLPortal.Models.BI;

namespace TFLPortal.Services;
public class TaskService : ITaskService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TaskService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<ProjectTask>> GetAllTasks(){
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeework";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["projectworktype"].ToString();
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask theTask = new ProjectTask
                {
                    TaskId= id,
                    Title = title,
                    TaskType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = managerId,

                };
                tasks.Add(theTask);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    }
    public async Task<List<ProjectTask>> GetAllTasks(int projectId)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeework where  projectid =@projectId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["projectworktype"].ToString();
                string description = reader["description"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask theTask = new ProjectTask
                {
                    TaskId= id,
                    Title = title,
                    TaskType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = managerId,

                };
                tasks.Add(theTask);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    }

    public async Task<List<ProjectTask>> GetAllTasks(int projectId, string projectworktype)
    {

        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeework where  projectid =@projectId and projectworktype=@projectworktype";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@projectworktype", projectworktype);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask theTask = new ProjectTask
                {
                    TaskId = id,
                    Title = title,
                    TaskType = projectworktype,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = managerId,

                };

                tasks.Add(theTask);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    }

    public async Task<List<ProjectTask>> GetAllTasks(int projectId, int employeeId)
    {

        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeework where  projectid =@projectId and assignedto=@assignedto";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);

            command.Parameters.AddWithValue("@assignedto", employeeId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["projectworktype"].ToString();
                string description = reader["description"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask act = new ProjectTask
                {
                    TaskId = id,
                    Title = title,
                    TaskType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                tasks.Add(act);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    }
    public async Task<List<ProjectTask>> GetAllTasks(int projectId, int employeeId, string status)
    {

        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeework where  projectid =@projectId and status=@status and assignedto=@assignedto";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@status", status);
            command.Parameters.AddWithValue("@assignedto", employeeId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string projectWorkType = reader["projectworktype"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask theTask = new ProjectTask
                {
                    TaskId = id,
                    Title = title,
                    TaskType = projectWorkType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo= employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                tasks.Add(theTask);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    }

    
    public async Task<List<ProjectTask>> GetAllSprintTasks(int sprintId, int employeeId, string status)
    {
         List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeework where  sprintid =@sprintid and status=@status and assignedto=@assignedto";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@sprintid", sprintId);
            command.Parameters.AddWithValue("@status", status);
            command.Parameters.AddWithValue("@assignedto", employeeId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string projectWorkType = reader["projectworktype"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask theTask = new ProjectTask
                {
                    TaskId = id,
                    Title = title,
                    TaskType = projectWorkType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                tasks.Add(theTask);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    }

    public async Task<ProjectTask> GetTask(int taskId)
    {
       ProjectTask task = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select employeework.* ,e1.userid as assignbyuserid,e2.userid as assigntouserid,projects.title as projectname from employeework INNER JOIN employees e1  on employeework.assignedto =e1.id INNER JOIN employees e2   on  employeework.assignedby=e2.id INNER JOIN projects ON employeework.projectid =projects.id WHERE employeework.id=@employeeWorkId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeWorkId", taskId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                string activityType = reader["projectworktype"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                int memberId = int.Parse(reader["assignedto"].ToString());
                int managerId = int.Parse(reader["assignedby"].ToString());
                int assignToUserId = int.Parse(reader["assigntouserid"].ToString());
                int assignByUserId = int.Parse(reader["assignbyuserid"].ToString());
                string projectName = reader["projectname"].ToString();
                task = new ProjectTask()
                {
                    TaskId = taskId,
                    TaskType = activityType,
                    Title = title,
                    CreatedDate = createDate,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    AssignedTo = memberId,
                    AssignedBy = managerId,
                    DueDate = dueDate,
                    Status = status,
                };
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return task;
    }

    public async Task<bool> AddTask(ProjectTask theTask)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO employeework(title,projectworktype,description,createddate,assigneddate,startdate,duedate,assignedto,projectid,sprintid,status,assignedby) VALUES(@title,@projectworktype,@description,@createdDate,@assignDate,@startDate,@dueDate,@assignedTo,@projectId,@sprintId,@status,@assignedBy)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@title", theTask.Title);
            cmd.Parameters.AddWithValue("@projectworktype", theTask.TaskType);
            cmd.Parameters.AddWithValue("@description", theTask.Description);
            cmd.Parameters.AddWithValue("@createdDate", theTask.CreatedDate);
            cmd.Parameters.AddWithValue("@assigndate", theTask.AssignDate);
            cmd.Parameters.AddWithValue("@startDate", theTask.StartDate);
            cmd.Parameters.AddWithValue("@dueDate", theTask.DueDate);
            cmd.Parameters.AddWithValue("@assignedTo", theTask.AssignedTo);
            cmd.Parameters.AddWithValue("@projectId", theTask.ProjectId);
            cmd.Parameters.AddWithValue("@sprintId", theTask.SprintId);
            cmd.Parameters.AddWithValue("@status", theTask.Status);
            cmd.Parameters.AddWithValue("@assignedBy", theTask.AssignedBy);
            await connection.OpenAsync();
            int rowsAffected = cmd.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
            await connection.CloseAsync();

        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }

     public async Task<List<ProjectTask>> GetMemberTasks(int employeeId){
      List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeework where  assignedto =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["projectworktype"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask theTask = new ProjectTask
                {
                    TaskId = id,
                    Title = title,
                    TaskType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                tasks.Add(theTask);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    }

    public async Task<List<ProjectTask>> GetAllTasks(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * FROM employeework where assigneddate BETWEEN @fromAssignedDate AND @toAssignedDate ORDER BY assigneddate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromAssignedDate", fromAssignedDate);
            command.Parameters.AddWithValue("@toAssignedDate", toAssignedDate);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string taskType = reader["projectworktype"].ToString();
                string description = reader["description"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
                int employeeId = int.Parse(reader["assignedto"].ToString());


                ProjectTask theTask = new ProjectTask
                {
                    TaskId = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                tasks.Add(theTask);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    } 


    public async Task<List<ProjectTask>> GetAllTasks(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * FROM employeework where assigneddate BETWEEN @fromAssignedDate AND @toAssignedDate And assignedto=@assignedto ORDER BY assigneddate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromAssignedDate", fromAssignedDate);
            command.Parameters.AddWithValue("@toAssignedDate", toAssignedDate);
             command.Parameters.AddWithValue("@assignedto", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string projectWorkType = reader["projectworktype"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
            
                ProjectTask theTask = new ProjectTask
                {
                    TaskId = id,
                    Title = title,
                    TaskType = projectWorkType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                tasks.Add(theTask);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    } 


    public async Task<bool> UpdateTask(string Status,int taskId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update  employeework set startdate=@startdate,status=@status where id =@employeeWorkId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@startDate", DateTime.Now);
            cmd.Parameters.AddWithValue("@status", Status);
            cmd.Parameters.AddWithValue("@employeeWorkId",taskId );
    
            await connection.OpenAsync();
            int rowsAffected = cmd.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
            await connection.CloseAsync();

        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;

    }

    public async Task<TaskStatusCount> GetTasksCount()
    {
    TaskStatusCount countSp = null;
    MySqlConnection con = new MySqlConnection();
    con.ConnectionString = _connectionString;
    try
    {
        await con.OpenAsync();

        MySqlCommand cmd = new MySqlCommand("getActivityCounts", con);
        cmd.CommandType = CommandType.StoredProcedure;

        cmd.Parameters.AddWithValue("@todo", MySqlDbType.Int32);
        cmd.Parameters["@todo"].Direction = ParameterDirection.Output;

        cmd.Parameters.AddWithValue("@inprogress", MySqlDbType.Int32);
        cmd.Parameters["@inprogress"].Direction = ParameterDirection.Output;

        cmd.Parameters.AddWithValue("@completed", MySqlDbType.Int32);
        cmd.Parameters["@completed"].Direction = ParameterDirection.Output;

        await cmd.ExecuteNonQueryAsync();

        int todo = Convert.ToInt32(cmd.Parameters["@todo"].Value);
        int inprogress = Convert.ToInt32(cmd.Parameters["@inprogress"].Value);
        int completed = Convert.ToInt32(cmd.Parameters["@completed"].Value);

        countSp = new TaskStatusCount()
        {
            Todo = todo,
            InProgress = inprogress,
            Completed = completed
        };
    }
    catch (Exception)
    {
        throw;
    }
    finally
    {
        await con.CloseAsync();
    }

    return countSp;
}


public async Task<List<ProjectTask>> GetTodaysTasks(int projectId,DateTime date)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeework where  projectid =@projectId and assigneddate=@date";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@date", date);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string projectWorkType = reader["projectworktype"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                string description = reader["description"].ToString();
                DateTime createdate = DateTime.Parse(reader["createddate"].ToString());
                int assignedto = int.Parse(reader["assignedto"].ToString());
                int assignedby = int.Parse(reader["assignedby"].ToString());
               // DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask theTask = new ProjectTask
                {
                    TaskId = id,
                    Title = title,
                    TaskType = projectWorkType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    StartDate = startdate,
                    DueDate = duedate,
                    AssignedTo = assignedto,
                    Status = status,
                  AssignedBy = managerId,

                };
                tasks.Add(theTask);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tasks;
    }
}