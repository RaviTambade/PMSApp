using System;
namespace PMS.Models;
public class ProjectMember
{  
    public int Id {get;set;}
    public int ProjectId{ get; set; }
    public int EmpId{ get; set; }
    public string? FirstName{get;set;}
    public string? LastName{get;set;}


   
}