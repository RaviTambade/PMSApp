
namespace TFLPortal.Models;

public class InOutTimeRecord
{
    public DateTime WorkingDate { get; set; }
    public int EmployeeId { get; set; }
    public TimeOnly In { get; set; }
    public TimeOnly Out { get; set; }
}
