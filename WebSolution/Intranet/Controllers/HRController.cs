using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLOBL.External;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/hr/employees")]
public class HRController : ControllerBase
{
    private readonly IHRService _service;
    private readonly ExternalApiService _apiService;

    public HRController(IHRService service, ExternalApiService apiService)
    {
        _service = service;
        _apiService = apiService;
    }

    [HttpGet("employee/{employeeId}")]
    public async Task<EmployeeResponse> GetEmployeeDetails(int employeeId)
    {
        Employee employee = await _service.GetEmployeeById(employeeId);
        User? user = await _apiService.GetUser(employee.UserId);
        if (user == null)
        {
            return new EmployeeResponse();
        }
        EmployeeResponse emp = new EmployeeResponse()
        {
            HireDate = employee.HireDate,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email,
            Gender = user.Gender,
            ContactNumber = user.ContactNumber,
            ImageUrl = user.ImageUrl,
            BirthDate = user.BirthDate,
            EmployeeId = employee.Id,
            UserId = user.Id,
            AadharId=user.AadharId
        };
        return emp;
    }

    // [HttpPost("employee/salary/{employeeId}")]
    // public async Task<bool> PaySalary(int employeeId)
    // {
    //     Employee employee = await _service.GetEmployeeById(employeeId);
    //     var userAccount = await _apiService.GetUserBankAccount(
    //         userId: employee.UserId,
    //         userType: "I"
    //     );
    //     FundTransferRequest request = new FundTransferRequest()
    //     {
    //         FromAcct = "39025546601",
    //         FromIfsc = "MAHB0000286",
    //         ToAcct = userAccount.AccountNumber,
    //         ToIfsc = userAccount.IFSCCode,
    //         Amount = employee.Salary,
    //         TransactionType = "Transfer"
    //     };
    //     int transactionId = await _apiService.FundTransfer(request);


    //     return transactionId > 0;
    // }



    [HttpGet("users/{userId}")]
    public async Task<Employee> GetEmployee(int userId)
    {
        Employee employee = await _service.GetEmployeeByUserId(userId);
        return employee;
    }

    [HttpGet("employeeIds/{employeeIds}")]
    public async Task<List<Employee>> GetEmployees(string employeeIds)
    {
        List<Employee> employees = await _service.GetEmployees(employeeIds);
        return employees;
    }
}
