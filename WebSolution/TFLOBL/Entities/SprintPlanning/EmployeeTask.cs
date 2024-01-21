namespace Transflower.TFLPortal.TFLOBL.Entities;
public class EmployeeTask
{
   public int Id{get;set;}
   public string? Title{get;set;}
   public string? TaskType{get;set;}
   public string? Description{get;set;}
   public DateTime AssignDate{get;set;}
   public DateTime StartDate{get;set;}
   public DateTime DueDate{get;set;}
   public DateTime CreatedDate{get;set;}
   public Member  AssignedTo{get;set;}
   public int ProjectId{get;set;}
   public int SprintId{get;set;}
   public string? Status{get;set;}
   public Member AssignedBy{get; set;} 
    
}
