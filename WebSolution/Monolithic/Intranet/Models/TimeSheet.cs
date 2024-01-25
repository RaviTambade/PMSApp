namespace TFLPortal.Models;

public class Timesheet
{
    public int Id { get; set; }
    public string? Status { get; set; }
    public DateTime TheDate { get; set; }
    public DateTime? ModifiedOn { get; set; }
    public int EmployeeId { get; set; } //employeeId

    public double? TotalHours { get; set; }

    // public List<TimesheetEntry> Entries { get; set; } 
}