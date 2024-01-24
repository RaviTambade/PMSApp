namespace TFLPortal.Models;

public class MonthSalary
{
    public double TotalAmount { get; set; }
    public double MonthlyBasicsalary { get; set; }
    public double HRA { get; set; }
    public double DA { get; set; }
    public double LTA { get; set; }
    public double VariablePay { get; set; }
    public double Deduction { get; set; }
    public double Pf { get; set; }
    public double Tax { get; set; }
    public int ConsumedPaidLeaves { get; set; }
    public int WorkingDays { get; set; }

}


