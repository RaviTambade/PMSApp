import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectAllocation } from 'src/app/projects/Models/projectallocation';
import { ProjectAllocationDetails } from 'src/app/projects/Models/projectallocationdetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectallocationService {
  
  private serviceurl :string=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  assignedEmployeeToProject(projectId:number,employeeId:number,project:ProjectAllocation):Observable<ProjectAllocation>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/"+ projectId +"/allocate/employee/"+employeeId;
    return this.httpClient.post<ProjectAllocation>(url,project);
  }

  releaseEmployeeFromProject(projectId:number,employeeId:number,project:any):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/releaseproject/"+ projectId +"/"+employeeId;
    return this.httpClient.post<any>(url,project);
  }

  getAllUnassignedEmployees():Observable<ProjectAllocationDetails>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/unassignedemployees";
    return this.httpClient.get<ProjectAllocationDetails>(url);
  }

  getAllAssignedEmployees(status:string):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/assignedemployees/"+ status ;
    return this.httpClient.get<any>(url);
  }

  getAllProjectsBetweenDates(fromAssignedDate:string,toAssignedDate:string):Observable<ProjectAllocation[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/fromassigneddate/"+ fromAssignedDate+"/toassigneddate"+toAssignedDate ;
    return this.httpClient.get<ProjectAllocation[]>(url);
  }

  getAllProjectsOfEmployeeBetweenDates(fromAssignedDate:string,toAssignedDate:string,employeeId:number):Observable<ProjectAllocation[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/"+employeeId+"/fromassigneddate/"+ fromAssignedDate+"/toassigneddate"+toAssignedDate ;
    return this.httpClient.get<ProjectAllocation[]>(url);
  }

  getAssignedEmployeesOfProject(projectId:number):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/employees/" +projectId;  
    return this.httpClient.get<any>(url);
  }

  getUnssignedEmployeesOfProject(projectId:number){
    let url=this.serviceurl+"/projectmgmt/projectallocation/unassignemployees/" +projectId;  
    return this.httpClient.get<any>(url);
  }
}
