
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IPayrollService
{
    Task<bool> AddSalary(SalaryStructure salary); 
    Task<SalaryStructure> GetSalary(int employeeId);
    Task<MonthSalary> CalculateSalary(int employeeId,int month,int year);
    // Task<Salary> GetSalaryDetails(int employeeId);
    Task<bool> InsertSalary(Salary salary);
}   