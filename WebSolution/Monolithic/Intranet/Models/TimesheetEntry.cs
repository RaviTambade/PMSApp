namespace TFLPortal.Models;


public class TimesheetEntry
{
   public int Id { get; set; }
   public TimeOnly FromTime { get; set; }
   public TimeOnly ToTime { get; set; }
   public int TimesheetId { get; set; } //TimesheetId
   public int TaskId { get; set; } 
   
}