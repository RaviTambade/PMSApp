using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class TimeSheetService : ITimeSheetService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TimeSheetService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId)
    {
        List<TimeSheet> timesheets = new List<TimeSheet>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from timesheets where  employeeid =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime date = DateTime.Parse(reader["date"].ToString());
                string status = reader["status"].ToString();

                TimeSheet timesheet = new TimeSheet()
                {
                    Id = id,
                    Date = date,
                    Status = status,
                    EmployeeId = employeeId,
                };
                timesheets.Add(timesheet);
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
        return timesheets;
    }

    public async Task<List<TimeSheetEntry>> GetTimeSheetDetails(int timeSheetId)
    {
        List<TimeSheetEntry> timeSheetEntries = new List<TimeSheetEntry>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from timesheetentries where  timesheetid =@timeSheetId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timeSheetId", timeSheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime fromtime = DateTime.Parse(reader["fromtime"].ToString());
                DateTime totime = DateTime.Parse(reader["totime"].ToString());
                string description = reader["description"].ToString();

                TimeSheetEntry timesheet = new TimeSheetEntry()
                {
                    Id = id,
                    Description = description,
                    FromTime = fromtime,
                    ToTime = totime,
                };
                timeSheetEntries.Add(timesheet);
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
        return timeSheetEntries;
    }

    public async Task<List<TimeSheetEntry>> GetDatewiseTimeSheetsOfEmployee(
        DateTime date,
        int employeeId
    )
    {
        List<TimeSheetEntry> timesheets = new List<TimeSheetEntry>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "select * from TimeSheetEntries inner join timesheets on timesheets.id=TimeSheetEntries.timesheetid where date=@date and employeeid=@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@date", date);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime fromtime = DateTime.Parse(reader["fromtime"].ToString());
                DateTime totime = DateTime.Parse(reader["totime"].ToString());
                string description = reader["description"].ToString();

                TimeSheetEntry timesheet = new TimeSheetEntry()
                {
                    Id = id,
                    Description = description,
                    FromTime = fromtime,
                    ToTime = totime,
                };
                timesheets.Add(timesheet);
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
        return timesheets;
    }
}