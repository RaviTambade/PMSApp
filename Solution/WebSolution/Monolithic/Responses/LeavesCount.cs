namespace TFLPortal.Responses;

public class LeavesCount
{
    public int EmployeeId{get;set;}
    public int Sick { get; set; }
    public int Casual { get; set; }
    public int Paid { get; set; }
    public int Unpaid { get; set; }
}
